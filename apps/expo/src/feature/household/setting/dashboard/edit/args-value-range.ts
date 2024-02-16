import type { ArgsType } from "~/feature/household/setting/dashboard/type";

const argsValueRange: {
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
  genreType: {
    min: 0,
    max: 0,
  },
  iocomeType: {
    min: 0,
    max: 0,
  },
};

export const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const years: { label: string; value: number }[] = [];
  const { min, max } = argsValueRange.year;
  for (let i = min; i <= max; i++) {
    years.push({
      label: `${currentYear + i}年`,
      value: i,
    });
  }
  return years;
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
