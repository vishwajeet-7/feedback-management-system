const mongoose = require('mongoose')
const express = require('express')
const Feedback = require('../models/feedback.model')

const feedbackRoute = express.Router()

feedbackRoute.post("/",async(req,res)=>{
    try {
        const {title,descriptionOfFeedback,like,images,submitter_name,submitter_email} = req.body;
        const new_feedback = new Feedback({title,descriptionOfFeedback,like,images,submitter_name,submitter_email});
        await new_feedback.save()
        res.send({
        feedback: new_feedback,
        });
        
    } catch (error) {
        res.status(500).send({
            error:"Something went wrong"
        })
        console.log(error)
    }
})

feedbackRoute.get('/',async(req,res)=>{
    try {
      const feedbacks = await Feedback.find();
      res.send({
        data: feedbacks
      })
      
    } catch (error) {
      res.status(500).send({
        error: "Something went wrong"
      })
    }
  })
  
  feedbackRoute.get('/:id',async(req,res)=>{
    try {
      const id = req.params.id
      const feedback = await Feedback.find({_id:id});
      res.send({
        data: feedback
      })
      
    } catch (error) {
      res.status(500).send({
        error: "Something went wrong"
      })
    }
  })

module.exports = feedbackRoute;