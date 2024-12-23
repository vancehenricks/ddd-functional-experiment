import { scrypt as scryptCallback, createCipheriv, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import { getObfuscatePassword } from '../environment';

const scrypt = promisify(scryptCallback);

const PREDEFINED_SALT = '1234567890123456'; // fixed for consistent result

const ALGORITHM = 'aes-192-cbc';
const ALGORITHM_LENGTH = 24;
const OUTPUT_ENCODING: BufferEncoding = 'hex';
const INPUT_ENCODING: BufferEncoding = 'utf8';
const OBFUSCATE_PASSWORD = getObfuscatePassword();

async function createKey() {
  console.log('Creating Obfuscating key');

  return await scrypt(OBFUSCATE_PASSWORD, PREDEFINED_SALT, ALGORITHM_LENGTH) as Buffer;
}

const CACHED_KEY = createKey();

export async function obfuscate(text: string): Promise<string | null> {
  const key = await CACHED_KEY;

  try {  
    const iv = Buffer.from(PREDEFINED_SALT, INPUT_ENCODING);

    const cipher = createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, INPUT_ENCODING, OUTPUT_ENCODING);
    encrypted += cipher.final(OUTPUT_ENCODING);
    return encrypted;

  } catch (error) {
    return null;
  }
}

export async function deObfuscate(encrypted: string): Promise<string | null> {
  const key = await CACHED_KEY;

  try {  
    const iv = Buffer.from(PREDEFINED_SALT, INPUT_ENCODING);

    const decipher = createDecipheriv(ALGORITHM, key, iv);

    let decrypted = decipher.update(encrypted, OUTPUT_ENCODING, INPUT_ENCODING);
    decrypted += decipher.final(INPUT_ENCODING);

    return decrypted;
  } catch (error) {
    return null;
  }
}

