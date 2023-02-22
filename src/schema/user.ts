import { model, Schema } from 'mongoose';
import {User_Schema} from '../interface/user';
import {enCrypt} from '../utils/crypto'
const UserSchema: Schema = new Schema<User_Schema>({
    email: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    password:{ type: String, required: true,set: (pass:string) => enCrypt(pass) },
    user_name:{ type: String}
});

export default model('User', UserSchema);

