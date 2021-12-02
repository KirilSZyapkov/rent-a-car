const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./router');
const auth = require('../init/auth');
const storage = require('../init/storage');

module.exports = async (app) => {
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", '*');
        res.setHeader("Access-Control-Allow-Headers", 'Content-Type, X-Authorization');
        res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, DELETE');

        next();
    });
    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(cookieParser());
    app.use(await auth());
    app.use(await storage());

    app.use(router);
}