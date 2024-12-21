import { UserRegistration } from '../../domain/UserRegistration';


export function convertToAddUserSqlValues(user: UserRegistration) {

  const values = {
    username: user.username,
    password: user.password,
    display_name: user.display_name,
    description: 'This is my description.',
    email: user.email,
  };
    
  return [
    values.username,
    values.password,
    values.display_name,
    values.description,
    values.email,
  ];
}