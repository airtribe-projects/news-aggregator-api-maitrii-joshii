const authService = require('../services/authService');

const register = async(req, res, next) => {
    try {
        const {
            name,
            email,
            password
        } = req.body;
        const user = await authService.register(name, email, password);
        return res.status(200).json({ user: user });
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
        return res.status(200).json({ token: token });
    } catch(error) {
        next(error);
    }
};


module.exports = { register, login };