import { NextFunction, Request, Response } from 'express';
import { getBody } from '../../util/api/getBody';
import { validationResult } from 'express-validator';
import { BAD_REQUEST } from '../../config/httpStatus';
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '../../config/password';
import { MAX_DISPLAY_NAME_LENGTH, MIN_DISPLAY_NAME_LENGTH } from '../../config/displayName';
import { MAX_USERNAME_LENGTH, MIN_USERNAME_LENGTH } from '../../config/username';
import { UserRegistrationUnHashed } from '../../interfaces/api';
import { setStatus } from '../../util/api/setStatus';

function validateNewUserResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return setStatus(res, BAD_REQUEST).json({ errors: result.array() });
  }

  next();
}

export function validateNewUser(): any {

  return [
    getBody<UserRegistrationUnHashed>('username').isString().withMessage('Username must be a string'),
    getBody<UserRegistrationUnHashed>('username').isLength({ min: MIN_USERNAME_LENGTH,  max: MAX_USERNAME_LENGTH }).withMessage(`Username must be at within ${MIN_USERNAME_LENGTH} - ${MAX_USERNAME_LENGTH} characters long`),
    getBody<UserRegistrationUnHashed>('displayName').isString().withMessage('Display Name must be a string'),
    getBody<UserRegistrationUnHashed>('displayName').isLength({ min: MIN_DISPLAY_NAME_LENGTH,  max: MAX_DISPLAY_NAME_LENGTH }).withMessage(`Display Name must be at within ${MIN_DISPLAY_NAME_LENGTH} - ${MAX_DISPLAY_NAME_LENGTH} characters long`),
    getBody<UserRegistrationUnHashed>('email').isEmail().withMessage('Email must be valid'),
    getBody<UserRegistrationUnHashed>('password').isLength({ min: MIN_PASSWORD_LENGTH,  max: MAX_PASSWORD_LENGTH }).withMessage(`Password must be at within ${MIN_PASSWORD_LENGTH} - ${MAX_PASSWORD_LENGTH} characters long`),
    validateNewUserResults,
  ];
}
