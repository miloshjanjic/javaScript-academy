const app = require('./app')
const http = require('http')

const server = http.createServer(app)

server.listen(3004)
server.on('listening', () => {
  console.log('Server listening on port 3004...')
})