import type { User } from "@type/user";
import { getCookieValue } from "@persistence/browser/server/cookie";

export const findUser = async (): Promise<User> => {
  const value = getCookieValue("user");

  if (!value) {
    throw new Error("Not Found UserId.");
  }

  return JSON.parse(value) as User;
};
