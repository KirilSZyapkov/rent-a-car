const { model, Schema } = require('mongoose');

const schema = new Schema({
    carModel: { type: String, required: true, minlength: [4, 'The model should be at least 4 characters long and should consist only english letters and digits!'] },
    price: { type: Number, required: true },
    imgURL: { type: String, required: true, match: [/^https?:\/\//, 'Image link must start with http(s)://'] },
    numSeats: { type: Number, required: true, min: [1, 'Minimum number of free seats must be 1.'], max: [6, 'The maximum number of seats can be 6.'] },
    fuelType: { type: String, required: true },
    transmition: { type: String, required: true },
    luggage: { type: Number, required: true },
    _isFree: { type: String, default: true }
});

module.exports = model('Item', schema);