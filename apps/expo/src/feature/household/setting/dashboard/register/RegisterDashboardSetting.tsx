import { useState } from "react";
import { View } from "react-native";

import type { ArgsMapType, Feature } from "../type";
import { useRegisterDashboardSetting } from "~/feature/household/setting/dashboard/register/useRegisterDashboardSetting";
import { RegisterButton, ResetButton } from "~/ui";
import { Picker } from "~/ui/Picker";
import {
  generateMonthOptions,
  generateYearOptions,
} from "../edit/args-value-range";
import { featureMap } from "../list/feature-map";

const DEFAULT_ARGS_MAP_TYPES: ArgsMapType[] = Array(3).fill({});

export const RegisterDashboardSetting = () => {
  const [feature, setFeature] = useState<Feature>("balance");
  const [argsMapTypes, setArgsMapTypes] = useState<ArgsMapType[]>(
    DEFAULT_ARGS_MAP_TYPES,
  );
  const { registerDashboardSetting } = useRegisterDashboardSetting();

  const featurePickerData = Object.keys(featureMap).map((f) => ({
    label: featureMap[f as Feature].label,
    value: f as Feature,
  }));

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
    setArgsMapTypes(DEFAULT_ARGS_MAP_TYPES);
  };

  return (
    <View>
      <Picker value={feature} setValue={setFeature} data={featurePickerData} />
      <View>
        {featureMap[feature].argsTypes.map((type, index) => {
          if (type === "year") {
            return (
              <Picker
                key={type}
                value={argsMapTypes[index]!.value}
                setValue={(value) => {
                  const newArgs = [...argsMapTypes];
                  newArgs[index] = { type, value };
                  setArgsMapTypes(newArgs);
                }}
                data={generateYearOptions()}
              />
            );
          }

          if (type === "month") {
            return (
              <Picker
                key={type}
                value={argsMapTypes[index]!.value}
                setValue={(value) => {
                  const newArgs = [...argsMapTypes];
                  newArgs[index] = { type, value };
                  setArgsMapTypes(newArgs);
                }}
                data={generateMonthOptions()}
              />
            );
          }
        })}
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
