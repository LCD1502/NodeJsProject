const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me')

function route(app) {
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })

    app.use('/news', newsRouter);

    app.use('/me', meRouter)

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
