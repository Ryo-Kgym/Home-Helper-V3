import { useGetTransferCategoryByQuery } from "@v3/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const useGetTransferCategory = () => {
  const { groupId } = useSaveGroupId();
  const [{ data: transferCategoryData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
  });
  const { incomeCategory, outcomeCategory } =
    transferCategoryData?.transferCategory ?? {};

  return {
    incomeCategory: { id: incomeCategory?.categoryId ?? "" },
    outcomeCategory: { id: outcomeCategory?.categoryId ?? "" },
  };
};
