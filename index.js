const express = require('express');
const app = express();
require('./db_examinator/mongoose');
const port = process.env.PORT || 3000


app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
  });


  app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/quiz',(req,res)=>{
    res.render('quiz.ejs');
});

