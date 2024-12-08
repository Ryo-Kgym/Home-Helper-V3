import { getCookieValue } from "~/persistence/browser/server/cookie";
import { User } from "../../../type/user";

export const findUser = async (): Promise<User> => {
  const value = getCookieValue("user");

  if (!value) {
    throw new Error("Not Found UserId.");
  }

  return JSON.parse(value) as User;
};
