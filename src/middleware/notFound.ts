import { NextFunction, Request, Response } from 'express';
import { setStatus } from '../util/api/setStatus';
import { NOT_FOUND } from '../config/httpStatus';

export function notFound(req: Request, res: Response, next: NextFunction) {
  setStatus(res, NOT_FOUND);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(_errorHandler: any) {
  throw new Error('Function not implemented.');
}

