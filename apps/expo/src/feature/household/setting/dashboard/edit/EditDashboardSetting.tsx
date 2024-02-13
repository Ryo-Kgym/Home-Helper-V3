import { useEffect, useState } from "react";
import { View } from "react-native";

import type { ArgsMapType, Feature } from "../type";
import { pickerSetting } from "~/feature/household/setting/dashboard/picker-setting";
import { DeleteButton, EditableFeature, ResetButton, UpdateButton } from "~/ui";
import { Picker } from "~/ui/Picker";
import { featureMap } from "../list/feature-map";
import { useDeleteDashboardSetting } from "./useDeleteDashboardSetting";
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
  const { deleteDashboardSetting } = useDeleteDashboardSetting();

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
      setArgsMapTypes(argsMapTypes);
    } catch (e) {
      console.error(e);
      alert("更新に失敗しました");
    }
  };

  const deleteHandler = async () => {
    if (!setting) {
      return;
    }
    try {
      await deleteDashboardSetting(setting.id);
      alert("削除しました");
    } catch (e) {
      console.error(e);
      alert("削除に失敗しました");
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
      <EditableFeature value={feature} setValue={setFeature} disabled={true} />
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
            width: "33%",
          }}
        >
          <UpdateButton updateHandler={updateHandler} />
        </View>
        <View
          style={{
            width: "33%",
          }}
        >
          <DeleteButton deleteHandler={deleteHandler} />
        </View>
        <View
          style={{
            width: "33%",
          }}
        >
          <ResetButton resetHandler={resetHandler} />
        </View>
      </View>
    </View>
  );
};
