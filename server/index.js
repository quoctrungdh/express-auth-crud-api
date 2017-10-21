const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { checkAuthentication } = require('./auth.js');

const index = require('./routers/');
const register = require('./routers/register.js');
const login = require('./routers/login.js');
const list = require('./routers/list.js');

const app = express();
const port = process.env.PORT || 8080;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', index);
app.use('/register', register);
app.use('/login', login);

app.use(checkAuthentication);

app.use('/list', list);

app.listen(port);
