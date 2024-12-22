import express from 'express';
import { validateNewUser } from './middleware/validateNewUser';
import { addUser } from './middleware/addUser';
import { userExist } from './middleware/userExist';
import { UserRegistrationUnHashed } from '../interfaces/UserRegistrationUnHashed';

const router = express.Router();

router.post<UserRegistrationUnHashed>('/', 
  validateNewUser(),
  addUser,
  userExist(),
  (_req, res) => {
    return res.json(res.locals.user);
  });

export default router;
