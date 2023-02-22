import { Router} from 'express';
import {getUserByMetaData, signIn, signUp} from '../controllers/users'
export const router = Router();

router.get('/user-by-metadata', getUserByMetaData);
router.post('/signup', signUp);
router.post('/signin', signIn);


