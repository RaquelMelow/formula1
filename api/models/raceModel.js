import mongoose from 'mongoose';

const raceResultSchema = new mongoose.Schema({
    pilot: { type: mongoose.Schema.Types.ObjectId, ref: 'Pilot', required: true },
    position: Number,
    finishTime: Date,
    lapsCompleted: Number,
});

const raceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: Date,
    circuit: { type: mongoose.Schema.Types.ObjectId, ref: 'Circuit', required: true },
    results: [{ type: raceResultSchema }],
    status: {
        type: String,
        enum: ['draft', 'published', 'completed'],
        default: 'draft'
    },
    resultsUpdatedAt: Date 
});

const Race = mongoose.model('Race', raceSchema);

export default Race;
