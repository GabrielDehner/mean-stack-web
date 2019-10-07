const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express(); // funcionalidad de la app en cvariable

const { mongoose } = require('./database')

// Configuraciones-settings
app.set('port', process.env.PORT || 3000); //process.env.PORT || 3000



// Funciones para procesar datos-Middleware
app.use(morgan('dev')); // para ver en consola cada vez que llega una peticion
app.use(express.json());  //configurar formato json
app.use(cors({origin: 'http://localhost:4200'}));



// Rutas del servidor Routes
app.use('/api/employees', require('./routes/employee.routes'));


//para que escuche el servidor e inicio del mismo -Starting the server
app.listen(app.get('port'),()=>{
    console.log('Server corriendo en puerto 3000')
});