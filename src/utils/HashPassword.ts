import * as bcrypt from 'bcrypt';

export function hashPassword(password: string) {
  const SALT = 10;
  return bcrypt.hashSync(password, SALT);
}
