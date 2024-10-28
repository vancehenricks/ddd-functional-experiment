import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import listUsers from './listUsers';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/list-users', listUsers);

export default router;
