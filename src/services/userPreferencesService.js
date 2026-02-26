const userPreferencesRepository = require('../repositories/userPreferencesRepository');

class userPreferencesService {
    createUserPreferences = async(userId, language, category, country) => {
        const userPreferenceEntity = {
            userId: userId,
            language: language,
            category: category,
            country: country
        }
        const userPreference = await userPreferencesRepository.create(userPreferenceEntity);
        return userPreference;
    }

    retrieveUserPreferences = async(userId) => {
        const userPreference = await userPreferencesRepository.findByUserId(userId);
        return userPreference;
    }
}


module.exports = new userPreferencesService();