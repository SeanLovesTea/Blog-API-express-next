require('dotenv').config()

const express = require('express')
const expressLayout = require('express-ejs-layouts')
const mainRoute = require('./routes/main')


const app = express()
const PORT = 5000 || process.env.PORT

app.use(express.static('public'))

// Templating Engine
app.use(expressLayout)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.use('/', mainRoute)

app.listen(PORT, () => {console.log(`Server Listening on port ${PORT}`)})