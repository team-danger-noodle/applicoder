let cookiesObj = {}

cookiesObj.createCookies = (req, res, next) => {
  res.cookie('session', 'loggedIn');
  return next();
}

cookiesObj.checkCookies = (req, res, next) => {
  if (req.headers.cookies === undefined) {
    res.locals.verified = false;
    return next()
  }
  else {
    res.locals.verified = true
    return next();
  }
}

module.exports = cookiesObj