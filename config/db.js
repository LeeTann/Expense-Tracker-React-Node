const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // checks for errors in mongoDB
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })

    console.log(`MongoDB Connect: ${conn.connection.host}`.cyan.underline.bold)
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold)
    process.exit(1)
  }
}

module.exports = connectDB