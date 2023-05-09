var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res) {
    var url = req.url;
        if (req.url == '/') {
            url = '/main.html';
        }
        if (req.url == '/favicon.ico') {
            return res.writeHead(404);
        }
        res.writeHead(200);
        res.end(fs.readFileSync(__dirname + url));
});

// listen 함수로 4242 port
app.listen(4242, function() {
    console.log("server is running");
});