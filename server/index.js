const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const index = require('./routers/');
const login = require('./routers/login.js');

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/login', login);

app.listen(port);
