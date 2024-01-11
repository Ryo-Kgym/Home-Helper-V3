/*
 * Copyright (c) 2023 Ryo-Kgym.
 */
"use client";

import { useGetHelperKid } from "@/hooks/help_point/useHelperKidPoint";
import { PossessionPointPresenter } from "./PossessionPointPresenter";

export const PossessionPointContainer = () => {
  const { helperKid, getCurrentPoint } = useGetHelperKid();

  return (
    <PossessionPointPresenter
      userName={helperKid().name}
      currentPoint={getCurrentPoint()}
    />
  );
};
