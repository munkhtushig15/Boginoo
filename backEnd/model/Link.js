import mongoose from 'mongoose';
import { type } from 'os';

const LinkSchema = new mongoose.Schema({
    url: {
        type: String,
    },
});

const Link = mongoose.model('Link', LinkSchema);

export default Link;