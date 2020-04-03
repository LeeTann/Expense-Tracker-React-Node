const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const connectDB = require('./db/db')

dotenv.config({ path: '.env' })

connectDB()

const transactions = require('./routes/transactions')

// Initialize express app
const app = express()

app.use(express.json()) // allows the use of bodyparser

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/transactions', transactions)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// process.env is how you access the global config file
const PORT = process.env.PORT || 5000

// Run server
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))