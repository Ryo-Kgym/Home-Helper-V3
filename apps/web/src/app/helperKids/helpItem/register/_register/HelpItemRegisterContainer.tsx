/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { HelpItemRegisterPresenter } from "./HelpItemRegisterPresenter";

export const HelpItemRegisterContainer = () => {
  return (
    <HelpItemRegisterPresenter
      itemName={"お皿洗い"}
      setItemName={() => undefined}
      point={100}
      setPoint={() => undefined}
      memo={"メモ"}
      setMemo={() => undefined}
      registerOnClick={() => undefined}
    />
  );
};
