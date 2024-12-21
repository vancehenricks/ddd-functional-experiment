import { body } from 'express-validator';

export function getBody<T>(value: keyof T) {
  return body(value as string);
}