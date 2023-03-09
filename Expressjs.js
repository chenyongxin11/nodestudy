// framework on nodejs
const express = require('express')
const app = express()
const bodyparser = require('body-parser') // 处理POST请求获得的data

app.use(express.static('public'))

// Get/Post
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/kirs', (req, res) => {
  res.send('kirs')
})

//routing for pattern
app.get('/fruit/:someFruits', (req, res) => {
  let { someFruits } = req.params // destructing an object
  res.send('you are looking for ' + req.params.someFruits)
})

// routing for all
app.get('*', (req, res) => {
  res.send('not fund')
})

app.listen(300, () => {
  console.log('server is running at 300')
})
