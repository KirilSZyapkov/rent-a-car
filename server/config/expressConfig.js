const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./router');

module.exports = (app)=>{
    app.use(cookieParser());


    app.use(router);
}