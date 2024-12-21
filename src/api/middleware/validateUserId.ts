import { param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';


async function validateUserIdResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send();
  }

  next();
}

export function validateUserId() {
  return [param('id').isNumeric(), validateUserIdResults];
}

