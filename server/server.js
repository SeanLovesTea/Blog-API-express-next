require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')
const cors = require('cors')

const mainRoute = require('./routes/main')


const app = express()
const PORT = 5000 || process.env.PORT

// MongoDb Connection
const mongoDb = process.env.MONGO_KEY ;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use(cors())
app.use(express.static('public'))

// Templating Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', mainRoute)

app.listen(PORT, () => {console.log(`Server Listening on port ${PORT}`)})