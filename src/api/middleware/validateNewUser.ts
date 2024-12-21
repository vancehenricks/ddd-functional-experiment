import { NextFunction, Request, Response } from 'express';
import { getBody } from '../../helper/getBody';
import { RegisterUserBody } from '../../interfaces/RegisterUserBody';
import { CustomValidator, validationResult } from 'express-validator';

const MIN_PASSWORD_LENGTH = 6;

function validateNewUserResults(req: Request, res: Response, next: NextFunction) {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }

  next();
}

const isPasswordMatching: CustomValidator = (value, { req }) => {
  if (value !== (req.body as RegisterUserBody).password) {
    throw new Error('Password confirmation does not match password');
  }
  return true;
};

export function validateNewUser(): any {

  return [
    getBody<RegisterUserBody>('username').isString().withMessage('Username must be a string'),
    getBody<RegisterUserBody>('email').isEmail().withMessage('Email must be valid'),
    getBody<RegisterUserBody>('password').isLength({ min: MIN_PASSWORD_LENGTH }).withMessage(`Password must be at least ${MIN_PASSWORD_LENGTH} characters long`),
    getBody<RegisterUserBody>('confirmPassword').custom(isPasswordMatching),
    validateNewUserResults,
  ];
}
