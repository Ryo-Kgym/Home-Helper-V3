/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Button } from "@components/ui";
import { Input } from "@components/atoms/Input";
import { InputValidationMessage } from "@components/atoms/Input/InputValidator";

type ExchangeItemRegisterPresenterProps = {
  itemName: string;
  setItemName: (_: string) => void;
  point: number;
  setPoint: (_: number) => void;
  registerOnClick: () => void;
};
export const ExchangeItemRegisterPresenter = ({
  itemName,
  setItemName,
  point,
  setPoint,
  registerOnClick,
}: ExchangeItemRegisterPresenterProps) => (
  <div className={"text-4xl"}>
    <ItemNameItem value={itemName} setValue={setItemName} />
    <PointItem value={point} setValue={setPoint} />
    <div className={"grid place-content-center"}>
      <Button colorType={"register"} onClick={registerOnClick} />
    </div>
  </div>
);

const ItemNameItem = ({ value, setValue }: ItemProps) => (
  <ItemStyler>
    <Input
      label={"項目名"}
      value={value}
      onChange={setValue}
      validator={{
        result: String(value).length < 1,
        message: InputValidationMessage.EMPTY,
      }}
    />
  </ItemStyler>
);

const PointItem = ({ value, setValue }: ItemProps) => (
  <ItemStyler>
    <Input
      label={"ポイント"}
      type={"number"}
      value={value}
      onChange={setValue}
      validator={{
        result: (Number(value) ?? 0) < 1,
        message: "0より大きい値を入力してね。",
      }}
    />
  </ItemStyler>
);
type ItemProps = {
  value: string | number;
  setValue: (_: any) => void;
};

const ItemStyler = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => <div className={"px-8 py-8 border-b-2"}>{children}</div>;
