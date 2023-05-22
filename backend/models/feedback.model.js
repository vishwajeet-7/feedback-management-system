const mongoose = require('mongoose')

const FeedbackSchema = new mongoose.Schema({
    title:{type:String,required:true},
    descriptionOfFeedback:{type:String,required:true},
    like:{type:Boolean},
    images:{type:String},
    submitter_name:{type:String},
    submitter_email:{type:String},
})

const Feedback = mongoose.model('feedback',FeedbackSchema)

module.exports = Feedback