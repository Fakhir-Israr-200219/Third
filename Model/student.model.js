const mongoose = require("mongoose");

const studentModel = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"email is alredy exist"]
    },
    phone:{
        type:String,
        required:[true,"please enter phone number"]
    }
})

module.exports = mongoose.model("Third",studentModel);