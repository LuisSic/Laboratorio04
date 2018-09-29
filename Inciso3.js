var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('<b>Hola</b> mi primer servidor http');
});

// route with parameters
app.get('/hello/:name', function(req, res) {
    console.log(req.params);
    res.send({hello: req.params.name});
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
    res.status(404).send("Ohhhhhhhh, Esa ruta no existe. Tenga un feliz dia :)");
});

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Ejemplo de servidor en el puerto 3000.');
});

