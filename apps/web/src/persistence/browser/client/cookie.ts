import cookie from "js-cookie";

export const saveCookie = ({ key, value }: { key: string; value: string }) => {
  cookie.set(key, value);
};

export const getCookieValue = <T>(key: string): T | null => {
  const stringValue = cookie.get(key);
  if (!stringValue) {
    return null;
  }

  return JSON.parse(stringValue) as T;
};
