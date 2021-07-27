var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;  //Phân tích request url có thuộc tính year và month
  //http://localhost:8080/?year=2017&month=July
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);