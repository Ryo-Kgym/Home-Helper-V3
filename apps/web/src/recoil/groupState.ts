import { atom } from "recoil";

import { Group } from "../domain/model/Group";
import { persist } from "./recoilPersist";

export const groupState = atom<Group>({
  key: "group",
  default: {
    id: "",
    name: "",
  },
  effects_UNSTABLE: [persist("group").persistAtom],
});
