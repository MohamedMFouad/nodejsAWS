'use strict'
const express = require('express');
const mid =  require('./middleware')
 
let app = express();

app.use(mid('mohamed'));
app.get('/hello',(req, res)=>{
    res.send(`hello ${req.user.name}`)
});
app.listen(3000);