

const PORT = 3000;
const express = require('express');
const path = require('path');
// const url = require('url');
// const fs = require('fs');

const app = express();


app.set('view engine','ejs');

app.set('views', path.join(__dirname,'views'));

// var myInfo = [{
//     name : "Geetesh",
//     class : "CSE",
//     email : "geetesh@gmail.com"
// }, {
//     name : "Geetesh",
//     class : "CSE",
//     email : "geetesh@gmail.com"
// }


// ]

app.get('/',function(req,res){
   return res.render('index',{myInfo : myInfo});

})

app.get('/profile',function(req,res){
    return res.render('profile' , {myInfo : myInfo });
 
 })

app.listen(PORT,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is running on Port",PORT)
})


















// app.get('/profile',function(req,res){
//     console.log("path",__dirname);
//     return res.sendFile(__dirname+'/profile.html');
  
// })



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

// console.log(__dirname)
//         return res.sendFile(__dirname+'/profile.html');
