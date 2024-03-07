import { cookies } from "next/headers";

export const getCookieValue = (key: string): string | undefined => {
  return cookies().get(key)?.value;
};
