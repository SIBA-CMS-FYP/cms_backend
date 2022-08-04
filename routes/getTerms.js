const express=require('express')
const route=express.Router()
const con=require('./connection')
route.get('/getTerms',(req,res)=>{
    var cms=req.query.cms;
        con.query("Select CONCAT(season,year) as Season from student_enroll Where cms=?;",[cms],(error,row,column)=>{
            if(error){
                return res.send("ERROR OCCURED")
            }
            res.send(JSON.stringify({row}))
        })
    })
module.exports=route