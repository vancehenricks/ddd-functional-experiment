import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  POSTGRES_HOST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PW,
  POSTGRES_PORT,
} = process.env;


export const pool = new Pool({
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  user: POSTGRES_USER,
  password: POSTGRES_PW,
  port: Number(POSTGRES_PORT),
});
