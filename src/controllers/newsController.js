const userPreferencesService = require('../services/userPreferencesService');
const NewsService = require('../services/newsService');

const fetchTopHeadlines = async(req, res, next) => {
    try {
        const userPreference = await userPreferencesService.retrieveUserPreferences(req.user.id);
        const newsService = new NewsService();
        const topHeadlines = await newsService.fetchTopHeadlines(userPreference.category, userPreference.country);
        return res.status(200).json({ data: topHeadlines });
    } catch(error) {
        next(error);
    }
}


module.exports = { fetchTopHeadlines };