require('dotenv').config()
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Successfully connected to database!')
})

mongoose.connection.on('error', (err) => {
  console.log(`Error while connecting to database: ${err}`)
})

mongoose.connection.on('close', () => {
  console.log('Database connection closed!')
})

const schema = mongoose.Schema({
  url: String,
  count: Number
})

const db = mongoose.model('rating', schema)

export { db as default }