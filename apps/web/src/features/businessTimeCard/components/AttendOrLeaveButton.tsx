"use client";

import type { FC } from "react";

import { errorPopup, successPopup } from "../../../function/successPopup";
import { useNavigation } from "../../../routing/client/useNavigation";
import { attendOrLeaveForWork } from "../useServer/attendOrLeaveForWork";
import styles from "./AttendOrLeaveButton.module.scss";

type Props = {
  lastState: "attend" | "leave";
};

export const AttendOrLeaveButton: FC<Props> = ({ lastState }) => {
  const { refresh } = useNavigation();

  const onClick = async () => {
    try {
      const date = new Date();
      const { nextState } = await attendOrLeaveForWork(date);
      successPopup(
        `${nextState === "attend" ? "出勤しました。" : "退勤しました。"}: ${date.toLocaleTimeString()}`,
      );
      refresh();
    } catch (error) {
      errorPopup("失敗しました。");
      console.error(error);
    }
  };
  return (
    <button
      type="button"
      className={styles.module}
      style={{ backgroundColor: lastState === "attend" ? "red" : "blue" }}
      onClick={onClick}
    >
      {lastState === "attend" ? "退勤" : "出勤"}
    </button>
  );
};
