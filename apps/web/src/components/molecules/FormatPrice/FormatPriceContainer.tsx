/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { FormatPricePresenter } from "./FormatPricePresenter";

export const FormatPriceContainer = ({
  iocomeType,
  price,
}: {
  iocomeType: IocomeType;
  price: number;
}) => {
  if (!Number(price)) return null;

  const priceWithComma = Number(price).toLocaleString();

  const className =
    iocomeType === IocomeType.Income ? "text-green-600" : "text-red-400";
  const priceStr =
    iocomeType === IocomeType.Income
      ? priceWithComma
      : "(" + priceWithComma + ")";

  return <FormatPricePresenter className={className} priceStr={priceStr} />;
};
