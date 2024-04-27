/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { Icon } from "@components/atoms/Icon";
import { IconPlayerTrackNext } from "@tabler/icons";

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
