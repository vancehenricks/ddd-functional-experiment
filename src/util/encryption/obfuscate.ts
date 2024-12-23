import { scrypt as scryptCallback, createCipheriv, createDecipheriv } from 'crypto';
import { promisify } from 'util';
import dotenv from 'dotenv';

dotenv.config();

const scrypt = promisify(scryptCallback);

const OBFUSCATE_PASSWORD = process.env.OBFUSCATE_PASSWORD;
const PREDEFINED_SALT = '1234567890123456'; // fixed for consistent result

const ALGORITHM = 'aes-192-cbc';
const ALGORITHM_LENGTH = 24;
const OUTPUT_ENCODING: BufferEncoding = 'hex';
const INPUT_ENCODING: BufferEncoding = 'utf8';


function throwPreDefinedSaltNotDefined() {
  if (!PREDEFINED_SALT) {
    throw new Error('PREDEFINED_SALT is not defined');
  }
}

async function createKey() {
  if (!OBFUSCATE_PASSWORD) {
    throw new Error('OBFUSCATE_PASSWORD is not defined');
  }

  throwPreDefinedSaltNotDefined();

  return await scrypt(OBFUSCATE_PASSWORD, PREDEFINED_SALT, ALGORITHM_LENGTH) as Buffer;
}

const CACHED_KEY = (async () => createKey())();

export async function obfuscate(text: string): Promise<string | null> {
  const key = await CACHED_KEY;

  if (!PREDEFINED_SALT) {
    throw new Error('PREDEFINED_SALT is not defined');
  }

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

  throwPreDefinedSaltNotDefined();

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

