// ユーザー情報取得のための準備
export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
  isAdmin: boolean;
};