import { atom } from "recoil";

import { User } from "../domain/model/User";
import { persist } from "./recoilPersist";

export const userState = atom<User>({
  key: "user",
  default: {
    id: "",
    name: "",
    email: "",
  },
  effects_UNSTABLE: [persist("user").persistAtom],
});
