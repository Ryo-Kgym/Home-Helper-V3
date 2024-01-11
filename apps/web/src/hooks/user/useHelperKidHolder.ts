/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useRecoilState } from "recoil";
import { helperKidRecoilState } from "@recoil/helperKidRecoilState";

export const useHelperKidHolder = () => {
  const [helperKid, setHelperKid] = useRecoilState(helperKidRecoilState);

  const save = (value: { id: string }) => {
    setHelperKid(value);
  };

  return {
    helperKidId: helperKid.id,
    save,
  };
};
