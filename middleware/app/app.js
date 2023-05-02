const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World - Roxy!')
})

app.listen(port, () => {
  console.log(`Your website is working! ${port}`)
})