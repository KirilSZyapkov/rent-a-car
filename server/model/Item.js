const { model, Schema } = require('mongoose');

const schema = new Schema({
    _owner: { type: String, required: true },
    carModel: { type: String, required: true, minlength: [4, 'The model should be at least 4 characters long and should consist only english letters and digits!'] },
    price: { type: Number, required: true },
    imgURL: { type: String, required: true, match: [/^https?:\/\//, 'Image link must start with http(s)://'] },
    numSeats: { type: Number, required: true, min: [1, 'Minimum number of free seats must be 1.'], max: [6, 'The maximum number of seats can be 6.'] },
    fuelType: { type: String, required: true },
    transmition: { type: String, required: true },
    luggage: { type: Number, required: true },
    description: { type: Number, required: true, maxlength: [37, 'The description can be maximum 37 charecters.'] },
    _isFree: { type: String, default: true },
    rentedBy: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = model('Item', schema);