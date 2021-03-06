const router = require('express').Router();
const { isGuest } = require('../../middlewares/guards');

router.post('/login', isGuest(), async (req, res) => {

    const email = req.body.email.trim();
    const password = req.body.password.trim();
    try {

        const token = await req.auth.login(email, password);
        res.send(token);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.post('/register', isGuest(), async (req, res) => {



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

router.get('/:id', async (req, res) => {

    const userID = req.params.id;
    try {
        const user = await req.auth.getUser(userID);
                
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});



module.exports = router;