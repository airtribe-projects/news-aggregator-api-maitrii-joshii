const express = require('express');
const router = express.Router();
const { validateJWT } = require('../middlewares/authMiddleware');
const { createUserPreferences, retrieveUserPreferences, updateUserPreferences } = require('../controllers/userPreferencesController');
const { userPreferencesSchema } = require('../schemas/userPreferencesSchema');
const { validateRequest } = require('../middlewares/validateRequest');

router.use(validateJWT);

router.post("", validateRequest(userPreferencesSchema), createUserPreferences);
router.get("", retrieveUserPreferences);
router.put("/:id", validateRequest(userPreferencesSchema), updateUserPreferences);


module.exports = router;