const compression = require('compression')
const express = require('express');
const path = require('path');
const app = express();

var http = require("http");

app.use(compression())

app.use(express.static(__dirname + '/dist/professionalSite'));

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, '/dist/professionalSite/index.html'));
});
const port = 3000
app.set('port', port)
// Start the app by listening on the default Heroku port
const server = http.createServer(app)
server.listen(port, ()=> console.log(`Running on localhost:${port}`))