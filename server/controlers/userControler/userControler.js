const router = require('express').Router();

router.post('/login', async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;

    const token = await req.auth.login(email, password);
    res.send(token);
});

router.post('/register', async (req, res) => {
    
    const userName = req.body.userName
    const email = req.body.email;
    const password = req.body.password;
    const rePass = req.body.rePass;

    const token = await req.auth.register(userName, email, password, rePass);
    
    res.json(token);
})

module.exports = router;