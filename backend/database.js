const mongoose = require('mongoose');
const Process = require("process"); // para conectarse a la base de datos MONGODB

// cadena de conexion- con el metodo connect
// mongoose.connect(process.env.MONGODB_URI, {
// mongoose.connect('mongodb://localhost/javascriptdb', {
mongoose.connect(Process.env.MONGODB_URI, {
useNewUrlParser: true
    // es una configuracion de asunto interno para evitar q mongiis nos aroje error
})

.then(db => console.log('DB is connected'))
.catch(err => console.error(err));