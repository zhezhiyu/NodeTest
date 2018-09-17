const http = require('http');
const hostname = '0.0.0.0';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
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
