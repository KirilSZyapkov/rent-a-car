const express = require('express');
const app = express();
const databaseConfig = require('./config/databse');
const expressConfig = require('./config/expressConfig');
const { HOST } = require('./init/init');


start();
async function start() {
    await databaseConfig(app);
    expressConfig(app);
    
   app.get('/', (req, res)=>{
       res.send('Server is online').end();
   })

    app.listen(HOST, () => console.log(`Server is listening on port ${HOST}`));
}