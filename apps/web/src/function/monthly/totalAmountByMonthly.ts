export interface TotalAmountByMonthlyArgs<T> {
  key: T;
  list: {
    month: string;
    amount: number;
  }[];
  fromDate: Date;
  toDate: Date;
}

export type TotalAmountByMonthly<T> = {
  key: T;
  monthlyTotal: number[];
  total: number;
};

export const totalAmountByMonthly = <T>({
  key,
  list,
  fromDate,
  toDate,
}: TotalAmountByMonthlyArgs<T>): TotalAmountByMonthly<T> => {
  let total = 0;

  const monthlyTotalMap = createMonthlyTotalMap({ fromDate, toDate });

  list.forEach(({ month, amount }) => {
    const v = monthlyTotalMap.get(month) ?? 0;
    monthlyTotalMap.set(month, v + amount);

    total += amount;
  });

  const monthlyTotal = Array.from(monthlyTotalMap.values());

  return { key, monthlyTotal, total };
};

const createMonthlyTotalMap = ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const monthlyTotalMap = new Map<string, number>();
  let startDate = fromDate;
  while (startDate <= toDate) {
    monthlyTotalMap.set(startDate.toISOString().slice(0, 7), 0);
    const date = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1);
    const offset = date.getTimezoneOffset();
    startDate = new Date(date.getTime() - offset * 60 * 1000);
  }

  return monthlyTotalMap;
};
