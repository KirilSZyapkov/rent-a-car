const { Schema, model } = require("mongoose");

const schema = new Schema({
    userName: { type: String, required: true, minlength: [4, 'The username should be at least 4 characters long and should consist only english letters and digits!'] },
    email: { type: String, required: true, match: /^[a-zA-Z0-9]*@[a-z]*\.[a-z]{2,3}$/ },
    hashPassword: { type: String, required: true },
    bookedCars: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    myRecords: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    mySocialData:[]
});

module.exports = model('User', schema);