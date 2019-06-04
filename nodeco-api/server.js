'use strict'

const express = require('express')
const helmet = require('helmet')
const chalk = require('chalk')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
require('dotenv').config()

const port = process.env.PORT || 3000

// Connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
mongoose.Promise = Promise
mongoose.connection.on('error', (err) => {
  console.error(`🚫 → ${chalk.red(err.message)}`)
})

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(helmet())

app.use('/api/', routes)

app.listen(port, () => console.log(`${chalk.green('[NodeCo]')} Running on http://localhost:${port}`))