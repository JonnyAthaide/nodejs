var http    =   require('http');
var handle  =   require('./handle');


var events  = require('events');
var emiter  = new events.EventEmitter();
require('hello_nichojo');

// emiter.on('say12', say);

// function say() {
//     console.log('im saying...');
// }

// emiter.emit('say12');

// var name    =   require('./name');
// var s    =   require('./name');
// console.log(s.name());


var server  =   http.createServer(handle);
server.listen(3000, function () {
    console.log('server is listening at port 3000');    
});