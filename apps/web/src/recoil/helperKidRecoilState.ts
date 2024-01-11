import { persist } from "@recoil/recoilPersist";
import { atom } from "recoil";

export const helperKidRecoilState = atom<{ id: string }>({
  key: "helperKid",
  default: {
    id: "",
  },
  effects_UNSTABLE: [persist("helperKid").persistAtom],
});
