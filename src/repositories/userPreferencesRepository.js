const InMemoryRepository = require('./inMemoryRepository');

class UserPreferencesRepository extends InMemoryRepository {
    constructor() {
        super();
    }

    findByUserId = (userId) => {
        for(const [id, userPreference] of this.storage) {
            if(userPreference.userId == userId) {
                return userPreference;
            }
        }
        return null;
    }
}


module.exports = new UserPreferencesRepository();