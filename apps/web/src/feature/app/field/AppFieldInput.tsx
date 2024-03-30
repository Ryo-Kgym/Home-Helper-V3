import { useEffect } from "react";

import { useGetAppFieldValue } from "../create/useAppFieldValueState";
import { AddAppFieldContainer } from "./AddAppFieldContainer";

export const AppFieldInput = ({ index }: { index: number }) => {
  const { fields, getBy } = useGetAppFieldValue();
  const field = getBy(index);

  useEffect(() => {
    console.log("fields", fields, index);
  }, [fields]);

  if (!field) {
    return null;
  }

  return <AddAppFieldContainer index={index} />;
};
