const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-Parser')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DB').then((doc) => {
    console.log('success')
},(err) => {
    console.log('fail')

}) //เชื่อมต่อ DB

var Schema= mongoose.Schema // สร้างสกีม่าเพื่อบอกว่าเก็บในรูปแบบไหน มันยังเป็นรูปแบบอยู่
var StudentSchema = new Schema({
    id:{
        type: String,
        unique: true,
        required: true,
        minlength: 8,
        maxlength: 8
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName : {
        type: String,
        required: true,
    },
    age : Number

})

var Student = mongoose.model('Student', StudentSchema) // สร้าง  table

var app = express()  //เรียกใช้เสมอถ้าใช้ express
app.use(bodyParser.json()) // รู้จัก json

app.get('/get',(req,res)=>{
    Student.find().then((doc)=>{
        res.send(doc)
    },(err)=>{ 
        res.status(400).send(err)

    })

})

app.post('/post' , (req ,res)=>{
    let newStudent = new Student({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
    })
    newStudent.save().then((doc ) =>{
        res.send(doc)

    }, (err)=>{ 
        res.status(400).send(err)
    })

})

/*let student=[
    {
        id:'st1',name: 'aaa'

    },
    { 
        id:'st2',name: 'bbb'
    },
    {
        id:'st3',name: 'ccc'
    }
]

app.get('/',(req,res) =>{  //ทำแบบนี้ตลอดทั้ง get post update
    res.send('hello')

} )

app.get('/all-student' ,(req,res) => {
    res.send(student)
})    // getข้อมูลของนักเรียนลงมา

app.get('/all-student/:id' ,(req,res) => { 
    let studentID =req.params.id //params คือ พารามิเตอร์ที่อินพุตเข้าไป
    for(let i=0; i<student.length; i++){
        if(studentID == student[i].id){
            res.send(student[i])
            break
        }
    }
    res.send('not found : '+studentID)
})  // การคิวรี่ คือ ดึงแค่บางส่วน

app.get('/all-student/name/:name' ,(req,res) => { 
    let studentName =req.params.name //params คือ พารามิเตอร์ที่อินพุตเข้าไป
    for(let i=0; i<student.length; i++){
        if(studentName == student[i].name){
            res.send(student[i])
            break
        }
    }
    res.send('not found : '+studentName)
})
*/

app.listen(3000,() => {
    console.log('is linten on port 3000')
})