const mongoose = require('mongoose');
const init = require('../init/init');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(init.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        const db = mongoose.connection;
        db.on('error', (err)=>{
            console.log('Connection error!');
            reject();
        });
        db.on('open',()=>{
            console.log('Connected to DB');
            resolve();
        })
    })
}
