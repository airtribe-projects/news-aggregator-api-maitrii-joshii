const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const userRepository = require('../repositories/userRepository');

const validateJWT = async(req, res, next) => {
    const headers = req.headers || {};
    const authHeader = headers.authorization;
    const token = authHeader.split(' ')[1];

    if(!token) {
        return res.status(401).json({ message: 'User is not authenticated' });
    }

    const decodedToken = jwt.verify(token, JWT_SECRET);

    if(!decodedToken) {
        return res.status(401).json({ data: 'Invalid user' });
    }

    const user = userRepository.findByEmail(decodedToken.email);
    req.user = user;

    next();
}


module.exports = { validateJWT };