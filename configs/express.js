import express from 'express';
import cors from '../middlewares/cors.js';

export default function expressConfig(app) {
    app.use(cors())
    app.use(express.json());
}
