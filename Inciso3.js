///////////////////////////////////////////////////////////////////////////////////
var finalhandler = require('finalhandler')
var http = require('http')
var Router = require('router')
 
var router = Router()
router.get('/', function (req, res) {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end('Mi primer servidor http!')
})

router.get('/hello/:name', function (req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ name: req.params.name}))
  })
 
var server = http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res))
})
 
server.listen(3000)

