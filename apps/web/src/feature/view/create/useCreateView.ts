import { generateId } from "@feature/app/function/generateId";
import { useGroup } from "@hooks/group/useGroup";
import { useUser } from "@hooks/user/useUser";
import { ViewFieldValue } from "@oneforall/domain/schema/view/viewFieldValue";
import { useInsertViewMutation } from "@v3/graphql/public";

export const useCreateView = () => {
  const { userId } = useUser();
  const { groupId } = useGroup();
  const [, mutation] = useInsertViewMutation();

  const createView = async ({
    viewName,
    fields,
  }: {
    viewName: string;
    fields: ViewFieldValue;
  }) => {
    const viewId = generateId();

    const { error } = await mutation({
      viewId,
      name: viewName,
      fields: Object.entries(fields).map(([index, f]) => ({
        id: generateId(parseInt(index)),
        viewId,
        name: f.fieldName,
        index: parseInt(index),
        fieldKind: f.fieldKind,
        options: f.options,
      })),
      createUserId: userId,
      groupId,
    });
    if (error) {
      throw error;
    }

    return { viewId };
  };

  return {
    createView,
  };
};
