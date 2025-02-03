import { getCookieValue } from "./cookie";

export const findAccountIds = async (): Promise<string[]> => {
  const value = await getCookieValue("accountIds");

  if (!value) {
    return [];
  }

  return JSON.parse(value) as string[];
};
