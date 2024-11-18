import { LOAD_SQL_FILES } from '../helper/loadSqlFiles';
import { pool } from '../server';

export async function getUsers() {
  const sqlFiles = await LOAD_SQL_FILES;

  return pool.query(sqlFiles['getUsers.sql']);
}

export async function getUserById(id: number) {
  const sqlFiles = await LOAD_SQL_FILES;

  return pool.query(sqlFiles['getUserById.sql'], [id]);
}