"use client";

import { ComponentProps, FC, useEffect, useState } from "react";

import { fetchTags } from "./fetchTags";
import { TagInput } from "./TagInput";

type Props = {
  values: ComponentProps<typeof TagInput>["data"][number]["value"][];
};

export const TagInputWrapper: FC<Props> = () => {
  const [data, setData] = useState<ComponentProps<typeof TagInput>["data"]>([]);

  useEffect(() => {
    void (async () => {
      setData((await fetchTags()).data);
    })();
  }, []);

  return <TagInput data={data} />;
};
