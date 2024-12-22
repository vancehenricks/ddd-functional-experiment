import { pool } from '../../config/database';
import { UserRegistration } from '../../domain/UserRegistration';
import { convertToAddUserSqlValues } from '../../helper/db/convertToAddUserSqlValues';
import { LOAD_SQL_FILES } from '../../helper/db/loadSqlFiles';
import { UserRecord } from '../../interfaces/db/UserRecord';

const UNIQUE_VIOLATION = '23505';

export async function addUser(user: UserRegistration): Promise<UserRecord | null> {
  const sqlFiles = await LOAD_SQL_FILES;
  const sql = sqlFiles['addUser.sql'];

  try {
    const result = await pool.query(sql, convertToAddUserSqlValues(user));

    return result.rows[0];
  } catch (error) {
    if ((error as any).code === UNIQUE_VIOLATION) {
      return null;
    }
    throw error; // Something is seriously wrong better crash the app
  }
}