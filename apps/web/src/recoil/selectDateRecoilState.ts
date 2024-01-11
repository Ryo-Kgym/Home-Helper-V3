import { atom } from "recoil";
import { persist } from "@recoil/recoilPersist";

export const selectDateRecoilState = atom<{
  fromDate: Date;
  toDate: Date;
}>({
  key: "date",
  default: {
    fromDate: new Date(),
    toDate: new Date(),
  },
  effects_UNSTABLE: [persist("date").persistAtom],
});
