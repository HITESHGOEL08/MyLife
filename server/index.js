const express = require('express');
const path = require('path');
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
app.listen(port);
console.log('App is listening on port ' + port);