import cookie from "js-cookie";

export const saveCookie = ({ key, value }: { key: string; value: string }) => {
  cookie.set(key, value);
};

export const getCookieValue = <T>(key: string): T => {
  return cookie.get(key) as T;
};
