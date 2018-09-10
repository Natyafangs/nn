const express=require('express')
const mongodb=require('mongodb')

var app = express()  //เรียกใช้เสมอถ้าใช้ express

app.get('/',(req,res) =>{  //ทำแบบนี้ตลอดทั้ง get post update
    res.send('hello')

} )

app.listen(3000,() => {
    console.log('is linten on port 4000')
})