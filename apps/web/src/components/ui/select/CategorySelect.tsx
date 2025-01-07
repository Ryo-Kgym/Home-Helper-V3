"use client";

import { useEffect, useState } from "react";

import type { SelectData } from "./v5";
import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";
import { Select } from "./v5";

export const CategorySelect = ({
  categoryId,
  onChange,
  genreId,
  disabled,
  withLabel = false,
}: {
  categoryId: string | null;
  onChange: (_: string) => void;
  genreId: string | null;
  disabled?: boolean;
  withLabel?: boolean;
}) => {
  const [options, setOptions] = useState<SelectData[]>([]);
  const { getCategories } = useGetDetailMaster();

  useEffect(
    () => {
      if (!genreId) return;

      setOptions(getCategories(genreId));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [genreId],
  );

  return (
    <Select
      label={withLabel ? "カテゴリ" : ""}
      value={categoryId}
      onChange={onChange}
      data={options}
      placeholder={"カテゴリを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
    />
  );
};
