const newsRouter = require('./news')
const siteRouter = require('./site')

function route(app) {

    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })

    app.use('/news', newsRouter)

    app.use('/', newsRouter)


   
}

module.exports = route;
