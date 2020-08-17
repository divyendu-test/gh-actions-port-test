const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello from CI')
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

setTimeout(() => {
  console.log(`Closing server`)
  if (server) {
    server.close()
  }
}, 60 * 1000) // Kill after 60s
