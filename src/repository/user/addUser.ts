import { POOL } from '../../config/database';
import { UserRegistration } from '../../domain/user';
import { UserRecord } from '../../interfaces/repository';
import { convertToUserRecordTuple } from '../../util/repository/convertToUserRecordTuple';
import { LOAD_SQL_FILES } from '../../util/repository/loadSqlFiles';

const UNIQUE_VIOLATION = '23505';

export async function addUser(user: UserRegistration): Promise<UserRecord | null> {
  const sqlFiles = await LOAD_SQL_FILES;
  const sql = sqlFiles['addUser.sql'];

  try {
    const result = await POOL.query(sql, convertToUserRecordTuple(user));

    return result.rows[0];
  } catch (error) {
    if ((error as any).code === UNIQUE_VIOLATION) {
      return null;
    }
    throw new Error('An error occurred while adding a new user', { cause : error });
  }
}