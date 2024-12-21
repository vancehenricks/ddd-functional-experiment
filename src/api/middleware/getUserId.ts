import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repository/user';
import { getUserById } from '../../service/user/getUserId';
import { GetUser } from '../../interfaces/GetUser';

export function getUserId() {
  return async (req: Request<GetUser>, res: Response, next: NextFunction) => {
    const id = req.params.id;
    res.locals.user = await getUserById(userRepository, id);
    next();
  };
}