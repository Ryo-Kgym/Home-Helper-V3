import { useEffect, useState } from "react";

import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";
import { SelectProps } from "./v4";
import { Select } from "./v5";

type AccountSelectProps = {
  accountId: string;
  onChange: (_: string) => void;
  disabled?: boolean;
  withLabel?: boolean;
};

export const AccountSelect = ({
  accountId,
  onChange,
  disabled = false,
  withLabel = false,
}: AccountSelectProps) => {
  const [options, setOptions] = useState<SelectProps<string>["data"]>([]);
  const { getAccounts } = useGetDetailMaster();

  useEffect(() => {
    setOptions(getAccounts());
  }, []);

  return (
    <Select
      label={withLabel ? "アカウント" : ""}
      value={accountId}
      onChange={onChange}
      data={options}
      placeholder={"アカウントを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
    />
  );
};
