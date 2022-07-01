const express=require('express')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const cors=require('cors')
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
dotenv.config()
const port=process.env.PORT;
// const host=process.env.HOST;
// const database=process.env.DATABASE;
// const password=process.env.PASSWORD;
// const user=process.env.USER;


const getUserRoute=require('./routes/getUsers')
const getCourseRoute=require('./routes/getCourse')
const getStudentRoute=require('./routes/profile')
app.use('/getUsers',getUserRoute)
app.use('/getCourse',getCourseRoute)
app.use('/getSudent',getStudentRoute)
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})