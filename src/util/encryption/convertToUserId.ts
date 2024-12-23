import { UserId } from '../../domain/user';
import { EncryptedUserId } from '../../interfaces/api';
import { deObfuscate } from './obfuscate';

export async function convertToUserId(encryptedUserId: EncryptedUserId): Promise<UserId | null> {

  const userId = await deObfuscate(encryptedUserId);

  if (!userId) {
    return null;
  }

  return Number(userId) as UserId;
}