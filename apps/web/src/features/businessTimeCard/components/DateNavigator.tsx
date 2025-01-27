"use client";

import { FC } from "react";
import {
  convertToNextDate,
  convertToPrevDate,
} from "@/core/function/date/convertToDate";

import { useRouter } from "../../../routing/client/useRouter";
import { paths } from "../../../routing/paths";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";

type Props = {
  baseDate: YYYY_MM_DD;
};

export const DateNavigator: FC<Props> = ({ baseDate }) => {
  const { push } = useRouter();

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <button
        onClick={() =>
          push(paths.business.timecard(convertToPrevDate(baseDate)))
        }
      >
        {"< 前の日"}
      </button>
      <span>{baseDate}</span>
      <button
        onClick={() =>
          push(paths.business.timecard(convertToNextDate(baseDate)))
        }
      >
        {"次の日 >"}
      </button>
    </div>
  );
};
