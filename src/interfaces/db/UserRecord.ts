import { Description, DisplayName, Email, UserId, Username } from '../../domain/User';
import { HashedPassword } from '../../domain/UserRegistration';

export interface UserRecord {
  user_id: UserId;
  username: Username;
  password: HashedPassword;
  display_name: DisplayName;
  description: Description;
  email: Email;
}