import { param, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';


export async function validateUserIdResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).send();
  }

  next();
}

export function validateUserId() : any {
  return [param('id').isNumeric(), validateUserIdResults];
}

