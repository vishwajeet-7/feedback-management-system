const express = require('express');
const connectDB = require('./db/connectDb');

const app = express();

app.listen((8080),async()=>{
    try{
        await connectDB
        console.log("Connected to db")
    }catch(err){

    }
    console.log(`https://localhost:8080`)
})