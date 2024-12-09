/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { IconPlayerTrackNext } from "@tabler/icons";

import { Icon } from "../index";

export const NextIconPresenter = ({
  onClickHandler,
  iconSize = 36,
}: {
  onClickHandler: () => void;
  iconSize?: number;
}) => (
  <Icon onClickHandler={onClickHandler}>
    <IconPlayerTrackNext size={iconSize} />
  </Icon>
);
