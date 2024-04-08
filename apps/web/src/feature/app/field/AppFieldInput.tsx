import { ModifyAppFieldContainer } from "@feature/app/field/ModifyAppFieldContainer";

import { AddAppFieldContainer } from "./AddAppFieldContainer";
import { useGetAppFieldValue } from "../create/useAppFieldValueState";

export const AppFieldInput = ({ index }: { index: number }) => {
  const { getBy } = useGetAppFieldValue();
  const field = getBy(index);

  if (!field) {
    return null;
  }

  if (field.mode === "add") {
    return <AddAppFieldContainer index={index} />;
  }
  return <ModifyAppFieldContainer index={index} currentField={field} />;
};
