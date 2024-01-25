import { useEffect, useState } from "react";
import { useGetDetailsByCategoryQuery } from "@v3/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { totalCategory } from "./total-category";

export const useGetCategoryTotal = ({
  fromDate,
  toDate,
}: {
  fromDate: Date;
  toDate: Date;
}) => {
  const [loading, setLoading] = useState(false);
  const { groupId } = useSaveGroupId();
  const [{ data }] = useGetDetailsByCategoryQuery({
    variables: {
      groupId,
      fromDate,
      toDate,
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
      d.iocomeType === "OUTCOME" &&
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
