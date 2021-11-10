const router = require('express').Router();


router.get('/catalog', async (req, res) => {

    try {
        const data = await req.storage.getAll();

        res.send(data);

    } catch (err) {

        res.status(400).json({ message: err.message });
    }

})

router.post('/create', async (req, res) => {
    const body = req.body;

    try {
        await req.storage.create(body);
        res.status(201).end();

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

})

router.get('/catalog/details/:id', async (req, res) => {
    const carId = req.params.id;

    try {

        const data = await req.storage.getById(carId);

        res.json(data);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }

})

router.delete('/catalog/details/:id', async (req, res) => {
    await req.storage.deleteById(req.params.id);
})

module.exports = router;