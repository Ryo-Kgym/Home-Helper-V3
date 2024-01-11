import type { User } from "@domain/model/User";
import { persist } from "@recoil/recoilPersist";
import { atom } from "recoil";

export const userState = atom<User>({
  key: "user",
  default: {
    id: "",
    name: "",
    email: "",
  },
  effects_UNSTABLE: [persist("user").persistAtom],
});
