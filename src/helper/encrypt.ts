import { createCipheriv, randomFill, scrypt } from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

const {
  SECRET_KEY_FOR_ID,
} =  process.env;

const ALGORITHM = 'aes-192-cbc';
const ENDCODING : BufferEncoding = 'hex';


export function encrypt(text: string) {
// First, we'll generate the key. The key length is dependent on the algorithm.
// In this case for aes192, it is 24 bytes (192 bits).
  if (!SECRET_KEY_FOR_ID) {
    throw new Error('SECRET_KEY_FOR_ID is not defined');
  }
  scrypt(text, SECRET_KEY_FOR_ID, 24, (err, key) => {
    if (err) throw err;
    // Then, we'll generate a random initialization vector
    randomFill(new Uint8Array(16), (err1, iv) => {
      if (err1) throw err1;
  
      // Once we have the key and iv, we can create and use the cipher...
      const cipher = createCipheriv(ALGORITHM, key, iv);
  
      let encrypted = '';
      cipher.setEncoding(ENDCODING);
  
      cipher.on('data', (chunk) => encrypted += chunk);
      cipher.on('end', () => console.log(encrypted));
  
      cipher.write('some clear text data');
      cipher.end();
    });
  });
}