import { model, Schema } from 'mongoose';
import {User_Schema} from '../interface/user';

const UserSchema: Schema = new Schema<User_Schema>({
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password:{ type: String, required: true },
    user_name:{ type: String}
});

export default model('User', UserSchema);

