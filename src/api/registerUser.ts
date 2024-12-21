import express from 'express';
import { validateNewUser } from './middleware/validateNewUser';
import { UserRegistration } from '../domain/UserRegistration';
import { addUser } from './middleware/addUser';
import { userExist } from './middleware/userExist';

const router = express.Router();

router.post<UserRegistration>('/', 
  validateNewUser(),
  addUser,
  userExist(),
  (_req, res) => {
    return res.json(res.locals.user);
  });

export default router;
