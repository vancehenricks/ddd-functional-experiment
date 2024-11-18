import express from 'express';
import { User } from '../interfaces/User';
import { rowsToUsers } from '../service/rowsToUsers';

const router = express.Router();

router.get<{}, Array<User>>('/', async (_req, res) => {

  const users = await rowsToUsers();

  return res.json(users);
});

export default router;
