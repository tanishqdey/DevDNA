import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

const verifyJWT = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return next(
                new ApiError(401, "No valid authorization token provided")
            );
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return next(
                new ApiError(401, "No authorization token provided")
            );
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {
        next(new ApiError(401, "Invalid or expired token"));
    }
};

export { verifyJWT };