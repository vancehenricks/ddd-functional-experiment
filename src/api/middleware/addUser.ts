import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repository/user';
import { RegisterUserBody } from '../../interfaces/RegisterUserBody';
import { addUser as addUserService } from '../../service/user/addUser';

export async function addUser(req: Request<RegisterUserBody>, res: Response, next: NextFunction) {
  res.locals.user = await addUserService(userRepository, req.body);
  next();
}