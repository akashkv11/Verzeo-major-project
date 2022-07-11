const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/formsdb')
//validation with promise
.then(()=>console.log('Connected'))
.catch((err)=>console.log(err))

var studentSchema=new mongoose.Schema({
    Name:String,
    Course:String,
    Age:Number,
    Email:String
})
const studentModel=mongoose.model('formdata',studentSchema)
const students=new studentModel({
    Name:"Sasikanth",
    Course:"Nodejs",
    Age:20,
    Email:"sasi@gmail.com"
})
students.save()