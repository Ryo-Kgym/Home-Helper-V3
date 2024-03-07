import type { User } from "@domain/model/User";
import { saveCookie } from "@persistence/client/cookie";

export const saveUserId = async (user: User) => {
  saveCookie({ key: "user", value: JSON.stringify(user) });
};
