import { useEffect, useState } from "react";
import {
  useGetCategoriesByIdArrayQuery,
  useGetFavoriteFilterQuery,
} from "@v3/graphql/household";

export const useGetFavoriteFilter = (filterId: string) => {
  const [categoryIds, setCategoryIds] = useState<string[]>([]);

  const [{ data, fetching }] = useGetFavoriteFilterQuery({
    variables: { filterId },
  });
  const [{ data: categoryData }] = useGetCategoriesByIdArrayQuery({
    variables: { categoryIds },
  });

  const favoriteFilterArgs =
    data?.filter?.args.map((a) => ({
      id: a.id,
      type: a.type,
      value: a.value,
    })) ?? [];

  const getFavoriteFilterArgs = () => {
    return favoriteFilterArgs.map((a) => {
      if (a.type === "categoryId") {
        return {
          id: a.id,
          type: a.type,
          value: categoryData?.categories.find((c) => c.id === a.value)
            ?.name as string,
        };
      }
      return a;
    });
  };

  useEffect(() => {
    setCategoryIds(
      favoriteFilterArgs
        .filter((a) => a.type === "categoryId")
        .map((a) => a.value),
    );
  }, [fetching]);

  return { getFavoriteFilterArgs };
};
