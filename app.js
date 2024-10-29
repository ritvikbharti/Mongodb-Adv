const express = require('express')
const app = express()

const userModel = require("./usermodel")
app.get('/',(req,res)=>{
    res.send("hey")
})


app.get('/create', async (req,res)=>{
  let createuser =  await userModel.create({
        name:"Ritvik",
        email:"bhartiritvik1000@gmail.com",
        username:"ritvik_bharti_01"
    })
    res.send(createuser)
})


app.listen(3000)