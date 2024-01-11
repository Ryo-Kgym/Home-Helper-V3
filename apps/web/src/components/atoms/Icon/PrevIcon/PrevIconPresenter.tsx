import type { FC } from "react";
import { Icon } from "@components/atoms/Icon";
import { IconPlayerTrackPrev } from "@tabler/icons";

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
