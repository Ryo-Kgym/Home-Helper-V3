import type { MantineColor, MantineSize } from "@mantine/core";
import { Button } from "@mantine/core";

import type { ButtonColorType, ButtonProps } from "./index";

/**
 * @deprecated
 */
export const MantineButton = ({
  onClick,
  type = "default",
  label = type.toUpperCase(),
  disabled = false,
}: ButtonProps) => {
  const {
    // @formatter:off
    className,
    size,
    color,
  } = PropMap.get(type) ?? {};

  return (
    <Button
      radius="sm"
      className={className}
      size={size}
      color={color}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};

type ButtonStyleProp = {
  className: string;
  size: MantineSize;
  color: MantineColor;
};

const PropMap = new Map<ButtonColorType, ButtonStyleProp>([
  ["default", { className: "m-2", size: "xl", color: "dark" }],
  ["register", { className: "m-2", size: "xl", color: "green" }],
  ["update", { className: "m-2", size: "xl", color: "indigo" }],
  ["add", { className: "m-2", size: "xl", color: "orange" }],
  ["back", { className: "m-2", size: "xl", color: "gray" }],
  ["clear", { className: "m-2", size: "xl", color: "gray" }],
  ["reset", { className: "m-2", size: "xl", color: "gray" }],
  ["import", { className: "m-2", size: "xl", color: "blue" }],
  ["delete", { className: "m-2", size: "xl", color: "red" }],
  ["detail", { className: "", size: "sm", color: "blue" }],
  ["done", { className: "m-2", size: "xl", color: "green" }],
  ["cancel", { className: "m-2", size: "xl", color: "gray" }],
]);
