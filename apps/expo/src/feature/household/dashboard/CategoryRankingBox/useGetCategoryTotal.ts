import { useEffect, useState } from "react";
import { useGetDetailsByCategoryQuery } from "@v3/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { totalCategory } from "./total-category";

export const useGetCategoryTotal = ({
  fromDate,
  toDate,
  iocomeType = ["INCOME", "OUTCOME"],
}: {
  fromDate: Date;
  toDate: Date;
  iocomeType?: IocomeType[];
}) => {
  const [loading, setLoading] = useState(false);
  const { groupId } = useSaveGroupId();
  const [{ data }] = useGetDetailsByCategoryQuery({
    variables: {
      groupId,
      fromDate,
      toDate,
      iocomeType,
    },
  });

  const dailyDetails =
    data?.group?.dailyDetails.map((d) => ({
      iocomeType: d.genre.iocomeType as IocomeType,
      categoryId: d.category.id ?? "",
      categoryName: d.category.name ?? "",
      amount: d.amount as number,
    })) ?? [];

  const creditCardDetails =
    data?.group?.creditCardDetails.map((d) => ({
      iocomeType: d.genre.iocomeType as IocomeType,
      categoryId: d.category.id ?? "",
      categoryName: d.category.name ?? "",
      amount: d.amount as number,
    })) ?? [];

  const categoryTotal = totalCategory({
    details: [...dailyDetails, ...creditCardDetails],
    filter: (d) =>
      // カテゴリ：振替は除外する。
      d.categoryId !== data?.group?.transfer?.incomeCategoryId &&
      d.categoryId !== data?.group?.transfer?.outcomeCategoryId,
  });

  useEffect(() => {
    if (!categoryTotal) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [categoryTotal]);

  return {
    categoryTotal,
    loading,
  };
};
