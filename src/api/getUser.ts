import express from 'express';
import { User } from '../interfaces/User';
import { rowsToUser } from '../service/rowsToUser';
import { validateUserId } from '../validation/validateUserId';

const router = express.Router();

interface GetUser {
  id: number
}

router.get<GetUser, User>('/:id', validateUserId(), async (req, res) => {

  const id = req.params.id;

  const user = await rowsToUser(id);
  return res.json(user);
});

export default router;
