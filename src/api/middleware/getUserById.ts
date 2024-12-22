import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repository/user';
import { GetUserQueryParam } from '../../interfaces/api/GetUserQueryParam';
import { getUserById as getUserByIdService } from '../../service/user/getUserById';

export async function getUserById(req: Request<GetUserQueryParam>, res: Response, next: NextFunction) {
  res.locals.user = await getUserByIdService(userRepository, req.params.id);
  next();
}