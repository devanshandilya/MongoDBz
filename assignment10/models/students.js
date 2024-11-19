const mongoose=require("mongoose")

const studentSchema=new mongoose.Schema({
 name:{type: String, required:true},
 age:{type:Number, reqired:true},
 grade:{type:String, required:true},
 courses:[{type:mongoose.Schema.Types.ObjectId, ref: "Courses}]
 
})
module.exports=mongoose.model("Student", studentSchema)
