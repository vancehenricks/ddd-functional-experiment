import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { getParam } from '../../helper/getParam';
import { GetUserQueryParam } from '../../interfaces/GetUserQueryParam';


async function validateUserIdResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send();
  }

  next();
}

export function validateUserId(): any {
  return [getParam<GetUserQueryParam>('id').isNumeric(), validateUserIdResults];
}

