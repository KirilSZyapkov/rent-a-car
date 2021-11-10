const Model = require('../model/Item');
const User = require('../model/User');

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

async function create(data) {
    if (data.carModel === '' || data.price === '' || data.imgURL === '' || data.numSeats === '' || data.fuelType === '' || data.transmition === '' || data.luggage === '') {
        throw new Error('All fields are required!');
    };

    const car = new Model({
        _owner: data.userId,
        carModel: data.carModel,
        price: data.price,
        imgURL: data.imgURL,
        numSeats: data.numberseats,
        fuelType: data.fuelType,
        transmition: data.transmitiontype,
        luggage: data.luggage,
        description: data.description
    });

    const user = await User.findById(data.userId);
    await car.save();
    user.myRecords.push(car._id);
    await user.save();
    
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