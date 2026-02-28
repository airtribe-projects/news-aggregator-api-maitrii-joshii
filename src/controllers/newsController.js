const userPreferencesService = require('../services/userPreferencesService');
const NewsService = require('../services/newsService');
const { ForbiddenError } = require('../errors/authError');

const fetchTopHeadlines = async(req, res, next) => {
    try {
        const { preferenceId } = req.query;
        let userPreference;
        if(preferenceId) {
            userPreference = await userPreferencesService.retrieveUserPreference(preferenceId);
            if(userPreference.userId != req.user.id) {
                throw new ForbiddenError();
            }
        } else {
            userPreference = (await userPreferencesService.retrieveUserPreferences(req.user.id)).pop();
        }
        
        const newsService = new NewsService();
        const topHeadlines = await newsService.fetchTopHeadlines(userPreference.category, userPreference.country);
        return res.status(200).json({ news: topHeadlines });
    } catch(error) {
        next(error);
    }
}


module.exports = { fetchTopHeadlines };