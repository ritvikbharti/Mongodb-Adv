const express = require('express')
const app = express()

const userModel = require("./usermodel")
app.get('/',(req,res)=>{
    res.send("hey")
})
app.get('/create', async (req,res)=>{
  let createuser =  await userModel.create({
        name:"Tamanna",
        email:"tamanna1000@gmail.com",
        username:"tamanna_malik_01"
    })
    res.send(createuser)
})
app.get('/update', async (req,res)=>{
   let updateduser = await userModel.findOneAndUpdate({
    username:"ritvik_bharti_01"},
    {name:"Adesh"},
    {new : true})
    res.send(updateduser)
})

app.get('/read',async (req,res)=>{
    let users = await userModel.find();
    res.send(users)
})
app.get('/delete',async (req,res)=>{
    let users = await userModel.findOneAndDelete({username: "tamanna_malik_01"});
    res.send(users)
})


app.listen(3000);