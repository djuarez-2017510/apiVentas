'use strict'

const app = require('./configs/app');
const mongo = require('./configs/mongoConfig');
const port = 3000;

mongo.init();
app.listen(port, ()=>{console.log('Server is running in port 3000')});

