import { LOAD_SQL_FILES } from '../../helper/loadSqlFiles';
import { User } from '../../domain/User';
import { pool } from '../../config/database';

export async function getUsers(): Promise<User[]> {
  const sqlFiles = await LOAD_SQL_FILES;
  const result = await pool.query(sqlFiles['getUsers.sql']);
  return result.rows;
}