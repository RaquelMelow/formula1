import mongoose from 'mongoose';

const { Schema } = mongoose;

const gameTeamSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    pilots: [{
        type: Schema.Types.ObjectId,
        ref: 'Pilot',
        required: true
    }],
    constructors: [{
        type: Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    }]
}, {
    timestamps: true
});

const GameTeam = mongoose.model('GameTeam', gameTeamSchema);

export default GameTeam;
