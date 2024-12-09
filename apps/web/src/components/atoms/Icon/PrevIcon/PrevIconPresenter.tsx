import type { FC } from "react";
import { IconPlayerTrackPrev } from "@tabler/icons";

import { Icon } from "../index";

type PrevIconPresenterProps = {
  onClickHandler: () => void;
  iconSize?: number;
};
export const PrevIconPresenter: FC<PrevIconPresenterProps> = ({
  onClickHandler,
  iconSize = 36,
}) => (
  <Icon onClickHandler={onClickHandler}>
    <IconPlayerTrackPrev size={iconSize} />
  </Icon>
);
