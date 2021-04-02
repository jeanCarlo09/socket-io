const Server = require("./models/server");
require('dotenv').config(); //es necesario para leer los archivos env


const server = new Server();

server.execute();



