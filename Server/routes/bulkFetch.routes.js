import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { bulkRepoData } from "../MachineLearning/ML-Utils/bulkRepoData.js"
import express from "express"

const router = express.Router()
router.get("/bulk/gitHubData/:gUserName", async function (req, res) {
    try {
        const {gUserName} = req.params

        if (!gUserName) {
            return res
                .status((400))
                .json(new ApiError(400, "Github UserName not found"))
        }

        const fetchedData = await bulkRepoData(gUserName)

        if (!fetchedData) {
            return res
                .status(404)
                .json(new ApiError(404, "No data fetched"))
        }


        const data = {
            totalRepos: fetchedData.totalRepos,
            originalRepos: fetchedData.originalRepos,
            forkedRepos: fetchedData.forkedRepos,
            averageStars: fetchedData.averageStars,
            withDesc: fetchedData.withDesc,
            popularProject: fetchedData.popularProject,
            soloProjects: fetchedData.soloProjects,
            collabedProjects: fetchedData.collabedProjects,
            activeProjects: fetchedData.activeProjects,
            inactiveProjects: fetchedData.inactiveProjects,
            userSkills: fetchedData.userSkills,
            langPercentages: fetchedData.langPercentages,
            // convert sets to array before sending to frontend so that res.json() parses it . Otherwise it becomes empty object when reaches frontend.
            strengths: [...fetchedData.strengths],
            weaknesses: [...fetchedData.weaknesses],
            intermediates: [...fetchedData.intermediates],
            knownTech: [...fetchedData.knownTech],
            techToLearn: [...fetchedData.techToLearn],
            skillScores: fetchedData.skillScores
        }

        return res
            .status(201)
            .json(new ApiResponse(201, data, "User's github data fetched"))
    }
    catch (e) {
        return res
            .status(500)
            .json(new ApiError(500, `FetchData Route Server Error : ${e}`))
    }
})


export default router