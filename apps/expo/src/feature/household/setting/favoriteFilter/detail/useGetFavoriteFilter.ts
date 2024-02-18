import { useEffect, useState } from "react";
import { useGetFavoriteFilterQuery } from "@v3/graphql/household";

import type { FavoriteFilterKey } from "../favorite-filter-type";
import { useConvertCategoryId } from "./useConvertCategoryId";

export const useGetFavoriteFilter = (filterId: string) => {
  const [categoryIds, setCategoryIds] = useState<string[]>([]);

  const [{ data, fetching }] = useGetFavoriteFilterQuery({
    variables: { filterId },
  });
  const { convert: convertCategoryIdFrom } = useConvertCategoryId(categoryIds);

  const favoriteFilterArgs =
    data?.filter?.args.map((a) => ({
      id: a.id,
      key: a.key as FavoriteFilterKey,
      value: a.value,
    })) ?? [];

  const convertValue = ({
    key,
    value,
  }: {
    key: FavoriteFilterKey;
    value: string;
  }) => {
    if (key === "categoryId") {
      return convertCategoryIdFrom(value);
    }
    return value;
  };

  const getFavoriteFilterArgs = () => {
    return favoriteFilterArgs.map((a) => ({
      id: a.id,
      key: a.key,
      value: convertValue({
        key: a.key,
        value: a.value,
      }),
    }));
  };

  useEffect(() => {
    setCategoryIds(
      favoriteFilterArgs
        .filter((a) => a.key === "categoryId")
        .map((a) => a.value),
    );
  }, [fetching]);

  return { getFavoriteFilterArgs };
};
