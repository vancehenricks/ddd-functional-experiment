import { LOAD_SQL_FILES } from '../../util/db/loadSqlFiles';
import { UserId } from '../../domain/user';
import { pool } from '../../config/database';
import { UserRecord } from '../../interfaces/repository';

export async function getUserById(userId: UserId): Promise<UserRecord | null> {
  const sqlFiles = await LOAD_SQL_FILES;
  const result = await pool.query(sqlFiles['getUserById.sql'], [userId]);
  return result.rows[0] || null;
}