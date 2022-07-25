
const express=require('express');
const { end } = require('./connection');
const route=express.Router()
const con=require('./connection') 

route.post("/login", (req , res)=>{
<<<<<<< HEAD

    var cms=req.query.cms || req.body.cms || req.params.cms;
    var password=req.query.password || req.body.password || req.params.password;
    // console.log(cms, password)
    // con.connect(function(err){
        con.query("SELECT * FROM authentication WHERE cms=? AND password=?;",[cms,password],(error, row,column)=>{
           if(error) 
             console.log("ERROR OCCURED");
             console.log(row);
             
            if(row.length>0){
                res.send({success:true, data:row, message:'Loggedin successfully'})
            }
            else{
                res.send({success:false, message:'Invalid credentials'})
            }

    });         
    });

// })
=======
    var cms=req.body.cms;
    var password=req.body.password;
    con.connect(function(err){
        if(err){
            console.log("ERROR "+err.message)
            return;
        }
        con.query("SELECT * FROM authentication WHERE cms=? AND password=?;",[cms,password],(error, row, column)=>{
        if(error)
            return res.send("ERROR OCCURED")

        res.send(JSON.stringify({succes:true,message:row}))
    })         
    })    
})
>>>>>>> 9c9e371 (move to hans-f-e branch)


module.exports=route