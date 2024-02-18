import { useGetCategoriesByIdArrayQuery } from "@v3/graphql/household";

export const useConvertCategoryId = (categoryIds: string[]) => {
  const [{ data: categoryData }] = useGetCategoriesByIdArrayQuery({
    variables: { categoryIds },
  });

  const convert = (value: string) =>
    categoryData?.categories.find((c) => c.id === value)?.name as string;

  return { convert };
};
