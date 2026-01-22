import { verifyToken } from "../services/authService.js";

export default function session() {
    return (req, res, next) => {
        const authHeader = req.headers.authorization;
        
        if (authHeader) {
            try {
                const token = authHeader.split(' ')[1];
                const userData = verifyToken(token);
                req.user = userData;
            } catch (err) {
                return res.status(403).json({ message: 'Invalid access token!' });
            }
        }

        next();
    }
}