import { useInsertFavoriteFilterMutation } from "@v3/graphql/household";

import { useSaveGroupId } from "~/hooks/group/useSaveGroupId";
import { useGenerateId } from "~/hooks/id/useGenerateId";

export const useRegisterFavoriteFilter = () => {
  const { groupId } = useSaveGroupId();
  const { generateId } = useGenerateId();
  const [, insertMutation] = useInsertFavoriteFilterMutation();

  const registerFavoriteFilter = async ({ name }: { name: string }) => {
    try {
      const { error } = await insertMutation({
        filterId: generateId(),
        groupId,
        name,
      });
      if (error) {
        throw error;
      }
      alert("登録しました");
    } catch (e) {
      console.error(e);
      alert("登録に失敗しました");
    }
  };

  return { registerFavoriteFilter };
};
