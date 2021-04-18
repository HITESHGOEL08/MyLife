const express = require('express');
var fs = require('fs');
var http = require('http');
var https = require('https');
const path = require('path');
var privateKey = fs.readFileSync(path.join(__dirname, "sslcert/server.key"), 'utf8');
var certificate = fs.readFileSync(path.join(__dirname, "sslcert/server.crt"), 'utf8');

var credentials = { key: privateKey, cert: certificate };

const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
// a test route to make sure we can reach the backend
//this would normally go in a routes file
app.get('/test', (req, res) => {
    const jsonValue = {
        results: [{
            name: "Hitesh Goel"
        }]
    }
    res.json(jsonValue)
})
//Set the port that you want the server to run on
const port = 19975;
var httpsServer = https.createServer(credentials, app);
// httpsServer.listen(port);
app.listen(port);
console.log('App is listening on port ' + port);