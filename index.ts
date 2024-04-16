const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/liveness', (req, res) => {
  res.send('I am alive!')
})

app.get('/readiness', (req, res) => {
  res.send('I am ready!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})