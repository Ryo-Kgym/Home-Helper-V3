/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { useRecoilState } from "recoil";
import { categoryState } from "@recoil/categoryState";

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
