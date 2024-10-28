import { pool } from '../server';

export async function getUsers() {
  return pool.query('SELECT * FROM users;');
}