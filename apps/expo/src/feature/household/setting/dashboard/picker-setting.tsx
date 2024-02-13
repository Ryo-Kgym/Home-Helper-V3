import type {
  ArgsMapType,
  ArgsType,
} from "~/feature/household/setting/dashboard/type";
import {
  generateMonthOptions,
  generateYearOptions,
} from "~/feature/household/setting/dashboard/edit/args-value-range";

export const pickerSetting: Record<
  ArgsType,
  {
    data: { label: string; value: ArgsMapType["value"] }[];
  }
> = {
  year: {
    data: generateYearOptions(),
  },
  month: {
    data: generateMonthOptions(),
  },
  genreType: {
    data: [
      { label: "変動", value: ["FLUCTUATION"] },
      { label: "固定", value: ["FIXED"] },
      { label: "変動・固定", value: ["FLUCTUATION", "FIXED"] },
    ],
  },
};
