import express from "express"
import { User } from "../models/user.models.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"

const router = express.Router()
router.post("/signIn", async function (req, res) {
    try {
        const { gUserName } = req.body
        const { password } = req.body

        const alreadyUser = await User.findOne({ gUserName })

        if (!alreadyUser) {
            return res
                .status(404)
                .json(new ApiError(404, "No user found ."))
        }

        const isMatched = await alreadyUser.isPassCorrect(password)

        if (!isMatched) {
            return res
                .status(401)
                .json(new ApiError(401, "Wrong Password entered ."))
        }

        // CREATE JWT TOKEN
        const accessToken = jwt.sign(
            { _id: alreadyUser._id, email: alreadyUser.email , userName : alreadyUser.gUserName},
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res
            .status(200)
            .json(new ApiResponse(200, {user : alreadyUser,token : accessToken}, "User found successfully ."))
    }
    catch(err){
        return res
            .status(500)
            .json(new ApiError(500,`userAuth Server Error : ${err}`))
    }
})

export default router