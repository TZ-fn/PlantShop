import { Schema, model, models } from 'mongoose';

export const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: String,
  },
  { collection: 'users' },
);

export default models.User || model('User', UserSchema, 'users');
