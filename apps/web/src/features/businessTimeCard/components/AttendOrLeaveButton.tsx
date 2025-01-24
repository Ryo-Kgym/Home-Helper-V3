"use client";

import { FC } from "react";

import { errorPopup, successPopup } from "../../../function/successPopup";
import { useNavigation } from "../../../routing/client/useNavigation";
import { attendOrLeaveForWork } from "../useServer/attendOrLeaveForWork";

export const AttendOrLeaveButton: FC = () => {
  const { refresh } = useNavigation();

  const onClick = async () => {
    try {
      const { nextState } = await attendOrLeaveForWork(new Date());
      successPopup(
        nextState === "attend" ? "出勤しました。" : "退勤しました。",
      );
      refresh();
    } catch (error) {
      errorPopup("失敗しました。");
      console.error(error);
    }
  };
  return <button onClick={onClick}>出勤 or 退勤</button>;
};
