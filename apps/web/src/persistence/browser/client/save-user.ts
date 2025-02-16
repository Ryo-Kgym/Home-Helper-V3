import type { User } from "../../../type/user";
import { saveCookie } from "./cookie";

export const saveUser = async (user: User) => {
  saveCookie({ key: "user", value: JSON.stringify(user) });
};
