const authService = require('../services/authService');

const register = async(req, res, next) => {
    try {
        const {
            userName,
            email,
            password
        } = req.body;
        const user = await authService.register(userName, email, password);
        return res.status(200).json({ data: user });
    } catch(error) {
        next(error);
    }
};

const login = async(req, res, next) => {
    try {
        const {
            email,
            password
        } = req.body;
        const token = await authService.login(email, password);
        return res.status(200).json({ data: token });
    } catch(error) {
        next(error);
    }
};


module.exports = { register, login };