const router = require('express').Router();

router.post('/login', async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    try {

        const token = await req.auth.login(email, password);
        res.send(token);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/register', async (req, res) => {



    const userName = req.body.userName.trim();
    const email = req.body.email.trim();
    const password = req.body.password.trim();

    const rePass = req.body.rePass.trim();
    try {

        const token = await req.auth.register(userName, email, password, rePass);

        res.send(token);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});



module.exports = router;