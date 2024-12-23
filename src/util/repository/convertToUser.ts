import { User } from '../../domain/user';
import { UserRecord } from '../../interfaces/repository';

export function convertToUser(userRecord: UserRecord) : User {
  return {
    userId: userRecord.user_id,
    username: userRecord.username,
    displayName: userRecord.display_name,
    description: userRecord.description,
    email: userRecord.email,
  };
}