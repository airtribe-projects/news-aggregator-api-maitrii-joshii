const axios = require('axios');
const NEWS_API_KEY = process.env.NEWS_API_KEY;

class NewsService {
    constructor() {
        this.baseURL = 'https://newsapi.org/v2';
        this.apiKey = NEWS_API_KEY;
    }

    fetchTopHeadlines = async(category, country) => {
        try {
            const endpoint = `${this.baseURL}/top-headlines`;
            const requestParams = {
                category: category,
                country: country,
                apiKey: this.apiKey
            }
            const response = await axios.get(endpoint, {
                params: requestParams
            });

            if(response.data.status == 'ok') {
                return response.data.articles;
            } else {
                throw new Error(response.data.message);
            }

        } catch(error) {
            next(error);
        }
    }
}


module.exports = NewsService;