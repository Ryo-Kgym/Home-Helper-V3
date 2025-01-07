"use client";

import { ComponentProps, FC, useEffect, useState } from "react";

import { useGetDetailMaster } from "../../../features/householdRegisterDaily/hooks/useDetailMaster";
import { TagInput } from "./TagInput";

type Props = {
  values: ComponentProps<typeof TagInput>["data"][number]["value"][];
  onChange: (
    values: ComponentProps<typeof TagInput>["data"][number]["value"][],
  ) => void;
  label?: string;
};

export const TagInputWrapper: FC<Props> = ({ values, onChange, label }) => {
  const [data, setData] = useState<ComponentProps<typeof TagInput>["data"]>([]);
  const { getTags } = useGetDetailMaster();

  useEffect(
    () => {
      setData(getTags());
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <TagInput values={values} onChange={onChange} data={data} label={label} />
  );
};
