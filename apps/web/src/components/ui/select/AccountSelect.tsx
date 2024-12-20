import { useEffect, useState } from "react";

import { fetchAccountList } from "./fetchAccountList";
import { SelectProps } from "./v4";
import { Select } from "./v5";

type AccountSelectProps = {
  accountId: string | null;
  setAccountId: (_: string | null) => void;
  disabled?: boolean;
  withLabel?: boolean;
};

export const AccountSelect = ({
  accountId,
  setAccountId,
  disabled = false,
  withLabel = false,
}: AccountSelectProps) => {
  const [options, setOptions] = useState<SelectProps<string>["data"]>([]);

  useEffect(() => {
    void (async () => {
      const { accounts } = await fetchAccountList();
      setOptions(accounts);
    })();
  }, []);

  return (
    <Select
      label={withLabel ? "アカウント" : ""}
      value={accountId}
      onChange={setAccountId}
      data={options}
      placeholder={"アカウントを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
    />
  );
};
