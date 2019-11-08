const User = require('./userModel');

const userController = {};

userController.getAllUsers = (next) => {
    User.find({}, next);
};

//creates user
userController.createUser = (req, res, next) => {
    console.log(res.locals.login)
    User.find({ username: res.locals.login }, (error, result) => {
        if (error) throw error;
        if (!result[0]) {
            User.create({ username: res.locals.login }, (error, user) => {
                if (error) {
                    res.redirect('/login', { error });
                } else {
                    return next();
                }
            });
        }
    })
    return next();
};

//adds favorite
userController.addFavorite = (req, res, next) => {
    User.find({ username: req.body.username }, (error, result) => {
        if (error) throw error
        //if favorite is already in list, remove it
        if (result[0].favorites.length >= 1) {
            for (let i = 0; i < result[0].favorites.length; i++) {
                if (req.body.favorites.jobID === result[0].favorites[i].jobID) {
                    return User.updateOne({ username: req.body.username }, { $pullAll: { favorites: [result[0].favorites[i]] } }, (error, results) => {
                        if (error) throw error
                        else {
                            return next();
                        }
                    })
                } else if (req.body.favorites.jobID !== result[0].favorites[i].jobID && i === result[0].favorites.length - 1) {
                    return User.updateOne({ username: req.body.username }, { $push: { favorites: req.body.favorites } }, (error, results) => {
                        if (error) throw error
                        else {
                            return next();
                        }
                    })
                }
            }
        } else {
            User.updateOne({ username: req.body.username }, { $push: { favorites: req.body.favorites } }, (error, results) => {
                if (error) throw error
                else {
                    return next();
                }
            })
        }
    })
}


//gets favorites
userController.getFavorites = (req, res, next) => {
    // console.log('hi', req.body)
    User.find({ username: req.body.username }, (error, results) => {
        if (error) throw error
        else {
            console.log(results[0].favorites)
            res.locals.results = results[0].favorites;
            return next();
        }
    })
}

module.exports = userController;