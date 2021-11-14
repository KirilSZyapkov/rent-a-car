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
            rent,
            cancelBooking
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

    const car = await Model.findById(id).populate('rentedBy').lean();
    const owner = await User.findById(car._owner);
    const index = owner.myRecords.indexOf(car._id);
    owner.myRecords.splice(index, 1);
    await owner.save();

    await Model.findByIdAndDelete(id);
};

async function rent(carId, userId) {
    const car = await Model.findById(carId);
    const user = await User.findById(userId);

    car._isFree = !car._isFree;
    car.rentedBy.push(userId);
    user.bookedCars.push(carId);
    await car.save();
    await user.save();
    return car;
};

async function cancelBooking(carId, userId) {

    const car = await Model.findById(carId);
    const user = await User.findById(userId);
    const indexUser = user.bookedCars.indexOf(carId);
    const indexCar = car.rentedBy.indexOf(userId);
    car._isFree = true;
    
    user.bookedCars.splice(indexCar, 1);
    car.rentedBy.splice(indexUser, 1);

    await user.save();
    await car.save();

};

module.exports = init;