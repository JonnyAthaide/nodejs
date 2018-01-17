var fs = require('fs');

// FS = File System

// Write File
// fs.writeFile('data.txt', 'Hello World by Jonny', function (err) {
//     if(err){
//         throw err;
//     }
// });

// Read File
// fs.readFile('data.txt', function (err, data) {
//     if(err){
//         throw err;
//     }
//     console.log(data.toString('utf8'));    
// });

// Dir
// fs.readdir('.',function(err, files){
//     if(err){
//         throw err;
//     }

//     for(var file in files){
//         console.log(files[file]);        
//     }
// });


// DirSync
fs.readdirSync('.').filter( function (file) {
    return (file.endsWith('.js'));
})
.forEach(function(file){
    console.log(file);
    
});