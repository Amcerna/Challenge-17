import { Schema, Types, model, type Document } from 'mongoose';

interface IThought extends Document {
    thoughtText: string;
    username: string;
    reactions: IRreaction[];
    createdAt: Date;
    }

interface IRreaction extends Document {
    reactionId: Schema.Types.ObjectId;
    reactionBody: string;
    username: string;
    createdAt: Date;
}
const reactionSchema = new Schema<IRreaction>(
    {
        reactionId: { type: Schema.Types.ObjectId, default: new Types.ObjectId() },
        reactionBody: { type: String, required: true },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }
);


const thoughtSchema = new Schema<IThought>(
    {
        thoughtText: { type: String, required: true },
        username: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

export { Thought };