import { param } from 'express-validator';

export function getParam<T>(value: keyof T) {
  return param(value as string);
}