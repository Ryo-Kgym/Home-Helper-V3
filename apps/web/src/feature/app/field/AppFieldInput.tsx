import { useGetAppFieldValue } from "../create/useAppFieldValueState";
import { AddAppFieldContainer } from "./AddAppFieldContainer";

export const AppFieldInput = ({ index }: { index: number }) => {
  const { getBy } = useGetAppFieldValue();
  const field = getBy(index);

  if (!field) {
    return null;
  }

  return <AddAppFieldContainer index={index} />;
};
