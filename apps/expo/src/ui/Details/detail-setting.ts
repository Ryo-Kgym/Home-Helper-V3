import type { Color } from "../Color/color-type";
import type { DetailType } from "./detail-type";

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
