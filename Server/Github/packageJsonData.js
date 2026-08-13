export async function packageJsonData(
    repo,
    headers,
    userSkills,
    knownTech
) {

    try {

        const owner = repo.owner.login;
        const repoName = repo.name;
        const branch = repo.default_branch;

        if (!branch) {
            return userSkills;
        }

        // --------------------------------------------------
        // 1. Get complete repository tree
        // --------------------------------------------------

        const treeUrl =
            `${process.env.GITHUB_API_URL}/repos/${owner}/${repoName}/git/trees/${branch}?recursive=1`;

        const treeRes = await fetch(treeUrl, { headers });

        if (!treeRes.ok) {
            console.log(
                `Unable to fetch repository tree: ${owner}/${repoName}`
            );
            return userSkills;
        }

        const treeData = await treeRes.json();

        if (!treeData.tree) {
            return userSkills;
        }

        // --------------------------------------------------
        // 2. Find ALL package.json files
        // --------------------------------------------------

        const packageFiles = treeData.tree.filter(
            item =>
                item.type === "blob" &&
                item.path.toLowerCase().endsWith("package.json")
        );

        if (packageFiles.length === 0) {
            return userSkills;
        }

        // --------------------------------------------------
        // 3. Process every package.json
        // --------------------------------------------------

        for (const packageFile of packageFiles) {

            const packagePath = packageFile.path.toLowerCase();

            const packageUrl =
                `${process.env.GITHUB_API_URL}/repos/${owner}/${repoName}/contents/${packageFile.path}`;

            const packageRes = await fetch(packageUrl, { headers });

            if (!packageRes.ok) {
                console.log(
                    `Unable to fetch ${packageFile.path} from ${repoName}`
                );
                continue;
            }

            const fileData = await packageRes.json();

            if (!fileData.content) {
                continue;
            }

            // --------------------------------------------------
            // 4. Decode package.json
            // --------------------------------------------------

            let packageJson;

            try {

                const decodedContent = Buffer
                    .from(fileData.content, "base64")
                    .toString("utf8");

                packageJson = JSON.parse(decodedContent);

            } catch (error) {

                console.log(
                    `Invalid package.json: ${packageFile.path}`
                );

                continue;
            }

            // --------------------------------------------------
            // 5. Extract dependencies
            // --------------------------------------------------

            const dependencies = {
                ...(packageJson.dependencies || {}),
                ...(packageJson.devDependencies || {})
            };

            // --------------------------------------------------
            // 6. Check if this is a backend package.json
            // --------------------------------------------------

            const isBackend =
                packagePath.includes("/server/") ||
                packagePath.includes("/backend/") ||
                packagePath.includes("/api/") ||
                packagePath.startsWith("server/") ||
                packagePath.startsWith("backend/") ||
                packagePath.startsWith("api/");

            // --------------------------------------------------
            // 7. Add dependencies
            // --------------------------------------------------

            for (const dependency of Object.keys(dependencies)) {

                const dependencyName = dependency.toLowerCase();

                // Every dependency goes into userSkills
                userSkills.add(dependencyName);

                // Only backend dependencies go into knownTech
                if (isBackend) {
                    knownTech.add(dependencyName);
                }
            }
        }

        return userSkills;

    } catch (error) {

        console.error(
            `Error processing package.json for ${repo.name}:`,
            error.message
        );

        return userSkills;
    }
}