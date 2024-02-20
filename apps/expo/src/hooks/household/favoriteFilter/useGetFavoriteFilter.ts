import type { GetFavoriteFilterQuery } from "@v3/graphql/household";
import { useGetFavoriteFilterQuery } from "@v3/graphql/household";

export const useGetFavoriteFilter = (filterId: string) => {
  const [{ data, fetching }] = useGetFavoriteFilterQuery({
    variables: { filterId },
  });

  const getFilter = (): FavoriteFilter => {
    const categoryIdList = generateCategoryIdList(data);

    return {
      categoryIdList,
      ...generateDate(data),
    };
  };

  const getProfile = () => ({
    id: filterId,
    name: data?.filter?.name ?? "",
  });

  return { getFilter, getProfile, loading: fetching };
};

type FavoriteFilter = {
  categoryIdList: string[];
  fromDate: Date;
  toDate: Date;
};

const generateCategoryIdList = (data: GetFavoriteFilterQuery | undefined) =>
  data?.filter?.args
    .filter((f) => f.key === "categoryId")
    .map((f) => f.value) ?? [];

const generateDate = (data: GetFavoriteFilterQuery | undefined) => {
  const year = data?.filter?.args.find((f) => f.key === "year")?.value;
  const fromDate = new Date(`${year}-01-01`);
  const toDate = new Date(`${year}-12-31`);

  return { fromDate, toDate };
};
