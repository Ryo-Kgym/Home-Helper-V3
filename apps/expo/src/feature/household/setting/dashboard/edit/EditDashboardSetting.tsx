import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import type { ArgsMapType, Feature } from "../type";
import { ResetButton, UpdateButton } from "~/ui";
import { Picker } from "~/ui/Picker";
import { featureMap } from "../list/feature-map";
import { generateMonthOptions, generateYearOptions } from "./args-value-range";

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
  const [argsMapTypes, setArgsMapTypes] = useState<ArgsMapType[]>([]);

  const featurePickerData = Object.keys(featureMap).map((f) => ({
    label: featureMap[f as Feature].label,
    value: f as Feature,
  }));

  const updateHandler = () => {
    console.error("feature", feature, "args", argsMapTypes);
  };

  const resetHandler = () => {
    if (detail) {
      setFeature(detail.feature);
      setArgsMapTypes(detail.argsMap);
    }
  };

  useEffect(() => {
    if (detail) {
      setFeature(detail.feature);
      setArgsMapTypes(detail.argsMap);
    }
  }, [detail]);

  if (!detail || !feature) return null;

  return (
    <View>
      <Picker value={feature} setValue={setFeature} data={featurePickerData} />
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
