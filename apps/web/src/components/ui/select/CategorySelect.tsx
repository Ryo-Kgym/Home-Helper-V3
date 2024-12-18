"use client";

import { useEffect, useState } from "react";

import type { SelectData } from "./v5";
import { fetchCategoryList } from "./fetchCategoryList";
import { Select } from "./v5";

export const CategorySelect = ({
  categoryId,
  setCategoryId,
  genreId,
  disabled,
  withLabel = false,
}: {
  categoryId: string | null;
  setCategoryId: (_: string | null) => void;
  genreId: string | null;
  disabled?: boolean;
  withLabel?: boolean;
}) => {
  const [options, setOptions] = useState<SelectData[]>([]);

  useEffect(() => {
    if (!genreId) return;

    void (async () => {
      const { categories } = await fetchCategoryList({ genreId });
      setOptions(categories);
    })();
  }, [genreId]);

  return (
    <Select
      label={withLabel ? "カテゴリ" : ""}
      value={categoryId}
      onChange={setCategoryId}
      data={options}
      placeholder={"カテゴリを選択してください"}
      withAsterisk
      size={"xs"}
      disabled={disabled}
    />
  );
};
