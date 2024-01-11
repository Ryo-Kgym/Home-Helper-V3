/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { AccountNameInput } from "@components/molecules/CustomTextInput/AccountName";
import { Button } from "components/ui";
import { DisplayOrderInput } from "@components/molecules/CustomNumberInput/DisplayOrder";

type RegisterAccountPresenterProps = {
  accountName: string;
  setAccountName: (_: string) => void;
  displayOrder: number | "";
  setDisplayOrder: (_: number | "") => void;
  accountRegisterHandler: () => void;
  clearInputHandler: () => void;
};
export const RegisterAccountPresenter = ({
  accountName,
  setAccountName,
  displayOrder,
  setDisplayOrder,
  accountRegisterHandler,
  clearInputHandler,
}: RegisterAccountPresenterProps) => (
  <div>
    <Field>
      <AccountNameInput
        accountName={accountName}
        setAccountName={setAccountName}
      />
    </Field>
    <Field>
      <DisplayOrderInput value={displayOrder} onChange={setDisplayOrder} />
    </Field>
    <Button onClick={accountRegisterHandler} colorType={"register"} />
    <Button onClick={clearInputHandler} colorType={"clear"} />
  </div>
);

const Field = ({ children }: { children: React.ReactNode }) => (
  <div className={"py-2"}>{children}</div>
);
