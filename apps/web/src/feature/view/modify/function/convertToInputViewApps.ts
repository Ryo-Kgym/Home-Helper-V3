import {
  inputViewAppFieldsSchema,
  InputViewApps,
} from "@feature/view/modify/type/inputViewApps";
import { GetViewQuery } from "@v3/graphql/public/type";

export const convertToInputViewApps = (data: GetViewQuery): InputViewApps => {
  if (!data.view) {
    return {};
  }

  return Object.fromEntries(
    data.view.viewApps.map((va, index) => [
      index,
      {
        mode: "modify" as const,
        id: va.id,
        appId: va.appId,
        viewFields: inputViewAppFieldsSchema.parse(va.fields),
      },
    ]),
  );
};
