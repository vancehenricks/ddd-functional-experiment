import express from 'express';
import { User } from '../interfaces/User';
import { rowsToUser } from '../service/rowsToUser';

const router = express.Router();

interface GetUser {
  id: number
}

router.get<GetUser, User>('/:id', async (req, res) => {

  const id = req.params.id;

  const users = await rowsToUser(id);
  return res.json(users);
});

export default router;
