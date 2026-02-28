const InMemoryRepository = require('./inMemoryRepository');

class UserPreferencesRepository extends InMemoryRepository {
    constructor() {
        super();
    }

    findByUserId = (userId) => {
        const userPreferences = [];
        for(const [id, userPreference] of this.storage) {
            if(userPreference.userId == userId) {
                userPreferences.push(userPreference);
            }
        }
        return userPreferences;
    }
}


module.exports = new UserPreferencesRepository();