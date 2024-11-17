const http = require('http');

const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
    console.log(req)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Howz the header</h1>');
})

server.listen(port, () =>{
    console.log("SErver is listening on", port)
});