var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req, res) {
    if(req.url === '/valid-2.gif') {
        res.writeHead(200, {
            'Content-Type': 'image/gif'
        })
        fs.createReadStream(__dirname + '/valid.gif').pipe(res)
    } else if(req.url === '/valid.gif') {
        res.writeHead(200, {
            'Content-Type': 'image/gif'
        })
        fs.createReadStream(__dirname + '/valid.gif').pipe(res)
    }
})

module.exports = server
