/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export const TotalPresenter = ({
  total = 0,
}: {
  total: number | undefined;
}) => (
  <div className="flex justify-center text-3xl max-sm:text-sm">
    <div className="p-4">合計：{total.toLocaleString()}</div>
  </div>
);
