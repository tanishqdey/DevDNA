import express from "express"
import { User } from "../models/user.models.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"

const router = express.Router()
router.post("/newUser", async function (req, res) {
    try {
        const { name } = req.body
        const { gUserName } = req.body
        const { email } = req.body
        const { password } = req.body

        const alreadyUser = await User.findOne({gUserName})
        if(alreadyUser){
            return res
                .status(400)
                .json(new ApiError(400,"This github userName is already used ."))
        }

        const headers = {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            Accept: "application/vnd.github+json"
        };

        const githubExist = await fetch(`${process.env.GITHUB_API_URL}/users/${gUserName}`,{headers})
        if(!githubExist.ok){
            return res
                .status(404)
                .json(new ApiError(404,"No such github profile found ."))
        }

        const data = await githubExist.json()

        const user = await User.create({
            name : name ,
            gUserName : data.login ,
            githubId : data.id ,
            githubCreatedAt : data.created_at ,
            avatarUrl : data.avatar_url ,
            email : email ,
            password : password
        })

        // CREATE JWT TOKEN
        const accessToken = jwt.sign(
            { _id: user._id, email: user.email , userName : user.gUserName},
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res
            .status(200)
            .json(new ApiResponse(200, { user: user, token: accessToken }, "User created successfully ."))
    }
    catch (err) {
        console.log(err)
        return res
            .status(500)
            .json(new ApiError(500, `createUser Server Error : ${err}`))
    }
})

export default router