const router = require('express').Router();
const { github, linkedIn } = require("./secretKeys");

//passport authentication
//linkedin
router.get("/linkedIn", (req, res) => {
  const url = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${linkedIn.clientID}&redirect_uri=http://127.0.0.1:3000/linkedIn/callback&scope=r_liteprofile%20r_emailaddress`
  res.json({ redirect: url })
});
//github
router.get("/github", (req, res) => {
  const url = `https://github.com/login/oauth/authorize?client_id=${github.clientID}&scope=user:email&redirect_uri=http://127.0.0.1:3000/github/callback`
  res.json({ redirect: url });
});


module.exports = router;