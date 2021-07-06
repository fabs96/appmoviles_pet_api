const express = require('express');
const app = express();
const morgan = require('morgan');
const mascotaRoutes = require('./routes/mascotaRoute')
require('./config');
const {MongoClient} = require('mongodb');

app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use('/mascota', mascotaRoutes);

// starting the server
app.listen(app.get('port'), (req, res) => {
    console.log(`escuchando en el puerto ${app.get('port')}`);
})