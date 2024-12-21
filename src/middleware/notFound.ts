import { NextFunction, Request, Response } from 'express';

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(_errorHandler: any) {
  throw new Error('Function not implemented.');
}

