const User = require('./userModel');

const userController = {};

userController.getAllUsers = (next) => {
    User.find({}, next);
};

//creates user
userController.createUser = (req, res, next) => {
    User.create({username: req.body.username, favorites: req.body.favorites}, (error, user) => {
        if (error) { 
        res.render('./../client/signup', {error});
        } else {
        res.locals.id = user._id;
        return next();
        }
    });
}; 

//adds favorite
userController.addFavorite = (req, res, next) => {
    User.find( { username: req.body.username }, (error, result) => {
        if(error) throw error
        //if favorite is already in list, remove it
        else if(result[0].favorites.includes(req.body.favorites)) {
            User.updateOne( { username: req.body.username}, { $pullAll: { favorites: req.body.favorites } }, (error, results) => {
                if (error) throw error
                else {
                    return next();
                }
            })
            //else, add it to the user's favorites
        } else {
            User.updateOne({username: req.body.username}, { $push: { favorites: req.body.favorites }}, (error, results) => {
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
    User.find({ username: req.body.username}, (error, results) => {
        if (error) throw error
        else {
            res.locals.results = results[0].favorites
            return next();
        }
    })
}

module.exports = userController;