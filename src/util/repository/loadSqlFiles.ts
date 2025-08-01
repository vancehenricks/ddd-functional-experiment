import { promises as fs } from 'fs';
import path from 'path';

type SqlFileName = 'getUserById.sql' | 'getUsers.sql' | 'addUser.sql';

type SQLFileMap = Record<SqlFileName, string>;

async function loadSqlFiles(directoryPath: string): Promise<SQLFileMap> {
  const sqlFiles: SQLFileMap = {} as SQLFileMap;
  
  console.log('Loading SQL files');
  
  try {
    const files = await fs.readdir(directoryPath);
  
    for (const file of files) {
      if (path.extname(file) === '.sql') {
        const filePath = path.join(directoryPath, file);
        const sqlContent = await fs.readFile(filePath, 'utf8');
        sqlFiles[(file as SqlFileName)] = sqlContent;
      }
    }
  } catch (error) {
    throw new Error('Failed to load SQL files', { cause : error });
  }
  
  return sqlFiles;
}

const directoryPath = path.resolve(__dirname, '../../sql');

export const LOAD_SQL_FILES = (async () => loadSqlFiles(directoryPath))();