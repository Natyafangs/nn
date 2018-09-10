const express=require('express')
const mongodb=require('mongodb')

var app = express()  //เรียกใช้เสมอถ้าใช้ express

let student=[
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


app.listen(3000,() => {
    console.log('is linten on port 3000')
})