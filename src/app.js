const express = require('express');
const app = express();
const port = 3000;
const authRouter = require('./routers/authRouter');
const userPreferencesRouter = require('./routers/userPreferencesRouter');
const newsRouter = require('./routers/newsRouter');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.use("/preferences", userPreferencesRouter);
app.use("/news", newsRouter);
app.use(errorHandler);

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});



module.exports = app;