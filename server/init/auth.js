const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET_KEY, COOKIE_NAME } = require('../init/init');

module.exports = () => (req, res, next) => {

    if (readToken(req, res)) {
        req.auth = {

            async login(userName, password) {
                const token = await login(userName, password);
                res.cookie(COOKIE_NAME, token);
            },

            async register(userName, email, password, rePass) {
                const token = await register(userName, email, password, rePass);
                res.cookie(COOKIE_NAME, token);
            },

            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        }
        next();
    }

};

async function login(userName, password) {

    if (userName === '' || password === '') {
        throw new Error('All inputs are required!');
    }
    const user = await User.findOne({ userName: UserName }).lean();

    if (user) {
        const itMatch = await bcrypt.compare(password, user.hashPassword);
        if (itMatch) {
            return createToken(user);
        } else {
            throw new Error('Invalid password!');
        }
    } else {
        throw new Error('Wrong user name!');
    }
};

async function register(userName, email, password, rePass) {
    if (userName === '' || password === '' || email === '') {
        throw new Error('All inputs are required!');
    };

    if (password !== rePass) {
        throw new Error('Passwords don`t match!');
    };

    const exist = await User.findOne({ userName: userName }).lean();

    if (exist) {
        throw new Error('User name is taken!');
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await new User({ userName, email, hashPassword });
    await user.save();

    return createToken(user);
};

function createToken(uSer) {

    const sesionToken = {
        _id: uSer._id,
        name: uSer.userName,
        email: uSer.email
    };

    return jwt.sign(sesionToken, SECRET_KEY);

};

function readToken(req, res) {

    const token = req.cookies[COOKIE_NAME];

    if (toke) {
        try {
            const data = jwt.verify(token, SECRET_KEY);

        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            return false;
        }
    }
    return true;
};