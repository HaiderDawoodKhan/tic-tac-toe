import mongoose from "mongoose";

const GameUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gamesWon: {
        type: Number,
        default: 0
    }
});

export const GameUser = mongoose.model("GameUser", GameUserSchema);