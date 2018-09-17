
	var http = require('http');
var optfile = require('./fs_read');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type' : 'text/html; charset=UTF-8'});
    if(request.url != '/favicon.ico'){
        function recall(data){  //等待readfile执行完之后回调
            response.write(data);
            response.end('ok');
        }
        optfile.readfile('./index.html',recall);//传入闭包函数
        console.log("主程序结束");
    }   
}).listen(3000);
var fs = require("fs");

module.exports = {

    readfileSync : function(path){//同步读取
        var data = fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
    },

    readfile : function(path,recall){//异步执行
        fs.readFile(path,function(err,data){
            if(err){
                console.log(err);
            }else{
                recall(data);   //回调recall函数，它是闭包函数，它会存储原来的response对象
                console.log(data.toString());
            }
        });
        console.log("异步方法执行完毕");

    }
}
