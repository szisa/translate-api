var http = require('http');
var url = require("url");
var querystring = require('querystring');
var translate = require('./inc/tran')

http.createServer(async function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': 'https://studio.qcloud.coding.net',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
    });

    var query = querystring.parse(url.parse(request.url).query);//parse，url内置模块的方法
    
    if (query.w) {
        try {
            let data = await translate(query.w);
            response.end(JSON.stringify({
                word: query.w,
                text: data.word,
                candidate: data.candidate
            }));
        } catch (error) {
            console.log(error);
        }
    } else {
        response.end(JSON.stringify({}));
    }

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');