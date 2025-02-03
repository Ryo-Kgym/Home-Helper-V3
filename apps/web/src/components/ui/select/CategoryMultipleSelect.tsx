"use client";

import { useEffect, useState } from "react";
import { MultiSelect } from "@mantine/core";

import type { SelectData } from "./v5";
import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";

export const CategoryMultipleSelect = ({
  categoryId,
  onChange,
  disabled,
  nonLabel = false,
}: {
  categoryId: string[];
  onChange: (_: string[]) => void;
  disabled?: boolean;
  nonLabel?: boolean;
}) => {
  const [options, setOptions] = useState<SelectData[]>([]);
  const { getAllCategories } = useGetDetailMaster();

  useEffect(
    () => {
      setOptions(getAllCategories());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <MultiSelect
      label={nonLabel ? "" : "カテゴリ"}
      value={categoryId}
      onChange={onChange}
      data={options}
      placeholder={"カテゴリを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
      multiple
    />
  );
};
