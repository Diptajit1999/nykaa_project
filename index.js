const express=require("express")
const app=express()

require('dotenv').config();
const Port=process.env.PORT || 3000

app.listen(Port,()=>{
console.log(`server is running at port ${Port}`)
})