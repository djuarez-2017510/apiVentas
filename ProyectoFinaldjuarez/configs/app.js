'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
 // const productRoutes = require('../src/routes/'); //ejemplo 

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// app.use('/product', productRoutes); //ejemplo 

module.exports = app;