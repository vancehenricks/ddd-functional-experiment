import { UserId } from '../../domain/user';
import { EncryptedUserId } from '../../interfaces/api';
import { deObfuscate } from './obfuscate';

export async function convertToUserId(encryptedUserId: EncryptedUserId): Promise<UserId | null> {

  try {
    const userId = await deObfuscate(encryptedUserId);
    return Number(userId) as UserId;
  } catch (error) {
    return null;
  }

}