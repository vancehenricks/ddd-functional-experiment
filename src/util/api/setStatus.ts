import { Response } from 'express';
import { HttpStatus } from '../../interfaces/api';

export function setStatus(res: Response, status: HttpStatus) {
  return res.status(status).send();
}