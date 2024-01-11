/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

export const IocomeTotalPresenter = ({
  income,
  outcome,
  hidden,
}: {
  income: number;
  outcome: number;
  hidden: boolean;
}) => (
  <>
    <div className="flex justify-center text-3xl max-sm:hidden">
      <div className="p-4 text-green-600" hidden={hidden}>
        収入：{income.toLocaleString()}
      </div>
      <div className="p-4 text-red-400" hidden={hidden}>
        支出：{outcome.toLocaleString()}
      </div>
      <div className="p-4">合計：{(income - outcome).toLocaleString()}</div>
    </div>
    <div className="grid grid-cols-2 text-end text-xs sm:hidden">
      <div className="text-green-600 p-1" hidden={hidden}>
        収入：{income.toLocaleString()}
      </div>
      <div className="text-red-400 p-1" hidden={hidden}>
        支出：{outcome.toLocaleString()}
      </div>
      <div />
      <div className="p-1">合計：{(income - outcome).toLocaleString()}</div>
    </div>
  </>
);
