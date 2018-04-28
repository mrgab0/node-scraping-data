const http = require('http');
const port = 3000;
const server = 'localhost';
const fs = require('fs');
const exec = require('child_process').exec;


//modularizando un poco con la variable aplicacion
const aplicacion = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello world');
});


//creando archivos con fs
fs.writeFile('./archivos/archivo.txt', 'hola munhdo desde el archivo!', function (err) {
	if (err) {throw err;}
	console.log('Fue guardado!!');
});

//ejecutando comandos con exec
exec('wget "http://dolar.mas.tienda/wp-content/uploads/2018/04/200px-Dollarnote_siegel_hq.jpg" -O el.jpg', function(error, stdout, stderr) {
	console.log('stdout: '+ stdout);
	console.log('stderr: ' + stderr);
	if (error !== null) {
		console.log('exec error: ' + error);
	}
});


//apuntando aplicacion.listen a el modulo http
aplicacion.listen(port, server);


//mostrando en la consola mensajes y posibles errores
console.log(`'el servidor esta corriendo en ${port}'`);
