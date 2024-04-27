import { persist } from "@recoil/recoilPersist";
import { atom } from "recoil";

export const messageState = atom<string[]>({
  key: "message",
  default: [],
  effects_UNSTABLE: [persist("message").persistAtom],
});
