const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

class AuthService {
    
    register = async(userName = undefined, email = undefined, password = undefined) => {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
        const userEntity = {
            userName: userName,
            email: email,
            password: hashedPassword
        }
        const user = await userRepository.create(userEntity);
        return user;
    };

    login = async(email, password) => {
        const user = userRepository.findByEmail(email);

        if(!user) {
            throw new Error("User not found");
        }

        const isSamePassword = await bcrypt.compare(password, user.password);

        if(!isSamePassword) {
            throw new Error("Invalid Password");
        }

        const token = jwt.sign({ email:user.email }, JWT_SECRET, { expiresIn:'1h' });

        return token;

    };

}


module.exports = new AuthService();