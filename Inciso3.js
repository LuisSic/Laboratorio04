// require the http module of node.js
var http = require('http');
// require the dispatcher module
var  HttpDispatcher = require('httpdispatcher');
var dispatcher     = new HttpDispatcher();
// define the port of access for your server
const PORT = 8080;

// We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        // log the request on console
        console.log(request.url);
        // Dispatch
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

// Create a server
var myFirstServer = http.createServer(handleRequest);

// add some routes

//A sample GET request
dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("<h1>Mi primer server</h1>");
});

dispatcher.onGet('/hello/name', function(req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ name: req.params.name}));
});

dispatcher.onError(function(req, res) {
    res.writeHead(404);
    res.end("Ohhhhhhhh, Esa ruta no existe. Tenga un feliz dia :)");
});

// Start the server !
myFirstServer.listen(PORT, function(){
    // Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});

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

