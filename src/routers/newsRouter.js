const express = require('express');
const router = express.Router();
const { validateJWT } = require('../middlewares/authMiddleware');
const { fetchTopHeadlines } = require('../controllers/newsController');

router.use(validateJWT);

router.get("", fetchTopHeadlines);


module.exports = router;