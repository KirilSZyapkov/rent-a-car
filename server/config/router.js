const router = require('express').Router();

const appControler = require('../controlers/appControlers/appControler');
const userControler = require('../controlers/userControler/userControler');

router.use('/', appControler);
router.use('/user', userControler);

module.exports = router;