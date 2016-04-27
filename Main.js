/**
 * Created by mahadev on 21/11/14.
 */

var http = require('http');
var Config = require("./Config.js");
var Child = require("./Child.js");

process.on('uncaughtException', function (err) {
    require("./Child.js").handleuncaughtException(err);
});

http.createServer(
    function (req, res) {
        
            Child.runProxy(req, res);

    }).listen(Config.PORT, function () {
        console.log("proxy server running on port (default : 80) :" + Config.PORT);
    });