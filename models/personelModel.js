const mongoose = require('mongoose');

const personelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true    
    },
    role: {
        type: String,
        required: true,
    }
});

const Personel = mongoose.model('Personel', personelSchema);

module.exports = Personel;