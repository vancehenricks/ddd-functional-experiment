
import dotenv from 'dotenv';
import { NodeEnvironment } from '../interfaces/util';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PW,
  POSTGRES_PORT,
  REDIS_PASSWORD,
  REDIS_PORT,
  REDIS_HOST,
  REDIS_USER,
  REDIS_SECRET_KEY,
  NODE_ENV,
  OBFUSCATE_PASSWORD,
} = process.env;

console.log('Loading environment variables');
  
function getNodeEnvironment() {
  if (!NODE_ENV) {
    throw new Error('NODE_ENV is not defined');
  }
  return NODE_ENV;
}

export function isEnvironment(nodeEnvironment: NodeEnvironment) {
  return getNodeEnvironment() === nodeEnvironment;
}

export function getPostgresHost() {
  if (!POSTGRES_HOST) {
    throw new Error('POSTGRES_HOST is not defined');
  }
  return POSTGRES_HOST;
}

export function getPostgresDb() {
  if (!POSTGRES_DB) {
    throw new Error('POSTGRES_DB is not defined');
  }
  return POSTGRES_DB;
}

export function getPostgresUser() {
  if (!POSTGRES_USER) {
    throw new Error('POSTGRES_USER is not defined');
  }
  return POSTGRES_USER;
}

export function getPostgresPassword() {
  if (!POSTGRES_PW) {
    throw new Error('POSTGRES_PW is not defined');
  }
  return POSTGRES_PW;
}

export function getPostgresPort() {
  if (!POSTGRES_PORT) {
    throw new Error('POSTGRES_PORT is not defined');
  }
  return Number(POSTGRES_PORT);
}

export function getRedisPassword() {
  if (!REDIS_PASSWORD) {
    throw new Error('REDIS_PASSWORD is not defined');
  }
  return REDIS_PASSWORD;
}

export function getRedisPort() {
  if (!REDIS_PORT) {
    throw new Error('REDIS_PORT is not defined');
  }
  return Number(REDIS_PORT);
}

export function getRedisHost() {
  if (!REDIS_HOST) {
    throw new Error('REDIS_HOST is not defined');
  }
  return REDIS_HOST;
}

export function getRedisUser() {
  if (!REDIS_USER) {
    throw new Error('REDIS_USER is not defined');
  }
  return REDIS_USER;
}

export function getRedisSecretKey() {
  if (!REDIS_SECRET_KEY) {
    throw new Error('REDIS_SECRET_KEY is not defined');
  }
  return REDIS_SECRET_KEY;
}

export function getObfuscatePassword() {
  if (!OBFUSCATE_PASSWORD) {
    throw new Error('OBFUSCATE_PASSWORD is not defined');
  }
  return OBFUSCATE_PASSWORD;
}