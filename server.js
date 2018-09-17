const http = require('http');
const fs = require('fs');
var url = require('url');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
  // 解析请求，包括文件名
var pathname = url.parse(request.url).pathname;
console.log("Request for " + pathname + " received.");
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.write('<!DOCTYPE html>'+
                          '<html>'+
                          '<head>'+
                          '<meta charset="utf-8" />'+
                          '<title>兔子城堡</title>'+
                          '</head>'+
                          '<body>哈哈哈啰我的</body>'+
                          '</html>');
res.end('Hello World test \(^o^)/~\n');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});
