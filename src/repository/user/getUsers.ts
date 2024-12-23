import { LOAD_SQL_FILES } from '../../util/db/loadSqlFiles';
import { pool } from '../../config/database';
import { UserRecord } from '../../interfaces/repository';

export async function getUsers(): Promise<UserRecord[]> {
  const sqlFiles = await LOAD_SQL_FILES;
  const result = await pool.query(sqlFiles['getUsers.sql']);
  return result.rows;
}