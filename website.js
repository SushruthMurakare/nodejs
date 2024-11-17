const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    if(req.url == '/'){
        res.end('<h1>Howz the header</h1>');
    }
    else if(req.url == '/demo'){
        const a = fs.readFileSync('index.html')
        res.end(a.toString())
    }


})

server.listen(port, () =>{
    console.log("SErver is listening on", port)
});