import express from 'express';
import { User } from '../domain/User';
import { validateUserId } from './middleware/validateUserId';
import { userExists } from './middleware/userExists';
import { getUserId } from './middleware/getUserId';
import { GetUser } from '../interfaces/GetUser';

const router = express.Router();

router.get<GetUser, User>('/:id', 
  validateUserId,
  getUserId,
  userExists, (_req, res) => {
    return res.json(res.locals.user);
  });

export default router;
