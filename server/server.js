const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = 3000;
const authRouter = require("./Routes/Authentication")
const tokenAccess = require("./tokenAccess")
const cors = require("cors");

let accessinfo = '';

app.use(bodyParser.json());
app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});
app.use('/auth', authRouter);

//oauth callbacks
app.get("/github/callback", tokenAccess.githubRequestToken, (req, res) => {
  accessinfo = res.locals.login;
  console.log(accessinfo)
  res.redirect('/')
});


app.get("/linkedIn/callback", tokenAccess.linkedInRequestToken, (req, res) => {
  accessinfo = res.locals.login;
  res.redirect('/');
});

//userinformation endpoint
app.get('/getUserInfo', (req, res) => {
  res.json(accessinfo);
})
// global route handler

app.use('*', (req, res) => {
  res.status(404).send('Route not found');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
