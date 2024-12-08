import type { ComponentProps } from "react";

import type { ButtonProps } from "~/components/ui/v4/button/index";

export const TailWindCSSButton = ({
  label,
  clickHandler,
  disabled,
  type,
}: ButtonProps) => {
  const { enableBgColor, hoverBgColor, activeBgColor } = typeAttribute[type];
  const bgColor = disabled
    ? "bg-gray-400 cursor-not-allowed"
    : `${enableBgColor} ${hoverBgColor} ${activeBgColor}`;

  const textColor = disabled ? "text-gray-500" : "text-black";

  return (
    <button
      className={`p-2 ${bgColor} ${textColor} rounded-xl shadow-md`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

const typeAttribute: Record<
  ComponentProps<typeof TailWindCSSButton>["type"],
  {
    enableBgColor: `bg-${string}-${number}`;
    hoverBgColor: `hover:bg-${string}-${number}`;
    activeBgColor: `active:bg-${string}-${number}`;
  }
> = {
  create: {
    enableBgColor: "bg-green-200",
    hoverBgColor: "hover:bg-green-300",
    activeBgColor: "active:bg-green-500",
  },
  add: {
    enableBgColor: "bg-blue-200",
    hoverBgColor: "hover:bg-blue-300",
    activeBgColor: "active:bg-blue-500",
  },
  reset: {
    enableBgColor: "bg-gray-200",
    hoverBgColor: "hover:bg-gray-300",
    activeBgColor: "active:bg-gray-500",
  },
  modify: {
    enableBgColor: "bg-yellow-200",
    hoverBgColor: "hover:bg-yellow-300",
    activeBgColor: "active:bg-yellow-500",
  },
  display: {
    enableBgColor: "bg-gray-100",
    hoverBgColor: "hover:bg-gray-100",
    activeBgColor: "active:bg-gray-200",
  },
  save: {
    enableBgColor: "bg-gray-100",
    hoverBgColor: "hover:bg-gray-100",
    activeBgColor: "active:bg-gray-200",
  },
  dangerous: {
    enableBgColor: "bg-red-200",
    hoverBgColor: "hover:bg-red-300",
    activeBgColor: "active:bg-red-500",
  },
};
