import { saveCookie } from "~/persistence/browser/client/cookie";
import { User } from "../../../type/user";

export const saveUser = async (user: User) => {
  saveCookie({ key: "user", value: JSON.stringify(user) });
};
