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
  REDIS_PORT,
  REDIS_HOST,
  REDIS_USER,
  REDIS_SECRET_KEY,
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

  console.log(`Connecting to postgres://${POSTGRES_USER}:******@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`);

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

  if (!REDIS_HOST) {
    throw new Error('REDIS_HOST is not defined');
  }

  if (!REDIS_PORT) {
    throw new Error('REDIS_PORT is not defined');
  }

  if (!REDIS_PASSWORD) {
    throw new Error('REDIS_PASSWORD is not defined');
  }

  if (!REDIS_USER) {
    throw new Error('REDIS_USER is not defined');
  }

  console.log(`Connecting to redis://${REDIS_USER}:******@${REDIS_HOST}:${REDIS_PORT}`);

  const client = createClient({
    socket: {
      host: REDIS_HOST,
      port: Number(REDIS_PORT),
    },
    username: REDIS_USER,
    password: REDIS_PASSWORD,
  });
  client.connect().catch(console.error);
  return client;
}

export const REDIS_CLIENT = (() => createRedisClient())();

const PREFIX = 'miniblogsite:';

export const REDIS_STORE = new RedisStore({
  client: REDIS_CLIENT,
  prefix: PREFIX,
});

export function createSession() {
  const {
  } = process.env;
  
  if (!REDIS_SECRET_KEY) {
    throw new Error('REDIS_SECRET_KEY is not defined');
  }

  return session({
    store: REDIS_STORE,
    resave: false,
    saveUninitialized: false,
    secret: REDIS_SECRET_KEY as CipherKey,
  });
}