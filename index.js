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


const getUserRoute=require('./routes/authentications')
const getCourseRoute=require('./routes/getCourse')
const getStudentRoute=require('./routes/profile')
const getDepartmentRoute=require('./routes/getTerms')
const getAttendanceRoute=require('./routes/getAttendance')
const getFinanceRoute=require('./routes/finance')
const getTeacherAuthRoute=require('./routes/teacher_authentications')
const insertWithdrawRoute=require('./routes/withdrawCourse')
const checkWithdrawStatusRoute=require('./routes/withdrawStatus');
const getWithdrawRequestRoute=require('./routes/teacherGetWithdrawRequest');
const withdrawResposeByTeach=require('./routes/withdrawRespose');
const getResult=require('./routes/result');

app.use('/authentication',getUserRoute);
app.use('/getCourse',getCourseRoute);
app.use('/getstudent',getStudentRoute);
app.use('/terms',getDepartmentRoute);
app.use('/attendance',getAttendanceRoute)
app.use('/user',getFinanceRoute);
app.use('/teacher',getTeacherAuthRoute);
app.use('/withdraw',insertWithdrawRoute);
app.use('/withdraw',checkWithdrawStatusRoute);
app.use('/getWithdraw',getWithdrawRequestRoute);
app.use('/withdraw',withdrawResposeByTeach);
app.use('/result',getResult);
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})