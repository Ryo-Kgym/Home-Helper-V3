import { errorPopup, successPopup } from "@function/successPopup";
import { useCreateAccount } from "@hooks/household/account/useCreateAccount";
import { useState } from "react";

import { RegisterAccountPresenter } from "./RegisterAccountPresenter";

export const RegisterAccountContainer = () => {
  const [accountName, setAccountName] = useState<string>("");
  const [displayOrder, setDisplayOrder] = useState<number | "">(0);

  const hasInvalidValue = accountName === "" || displayOrder === "";

  const { registerAccount } = useCreateAccount({
    accountName,
    displayOrder: displayOrder === "" ? 0 : displayOrder,
  });

  const accountRegisterHandler = () => {
    if (hasInvalidValue) {
      return;
    }
    registerAccount()
      .then(() => successPopup("登録しました"))
      .catch(() => errorPopup("登録に失敗しました"));
  };

  const clearInputHandler = () => {
    setAccountName("");
    setDisplayOrder(0);
  };
  return (
    <RegisterAccountPresenter
      accountName={accountName}
      setAccountName={setAccountName}
      displayOrder={displayOrder}
      setDisplayOrder={setDisplayOrder}
      accountRegisterHandler={accountRegisterHandler}
      clearInputHandler={clearInputHandler}
    />
  );
};
