import { useEffect, useState } from "react";
import { View } from "react-native";

import type { ArgsMapType, Feature } from "../type";
import { RegisterButton, ResetButton } from "~/ui";
import { featureMap } from "../list/feature-map";
import { ArgsMapTypesPicker, EditableFeature } from "../ui";
import { useRegisterDashboardSetting } from "./useRegisterDashboardSetting";

const defaultArgsMapTypes: ArgsMapType[] = Array(2).fill({});

export const RegisterDashboardSetting = ({
  registerAfterHandler,
}: {
  registerAfterHandler?: () => void;
}) => {
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
    } finally {
      registerAfterHandler && registerAfterHandler();
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
      if (type === "genreType") {
        args.push({
          type,
          value: "ALL",
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
          <ArgsMapTypesPicker
            key={type}
            type={type}
            index={index}
            argsMapTypes={argsMapTypes}
            setArgsMapTypes={setArgsMapTypes}
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
