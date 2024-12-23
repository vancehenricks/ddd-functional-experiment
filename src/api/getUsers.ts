import express from 'express';
import { Request, Response } from 'express';
import { User } from '../domain/user';
import { getUsers } from './middleware/getUsers';

const router = express.Router();

router.get<{}, Array<User>>('/', 
  getUsers, (_req: Request, res : Response) => {
    return res.json(res.locals.users);
  });

export default router;
