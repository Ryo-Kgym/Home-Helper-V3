import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import type {
  ArgsMapType,
  Feature,
} from "~/feature/household/setting/dashboard/type";
import {
  generateMonthOptions,
  generateYearOptions,
} from "~/feature/household/setting/dashboard/edit/args-value-range";
import { featureMap } from "~/feature/household/setting/dashboard/list/feature-map";
import { Picker } from "~/ui/Picker";

export const EditDashboardSetting = ({
  detail,
}: {
  detail:
    | {
        id: string;
        feature: Feature;
        argsMap: ArgsMapType[];
      }
    | undefined;
}) => {
  const [feature, setFeature] = useState<Feature | null>(null);
  const [args, setArgs] = useState<ArgsMapType[]>([]);

  const featurePickerData = Object.keys(featureMap).map((f) => ({
    label: featureMap[f as Feature].label,
    value: f as Feature,
  }));

  useEffect(() => {
    if (detail) {
      setFeature(detail.feature);
      setArgs(detail.argsMap);
    }
  }, [detail]);

  if (!detail) return null;

  return (
    <View>
      <Picker value={feature} setValue={setFeature} data={featurePickerData} />
      <View>
        {feature &&
          featureMap[feature]?.argsTypes.map((argsType, index) => {
            if (!args[index]) return null;

            return (
              <View key={argsType}>
                <Text>{argsType}</Text>
                {/* TODO 種類が増えたらリファクタリングする*/}
                {argsType === "year" && (
                  <Picker
                    value={args[index]!.value}
                    setValue={(v) => {
                      const newArgs = [...args];
                      newArgs[index] = { type: argsType, value: v };
                      setArgs(newArgs);
                    }}
                    data={generateYearOptions()}
                  />
                )}
                {argsType === "month" && (
                  <Picker
                    value={args[index]!.value}
                    setValue={(v) => {
                      const newArgs = [...args];
                      newArgs[index] = { type: argsType, value: v };
                      setArgs(newArgs);
                    }}
                    data={generateMonthOptions()}
                  />
                )}
              </View>
            );
          })}
      </View>
    </View>
  );
};
