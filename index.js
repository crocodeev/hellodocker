const express = require('express')
const path = require('path')
const app = express()

PORT = 5000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT} port`)
})