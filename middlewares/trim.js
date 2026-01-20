export default function trim() {
    return (req, res, next) => {
        if (req.body) {
            for (const key in req.body) {
                if (typeof req.body[key] === 'string') {
                    req.body[key] = req.body[key].trim();
                } else if (Array.isArray(req.body[key])) {
                    req.body[key] = req.body[key].map(el => typeof el === 'string' ? el.trim() : el);
                }
            }
        }

        next();
    }
}