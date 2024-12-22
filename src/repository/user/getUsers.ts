import { LOAD_SQL_FILES } from '../../helper/db/loadSqlFiles';
import { pool } from '../../config/database';
import { UserRecord } from '../../interfaces/db/UserRecord';

export async function getUsers(): Promise<UserRecord[]> {
  const sqlFiles = await LOAD_SQL_FILES;
  const result = await pool.query(sqlFiles['getUsers.sql']);
  return result.rows;
}