

const PORT = 3000;
const express = require('express');
const url = require('url');
const fs = require('fs');

const app = express();

app.get('/',function(req,res){
   return res.send('<h1>Hey Express</h1>');

})

app.get('/profile',function(req,res){
    return res.send("<h3>My Profile</h3>")
})

app.listen(PORT,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on Port",PORT)
})






















// function myFirst(req,res){
    
//    var q = url.parse(req.url,true);
//    console.log("file Name",q.pathname)
//    let filePath = '.' + q.pathname +'.html';

//    fs.readFile(filePath,function(err,data){
//     if(err){
//         res.writeHead(404,{'Content-Type': 'text/html'});
//        return res.end("404 Not found")
//     }
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     return res.end(data);
// });

   
// }

// const server = http.createServer(myFirst);


// server.listen(PORT, function(err){
//     if(err){
//         console.log("Error in server")
//         return;
//     }
//     console.log("server is on Port", PORT)

// })


