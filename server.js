require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5001
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
const pumpdbConnection = mongoose.connection
pumpdbConnection.on('error', (error) => console.error(error)) 
pumpdbConnection.once('open', () => console.log('Connected to database'))

app.use(express.json())
const dbRouter = require('./routes/data')
app.use('/pumpdata', dbRouter)



app.listen(port,() => console.log('Server Started. Listing port 5001'))

