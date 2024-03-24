import cookie from "js-cookie";

export const saveCookie = ({ key, value }: { key: string; value: string }) => {
  cookie.set(key, value);
};

export const getCookieValue = <T>(key: string): T => {
  const stringValue = cookie.get(key);
  if (!stringValue) {
    throw new Error(`cookie not found: key=${key}`);
  }

  return JSON.parse(stringValue) as T;
};
