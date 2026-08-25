import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { DBConnect } from "./Database/dbConnection.js";
import signUp from "./routes/createUser.routes.js";
import signIn from "./routes/userAuth.routes.js";
import fetchData from "./routes/fetchData.routes.js";
//import bulkFetch from "./routes/bulkFetch.routes.js"

dotenv.config({
    path: ".env"
});

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server running");
});

app.use("/api/createUser", signUp);
app.use("/api/auth",signIn);
app.use("/api/fetch",fetchData);
//app.use("/api/fetch",bulkFetch);

DBConnect()
    .then(() => {
        console.log("MongoDB connected ✅");
        //console.log("PORT =", process.env.PORT);

        app.listen(process.env.PORT || 5000, () => {
            console.log(`Server running on port ${process.env.PORT || 5000}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed ❌", err);
    });