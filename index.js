var http = require('http');
var url = require("url");
var querystring = require('querystring');
var translate = require('./inc/tran')

http.createServer(async function (request, response) {

    response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
    });

    var query = querystring.parse(url.parse(request.url).query);
    
    if (query.w) {
        try {
            let data = await translate(query.w, query.f || null, query.t || null);
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

console.log('Server running at http://localhost:8888/');