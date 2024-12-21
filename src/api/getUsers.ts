import express from 'express';
import { User } from '../domain/User';
import { getUsers } from '../service/user/getUsers';
import { userRepository } from '../repository/user';

const router = express.Router();

router.get<{}, Array<User>>('/', async (_req, res) => {

  const users = await getUsers(userRepository);

  return res.json(users);
});

export default router;
