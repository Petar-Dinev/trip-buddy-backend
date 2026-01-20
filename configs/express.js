import express from 'express';
import cors from '../middlewares/cors.js';
import trim from '../middlewares/trim.js';

export default function expressConfig(app) {
    app.use(cors())
    app.use(express.json());
    app.use(trim());
}
