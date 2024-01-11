/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TransferListItem } from "@components/ui/index";
import {
  useGetAllCategoryListWithCriteriaQuery,
  useGetSummaryCategoriesQuery,
} from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";

export const useGetSummaryCategories = () => {
  const { groupId } = useGroup();
  const [{ data: summaryCategoriesData }] = useGetSummaryCategoriesQuery({
    variables: {
      groupId,
    },
  });

  const selectedCategories: TransferListItem[] =
    summaryCategoriesData?.categories
      ?.map((c) => c.category)
      .map((c) => ({
        value: c!.id,
        label: c!.name,
        group: c!.genre?.name,
      })) ?? [];

  const [{ data }] = useGetAllCategoryListWithCriteriaQuery({
    variables: {
      validCategoryIn: [true],
      validGenreIn: [true],
      iocomeTypeIn: ["INCOME", "OUTCOME"],
      categoryNotIn: selectedCategories.map((c) => c.value),
    },
  });

  const unselectCategories: TransferListItem[] =
    data?.genres?.flatMap((g) => {
      return g.categories.map((c) => {
        return { value: c.id, label: c.name, group: g.name };
      });
    }) ?? [];

  return {
    unselectCategories,
    selectedCategories,
  };
};
