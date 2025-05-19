import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    thoughts: Schema.Types.ObjectId[];
    friends: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

const User = model('User', userSchema);

export { User } ;
