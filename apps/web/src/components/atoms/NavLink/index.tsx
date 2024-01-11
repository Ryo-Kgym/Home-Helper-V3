/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

import { NavLink as MNavLink } from "@mantine/core";
import { HomeHelperSize } from "@components/atoms";

type Props = {
  label: string;
  size?: HomeHelperSize;
  children?: React.ReactNode;
  onclick?: () => void;
  defaultOpened?: boolean;
  disabled?: boolean;
};
export const NavLink = ({
  label,
  size = "pc",
  children,
  onclick,
  defaultOpened = true,
  disabled = false,
}: Props) => {
  const { offset } = SizeMap.get(size) ?? {};

  return (
    <MNavLink
      label={label}
      onClick={onclick}
      childrenOffset={offset}
      defaultOpened={defaultOpened}
      disabled={disabled}
    >
      {children}
    </MNavLink>
  );
};

type Size = {
  offset: number;
};

const SizeMap = new Map<HomeHelperSize, Size>([
  ["pc", { offset: 0 }],
  ["tablet", { offset: 0 }],
  ["mobile", { offset: 0 }],
]);
