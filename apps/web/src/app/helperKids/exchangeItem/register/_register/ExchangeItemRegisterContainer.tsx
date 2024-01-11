/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

"use client";

import { ExchangeItemRegisterPresenter } from "./ExchangeItemRegisterPresenter";

export const ExchangeItemRegisterContainer = () => {
  return (
    <ExchangeItemRegisterPresenter
      itemName={"お皿洗い"}
      setItemName={() => {}}
      point={100}
      setPoint={() => {}}
      registerOnClick={() => {}}
    />
  );
};
