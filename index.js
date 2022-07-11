var express=require("express")
var mongoose=require("mongoose")
var bodyParser=require("body-parser")
var path = require('path')
const app=express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://localhost:27017/formsDB")
var db=mongoose.connection
db.on('error',()=>console.log('error connection'))
db.once('open',()=>console.log('connected db'))
app.post('/forms',(req, res)=>{
    var Name=req.body.Name
    var Course=req.body.Course
    var Age=req.body.Age
    var Email=req.body.Email

    var data={
        "name":Name,
        "course":Course,
        "age":Age,
        "email":Email
    }
    db.collection('student data').insertOne(data, (err,collection)=>{
        if(err){
            throw err;
        }
        console.log("document inserted successfully")
    })
    return res.redirect('success.ejs')
})
app.set('view engine', 'ejs')

app.get('/',(req, res)=>{
    return res.render(path.join(__dirname+'/views/form'))
}).listen(3000);
console.log("Listening")