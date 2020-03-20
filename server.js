const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')

dotenv.config({ path: './config/config.env' })

// Initialize express app
const app = express()

app.get('/', (req, res) => res.send('Hello'))

// process.env is how you access the global config file
const PORT = process.env.PORT || 5000

// To run server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))