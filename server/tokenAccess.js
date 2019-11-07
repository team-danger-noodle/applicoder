const { facebook, github, linkedIn } = require("./Routes/secretKeys");
const axios = require('axios')
let tokenObj = {}
tokenObj.githubRequestToken = (req, res, next) => {
  if (req.query.code) {
    axios({
      method: 'post',
      url: `https://github.com/login/oauth/access_token?client_id=${github.clientID}&client_secret=${github.clientSecret}&code=${req.query.code}`,
      // Set the content type header, so that we get the response in JSOn
      headers: {
        accept: 'application/json'
      }
    }).then((response) => {
      const accessToken = response.data.access_token
      if (accessToken) {
        axios('https://api.github.com/user', { headers: { 'Authorization': 'token ' + accessToken } })
          .then((response) => {
            if (response.data.email === null) {
              res.locals.login = response.data.login
              return next();
            } else if (response.data.email !== null) {
              res.locals.login = response.data.email
              return next();
            }
          }).catch(console.error)
      }
    })
  }
}
tokenObj.linkedInRequestToken = (req, res, next) => {
  console.log(req.query.code)
  axios({
    method: 'post',
    url: `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://127.0.0.1:3000/linkedIn/callback&client_id=${linkedIn.clientID}&client_secret=${linkedIn.clientSecret}`,
    headers: {
      accept: 'application/json'
    }
    // Set the content type header, so that we get the response in JSOn
  }).then(response => {
    console.log(response.data.access_token);
    accessToken = response.data.access_token;
    axios('https://api.linkedin.com/v2/clientAwareMemberHandles?q=members&projection=(elements*(primary,type,handle~))', { headers: { 'Authorization': 'Bearer ' + accessToken } })
      .then((response) => {
        console.log(response.data.elements[0]['handle~'].emailAddress);
        email = response.data.elements[0]['handle~'].emailAddress
        res.locals.login = email;
        return next();
      }).catch(console.error)
  }).catch(console.error)
}
module.exports = tokenObj;