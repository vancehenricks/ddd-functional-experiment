import express from 'express';
import { validateNewUser } from './middleware/validateNewUser';
import { UserRegistration } from '../domain/UserRegistration';

const router = express.Router();

const NO_RETURN = 204;

router.post<UserRegistration>('/', validateNewUser(), (_req, res) => {
  return res.status(NO_RETURN);
});

export default router;
