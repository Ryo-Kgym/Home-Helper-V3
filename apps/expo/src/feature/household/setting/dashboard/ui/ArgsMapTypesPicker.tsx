import { Text } from "react-native";

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
  <>
    <Text>{type}</Text>
    <Picker
      key={type}
      value={argsMapTypes[index]!.value}
      setValue={(value) => {
        const newArgs = [...argsMapTypes];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        newArgs[index] = { type, value };
        setArgsMapTypes(newArgs);
      }}
      data={pickerSetting[type].data}
    />
  </>
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
      { label: "変動", value: "FLC" },
      { label: "固定", value: "FXD" },
      { label: "変動・固定", value: "ALL" },
    ],
  },
  iocomeType: {
    data: [
      { label: "収入", value: "I" },
      { label: "支出", value: "O" },
      { label: "収入・支出", value: "ALL" },
    ],
  },
};
