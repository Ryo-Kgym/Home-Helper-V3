"use client";

import { ComponentProps, FC, useEffect, useState } from "react";

import { fetchTags } from "./fetchTags";
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

  useEffect(() => {
    void (async () => {
      setData((await fetchTags()).data);
    })();
  }, []);

  return (
    <TagInput values={values} onChange={onChange} data={data} label={label} />
  );
};
