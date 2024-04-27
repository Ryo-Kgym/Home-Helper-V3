/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { helperKidRecoilState } from "@recoil/helperKidRecoilState";
import { useRecoilState } from "recoil";

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
