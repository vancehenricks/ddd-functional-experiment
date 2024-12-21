import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { GetUserQueryParam } from '../../interfaces/GetUserQueryParam';
import { getParam } from '../../helper/express/getParam';
import { BAD_REQUEST } from '../../config/httpStatus';


async function validateUserIdResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(BAD_REQUEST).send();
  }

  next();
}

export function validateUserId(): any {
  return [getParam<GetUserQueryParam>('id').isNumeric(), validateUserIdResults];
}

