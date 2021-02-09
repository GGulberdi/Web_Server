// csv = Comma Spreaded Values

const http = require('http');
const host='localhost';
const port=8000;

const requestListener=function(rec,res){
    // res.writeHead(200)
    res.setHeader('Content-type', 'text/csv');
    res.setHeader("Context-Disposition","attachment;filename=samplescvfile.csv")

    // res.end('My first Server');
     res.end(`id,name,email\n1,John Doe,doejohn@sample.com`);

}

//Create webServer
const server= http.createServer(requestListener);

//Listen the server
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`)
});
