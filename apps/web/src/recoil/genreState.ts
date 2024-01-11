import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";

export const genreState = atom<{ id: string }>({
  key: "genre",
  default: {
    id: "",
  },
  effects_UNSTABLE: [persist("genre").persistAtom],
});
