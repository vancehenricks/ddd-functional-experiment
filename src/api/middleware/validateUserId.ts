import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { getParam } from '../../util/express/getParam';
import { BAD_REQUEST } from '../../config/httpStatus';
import { GetUserQueryParam } from '../../interfaces/api';


async function validateUserIdResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(BAD_REQUEST).send();
  }

  next();
}

export function validateUserId(): any {
  return [getParam<GetUserQueryParam>('id').isString(), validateUserIdResults];
}

