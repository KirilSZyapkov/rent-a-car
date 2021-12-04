const jwt = require('jsonwebtoken');


module.exports = (SECRET_KEY) => (req, res, next) => {
    const token = req.headers['x-authorization'];

    try {

        if (token) {

            const userData = jwt.verify(token, SECRET_KEY);
            req.user = userData;
        }
        next();
    } catch (err) {

        res.status(401).json({ message: 'Invalid access token!' });
    }

}