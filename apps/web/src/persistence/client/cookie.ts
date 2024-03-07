import cookie from "js-cookie";

export const saveCookie = ({ key, value }: { key: string; value: string }) => {
  cookie.set(key, value);
};

export const getCookieValue = (key: string): string | undefined => {
  return cookie.get()[key] as string | undefined;
};
