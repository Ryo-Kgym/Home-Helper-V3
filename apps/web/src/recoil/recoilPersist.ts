import { recoilPersist } from "recoil-persist";

export const persist = (key: string) =>
  recoilPersist({
    key,
  });
