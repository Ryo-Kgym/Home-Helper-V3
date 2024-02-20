import type { GetFavoriteFilterQuery } from "@v3/graphql/household";
import { useGetFavoriteFilterQuery } from "@v3/graphql/household";

import { useGetCategoryTotal } from "~/hooks/household/total/useGetCategoryTotal";
import { genreTypeArray } from "~/types/genre-type";

export const useGetFavoriteFilter = (filterId: string) => {
  const [{ data }] = useGetFavoriteFilterQuery({
    variables: { filterId },
  });

  const categoryIdList = generateCategoryIdList(data);
  const { fromDate, toDate } = generateDate(data);

  const income = useGetCategoryTotal({
    fromDate,
    toDate,
    iocomeType: ["INCOME"],
    genreType: genreTypeArray,
    filter: (d) => categoryIdList.includes(d.categoryId),
  });

  const outcome = useGetCategoryTotal({
    fromDate,
    toDate,
    iocomeType: ["OUTCOME"],
    genreType: genreTypeArray,
    filter: (d) => categoryIdList.includes(d.categoryId),
  });

  return {
    income,
    outcome,
    loading:
      income.categoryTotal.length === 0 && outcome.categoryTotal.length === 0,
    name: data?.filter?.name ?? "",
  };
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
