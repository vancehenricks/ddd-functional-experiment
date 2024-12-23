import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repository/user';
import { getUserById as getUserByIdService } from '../../service/user/getUserById';
import { GetUserQueryParam } from '../../interfaces/api';

export async function getUserById(req: Request<GetUserQueryParam>, res: Response, next: NextFunction) {
  res.locals.user = await getUserByIdService(userRepository, req.params.id);
  next();
}