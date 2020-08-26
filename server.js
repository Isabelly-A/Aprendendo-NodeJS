require('dotenv').config
//require('module-alias/register');

const app = require('./src/app.js');
//const mongoose = require('mongoose');

app.listen(4000, (err) => {
    if(err){
        return console.log('erro');
    }
    console.log('iniciou em http://localhost:4000');
});