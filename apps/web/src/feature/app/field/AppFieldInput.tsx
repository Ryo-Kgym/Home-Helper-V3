import { ModifyAppFieldContainer } from "@feature/app/field/ModifyAppFieldContainer";

import { useGetAppFieldValue } from "../create/useAppFieldValueState";
import { AddAppFieldContainer } from "./AddAppFieldContainer";

export const AppFieldInput = ({ index }: { index: number }) => {
  const { getBy } = useGetAppFieldValue();
  const field = getBy(index);

  if (field) {
    return <ModifyAppFieldContainer index={index} currentField={field} />;
  }
  return <AddAppFieldContainer index={index} />;
};
