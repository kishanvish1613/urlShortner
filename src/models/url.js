import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visiHistory: [
        {
            timestamps:{
                type: Date,
                default: Date.now
            }
        }
    ]

},{timestamps: true});


const URL = mongoose.model('URL', urlSchema);

export default URL;