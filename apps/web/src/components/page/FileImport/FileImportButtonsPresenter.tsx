/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Button } from "@components/ui";

type FileImportPresenterProps = {
  importDisabled: boolean;
  registerDisabled: boolean;
  importClickHandler: () => void;
  clearClickHandler: () => void;
  registerClickHandler: () => void;
};
export const FileImportButtonsPresenter = ({
  importDisabled,
  registerDisabled,
  importClickHandler,
  clearClickHandler,
  registerClickHandler,
}: FileImportPresenterProps) => (
  <div className={"flex"}>
    <Button
      onClick={importClickHandler}
      disabled={importDisabled}
      colorType={"import"}
    />
    <Button onClick={clearClickHandler} colorType={"clear"} />
    <Button
      onClick={registerClickHandler}
      colorType={"register"}
      disabled={registerDisabled}
    />
  </div>
);
