import type { Color } from "./color-type";

export const colorSetting: {
  [color in Color]: {
    bg: string;
  };
} = {
  default: { bg: "bg-inherit" },
  blue: { bg: "bg-blue-50" },
  yellow: { bg: "bg-yellow-50" },
};
