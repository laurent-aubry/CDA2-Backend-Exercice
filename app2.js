
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Nouvelle demande");
    console.log(req.method, req.url);

    res.setHeader('Content-Type', 'text/html'); //'text/plain' renvoie le texte brut
    res.end('<h1>Bonjour cher client</h1>');

})

server.listen(5000)