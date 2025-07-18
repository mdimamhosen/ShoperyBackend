export type VerifiedUser = {
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
};

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  MODERATOR = 'moderator',
}
