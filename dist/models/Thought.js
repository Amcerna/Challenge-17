import { Schema, Types, model } from 'mongoose';
const reactionSchema = new Schema({
    reactionId: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
    reactionBody: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});
const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    reactions: [reactionSchema]
}, {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
});
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
export { Thought };
