var http = require('http');
var url = require("url");
var querystring = require('querystring');
var translate = require('./inc/tran')
var github = 'https://github.com/imlinhanchao/translate-api'

http.createServer(async function (request, response) {


    var query = querystring.parse(url.parse(request.url).query);
    
    if (query.w) {
        try {
            response.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, DELETE, PUT',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Headers': 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With'
            });
            let data = await translate(query.w, query.f || null, query.t || null);
            response.end(JSON.stringify({
                word: query.w,
                text: data.word,
                candidate: data.candidate
            }));
        } catch (error) {
            response.end(`<p>Has something wrong:</p>
            <p>
                ${error.message}
            </p>
            <p>
                Send a <a href="${github}/issues">Issue</a> to me.
            </p>
            `);
            console.log(error);
        }
    } else {
        response.end(`<script>location='${github}'</script>`);
    }

}).listen(8888);

console.log('Server running at http://localhost:8888/');