const http = require('http');
// const { url } = require('inspector');

http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});

    let salida = {
        nombre: 'Lautaro',
        edad: 23,
        url: req.url
    }
    res.write(JSON.stringify(salida));
res.end();
})
.listen(8000);

console.log('escuchando el puerto 8080')