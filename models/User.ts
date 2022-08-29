import { Schema, model, models } from 'mongoose';

export const UserSchema = new Schema({
  email: String,
  password: String,
});

export default models.User || model('User', UserSchema);
