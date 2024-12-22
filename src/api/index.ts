import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import getUsers from './getUsers';
import getUser from './getUser';
import registerUser from './registerUser';

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
