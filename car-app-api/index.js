const express = require('express');
import {companies} from './data'
import Server from './apolloServer';

const app = express();
app.use(express.json());      
app.use(express.urlencoded()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const port = 4200;
// PRODUCT ROUTE
app.get('/cars', async (req, res) => {
    res.json(companies.map((r, i) => ({...r, id: i+1})));
});


Server.applyMiddleware({app});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))