/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export const FormatPricePresenter = ({
  className,
  priceStr,
}: {
  className: string;
  priceStr: string;
}) => <div className={className}>{priceStr}</div>;
