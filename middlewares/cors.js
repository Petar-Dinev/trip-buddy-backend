export default function cors() {
    return (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE, HEAD')
        res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
        next();
    }

}