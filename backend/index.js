if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
// require('dotenv').config();
// console.log(process.env.NODE_ENV)

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');  //procesa imagenes
const path  = require('path');
const cors = require('cors');

//Initializations
const app = express();
require('./database');

//Setting
app.set('port', 27017);


                    //Middlewares
app.use(morgan('dev'));  // son funciones de middlewares
//
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'), // se crean las carpetas
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
//
//                 // Routes
//
//                 //app.use(require('./routes/books'));
app.use('/api/books',require('./routes/books'));  // se agrega API en el buscador para q sea un API REST  (http:3000/api/books)
//
//                 // static file
//
app.use(express.static(path.join(__dirname, 'public')));  // es la carpeta que el servidor va enviar pR mostrar js, html css.
//


//Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
