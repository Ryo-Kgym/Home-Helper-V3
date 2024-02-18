import { useGetCategoriesByIdArrayQuery } from "@v3/graphql/household";

export const useConvertCategoryId = (categoryIds: string[]) => {
  const [{ data: categoryData }] = useGetCategoriesByIdArrayQuery({
    variables: { categoryIds },
  });

  const convert = (value: string) => {
    const category = categoryData?.categories.find((c) => c.id === value);
    return category?.genre.name + " - " + category?.name;
  };

  return { convert };
};
