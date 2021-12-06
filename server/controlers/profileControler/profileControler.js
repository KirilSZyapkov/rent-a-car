const router = require('express').Router();
const { isAuth, isOwner } = require('../../middlewares/guards');

router.get('/:id', async (req, res) => {
    const userID = req.params.id;
    try {
        const user = await req.auth.getUser(userID);
                
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

router.put('/add-social-media', isAuth(), async (req, res) => {
    const userID = req.body.id;
    const data = req.body.data;
    
    try {
        const user = await req.auth.updateUser(userID, data);
                
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
})

module.exports = router;