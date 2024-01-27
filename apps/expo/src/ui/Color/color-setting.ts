import type { Color } from "./color-type";

export const colorSetting: {
  [color in Color]: {
    bg: string;
  };
} = {
  blue: { bg: "bg-blue-50" },
  yellow: { bg: "bg-yellow-50" },
};
