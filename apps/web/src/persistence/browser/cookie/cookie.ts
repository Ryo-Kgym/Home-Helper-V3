import { cookies } from "next/headers";

export const saveCookie = ({ key, value }: { key: string; value: string }) => {
  cookies().set(key, value);
};

export const getCookieValue = (key: string): string | undefined => {
  return cookies().get(key)?.value;
};
