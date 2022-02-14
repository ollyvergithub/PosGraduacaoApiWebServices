const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World! Via POST')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})