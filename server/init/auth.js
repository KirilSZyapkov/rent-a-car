const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET_KEY, COOKIE_NAME } = require('../init/init');

module.exports = () => (req, res, next) => {

    req.auth = {

        login,
        register,
        getUser,
        updateUser,
        logout() {
            res.clearCookie(COOKIE_NAME);
        }
    }

    next();

};

async function login(email, password) {

    if (email === '' || password === '') {
        throw new Error('All inputs are required!');
    }
    const user = await User.findOne({ email: email }).lean();

    if (user) {
        const itMatch = await bcrypt.compare(password, user.hashPassword);
        if (itMatch) {

            const token = {
                _id: user._id,
                accessToken: createToken(user),
                userName: user.userName
            };

            return token;
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

    const token = {
        _id: user._id,
        accessToken: createToken(user),
        userName: user.userName
    };

    return token;
};

async function getUser(id) {
    const user = await User.findById(id).populate('myRecords').populate('bookedCars').lean();
    return user;
};

async function updateUser(id, data) {
    const user = await User.findById(id).populate('myRecords').populate('bookedCars');
    const newData = Object.keys(data);

    for (let b = 0; b < newData.length; b++) {
        let body = {}
        const name = newData[b];
        if (data[name] !== "") {
            body = {
                [name]: data[name]
            }

        }
        user.mySocialData[b] = body;
    }

    console.log(user.mySocialData)
    await user.save();
    return user;
};

function createToken(uSer) {

    const sesionToken = {
        _id: uSer._id,
        name: uSer.userName,
        email: uSer.email
    };

    const token = jwt.sign(sesionToken, SECRET_KEY);

    return token;
};

// function readToken(req, res) {

//     const token = req.cookies[COOKIE_NAME];

//     if (token) {
//         try {
//             const data = jwt.verify(token, SECRET_KEY);
//             req.user = data;

//         } catch (err) {
//             res.clearCookie(COOKIE_NAME);
//             return false;
//         }
//     }
//     return true;
// };