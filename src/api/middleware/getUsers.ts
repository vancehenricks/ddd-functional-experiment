import { userRepository } from '../../repository/user';
import { getUsers as getUsersByService } from '../../service/user/getUsers';
import { Request, Response, NextFunction } from 'express';

export async function getUsers(_req: Request, res: Response, next: NextFunction) {
  res.locals.users = await getUsersByService(userRepository);
  next();
}