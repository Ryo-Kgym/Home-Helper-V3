import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import type { ArgsMapType, Feature } from "../type";
import { ResetButton, UpdateButton } from "~/ui";
import { Picker } from "~/ui/Picker";
import { featureMap } from "../list/feature-map";
import { generateMonthOptions, generateYearOptions } from "./args-value-range";
import { useEditDashboardSetting } from "./useEditDashboardSetting";

export const EditDashboardSetting = ({
  setting,
}: {
  setting:
    | {
        id: string;
        feature: Feature;
        order: number;
        argsMap: ArgsMapType[];
      }
    | undefined;
}) => {
  const [feature, setFeature] = useState<Feature | null>(null);
  const [argsMapTypes, setArgsMapTypes] = useState<ArgsMapType[]>([]);
  const { updateSetting } = useEditDashboardSetting();
  const featurePickerData = Object.keys(featureMap).map((f) => ({
    label: featureMap[f as Feature].label,
    value: f as Feature,
  }));

  const updateHandler = async () => {
    if (!setting || !feature) {
      return;
    }
    try {
      await updateSetting({
        settingId: setting.id,
        feature,
        order: setting.order,
        argsMapTypes,
      });
      alert("更新しました");
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  const resetHandler = () => {
    if (setting) {
      setFeature(setting.feature);
      setArgsMapTypes(setting.argsMap);
    }
  };

  useEffect(() => {
    if (setting) {
      setFeature(setting.feature);
      setArgsMapTypes(setting.argsMap);
    }
  }, [setting]);

  if (!setting || !feature) return null;

  return (
    <View>
      <Picker
        value={feature}
        setValue={setFeature}
        data={featurePickerData}
        disabled={true}
      />
      <View>
        {featureMap[feature].argsTypes.map((type, index) => {
          if (!argsMapTypes[index]) return null;

          return (
            <View key={type}>
              <Text>{type}</Text>
              {/* TODO 種類が増えたらリファクタリングする*/}
              {type === "year" && (
                <Picker
                  value={argsMapTypes[index]!.value}
                  setValue={(value) => {
                    const newArgs = [...argsMapTypes];
                    newArgs[index] = { type, value };
                    setArgsMapTypes(newArgs);
                  }}
                  data={generateYearOptions()}
                />
              )}
              {type === "month" && (
                <Picker
                  value={argsMapTypes[index]!.value}
                  setValue={(value) => {
                    const newArgs = [...argsMapTypes];
                    newArgs[index] = { type, value };
                    setArgsMapTypes(newArgs);
                  }}
                  data={generateMonthOptions()}
                />
              )}
            </View>
          );
        })}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            width: "50%",
          }}
        >
          <UpdateButton updateHandler={updateHandler} />
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
