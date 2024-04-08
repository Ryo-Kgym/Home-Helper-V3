import { persist } from "@recoil/recoilPersist";
import { atom } from "recoil";

export const genreState = atom<{ id: string }>({
  key: "genre",
  default: {
    id: "",
  },
  effects_UNSTABLE: [persist("genre").persistAtom],
});
