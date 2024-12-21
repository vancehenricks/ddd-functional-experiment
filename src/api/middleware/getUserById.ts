import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repository/user';
import { getUserById as getUserByIdService } from '../../service/user/getUserId';
import { GetUserQueryParam } from '../../interfaces/GetUserQueryParam';

export async function getUserById(req: Request<GetUserQueryParam>, res: Response, next: NextFunction) {
  const id = req.params.id;
  res.locals.user = await getUserByIdService(userRepository, id);
  next();
}