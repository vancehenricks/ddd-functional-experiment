import { param } from 'express-validator';

export function paramTypeSafe<T>(value: keyof T) {
  return param(value as string);
}