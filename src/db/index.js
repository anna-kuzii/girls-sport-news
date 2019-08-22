const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, options).then(
  () => {
    console.log('Successfully connected')
  },
  err => {
    throw err
  }
)
