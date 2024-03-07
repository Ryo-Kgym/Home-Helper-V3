import type { User } from "@domain/model/User";
import { getCookieValue } from "@persistence/client/cookie";

export const findUser = async (): Promise<User> => {
  const value = getCookieValue("user");

  if (!value) {
    throw new Error("Not Found UserId.");
  }

  return JSON.parse(value) as User;
};
