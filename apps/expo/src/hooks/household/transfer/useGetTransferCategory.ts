import { useGetTransferCategoryByQuery } from "@v3/graphql/household";

import type { IocomeType } from "~/types/iocome-type";
import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";

export const useGetTransferCategory = () => {
  const { groupId } = useSaveGroupId();
  const [{ data: transferCategoryData }] = useGetTransferCategoryByQuery({
    variables: {
      groupId,
    },
    requestPolicy: "cache-first",
  });
  const { incomeCategory, outcomeCategory } =
    transferCategoryData?.transferCategory ?? {};

  return {
    incomeCategory: {
      id: incomeCategory?.categoryId ?? "",
      iocomeType: incomeCategory?.genre.iocomeType as IocomeType,
      genreId: incomeCategory?.genre.genreId ?? "",
    },
    outcomeCategory: {
      id: outcomeCategory?.categoryId ?? "",
      iocomeType: outcomeCategory?.genre.iocomeType as IocomeType,
      genreId: outcomeCategory?.genre.genreId ?? "",
    },
  };
};
