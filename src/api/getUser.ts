import express from 'express';
import { User } from '../domain/User';
import { validateUserId } from './middleware/validateUserId';
import { userExist } from './middleware/userExist';
import { getUserById } from './middleware/getUserById';
import { GetUserQueryParam } from '../interfaces/api/GetUserQueryParam';

const router = express.Router();

router.get<GetUserQueryParam, User>('/:id', 
  validateUserId(),
  getUserById,
  userExist(), (_req, res) => {
    return res.json(res.locals.user);
  });

export default router;
