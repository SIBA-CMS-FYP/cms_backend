const express=require('express')
const bodyParser=require('body-parser')
const dotenv=require('dotenv')
const mysql=require('mysql')
const cors=require('cors')

dotenv.config()
const port=process.env.PORT;
const host=process.env.HOST;
const database=process.env.DATABASE;
const password=process.env.PASSWORD;
const user=process.env.USER;

const app=express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.listen()