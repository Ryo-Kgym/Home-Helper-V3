/*
 * Copyright (c) 2023 Ryo-Kgym.
 */

import { TransferListItem } from "@components/ui/index";
import {
  useCreateSummaryCategoryMutation,
  useDeleteSummaryCategoryMutation,
} from "@graphql/hasura/generated/hasuraGraphql";
import { useGroup } from "@hooks/group/useGroup";
import { useGenerateId } from "@hooks/useGenerateId";

export const useCreateSummaryCategories = () => {
  const { groupId } = useGroup();
  const { generate } = useGenerateId();
  const [, deleteMutation] = useDeleteSummaryCategoryMutation();
  const [, createMutation] = useCreateSummaryCategoryMutation();

  const _deleteSummaryCategories = async () =>
    await deleteMutation({ groupId });

  const _insertSummaryCategories = async ({
    selectedCategories,
  }: {
    selectedCategories: TransferListItem[];
  }) =>
    selectedCategories.map(
      async (item, idx) =>
        await createMutation({
          id: generate(),
          groupId,
          categoryId: item.value,
          displayOrder: idx,
        }),
    );

  const createSummaryCategories = async ({
    selectedCategories,
  }: UseCreateSummaryCategoriesArgs) => {
    try {
      await _deleteSummaryCategories();
      await _insertSummaryCategories({ selectedCategories });
    } catch (e) {
      console.error(e);
    }
  };

  return {
    createSummaryCategories,
  };
};

type UseCreateSummaryCategoriesArgs = {
  selectedCategories: TransferListItem[];
};
