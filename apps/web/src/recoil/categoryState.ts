import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";

export const categoryState = atom<{ id: string }>({
  key: "category",
  default: {
    id: "",
  },
  effects_UNSTABLE: [persist("category").persistAtom],
});
