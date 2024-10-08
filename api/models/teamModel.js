import mongoose from "mongoose";

const { Schema } = mongoose;

const teamSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
});

const Team = mongoose.model('Team', teamSchema);

export default Team;