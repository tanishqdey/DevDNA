import mongoose from "mongoose";

const DBConnect = async () => {
    try {
        console.log("MONGODB_URI exists:", !!process.env.MONGODB_URI);
        // console.log(
        //     "MONGODB_URI starts with:",
        //     JSON.stringify(process.env.MONGODB_URI?.substring(0, 30))
        // );
        const connectionDetails = await mongoose.connect(process.env.MONGODB_URI);

        if (connectionDetails) {
            console.log(`Host is : ${connectionDetails.connection.host}`);
        }
        else {
            console.log("Connection details not found ")
        }
    } catch (error) {
        console.error("Connection failed:", error);
        throw error;
    }
}

export { DBConnect }