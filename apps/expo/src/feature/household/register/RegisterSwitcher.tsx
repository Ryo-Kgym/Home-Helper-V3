import { useState } from "react";
import { View } from "react-native";

import { RegisterDaily } from "~/feature/household/daily";
import { RegisterTransfer } from "~/feature/household/transfer";
import { SegmentedControl } from "~/ui/SegmentedControl";

export const RegisterSwitcher = () => {
  const [mode, setMode] = useState<RegisterMode>("daily");

  return (
    <View>
      <SegmentedControl
        value={mode}
        setValue={setMode}
        data={Object.keys(registerModeArray).map((k) => ({
          value: k as RegisterMode,
          label: registerModeArray[k as RegisterMode],
        }))}
      />
      {mode === "daily" && <RegisterDaily />}
      {mode === "transfer" && <RegisterTransfer />}
    </View>
  );
};

const registerModeArray = {
  daily: "記帳",
  transfer: "振替",
};

type RegisterMode = keyof typeof registerModeArray;
