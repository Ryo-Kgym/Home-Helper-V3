"use client";

import { useEffect, useState } from "react";
import { MultiSelect } from "@mantine/core";

import type { SelectData } from "./v5";
import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";

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

  useEffect(
    () => {
      setOptions(getAccounts());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
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
  );
};
