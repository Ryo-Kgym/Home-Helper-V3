import { getCookieValue, saveCookie } from "@persistence/browser/cookie/cookie";

export const saveUserId = (value: string) => {
  saveCookie({ key: "userId", value });
};

export const findUserId = async (): Promise<string> => {
  const value = getCookieValue("userId");

  if (!value) {
    throw new Error("Not Found UserId.");
  }

  return value;
};
