import { persist } from "@recoil/recoilPersist";
import { atom } from "recoil";

import type { Group } from "@domain/model/Group";

export const groupState = atom<Group>({
  key: "group",
  default: {
    id: "",
    name: "",
  },
  effects_UNSTABLE: [persist("group").persistAtom],
});
