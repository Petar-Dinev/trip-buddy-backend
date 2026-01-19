import express from 'express';
import expressConfig from './configs/express.js';

const PORT = 3000;

start()

async function start() {
    const app = express();

    expressConfig(app);

    app.get('/', (req, res) => {
        res.json({ message: 'Hello world' });
    })
    app.listen(PORT, () => console.log(`Server is listen at port ${PORT}`))
}