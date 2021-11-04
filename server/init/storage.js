const Model = require('../model/Item');

function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create,
            updateByID,
            deleteById,
            rent
        }
        next();
    }
}

async function getAll() {
    return await Model.find({}).lean();
};

async function getById(id) {
    return await Model.findById(id).populate('rentedBy').lean();
};

async function create(data, id) {
    if (data.carModel === '' || data.price === '' || data.imgURL === '' || data.numSeats === '' || data.fuelType === '' || data.transmition === '' || data.luggage === '') {
        throw new Error('All fields are required!');
    };

    const car = new Model({
        owner: id,
        carModel: data.carModel,
        price: data.price,
        imgURL: data.imgURL,
        numSeats: data.numSeats,
        fuelType: data.fuelType,
        transmition: data.transmition,
        luggage: data.luggage
    });

    await car.save();
};

async function updateByID(data, id) {
    if (data.carModel === '' || data.price === '' || data.imgURL === '' || data.numSeats === '' || data.fuelType === '' || data.transmition === '' || data.luggage === '') {
        throw new Error('All fields are required!');
    };

    const car = Model.findById(id);
    await car.updateOne(data);

};

async function deleteById(id) {
    await Model.findByIdAndDelete(id);
};

async function rent(carId, userId) {
    const car = Model.findById(carId);
    car._isFree = fals;
    car.rentedBy.push(userId);

    await car.save();
    return car;
};

module.exports = init;