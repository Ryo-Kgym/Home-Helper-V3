/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { ActionIcon } from "@mantine/core";

export const IconPresenter = ({
  onClickHandler,
  children,
}: {
  onClickHandler: () => void;
  iconSize?: number;
  children: React.ReactNode;
}) => (
  <ActionIcon onClick={onClickHandler} variant="subtle" size="lg">
    {children}
  </ActionIcon>
);
