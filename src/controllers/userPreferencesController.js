const userPreferencesService = require('../services/userPreferencesService');
const { ForbiddenError } = require('../errors/authError');

const createUserPreferences = async(req, res, next) => {
    try {
        const {
            category,
            country
        } = req.body;
        const userPreference = await userPreferencesService.createUserPreferences(req.user.id, category, country);
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
        const {
            category,
            country
        } = req.body;
        const userPreference = await userPreferencesService.retrieveUserPreference(req.params.id);
        if(userPreference.userId != req.user.id) {
            throw new ForbiddenError();
        }
        await userPreferencesService.updateUserPreferences(req.params.id, category, country);
        return res.status(204).json();
    } catch(error) {
        next(error);
    }
};


module.exports = { createUserPreferences, retrieveUserPreferences, updateUserPreferences };