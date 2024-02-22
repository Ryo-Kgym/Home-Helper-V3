import { useInsertFavoriteFilterMutation } from "@v3/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGenerateId } from "~/hooks/id/useGenerateId";

export const useEditFavoriteFilter = () => {
  const { groupId } = useSaveGroupId();
  const { generateId } = useGenerateId();
  const [, insertMutation] = useInsertFavoriteFilterMutation();

  const editFavoriteFilter = async ({ name }: { name: string }) => {
    const { error } = await insertMutation({
      filterId: generateId(),
      groupId,
      name,
    });
    if (error) {
      throw error;
    }
  };

  return { editFavoriteFilter };
};
