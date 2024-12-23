import { Pool } from 'pg';
import { createClient } from 'redis';
import { RedisStore } from 'connect-redis';
import { CipherKey } from 'crypto';
import session from 'express-session';
import { getPostgresDb, getPostgresHost, getPostgresPassword, getPostgresPort, getPostgresUser, getRedisHost, getRedisPassword, getRedisPort, getRedisSecretKey, getRedisUser } from '../util/environment';


const POSTGRES_USER = getPostgresUser();
const POSTGRES_PW = getPostgresPassword();
const POSTGRES_HOST = getPostgresHost();
const POSTGRES_PORT = getPostgresPort();
const POSTGRES_DB = getPostgresDb();
const REDIS_SECRET_KEY = getRedisSecretKey();
const REDIS_USER = getRedisUser();
const REDIS_HOST = getRedisHost();
const REDIS_PORT = getRedisPort();
const REDIS_PASSWORD = getRedisPassword();

function createPool() {

  console.log(`Connecting to postgres://${POSTGRES_USER}:******@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`);

  return new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PW,
    port: Number(POSTGRES_PORT),
  });
}

export const POOL = createPool();

function createRedisClient() {

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

  return session({
    store: REDIS_STORE,
    resave: false,
    saveUninitialized: false,
    secret: REDIS_SECRET_KEY as CipherKey,
  });
}