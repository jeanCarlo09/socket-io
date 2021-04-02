class Sockets {

    constructor(io) {
        this.io = io; //así se crean las propiedades de clase en JS

        this.socketEvents();
    }

    //todos los eventos de los sockets
    socketEvents() {

        //On conection

        //socket -> cliente que se conectó -> socket del lado del servidor
        this.io.on('connection', (socket) => {//un nuevo dispositivo conectado
            //io es al que se conectan todos los clientes (sockets)

            //Esuchar evento new-message
            socket.on('new-message', (data) => {
                console.log(data);

                this.io.emit('message-from-server', data); //io emite a TODAS las personas conectadas, a diferencia el socket es únicamente a un cliente
            });
            //Evento -> instrucciones que se disparan, muchas veces se trabaja con un único evento,
            //pero se suelen segmentar

            //**Es recomedable que el evento este en minuscula, sin caracteres especiales y separado por guiones */
            //No se recomienda emitir strings o booleanos, usualmente se envían objetos
        });
    }

}

module.exports = Sockets;