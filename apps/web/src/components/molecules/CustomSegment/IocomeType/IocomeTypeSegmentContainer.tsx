import { IocomeType } from "../../../../domain/model/household/IocomeType";
import { IocomeTypeSegmentPresenter } from "./IocomeTypeSegmentPresenter";

type IocomeTypeSegmentContainerProps = {
  iocomeType: IocomeType;
  setIocomeType: (_: IocomeType) => void;
  disabled?: boolean;
};
export const IocomeTypeSegmentContainer = ({
  iocomeType,
  setIocomeType,
  disabled = false,
}: IocomeTypeSegmentContainerProps) => {
  const onChange = (value: string) => {
    setIocomeType(value as unknown as IocomeType);
  };

  return (
    <IocomeTypeSegmentPresenter
      value={iocomeType}
      onChange={onChange}
      disabled={disabled}
    />
  );
};
