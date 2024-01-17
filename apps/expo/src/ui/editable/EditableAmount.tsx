import type { IocomeType } from "~/types/iocome-type";
import type { EditableProps } from "~/ui/editable/editable-props";
import { Amount } from "../Amount";

export const EditableAmount = ({
  value,
  className = "",
  iocomeType,
}: EditableProps<number> & { iocomeType: IocomeType }) => {
  return (
    <Amount className={className} amount={value} iocomeType={iocomeType} />
  );
};
