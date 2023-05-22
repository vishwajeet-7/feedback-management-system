const express = require('express');
const connectDB = require('./db/connectDb');
const feedbackRoute = require('./routes/feedback.routes');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.use('/feedback',feedbackRoute)



app.get('/',(req,res)=>{
    res.send({
        message:'Hello World'
    })
})

app.listen((8080),async()=>{
    try{
        await connectDB
        console.log("Connected to db")
    }catch(err){

    }
    console.log(`http://localhost:8080`)
})