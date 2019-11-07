let cookiesObj = {}
cookiesObj.createCookies = (req, res, next) => {
  res.cookie('session', 'loggedIn');
  return next();
}
cookiesObj.checkCookies = (req, res, next) => {
  if (req.cookies.session === 'loggedIn') {
    return next();
  } else {
    res.redirect('/login')
  }
}

module.exports = cookiesObj