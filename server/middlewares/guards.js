const Model = require('../model/Item');

module.exports = {
    isAuth() {
        return (req, res, next) => {
            if (!req.user) {
                res.status(401).json({ message: 'Please sigh in.' });
            } else {
                next();
            }
        }
    },

    isGuest() {
        return (req, res, next) => {
            if (req.user) {
                res.status(400).json({ message: 'You are already signed in.' });
            } else {
                next();
            }
        }
    },

    isOwner() {
        return async (req, res, next) => {
            const carId = req.params._id;
            const car = await Model.findById(carId).lean();

            if (car._owner === req.user._id) {
                next();
            } else {
                res.status(403).json({ message: 'You are not the owner of this record!' });
            }
        }
    }
}