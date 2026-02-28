const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const userRepository = require('../repositories/userRepository');
const { UnauthorizedError, TokenError } = require('../errors/authError');

const validateJWT = async(req, res, next) => {
    try {
        const headers = req.headers || {};
        const authHeader = headers.authorization;
        const token = authHeader?.split(' ')[1];

        if(!token) {
            throw new UnauthorizedError();
        }

        const decodedToken = jwt.verify(token, JWT_SECRET);

        if(!decodedToken) {
            throw new TokenError();
        }

        const user = userRepository.findByEmail(decodedToken.email);
        req.user = user;
        
        next();
    } catch(error) {
        next(error);
    }
}


module.exports = { validateJWT };