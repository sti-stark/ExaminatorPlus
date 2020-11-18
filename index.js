const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server on port 3000');
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/quiz',(req,res)=>{
    res.render('quiz.ejs');
});