'use strict'

const mongoose = require('mongoose');

exports.init = ()=>{
    mongoose.Promise = global.Promise;
    const uriMongo = 'mongodb://127.0.0.1:27017/ProyectoFinalDjuarez';

    mongoose.connection.on('error', ()=>{
        console.log('MongoDB / cant connnect to MongoDB');
        mongoose.disconnect();
    });

    mongoose.connection.on('connecting', ()=>{
        console.log('MongoDB / connecting to MongoDB');
    });

    mongoose.connection.on('connected', ()=>{
        console.log('MongoDB / connected to MongoDB');
    });

    mongoose.connection.once('open', ()=>{
        console.log('MongoDB / connected to database');
    });

    mongoose.connection.on('reconnected', ()=>{{
        console.log('MongoDB / reconnected to MongoDB');
    }});

    mongoose.connection.on('disconnected', ()=>{
        console.log('MongoDB / error MongoDB is desconnected');
    });

    mongoose.connect(uriMongo, {
        maxPoolSize : 5,
        connectTimeoutMS : 2500,
        useNewUrlParser : true
    }).catch(err=>console.log(err));

}