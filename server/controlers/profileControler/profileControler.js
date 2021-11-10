const router = require('express').Router();

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