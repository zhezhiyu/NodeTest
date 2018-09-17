const http = require('http');
const fs = require('fs');
var url = require('url');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
  // 解析请求，包括文件名
var pathname = url.parse(req.url).pathname;
console.log("Request for " + pathname + " received.");
fs.readFile(pathname.substr(1), function (err, data) {
  
  if (err) {
    console.log(err);
    
    req.writeHead(404, {'Content-Type': 'text/html'});
  }else{
    req.writeHead(200, {'Content-Type':'text/html'});
    
  }
  req.end('♪(^∇^*)');
});

});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
