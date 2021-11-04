const express = require('express');
const cookieParser = require('cookie-parser');
const router = require('./router');
const auth = require('../init/auth');
const storage = require('../init/storage');

module.exports = async (app) => {
    app.use((req, res, next) => {
        res.header({ "Access-Control-Allow-Origin": "http://localhost:3000" });
        res.header({ "Access-Control-Allow-Headers": 'X-Authorization' });
        res.header({ "Access-Control-Allow-Headers": 'Content-Type' });
        res.header({ "Access-Control-Allow-Methods": "GET" });
        res.header({ "Access-Control-Allow-Methods": "POST" });
        res.header({ "Access-Control-Allow-Methods": "PUT" });
        res.header({ "Access-Control-Allow-Methods": "DELETE" });
        next();
    });
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(cookieParser());
    app.use(await auth());
    app.use(await storage());

    app.use(router);
}