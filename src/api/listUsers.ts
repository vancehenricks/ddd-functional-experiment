import express from 'express';
import { ListUsers, usersToListUsers } from '../service/usersToListUsers';

const router = express.Router();

router.get<{}, ListUsers>('/', async (_req, res) => {

  const users = await usersToListUsers();

  return res.json(users);
});

export default router;
