import express from 'express';
import dotenv from 'dotenv'
import expressConfig from './configs/express.js';
import dbConfig from './configs/db.js';
import routesConfig from './configs/routes.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;


start()

async function start() {
    const app = express();

    await dbConfig(app, DB_CONNECTION_STRING);
    expressConfig(app);
    routesConfig(app);

    app.listen(PORT, () => console.log(`Server is listen at port ${PORT}`))
}