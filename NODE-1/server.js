// const http = require('http');
// const hostname='127.0.0.1'
// const port = 8080;

// http.createServer(function(request, response){
//     response.writeHead(200,{'Content-type':'plain/text'});
//     response.write('hello from our application');
//     response.end()
// }).listen(8080);
// //////////////////////////////
// const express =require('express');
// const bodyParser =require('body-parser');
// const cors =require('cors');

// const app = express();

// var corsOption = {
//     origin:'http"://127.0.0.1:3000'
// };

// app.use(cors(corsOption));
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended:true}));

// app.get('/', (req,res)=>{
//     res.json({message:'Welcome to Blogpost applicatiom'});
// })

// const PORT = process.env.PORT ||'8080';
// app.listen(PORT, ()=> {
//     console.log(`Server is running on port ${PORT}`)
// })

 const http = require('http');
const host='localhost';
const port=8000;

const requestListener=function(rec,res){
    // res.writeHead(200)
    res.setHeader('Content-type', 'text/html')
    // res.end('My first Server');
     res.end('<html><body><h1>This is HTML</h1><body><html>');

}

//Create webServer
const server= http.createServer(requestListener);

//Listen the server
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
});