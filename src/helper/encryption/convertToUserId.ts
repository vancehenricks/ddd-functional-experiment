import { UserId } from '../../domain/User';
import { EncryptedUserId } from '../../interfaces/api/EncryptedUserId';
import { deObfuscate } from './obfuscate';

export async function convertToUserId(encryptedUserId: EncryptedUserId): Promise<UserId | null> {

  try {
    const userId = await deObfuscate(encryptedUserId);
    return Number(userId) as UserId;
  } catch (error) {
    return null;
  }

}