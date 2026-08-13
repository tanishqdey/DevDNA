export async function requirementsData(
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
        // 2. Find ALL requirements.txt files
        // --------------------------------------------------

        const requirementFiles = treeData.tree.filter(
            item =>
                item.type === "blob" &&
                item.path.toLowerCase().endsWith("requirements.txt")
        );


        if (requirementFiles.length === 0) {
            return userSkills;
        }


        // --------------------------------------------------
        // 3. Process every requirements.txt
        // --------------------------------------------------

        for (const requirementFile of requirementFiles) {

            const filePath = requirementFile.path.toLowerCase();

            const fileUrl =
                `${process.env.GITHUB_API_URL}/repos/${owner}/${repoName}/contents/${requirementFile.path}`;

            const res = await fetch(fileUrl, { headers });

            if (!res.ok) {
                console.log(
                    `Unable to fetch ${requirementFile.path} from ${repoName}`
                );

                continue;
            }

            const data = await res.json();

            if (!data.content) {
                continue;
            }


            // --------------------------------------------------
            // 4. Decode requirements.txt
            // --------------------------------------------------

            const requirements =
                Buffer
                    .from(data.content, "base64")
                    .toString("utf8");


            // --------------------------------------------------
            // 5. Determine whether this is a backend file
            // --------------------------------------------------

            const isBackend =
                filePath.includes("/server/") ||
                filePath.includes("/backend/") ||
                filePath.includes("/api/") ||
                filePath.startsWith("server/") ||
                filePath.startsWith("backend/") ||
                filePath.startsWith("api/");


            // --------------------------------------------------
            // 6. Extract libraries
            // --------------------------------------------------

            const libraries = requirements.split(/\r?\n/);

            for (const library of libraries) {

                const trimmedLibrary = library.trim();


                // Ignore empty lines
                if (!trimmedLibrary) {
                    continue;
                }


                // Ignore comments
                if (trimmedLibrary.startsWith("#")) {
                    continue;
                }


                // Ignore pip options
                if (trimmedLibrary.startsWith("-")) {
                    continue;
                }


                // Remove version specifications
                const skill = trimmedLibrary
                    .split(/[=<>~!]/)[0]
                    .trim()
                    .toLowerCase();


                if (!skill) {
                    continue;
                }


                // --------------------------------------------------
                // 7. EVERY library → userSkills
                // --------------------------------------------------

                userSkills.add(skill);


                // --------------------------------------------------
                // 8. Backend library → knownTech as well
                // --------------------------------------------------

                if (isBackend) {
                    knownTech.add(skill);
                }

            }

        }


        return userSkills;

    } catch (error) {

        console.error(
            `Error processing requirements.txt for ${repo.name}:`,
            error.message
        );

        return userSkills;
    }
}