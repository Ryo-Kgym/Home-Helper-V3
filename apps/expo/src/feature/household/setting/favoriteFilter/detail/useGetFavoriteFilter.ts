import { useGetFavoriteFilterQuery } from "@v3/graphql/household";

export const useGetFavoriteFilter = (filterId: string) => {
  const [{ data }] = useGetFavoriteFilterQuery({ variables: { filterId } });
  const favoriteFilterArgs =
    data?.filter?.args.map((a) => ({
      id: a.id,
      type: a.type,
      value: a.value,
    })) ?? [];

  return { favoriteFilterArgs };
};
