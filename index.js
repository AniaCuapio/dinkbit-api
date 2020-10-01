require('dotenv').config()

const PORT = process.env.PORT || 5000

const connectDataBase = require('./src/lib/db')
const { request } = require('express')
const server = require('./server')

connectDataBase().then(() => {
  console.log('DB connected')
  server.listen(`${PORT}`, () => {
    console.log(`server is listening in port ${PORT}`)
  })
})
