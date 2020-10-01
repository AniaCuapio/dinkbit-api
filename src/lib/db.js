const mongoose = require('mongoose')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env,
  CONN_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

module.exports = () => {
  return mongoose.connect(`${CONN_STRING}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}