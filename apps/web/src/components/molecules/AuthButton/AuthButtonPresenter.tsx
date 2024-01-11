/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Frame } from "./";

export const AuthButtonPresenter = ({
  onClickHandler,
  label,
}: {
  onClickHandler: () => void;
  label: string;
}) => (
  <Frame onClickHandler={onClickHandler}>
    <h3 className="text-2xl font-bold">{label} &rarr;</h3>
  </Frame>
);
