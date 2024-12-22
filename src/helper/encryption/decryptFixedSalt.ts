import { scrypt as scryptCallback, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import dotenv from 'dotenv';
import { SALT } from './encryptFixedSalt';

dotenv.config();

const scrypt = promisify(scryptCallback);

const PASSWORD_FOR_ID = process.env.PASSWORD_FOR_ID;

const ALGORITHM = 'aes-192-cbc';
const OUTPUT_ENCODING: BufferEncoding = 'hex';
const INPUT_ENCODING: BufferEncoding = 'utf8';

export async function decryptFixedSalt(encrypted: string): Promise<string> {
  if (!PASSWORD_FOR_ID) {
    throw new Error('PASSWORD_FOR_ID is not defined');
  }

  // Derive the key using scrypt
  const key = await scrypt(PASSWORD_FOR_ID, SALT, 24) as Buffer;

  // Extract the initialization vector (IV) from the encrypted text
  const iv = Buffer.from(encrypted.slice(0, 32), OUTPUT_ENCODING);
  const encryptedText = encrypted.slice(32);

  // Create a decipher using the derived key and IV
  const decipher = createDecipheriv(ALGORITHM, key, iv);

  // Decrypt the text
  let decrypted = decipher.update(encryptedText, OUTPUT_ENCODING, INPUT_ENCODING);
  decrypted += decipher.final(INPUT_ENCODING);

  return decrypted;
}