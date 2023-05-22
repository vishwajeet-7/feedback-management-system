const mongoose = require('mongoose')
require('dotenv').config()

const connectDB = mongoose.connect(process.env.SERVER_URL)

module.exports = connectDB