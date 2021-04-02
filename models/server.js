//Servidor de Express
const express = require('express');
//Servidor de sockets
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./sockets');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        //Htpp server
        this.server = http.createServer(this.app);

        //Configuración de sockets
        this.io = socketio(this.server, {/*Configuraciones socket server (latencia, timeout, etc)*/ });

    }

    middlewares() {

        // Desplegar el directorio público
        this.app.use(express.static(path.resolve(__dirname, '../public')));

    }

    configurarSockets() {
        new Sockets(this.io); //paso por referencia
    }

    execute() {

        //Inicializar Middlewares
        this.middlewares();

        //Configurar sockets
        this.configurarSockets();

        //Inicializar server
        this.server.listen(this.port, () => {
            console.log(`Server corriendo en puerto: ${this.port}`);
        });
    }
}

module.exports = Server;