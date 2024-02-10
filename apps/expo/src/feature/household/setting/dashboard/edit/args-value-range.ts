import type { ArgsType } from "~/feature/household/setting/dashboard/type";

export const argsValueRange: {
  [type in ArgsType]: {
    min: number;
    max: number;
  };
} = {
  year: {
    min: -10,
    max: 0,
  },
  month: {
    min: -24,
    max: 2,
  },
};

export const generateMonthOptions = () => {
  const months: { label: string; value: number }[] = [];
  const { min, max } = argsValueRange.month;
  for (let i = min; i <= max; i++) {
    months.push({
      label: i < 0 ? `${i * -1}ヶ月前` : i === 0 ? "今月" : `${i}ヶ月後`,
      value: i,
    });
  }
  return months;
};
