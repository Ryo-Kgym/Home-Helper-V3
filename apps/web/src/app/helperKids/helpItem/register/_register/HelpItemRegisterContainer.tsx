/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { HelpItemRegisterPresenter } from "./HelpItemRegisterPresenter";

export const HelpItemRegisterContainer = () => {
  return (
    <HelpItemRegisterPresenter
      itemName={"お皿洗い"}
      setItemName={() => {}}
      point={100}
      setPoint={() => {}}
      memo={"メモ"}
      setMemo={() => {}}
      registerOnClick={() => {}}
    />
  );
};
