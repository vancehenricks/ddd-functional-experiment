import express from 'express';

import getUsers from './getUsers';
import getUser from './getUser';
import registerUser from './registerUser';
import { MessageResponse } from '../interfaces/util';

const router = express.Router();

router.get<{}, MessageResponse>('/', (_req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/users', getUsers);
router.use('/user', getUser);
router.use('/register', registerUser);

export default router;
