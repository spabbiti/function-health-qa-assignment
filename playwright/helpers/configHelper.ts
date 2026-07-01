export const USER_EMAIL = process.env.USER_EMAIL || "testuser@example.com";
export const USER_PASSWORD = process.env.USER_PASSWORD || "";

export function getBaseURL(): string {
  const baseURL = "https://myezra-staging.ezra.com/";
  return baseURL;
}
