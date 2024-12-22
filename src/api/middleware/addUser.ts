import { NextFunction, Request, Response } from 'express';
import { userRepository } from '../../repository/user';
import { addUser as addUserService } from '../../service/user/addUser';
import { UserRegistrationUnHashed } from '../../interfaces/UserRegistrationUnHashed';

export async function addUser(req: Request<UserRegistrationUnHashed>, res: Response, next: NextFunction) {
  res.locals.user = await addUserService(userRepository, req.body);
  next();
}