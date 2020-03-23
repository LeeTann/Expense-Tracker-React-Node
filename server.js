const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()

const transactions = require('./routes/transactions')

// Initialize express app
const app = express()

app.use('/api/transactions', transactions)

// process.env is how you access the global config file
const PORT = process.env.PORT || 5000

// To run server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))