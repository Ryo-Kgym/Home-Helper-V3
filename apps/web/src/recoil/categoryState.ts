import { persist } from "@recoil/recoilPersist";
import { atom } from "recoil";

export const categoryState = atom<{ id: string }>({
  key: "category",
  default: {
    id: "",
  },
  effects_UNSTABLE: [persist("category").persistAtom],
});
