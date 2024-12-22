import { scrypt as scryptCallback, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import dotenv from 'dotenv';
import { FIXED_IV, SALT } from './encryptFixed';

dotenv.config();

const scrypt = promisify(scryptCallback);

const PASSWORD_FOR_ID = process.env.PASSWORD_FOR_ID;

const ALGORITHM = 'aes-192-cbc';
const OUTPUT_ENCODING: BufferEncoding = 'hex';
const INPUT_ENCODING: BufferEncoding = 'utf8';

export async function decryptFixed(encrypted: string): Promise<string> {
  if (!PASSWORD_FOR_ID) {
    throw new Error('PASSWORD_FOR_ID is not defined');
  }

  const key = await scrypt(PASSWORD_FOR_ID, SALT, 24) as Buffer;

  const iv = Buffer.from(FIXED_IV, INPUT_ENCODING);

  const decipher = createDecipheriv(ALGORITHM, key, iv);

  let decrypted = decipher.update(encrypted, OUTPUT_ENCODING, INPUT_ENCODING);
  decrypted += decipher.final(INPUT_ENCODING);

  return decrypted;
}