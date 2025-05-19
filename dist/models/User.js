import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });
const User = model('User', userSchema);
export { User };
