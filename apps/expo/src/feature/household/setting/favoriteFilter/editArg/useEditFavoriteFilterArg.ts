import { useInsertFavoriteFilterArgMutation } from "@v3/graphql/household";

import type { FavoriteFilterArgKey } from "~/feature/household/setting/favoriteFilter/favorite-filter-type";
import { useGenerateId } from "~/hooks/id/useGenerateId";

export const useEditFavoriteFilterArg = () => {
  const { generateId } = useGenerateId();
  const [, insertMutation] = useInsertFavoriteFilterArgMutation();

  const addFavoriteFilterArg = async ({
    filterId,
    key,
    value,
  }: {
    filterId: string;
    key: FavoriteFilterArgKey;
    value: string;
  }) => {
    try {
      const { error } = await insertMutation({
        argId: generateId(),
        filterId,
        key,
        value,
      });
      if (error) {
        throw error;
      }
    } catch (e) {
      console.error(e);
    }
  };

  return {
    addFavoriteFilterArg,
  };
};
