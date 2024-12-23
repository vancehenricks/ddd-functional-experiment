import { Request, Response } from 'express';
import { ErrorResponse } from '../interfaces/util';
import { INTERNAL_SERVER_ERROR, OK } from '../config/httpStatus';
import { isEnvironment } from '../util/environment';
export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>) {
  const statusCode = res.statusCode !== OK ? res.statusCode : INTERNAL_SERVER_ERROR;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: isEnvironment('production') ? '🥞' : err.stack,
  });
}