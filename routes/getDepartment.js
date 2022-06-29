const express=require('express')
const route=express.Router()
const con=require('./connection')
route.get('/',(req,res)=>{
    con.connect(function(err){
        if(err){
            return console.log("ERROR"+err.message)
        }
        con.query("SELECT * FROM department",(error,row,column)=>{
            if(error){
                return res.send("ERROR OCCURED")
            }
            res.send(JSON.stringify({row}))
        })
    })
})
module.exports=route