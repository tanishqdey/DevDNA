import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    gUserName:{
        type : String,
        required : true 
    },
    githubId:{
        type : Number,
        required : true,
    },
    avatarUrl:{
        type : String ,
        required : true 
    },
    githubCreatedAt:{
        type : Date,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    password:{
        type : String,
        required : true
    }
},{timestamps : true})

userSchema.pre("save" , async function (next) {
    if(!this.isModified("password")){
        return next() ;
    }
    else{
        this.password = await bcrypt.hash(this.password , 10) ;
    } 
})

userSchema.methods.isPassCorrect = async function (password) {
    return await bcrypt.compare(password,this.password) ;
}

export const User = mongoose.model("User",userSchema) ;