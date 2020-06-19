const express = require('express');
const path = require('path')
const app = express();
const port = 7999;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/',express.static(path.join(__dirname,'public')));
app.use('/api',require('./routes/api').route);

app.listen(port,() => {
    console.log(`Server Running On Port ${port}`)
});