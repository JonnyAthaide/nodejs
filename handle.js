var querystring =   require('querystring');

function handle(request, response) {
    response.writeHead(200, {
        'Content-Type':'text/html'
    });

    var body = '';

    request.on('data', function (data) {
        body += data.toString();
    });

    request.on('end', function(){
        var decode = querystring.parse(body);
        console.log(decode);
    });

    response.write('<!DOCTYPE html');
    response.write('<html');
    response.write('<head><title>Response Module</title></head>');
    response.write('<body>');
    response.write('<h1>Hello from HTTP module</h1>');
    response.write('</body>');
    response.write('</html');

    response.end();

    // response.end('Hello from HTTP module');
}

exports.fn      =   handle;

module.exports  =   handle;