import type { DetailType } from "./detail-type";
import type { Color } from "../Color/color-type";

export const detailSetting: Record<
  DetailType,
  {
    color: Color;
  }
> = {
  daily: {
    color: "blue",
  },
  creditCardDetail: {
    color: "yellow",
  },
  creditCardSummary: {
    color: "yellow",
  },
};
