const router = require('express').Router();


router.get('/catalog', async (req, res) => {

    try {
        const data = await req.storage.getAll();
        console.log(data);
        res.send(data);

    } catch (err) {

        res.status(400).json({ message: err.message });
    }

})

router.post('/create', async (req, res) => {
    const body = req.body;

    try {
        await req.storage.create(body);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }

})

router.get('/catalog/details/:id', async (req, res) => {
    const carId = req.params.id;
    const userId = req.user._id;

    try {

        const data = await req.storage.rent(carId, userId);
        res.json(data);

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

})

router.delete('/catalog/details/:id', async (req, res) => {
    await req.storage.deleteById(req.params.id);
})

module.exports = router;