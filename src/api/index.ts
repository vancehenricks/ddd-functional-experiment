import express from 'express';

import getUsers from './controller/getUsers';
import getUser from './controller/getUser';
import registerUser from './controller/registerUser';
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
