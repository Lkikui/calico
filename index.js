require('@babel/polyfill')
require('@babel/register')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 8000
const routes = require('./routes').default

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// use the api routes
routes(app)

app.listen(port, () => console.log(`Listening on port ${port}`))
