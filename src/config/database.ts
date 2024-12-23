import { Pool } from 'pg';
import dotenv from 'dotenv';
import { createClient } from 'redis';
import { RedisStore } from 'connect-redis';
import { CipherKey } from 'crypto';
import session from 'express-session';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PW,
  POSTGRES_PORT,
  REDIS_PASSWORD,
} = process.env;

function createPool() {

  if (!POSTGRES_HOST) {
    throw new Error('POSTGRES_HOST is not defined');
  }

  if (!POSTGRES_DB) {
    throw new Error('POSTGRES_DB is not defined');
  }

  if (!POSTGRES_USER) {
    throw new Error('POSTGRES_USER is not defined');
  }

  if (!POSTGRES_PW) {
    throw new Error('POSTGRES_PW is not defined');
  }

  if (!POSTGRES_PORT) {
    throw new Error('POSTGRES_PORT is not defined');
  }

  return new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PW,
    port: Number(POSTGRES_PORT),
  });
}

export const POOL = (() => createPool())();

function createRedisClient() {
  const client = createClient();
  client.connect().catch(console.error);
  return client;
}

export const REDIS_CLIENT = (() => createRedisClient())();

export const REDIS_STORE = new RedisStore({
  client: REDIS_CLIENT,
  prefix: 'miniblogsite:',
});

export function createSession() {
  const {
  } = process.env;
  
  if (REDIS_PASSWORD) {
    throw new Error('REDIS_PASSWORD is not defined');
  }

  return session({
    store: REDIS_STORE,
    resave: false,
    saveUninitialized: false,
    secret: REDIS_PASSWORD as CipherKey,
  });
}