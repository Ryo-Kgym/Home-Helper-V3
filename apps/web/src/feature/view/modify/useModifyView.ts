import { generateId } from "@feature/app/function/generate-id";
import { InputViewApp } from "@feature/view/inputViewApp";
import { useUpdateViewMutation } from "@v3/graphql/public";

export const useModifyView = ({ viewId }: { viewId: string }) => {
  const [, mut] = useUpdateViewMutation();

  const modifyView = async (viewApp: InputViewApp) => {
    const viewAppObjects = viewApp.apps.map((app) => {
      if (app.mode === "add") {
        return {
          id: generateId(),
          viewId,
          appId: app.appId,
          fields: app.viewFields,
        };
      }

      if (app.mode === "modify") {
        return {
          id: app.id,
          viewId,
          fields: app.viewFields,
        };
      }

      throw new Error("invalid mode");
    });

    const { error } = await mut({
      viewAppObjects,
    });
    if (error) {
      throw new Error(error.message);
    }
  };

  return { modifyView };
};
