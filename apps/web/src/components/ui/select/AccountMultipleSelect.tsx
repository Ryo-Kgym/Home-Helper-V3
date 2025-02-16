"use client";

import { MultiSelect } from "@mantine/core";
import { useEffect, useState } from "react";

import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";
import { AllSelectButtons } from "./AllSelectButtons";
import type { SelectData } from "./v5";

export const AccountMultipleSelect = ({
  accountIds,
  onChange,
  disabled,
  nonLabel = false,
}: {
  accountIds: string[];
  onChange: (_: string[]) => void;
  disabled?: boolean;
  nonLabel?: boolean;
}) => {
  const [options, setOptions] = useState<SelectData[]>([]);
  const { getAccounts } = useGetDetailMaster();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setOptions(getAccounts());
  }, []);

  return (
    <>
      <MultiSelect
        label={nonLabel ? "" : "アカウント"}
        value={accountIds}
        onChange={onChange}
        data={options}
        placeholder={"アカウントを選択してください"}
        withAsterisk
        size={"xs"}
        disabled={disabled}
        multiple
      />
      <AllSelectButtons options={options} onChange={onChange} />
    </>
  );
};
