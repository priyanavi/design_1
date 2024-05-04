const PORT = process.env.PORT||2000;
const express = require('express')
const app =express()
const  path = require("path")
app.use(express.static('public'))

app.use('/',require("./router/userRouter"))

app.listen(PORT,()=>{
    console.log('the server is running on port 2000')
})