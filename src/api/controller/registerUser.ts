import express from 'express';
import { UserRegistrationUnHashed } from '../../interfaces/api';
import { userExist } from '../middleware/userExist';
import { addUser } from '../middleware/addUser';
import { validateNewUser } from '../middleware/validateNewUser';

const router = express.Router();

router.post<UserRegistrationUnHashed>('/', 
  validateNewUser(),
  addUser,
  userExist(),
  (_req, res) => {
    return res.json(res.locals.user);
  });

export default router;
