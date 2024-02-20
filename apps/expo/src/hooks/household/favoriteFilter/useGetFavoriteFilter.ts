import { useGetFavoriteFilterQuery } from "@v3/graphql/household";

export const useGetFavoriteFilter = (filterId: string) => {
  const [{ data }] = useGetFavoriteFilterQuery({
    variables: { filterId },
  });

  const getFilter = (): FavoriteFilter => {
    const categoryIdList =
      data?.filter?.args
        .filter((f) => f.key === "categoryId")
        .map((f) => f.value) ?? [];

    return {
      categoryIdList,
      fromDate: new Date("2023-01-01"),
      toDate: new Date("2024-12-31"),
    };
  };

  return { getFilter };
};

type FavoriteFilter = {
  categoryIdList: string[];
  fromDate: Date;
  toDate: Date;
};
