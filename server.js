/**
 * Node.js server. (http://nodejs.org/api/index.html)
 */
var connect = require('connect');
connect.createServer(
    connect.static(__dirname + '/app')
).listen(8080);