const router = require('express').Router();


router.get('/catalog', async (req, res) => {

    try {
        const data = await req.storage.getAll();

        res.send(data);

    } catch (err) {

        res.status(400).json({ message: err.message });
    }

});

router.post('/create', async (req, res) => {
    const body = req.body;

    try {
        await req.storage.create(body);
        res.status(201).end();

    } catch (err) {
        res.status(400).json({ message: err.message });
    }

});

router.get('/catalog/details/:id', async (req, res) => {
    const carId = req.params.id;

    try {

        const data = await req.storage.getById(carId);

        res.status(200).json(data);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }

});

router.get('/catalog/edit/:id', async (req, res) => {
    const carId = req.params.id;
    try {

        const data = await req.storage.getById(carId);
        res.status(200).json(data);

    } catch (err) {
        res.status(404).json({ message: err.message });
    }

});

router.put('/catalog/edit/:id', async (req, res) => {
    const carId = req.params.id;
    const body = req.body;

    try {

        await req.storage.updateByID(body, carId);
        res.status(201).end();

    } catch (err) {
        res.status(404).json({ message: err.message });
    }

});

router.delete('/catalog/details/delete/:id', async (req, res) => {
    console.log(req.params.id);
    try {

        await req.storage.deleteById(req.params.id);
        res.status(201).end();

    } catch (err) {
        res.status(403).json({ message: err.message });
    }
});

router.put('/catalog/details/rent/:id', async (req, res) => {
    const carId = req.params.id;
    const userId = req.body.id;
    try {
        const car = await req.storage.rent(carId, userId);
        res.status(201).json(car).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/catalog/details/cancel/:id', async (req, res) => {
    const carId = req.params.id;
    const userId = req.body.id;
    try {
        const car = await req.storage.cancelBooking(carId, userId);
        res.status(201).json(car).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;