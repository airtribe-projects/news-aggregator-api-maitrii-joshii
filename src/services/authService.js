const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;
const jwt = require('jsonwebtoken');
const { LoginError, DuplicateUserError } = require('../errors/authError');
const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    
    register = async(name = undefined, email = undefined, password = undefined) => {
        const existingUser = userRepository.findByEmail(email);
        if(existingUser) {
            throw new DuplicateUserError();
        }

        const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
        const userEntity = {
            name: name,
            email: email,
            password: hashedPassword
        }
        const user = await userRepository.create(userEntity);
        return user;
    };

    login = async(email, password) => {
        const user = userRepository.findByEmail(email);

        if(!user) {
            throw new LoginError();
        }

        const isSamePassword = await bcrypt.compare(password, user.password);

        if(!isSamePassword) {
            throw new LoginError();
        }

        const token = jwt.sign({ email:user.email }, JWT_SECRET, { expiresIn:'1h' });

        return token;

    };

}


module.exports = new AuthService();