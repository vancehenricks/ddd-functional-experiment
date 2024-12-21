import { NextFunction, Request, Response } from 'express';
import { User } from '../../domain/User';

export function userExists() {

  return (_req: Request, res: Response, next: NextFunction) => {
    const user: User | null = res.locals.user;
    if (!user) {
      return res.status(200).json({});
    }
    next();
  };
}