export const COOKIE_KEY = "lz_diary_token";
export const TOKEN = "family-only"; // ★ 簡易パスワード（まずはここでOK）

export function verifyToken(value: string | undefined) {
  return value === TOKEN;
}
