const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  let parsedurl = url.parse(req.url)
  res.write('hello ' + parsedurl.pathname)
  res.end()
})

server.listen(666, () => {
  console.log('server is runnig')
})
