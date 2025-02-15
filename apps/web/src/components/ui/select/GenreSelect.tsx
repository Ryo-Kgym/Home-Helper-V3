"use client";

import { useEffect, useState } from "react";

import { IocomeType } from "../../../domain/model/household/IocomeType";
import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";
import { Select } from "../index";
import { SelectProps } from "./v4";

export const GenreSelect = ({
  genreId,
  onChange,
  iocomeType,
  disabled,
  withLabel = false,
}: {
  genreId: string | null;
  onChange: (_: string) => void;
  iocomeType: IocomeType;
  disabled?: boolean;
  withLabel?: boolean;
}) => {
  const [options, setOptions] = useState<SelectProps<string>["data"]>([]);
  const { getGenres } = useGetDetailMaster();

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setOptions(getGenres(iocomeType));
  }, [iocomeType]);

  return (
    <Select
      label={withLabel ? "ジャンル" : ""}
      value={genreId}
      onChange={onChange}
      data={options}
      placeholder={"ジャンルを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
    />
  );
};
