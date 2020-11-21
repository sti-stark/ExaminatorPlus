/*----------EXPRESS----------------*/
const express = require('express');
const app = express();

/*----------MODEL & ROUTERS--------- */
require('./db_examinator/mongoose');
const testRouter = require('./routers/test');
const testModels = require('./model/test');

/*-----------PORT------------------ */
const port = process.env.PORT || 3000

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
app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/quiz', async (req, res) => {
    await testModels.find({}).then((data) => {
        res.render('quiz', { tests: data })
    });
});


/*------------API ROUTING------------- */
app.use('/api',testRouter);

/*------------ERROR-------------------*/
app.use((req,res)=>{
    res.status(404).render('404',{});
});




//require('dotenv').config()
/*app.get('/quiz', (req, res) => {
    res.render('quiz.ejs', testRouter);
});*/

//llamar al contenido de la base 




