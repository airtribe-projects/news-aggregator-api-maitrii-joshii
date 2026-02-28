const validateRequest = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    if(!result.success) {
        return res.status(400).json({
            message: "Invalid Request Parameters",
            errors: result.error.issues
        });
    } else {
        next();
    }
}


module.exports = { validateRequest };