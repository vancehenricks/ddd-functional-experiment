import { LOAD_SQL_FILES } from '../../util/repository/loadSqlFiles';
import { UserId } from '../../domain/user';
import { POOL } from '../../config/database';
import { UserRecord } from '../../interfaces/repository';

export async function getUserById(userId: UserId): Promise<UserRecord | null> {
  const sqlFiles = await LOAD_SQL_FILES;
  const result = await POOL.query(sqlFiles['getUserById.sql'], [userId]);
  return result.rows[0] || null;
}