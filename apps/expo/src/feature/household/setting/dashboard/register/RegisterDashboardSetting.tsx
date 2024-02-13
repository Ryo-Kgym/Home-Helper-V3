import { useEffect, useState } from "react";
import { View } from "react-native";

import type { ArgsMapType, ArgsType, Feature } from "../type";
import { EditableFeature, RegisterButton, ResetButton } from "~/ui";
import { Picker } from "~/ui/Picker";
import {
  generateMonthOptions,
  generateYearOptions,
} from "../edit/args-value-range";
import { featureMap } from "../list/feature-map";
import { useRegisterDashboardSetting } from "./useRegisterDashboardSetting";

const defaultArgsMapTypes: ArgsMapType[] = Array(2).fill({});
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

export const RegisterDashboardSetting = () => {
  const [feature, setFeature] = useState<Feature>("balance");
  const [argsMapTypes, setArgsMapTypes] =
    useState<ArgsMapType[]>(defaultArgsMapTypes);
  const { registerDashboardSetting } = useRegisterDashboardSetting();

  const registerHandler = async () => {
    try {
      await registerDashboardSetting({
        feature,
        argsMapTypes,
      });
      alert("登録しました");
    } catch (e) {
      console.error(e);
      alert("登録に失敗しました");
    }
  };

  const resetHandler = () => {
    setFeature("balance");
    setArgsMapTypes(defaultArgsMapTypes);
  };

  useEffect(() => {
    // featureが変化した時にargsMapTypesを初期化する
    const args: ArgsMapType[] = [];

    featureMap[feature].argsTypes.map((type) => {
      if (type === "year") {
        args.push({
          type,
          value: 0, // 今年
        });
      }
      if (type === "month") {
        args.push({
          type,
          value: 0, // 今月
        });
      }
    });

    setArgsMapTypes(args.length ? args : defaultArgsMapTypes);
  }, [feature]);

  return (
    <View>
      <EditableFeature value={feature} setValue={setFeature} />
      <View>
        {featureMap[feature].argsTypes.map((type, index) => (
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
        ))}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            width: "50%",
          }}
        >
          <RegisterButton registerHandler={registerHandler} />
        </View>
        <View
          style={{
            width: "50%",
          }}
        >
          <ResetButton resetHandler={resetHandler} />
        </View>
      </View>
    </View>
  );
};
