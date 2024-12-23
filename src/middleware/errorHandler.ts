import { Request, Response } from 'express';
import { ErrorResponse } from '../interfaces/util';
import { INTERNAL_SERVER_ERROR, OK } from '../config/httpStatus';
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>) {
  const statusCode = res.statusCode !== OK ? res.statusCode : INTERNAL_SERVER_ERROR;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}