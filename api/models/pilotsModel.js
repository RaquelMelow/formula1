import mongoose from 'mongoose';
const { Schema } = mongoose;

const pilotSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    }
});

const Pilot = mongoose.model('Pilot', pilotSchema);

export default Pilot;
