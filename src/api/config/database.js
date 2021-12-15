const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.once('open', function() {
    console.log(`database running...`)
})