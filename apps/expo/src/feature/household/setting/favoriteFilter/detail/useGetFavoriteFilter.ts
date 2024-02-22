import { useEffect, useState } from "react";
import { useGetFavoriteFilterQuery } from "@v3/graphql/household";

import type { FavoriteFilterArgKey } from "../favorite-filter-type";
import type { IocomeType } from "~/types/iocome-type";
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
      key: a.key as FavoriteFilterArgKey,
      value: a.value,
      category:
        a.key === "categoryId" && a.category
          ? {
              id: a.category.id,
              name: a.category.name,
              genre: {
                id: a.category.genre.id,
                name: a.category.genre.name,
                iocomeType: a.category.genre.iocomeType as IocomeType,
              },
            }
          : undefined,
    })) ?? [];

  const convertValue = ({
    key,
    value,
  }: {
    key: FavoriteFilterArgKey;
    value: string;
  }) => {
    if (key === "categoryId") {
      return convertCategoryIdFrom(value);
    }
    return value;
  };

  const getFavoriteFilterArgs = () =>
    favoriteFilterArgs.map((a) => ({
      ...a,
      label: convertValue({
        key: a.key,
        value: a.value,
      }),
    }));

  useEffect(() => {
    setCategoryIds(
      favoriteFilterArgs
        .filter((a) => a.key === "categoryId")
        .map((a) => a.value),
    );
  }, [fetching]);

  return { getFavoriteFilterArgs };
};
