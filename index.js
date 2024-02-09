
require("dotenv").config()
const Port=process.env.PORT || 3000


const express = require("express")
const { userRouter } = require("./routes/user.route")
const { productRouter } = require("./routes/post.route")
const cors = require("cors")
const { connection } = require("./db")


const app = express()
app.use(cors())

app.use("/api/",userRouter)
app.use("/api/post",productRouter)



app.listen(Port,async()=>{
   try {
    await connection;
    console.log(`Server is running at port ${Port}`)
    console.log("Connected to DB")
   } catch (error) {
    console.log("Error in connecting with the server due to -->",error)
   }
})

module.exports = app