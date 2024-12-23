import { NextFunction, Response } from 'express';
import { User } from '../../domain/user';
import { BAD_REQUEST } from '../../config/httpStatus';
import { HttpStatus } from '../../interfaces/api';
import { setStatus } from '../../util/api/setStatus';

export function userExist(elseStatus: HttpStatus | 400 = BAD_REQUEST): any {

  return (_req: any, res: Response, next: NextFunction) => {
    const user: User | null = res.locals.user;
    if (!user) {
      return setStatus(res, elseStatus).send();
    }
    next();
  };
}