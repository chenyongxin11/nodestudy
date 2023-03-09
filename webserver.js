const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    fs.readFile(path.join(__dirname, 'index.html'), (e, data) => {
      if (e) throw e
      else {
        res.writeHead(200, { 'content-Type': 'text/html' })
        res.write(data)
        res.end()
      }
    })
  } else {
    let parsedurl = url.parse(req.url)
    res.write('hello ' + parsedurl.pathname)
    res.end()
  }
})

server.listen(666, () => {
  console.log('server is runnig')
})
