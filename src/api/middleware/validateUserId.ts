import { validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import { getParam } from '../../util/api/getParam';
import { BAD_REQUEST } from '../../config/httpStatus';
import { GetUserQueryParam } from '../../interfaces/api';
import { setStatus } from '../../util/api/setStatus';


async function validateUserIdResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return setStatus(res, BAD_REQUEST).send();
  }

  next();
}

export function validateUserId(): any {
  return [getParam<GetUserQueryParam>('id').isString(), validateUserIdResults];
}

