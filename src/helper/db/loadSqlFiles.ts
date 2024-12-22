import { promises as fs } from 'fs';
import path from 'path';
import { SqlFileName } from '../../interfaces/db/SqlFileName';

type SQLFileMap = Record<SqlFileName, string>;

async function loadSqlFiles(directoryPath: string): Promise<SQLFileMap> {
  const sqlFiles: SQLFileMap = {} as SQLFileMap;
  
  console.log('Loading sql files');
  
  try {
    const files = await fs.readdir(directoryPath);
  
    for (const file of files) {
      if (path.extname(file) === '.sql') {
        const filePath = path.join(directoryPath, file);
        const sqlContent = await fs.readFile(filePath, 'utf8');
        sqlFiles[(file as SqlFileName)] = sqlContent;
      }
    }
  } catch (error: any) {
    console.error(`Error loading SQL files: ${error.message}`);
  }
  
  return sqlFiles;
}

const directoryPath = path.resolve(__dirname, '../../sql');

export const LOAD_SQL_FILES = (async () => loadSqlFiles(directoryPath))();