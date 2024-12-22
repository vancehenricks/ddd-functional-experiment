import { LOAD_SQL_FILES } from '../../helper/loadSqlFiles';
import { User, UserId } from '../../domain/User';
import { pool } from '../../config/database';

export async function getUserById(id: UserId): Promise<User | null> {
  const sqlFiles = await LOAD_SQL_FILES;
  const result = await pool.query(sqlFiles['getUserById.sql'], [id]);
  return result.rows[0] || null;
}