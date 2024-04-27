import { Icon } from "@components/atoms/Icon";
import { IconPlayerTrackPrev } from "@tabler/icons";

import type { FC } from "react";

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
