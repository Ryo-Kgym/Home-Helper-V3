import { useGetViewFieldValue } from "@feature/view/create/useGetViewFieldValue";

import { AddViewFieldContainer } from "./AddViewFieldContainer";
import { ModifyViewFieldContainer } from "./ModifyViewFieldContainer";

export const ViewFieldInput = ({ index }: { index: number }) => {
  const { getBy } = useGetViewFieldValue();
  const field = getBy(index);

  if (!field) {
    return null;
  }

  if (field.mode === "add") {
    return <AddViewFieldContainer index={index} />;
  }
  return <ModifyViewFieldContainer index={index} currentField={field} />;
};
