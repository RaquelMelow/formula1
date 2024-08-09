import mongoose from 'mongoose';
const { Schema } = mongoose;
import { countries } from '../constants/pilotsConstants.js';

const pilotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    country: {
        type: String,
        enum: countries,
        required: true
    }
});

const Pilot = mongoose.model('Pilot', pilotSchema);

export default Pilot;
