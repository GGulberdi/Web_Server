const http = require('http');
const host='localhost';
const port=8000;

const requestListener=function(rec,res){
    // res.writeHead(200)
    res.setHeader('Content-type', 'application/json')
    // res.end('My first Server');
     res.end('message: This is Json response');

}

//Create webServer
const server= http.createServer(requestListener);

//Listen the server
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
});