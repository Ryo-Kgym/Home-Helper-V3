/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IocomeType } from "../../../domain/model/household/IocomeType";

export const FormatPriceContainer = ({
  iocomeType,
  price,
}: {
  iocomeType: IocomeType;
  price: number;
}) => {
  if (!Number(price)) return null;

  const priceWithComma = Number(price).toLocaleString();

  return (
    <div
      style={{
        fontWeight: "bold",
        color: iocomeType === IocomeType.Income ? "green" : "red",
      }}
    >
      {priceWithComma}
    </div>
  );
};
