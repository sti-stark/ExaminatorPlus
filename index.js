/*----------EXPRESS----------------*/
const express = require('express');
const app = express();

/*----------MODEL & ROUTERS--------- */
require('./db_examinator/mongoose');
const testRouter = require('./routers/test');
const Test = require('./models/test');

/*-----------PORT------------------ */
const port = process.env.PORT

/*-----------APP LISTEN------------- */
app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
});

/*----------- EJS VIEW ENGINE------------ */
app.set('view engine', 'ejs');

/*------------MIDDLEWARE----------------- */
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host: ', req.hostname);
    console.log('path: ', req.path);
    console.log('method: ', req.method);
    next();
});

/*-----------RUTAS WEB-------------- */
app.get('/', async (req, res) => {
    try {
        const tests = await Test.find({})
        res.render('index.ejs', { title: 'Tests', tests: tests })
    } catch (error) {
        res.render('index.ejs', { title: 'Tests', tests: [] })
    }

});

app.get('/quiz', (req, res) => {
    res.render('quiz', { title: 'Form' })
});


/*------------API ROUTING------------- */
app.use('/api', testRouter);

/*------------ERROR-------------------*/
app.use((req, res) => {
    res.status(404).render('404', {});
});




//require('dotenv').config()
/*app.get('/quiz', (req, res) => {
    res.render('quiz.ejs', testRouter);
});*/

//llamar al contenido de la base 




