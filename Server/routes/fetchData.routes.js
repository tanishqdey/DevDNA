import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { getRepoData } from "../Github/repoData.js"
import { User } from "../models/user.models.js"
import { verifyJWT } from "../middlewares/jwtAuth.js"
import express from "express"

const router = express.Router()
router.get("/gitHubData/myAnalysis", verifyJWT, async function (req, res) {
    try {
        const gUserName = req.user.userName

        if (!gUserName) {
            return res
                .status((400))
                .json(new ApiError(400, "Github UserName not found"))
        }

        const fetchedData = await getRepoData(gUserName)

        if (!fetchedData) {
            return res
                .status(404)
                .json(new ApiError(404, "No data fetched"))
        }

        const user = await User.findOne({ gUserName })

        if (!user) {
            return res
                .status(404)
                .json(new ApiError(404, "User not found"));
        }

        const avatarUrl = user.avatarUrl

        //console.log(fetchedData)

        const data = {
            gUserName : gUserName,
            avatarUrl: avatarUrl,
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