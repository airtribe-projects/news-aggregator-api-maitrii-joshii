const userPreferencesService = require('../services/userPreferencesService');

const createUserPreferences = async(req, res, next) => {
    try {
        const {
            language,
            category,
            country
        } = req.body;
        const userPreference = await userPreferencesService.createUserPreferences(req.user.id, language, category, country);
        return res.status(200).json({ data: userPreference });
    } catch(error) {
        next(error);
    }
};

const retrieveUserPreferences = async(req, res, next) => {
    try {
        const userPreference = await userPreferencesService.retrieveUserPreferences(req.user.id);
        return res.status(200).json({ data: userPreference });
    } catch(error) {
        next(error);
    }
};

const updateUserPreferences = async(req, res, next) => {
    try {
        return res.status(200).json();
    } catch(error) {
        next(error);
    }
};


module.exports = { createUserPreferences, retrieveUserPreferences, updateUserPreferences };