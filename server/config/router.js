const router = require('express').Router();

const appControler = require('../controlers/appControlers/appControler');
const userControler = require('../controlers/userControler/userControler');
const profileControler = require('../controlers/profileControler/profileControler');

router.use('/', appControler);
router.use('/user', userControler);
router.use('/profile', profileControler);

module.exports = router;