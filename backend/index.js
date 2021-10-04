const express = require('express');
const morgan = require('morgan');
const multer = require('multer');  //procesa imagenes
const path  = require('path');

//Initializations
const app = express();

//Setting
app.set('port', 3000);

//Middlewares
app.use(morgan('dev'));  // son funciones de middlewares

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'), // se crean las carpetas
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes

//app.use(require('./routes/books'));
app.use('/api/books',require('./routes/books'));

// static file

app.use(express.static(path.join(__dirname, 'public')));



//Start the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})
