import { generateId } from "@feature/app/function/generate-id";
import { InputViewApps } from "@feature/view/modify/type/inputViewApps";
import { useUpdateViewMutation } from "@v3/graphql/public";

export const useModifyView = ({ viewId }: { viewId: string }) => {
  const [, mut] = useUpdateViewMutation();

  const modifyView = async (viewApp: InputViewApps) => {
    const id = generateId();

    const viewAppObjects = Object.values(viewApp).map((app) => {
      if (app.mode === "add") {
        return {
          id,
          viewId,
          appId: app.appId,
          fields: app.viewFields,
        };
      }

      if (app.mode === "modify") {
        return {
          id: app.id,
          viewId,
          appId: app.appId,
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

    return { viewAppId: id };
  };

  return { modifyView };
};
