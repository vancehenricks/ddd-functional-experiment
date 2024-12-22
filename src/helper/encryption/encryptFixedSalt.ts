import { scrypt as scryptCallback, randomFillSync, createCipheriv } from 'crypto';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();

const scrypt = promisify(scryptCallback);

const PASSWORD_FOR_ID = process.env.PASSWORD_FOR_ID;
export const SALT = 'salt';

const ALGORITHM = 'aes-192-cbc';
const OUTPUT_ENCODING: BufferEncoding = 'hex';
const INPUT_ENCODING: BufferEncoding = 'utf8';


export async function encryptFixedSalt(text: string): Promise<string> {
  if (!PASSWORD_FOR_ID) {
    throw new Error('PASSWORD_FOR_ID is not defined');
  }

  const key = await scrypt(PASSWORD_FOR_ID, SALT, 24) as Buffer;

  const iv = randomFillSync(new Uint8Array(16));

  const cipher = createCipheriv(ALGORITHM, key, iv);

  let encrypted = cipher.update(text, INPUT_ENCODING, OUTPUT_ENCODING);
  encrypted += cipher.final(OUTPUT_ENCODING);

  return encrypted;
}