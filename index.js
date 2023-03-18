const express = require('express')
const cors = require('cors')
const app = express()

const router = require('./apis')

app.use(cors())

require('./db/mongodb')

app.use(express.json())
app.use(router)
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`)
})