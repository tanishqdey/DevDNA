import mongoose from "mongoose";

const DBConnect = async()=>{
    try {
        const connectionDetails = await mongoose.connect(process.env.MONGODB_URI);

        if (connectionDetails) {
            console.log(`Host is : ${connectionDetails.connection.host}`);
        }
        else {
            console.log("Connection details not found ")
        }
    } catch (error) {
        console.log("Connection failed : ", error);
    }
}

export {DBConnect}