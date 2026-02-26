const express = require('express');
const router = express.Router();
const { validateJWT } = require('../middlewares/authMiddleware');
const { createUserPreferences, retrieveUserPreferences, updateUserPreferences } = require('../controllers/userPreferencesController');

router.use(validateJWT);

router.post("", createUserPreferences);
router.get("", retrieveUserPreferences);
router.put("/:id", updateUserPreferences);


module.exports = router;