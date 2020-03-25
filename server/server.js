require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRouter = require('./Routes/Authentication');
const tokenAccess = require('./tokenAccess');
const cookies = require('./CookiesAndVerification/cookies');
const mongoose = require('mongoose');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');

const PORT = 3000;

const userController = require('../model/userController');

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@applicoder-y9btr.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

let accessinfo = '';
let linkedInAccessToken = '';

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', cookies.checkCookies, (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.use('/auth', authRouter);

//oauth callbacks
app.get("/github/callback", tokenAccess.githubRequestToken, cookies.createCookies, userController.createUser, (req, res) => {
  accessinfo = res.locals.login;
  res.redirect('/')
});

app.get('/cookieCheck', cookies.checkCookies, (req, res) => {
  res.status(200).send(res.locals.verified);
})

app.get("/linkedIn/callback", tokenAccess.linkedInRequestToken, cookies.createCookies, userController.createUser, (req, res) => {
  accessinfo = res.locals.login;
  res.redirect('/');
});

//userinformation endpoint
app.get('/getUserInfo', (req, res) => {
  res.json(accessinfo);
});

//get request to signup page
app.get('/login', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../login.html'));
});

//login user
app.post('/login', userController.createUser, (req, res) => {
  res.status(200).redirect('/');
});

//get favorites for user
app.get('/favorites', userController.getFavorites, (req, res) => {
  res.status(200).send(JSON.stringify(res.locals.results));
});

//add a favorite to user
app.post(
  '/favorites',
  userController.addFavorite,
  userController.getFavorites,
  (req, res) => {
    res.status(200).send(JSON.stringify(res.locals.results));
  }
);

// query api
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

// global route handler
app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
