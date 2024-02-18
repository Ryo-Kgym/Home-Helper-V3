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

  const favoriteFilterArgs = data?.filter?.args.map((a) => a) ?? [];

  const convertValue = ({ type, value }: { type: string; value: string }) => {
    if (type === "categoryId") {
      return categoryData?.categories.find((c) => c.id === value)
        ?.name as string;
    }
    return value;
  };

  const getFavoriteFilterArgs = () => {
    return favoriteFilterArgs.map((a) => ({
      id: a.id,
      type: a.type,
      value: convertValue({
        type: a.type,
        value: a.value,
      }),
    }));
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
