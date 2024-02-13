import type {
  ArgsMapType,
  ArgsType,
} from "~/feature/household/setting/dashboard/type";
import {
  generateMonthOptions,
  generateYearOptions,
} from "~/feature/household/setting/dashboard/edit/args-value-range";
import { Picker } from "~/ui/Picker";

export const ArgsMapTypesPicker = ({
  type,
  index,
  argsMapTypes,
  setArgsMapTypes,
}: {
  type: ArgsType;
  index: number;
  argsMapTypes: ArgsMapType[];
  setArgsMapTypes: (args: ArgsMapType[]) => void;
}) => (
  <Picker
    key={type}
    value={argsMapTypes[index]!.value as number}
    setValue={(value) => {
      if (type === "year" || type === "month") {
        const newArgs = [...argsMapTypes];
        newArgs[index] = { type, value: value as number };
        setArgsMapTypes(newArgs);
      }
    }}
    data={pickerSetting[type].data}
  />
);

const pickerSetting: Record<
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
