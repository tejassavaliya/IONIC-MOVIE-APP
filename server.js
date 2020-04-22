const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/WWW'));

app.listen(process.env.PORT || 3000);

// Path Location Strategy

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
});

console.log("Server Listening.....")
