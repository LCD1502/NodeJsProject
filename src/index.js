const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const route = require('./routes/index.js');
const db = require('./config/db/index')

// connect database
db.connect()

//middleWare
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// static file - cac file tinh se di vao thu muc public
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
// app.use(morgan('combined'))

// template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources', 'views'));

//routes init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
