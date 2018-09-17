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
    
    res.setHeader('404', {'Content-Type': 'text/html'});
  }else{
    res.setHeader('200', {'Content-Type':'text/html'});
    res.write(data.toString());
  }
  res.end('♪(^∇^*)');
});

});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
