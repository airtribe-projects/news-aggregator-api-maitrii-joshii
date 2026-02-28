const userPreferencesRepository = require('../repositories/userPreferencesRepository');

class userPreferencesService {
    createUserPreferences = async(userId, category, country) => {
        const userPreferenceEntity = {
            userId: userId,
            category: category,
            country: country
        }
        const userPreference = await userPreferencesRepository.create(userPreferenceEntity);
        return userPreference;
    };

    retrieveUserPreferences = async(userId) => {
        const userPreference = await userPreferencesRepository.findByUserId(userId);
        return userPreference;
    };

    retrieveUserPreference = async(preferenceId) => {
        const userPreference = await userPreferencesRepository.getById(Number(preferenceId));
        return userPreference;
    }

    updateUserPreferences = async(userId, category, country) => {
        const userPreference = await userPreferencesRepository.update(Number(userId), { category:category, country:country });
        return userPreference;
    };

}


module.exports = new userPreferencesService();