import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const countries = [
    'Austria', 'Bahréin', 'Arabia Saudita', 'Australia', 'Japón', 'China',
    'Estados Unidos', 'Italia', 'Mónaco', 'Canadá', 'España',
    'Reino Unido', 'Hungría', 'Bélgica', 'Países Bajos', 'Alemania',
    'Azerbaiyán', 'Singapur', 'México', 'Brasil', 'Las Vegas',
    'Qatar', 'Emiratos Árabes Unidos'
];

const CircuitSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        enum: countries,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    laps: {
        type: Number,
        required: true
    }
});

const Circuit = mongoose.model('Circuit', CircuitSchema);

export default Circuit;
