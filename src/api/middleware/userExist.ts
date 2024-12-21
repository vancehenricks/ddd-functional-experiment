import { NextFunction, Response } from 'express';
import { User } from '../../domain/User';
import { BAD_REQUEST } from '../../config/httpStatus';

export function userExist(elseStatus: number | 400 = BAD_REQUEST): any {

  return (_req: any, res: Response, next: NextFunction) => {
    const user: User | null = res.locals.user;
    if (!user) {
      return res.status(elseStatus).send();
    }
    next();
  };
}