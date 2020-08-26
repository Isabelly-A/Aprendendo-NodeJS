require('dotenv').config();

//require('module-alias/register');
const config = require('./src/config/index');
const app = require('./src/app.js');
//const mongoose = require('mongoose');

app.listen(config.app.port, (err) => {
    if(err){
        return console.log('erro');
    }
    console.log('iniciou em http://localhost:4000');
});