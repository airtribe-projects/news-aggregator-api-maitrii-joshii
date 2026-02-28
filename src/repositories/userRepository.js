const InMemoryRepository = require('./inMemoryRepository');

class UserRepository extends InMemoryRepository {
    constructor() {
        super();
    }

    findByEmail = (email) => {
        for(const [id, user] of this.storage) {
            if(user.email == email) {
                return user;
            }
        }
        return null;
    }
    
}


module.exports = new UserRepository();
