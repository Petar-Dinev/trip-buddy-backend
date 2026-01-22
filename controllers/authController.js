import express from 'express';
import { register, login } from '../services/authService.js';

const authController = express.Router();

authController.post('/register', async (req, res) => {
    const { email, username, password, rePass } = req.body;

    try {
        if (!email || !username || !password) {
            throw new Error('All fields are required!');
        };

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long!');
        };

        const result = await register(email, username, password);
        return res.status(201).json(result);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    };
});

authController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error('All fields are required!');
        }

        const result = await login(email, password);
        return res.json(result);
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
});

export default authController;