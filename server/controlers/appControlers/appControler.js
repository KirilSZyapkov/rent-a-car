const router = require('express').Router();


router.get('/catalog', async (req, res) => {

    try {
        const data = await req.storage.getAll();
        res.json(data);

    } catch (err) {
        data.error = err.message;
        res.json(data);
    }

})

router.post('/create', async (req, res) => {
    const body = req.body;
    const method = req.method;

    if (method === "POST") {

        try {
            await req.storage.create(body);
        } catch (err) {

        }
    }
})

router.get('/catalog/details/:id', async (req, res) => {
    const carId = req.params.id;
    const userId = req.user._id;

    try {

        const data = await req.storage.rent(carId, userId);
        res.json(data);

    } catch (err) {

    }

})

router.delete('/catalog/details/:id', async (req, res) => {
    await req.storage.deleteById(req.params.id);
})

module.exports = router;