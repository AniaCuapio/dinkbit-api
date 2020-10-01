const express = require('express')
const { request, response } = require('express')
const cors = require('cors')
const app = express()

const entriesRouter = require('./src/routes/entries')
const usersRouter = require('./src/routes/users')

//Middlewares
app.use(express.json())
app.use(cors())

//Aqui se monta el enrutador
app.use('/entries', entriesRouter)
app.use('/users', usersRouter)


app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'Dinkbit API running',
  })
})

module.exports = app
