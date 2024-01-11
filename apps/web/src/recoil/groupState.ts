import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";
import { Group } from "@domain/model/Group";

export const groupState = atom<Group>({
  key: "group",
  default: {
    id: "",
    name: "",
  },
  effects_UNSTABLE: [persist("group").persistAtom],
});
