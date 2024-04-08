/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { categoryState } from "@recoil/categoryState";
import { useRecoilState } from "recoil";

export const useCategoryHolder = () => {
  const [category, setCategory] = useRecoilState(categoryState);

  const save = ({ categoryId: id }: { categoryId: string }) => {
    setCategory({ id });
  };

  return {
    categoryId: category.id,
    save,
  };
};
