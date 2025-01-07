"use client";

import { ComponentProps, FC, useEffect } from "react";
import { IocomeType } from "domain/model/household/IocomeType";

import { SelectProps } from "../../../components/ui/select/v4";
import { TagInput } from "../../../components/ui/tag/TagInput";
import { useSetDetailMaster } from "../hooks/useDetailMaster";
import { RegisterDailyButton } from "./RegisterDailyButton";

type Props = {
  accountData: SelectProps<string>["data"];
  genreData: Record<IocomeType, SelectProps<string>["data"]>;
  categoryData: Record<string, SelectProps<string>["data"]>;
  tagData: ComponentProps<typeof TagInput>["data"];
};

export const RegisterDailyButtonClient: FC<Props> = ({
  accountData,
  genreData,
  categoryData,
  tagData,
}) => {
  const set = useSetDetailMaster();

  useEffect(
    () => {
      set.setAccountData(accountData);
      set.setGenreData(genreData);
      set.setCategoryData(categoryData);
      set.setTagData(tagData);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <RegisterDailyButton />;
};
