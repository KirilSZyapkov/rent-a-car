const express = require('express');
const app = express();
const databaseConfig = require('./config/databse');
const init = require('./init/init');
const expressConfig = require('./config/expressConfig');

start();
async function start() {
    await databaseConfig(app);
    expressConfig(app);
    
    app.get('/', (req, res) => {
        res.json({ title: 'Rent' });
    })

    app.listen(init.HOST, () => console.log(`Server is listening on port ${init.HOST}`));
}