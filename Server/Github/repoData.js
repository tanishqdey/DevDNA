import dotenv from "dotenv"
import roles from "./JSON/Developer_Profile_Frameworks.json" with { type: "json" }
import { packageJsonData } from "./packageJsonData.js"
import { requirementsData } from "./requirementsData.js"
import { cleanOutput } from "./cleanOutput.js"

dotenv.config({
    path: "../.env"
})

export async function getRepoData(gUserName) {
    const headers = {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json"
    };

    const userRes = await fetch(
        `${process.env.GITHUB_API_URL}/users/${gUserName}`,
        { headers }
    );

    if (!userRes.ok) {
        const errorData = await userRes.text();

        throw new Error(
            `Failed to fetch GitHub user: ${userRes.status} ${errorData}`
        );
    }

    const githubUser = await userRes.json();

    const totalRepos = githubUser.public_repos;

    const res = await fetch(`${process.env.GITHUB_API_URL}/users/${gUserName}/repos?per_page=50&sort=updated`, { headers })

    if (!res.ok) {
        const errorData = await res.text()

        throw new Error(
            `Failed to fetch repositories: ${res.status} ${errorData}`
        )
    }

    const repos = await res.json()

    const analysedRepos = repos.length
    const originalRepos = repos.filter(repo => !repo.fork).length
    const forkedRepos = analysedRepos - originalRepos


    const averageStars = repos.length ? (repos.reduce((sum, repo) => sum += repo.stargazers_count, 0)) / repos.length : 0  // ternary operator

    const withDesc = repos.filter(repo => repo.description).length

    const popularProject = repos.length ? [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count)[0].name : "No project found" // [...repos] creates copy of array so that we sort the copy only not actual array

    let soloProjects = 0
    let collabedProjects = 0
    for (const repo of repos) {   // Don't use (const repo in repos) then repo will be 0,1,2,..
        const response = await fetch(`${process.env.GITHUB_API_URL}/repos/${repo.owner.login}/${repo.name}/contributors?per_page=2`, { headers })
        // console.log(
        //     `Contributors status for ${repo.name}:`,
        //     response.status
        // );

        // if (!response.ok) {
        //     const errorText = await response.text();

        //     console.log("Contributors error:", errorText);

        //     continue;
        // }

        // const contributors = await response.json();

        console.log(
            `Status for ${repo.name}: ${response.status}`
        );

        // Read the response body ONCE as text
        const text = await response.text();

        // If GitHub returned an unsuccessful response
        if (!response.ok) {
            console.log(`Failed for ${repo.name}:`, text);
            continue;
        }

        // If GitHub returned an empty response
        if (!text.trim()) {
            console.log(`Empty response for ${repo.name}`);
            continue;
        }

        // Convert text to JSON
        let contributors;

        try {
            contributors = JSON.parse(text);
        } catch (error) {
            console.log(`Invalid JSON for ${repo.name}:`, text);
            continue;
        }

        if (contributors.length == 1) {
            soloProjects += 1
        }
        if (contributors.length > 1) {
            collabedProjects += 1
        }
    }


    let activeProjects = 0
    let inactiveProjects = 0
    const sixMonths = 1000 * 60 * 60 * 24 * 180   // js measures time in ms , so multiplied by 1000
    repos.forEach(repo => {
        const lastUpdated = new Date(repo.updated_at)
        if (Date.now() - lastUpdated.getTime() >= sixMonths) {
            inactiveProjects += 1
        }
        else {
            activeProjects += 1
        }
    })

    const userSkills = new Set();
    for (const repo of repos) {
        if (repo.topics.length > 0) {
            for (const topic of repo.topics) {
                userSkills.add(topic.toLowerCase())
            }
        }
    }


    const languageBytes = {}
    for (const repo of repos) {
        const langRes = await fetch(`${process.env.GITHUB_API_URL}/repos/${repo.owner.login}/${repo.name}/languages`, { headers })
        if (!langRes.ok) {
            const errorText = await langRes.text();

            console.error(
                `Languages fetch failed for ${repo.name}:`,
                langRes.status,
                errorText
            );

            continue;
        }

        const languages = await langRes.json();

        for (const language in languages) {
            if (languageBytes[language]) {
                languageBytes[language] += languages[language]
            }
            else {
                languageBytes[language] = languages[language]
            }
        }
    }

    const totalBytes = Object.values(languageBytes).reduce((sum, bytes) => sum + bytes, 0)

    const knownTech = new Set()

    const langPercentages = {}
    if (totalBytes > 0) {
        for (const language in languageBytes) {
            langPercentages[language] = (languageBytes[language] / totalBytes) * 100
            userSkills.add(language.toLowerCase())
            if (langPercentages[language] > 10) {
                knownTech.add(language.toLowerCase())
            }
        }
    }

    for (const repo of repos) {
        await packageJsonData(repo, headers, userSkills, knownTech)
    }

    for (const repo of repos) {
        await requirementsData(repo, headers, userSkills, knownTech)
    }

    const Strengths = new Set()
    const intermediates = new Set()
    const Weaknesses = new Set()

    const skillScores = {}

    for (const [roleKey, roleData] of Object.entries(roles)) {
        let skillScore = 0
        for (const [categoryName, categoryInfo] of Object.entries(roleData.categories)) {
            let numberOfMatched = 0
            for (const skill of categoryInfo.skills) {
                if (userSkills.has(skill.toLowerCase())) {
                    numberOfMatched += 1
                    knownTech.add(skill.toLowerCase())
                }
            }
            if (numberOfMatched > 0) {
                const categoryScore = (categoryInfo.weight * numberOfMatched) / categoryInfo.skills.length
                skillScore += categoryScore
                if ((categoryScore / categoryInfo.weight) * 100 >= 65) {
                    Strengths.add(categoryName)
                }
                else if ((categoryScore / categoryInfo.weight) * 100 >= 30 && (categoryScore / categoryInfo.weight) * 100 < 65) {
                    intermediates.add(categoryName)
                }
                else {
                    Weaknesses.add(categoryName)
                }
            }
            if (numberOfMatched == 0) {
                Weaknesses.add(categoryName)
            }
        }
        skillScores[roleKey] = skillScore
    }

    const allSkills = new Set()
    for (const [roleKey, roleData] of Object.entries(roles)) {
        for (const [categoryName, categoryInfo] of Object.entries(roleData.categories)) {
            for (const skill of categoryInfo.skills) {
                allSkills.add(skill.toLowerCase())
            }
        }
    }

    const techToLearn = new Set()
    for (const skill of allSkills) {
        if (!knownTech.has(skill.toLowerCase())) {
            techToLearn.add(skill.toLowerCase())
        }
    }



    // Now cleaning insights for frontend

    const cleanUserSkills = await cleanOutput(userSkills)
    const cleanKnownTech = await cleanOutput(knownTech)
    const cleanTechToLearn = await cleanOutput(techToLearn)

    return {
        totalRepos: totalRepos,
        analysedRepos: analysedRepos,
        originalRepos: originalRepos,
        forkedRepos: forkedRepos,
        averageStars: averageStars,
        withDesc: withDesc,
        popularProject: popularProject,
        soloProjects: soloProjects,
        collabedProjects: collabedProjects,
        activeProjects: activeProjects,
        inactiveProjects: inactiveProjects,
        userSkills: cleanUserSkills,
        langPercentages: langPercentages,
        strengths: Strengths,
        weaknesses: Weaknesses,
        intermediates: intermediates,
        knownTech: cleanKnownTech,
        techToLearn: cleanTechToLearn,
        skillScores: skillScores
    }
}
