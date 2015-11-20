var http = require("http");
var fs = require("fs");
http.createServer(function (req, res){ //create Server

    var content ='';
    fs.readFile("./demo.html", function (err, file)
    {
        content += file;
    })
    
    setTimeout(function() {
        res.end(content); //end Response
    }, 5000);
    
}).listen(3000);