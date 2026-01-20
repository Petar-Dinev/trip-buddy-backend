const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000'
]

export default function cors() {
    return (req, res, next) => {
        if (allowedOrigins.includes(req.headers.origin)) {
            res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
        }
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, HEAD')
        res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')

        if (req.method == 'OPTIONS') {
            return res.status(204).end();
        }

        next();
    }

}