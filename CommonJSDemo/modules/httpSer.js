const http = require("http");

var server = http.createServer(function (request, response) {
  console.log("被访问了");
  response.write("welcome");
  response.end();
});

server.listen(8080);
