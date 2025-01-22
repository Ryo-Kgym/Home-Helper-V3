"use client";

import { FC } from "react";

import { errorPopup, successPopup } from "../../../function/successPopup";
import { attendAtWork } from "../useServer/attendAtWork";

type Props = {
  label: string;
  onClick: () => void;
};
const AttendanceButton: FC<Props> = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};

export const AttendanceAtWorkButton: FC = () => {
  const onClick = async () => {
    try {
      await attendAtWork(new Date(), "attend");
      successPopup("出勤しました。");
    } catch (error) {
      errorPopup("失敗しました。");
      console.error(error);
    }
  };
  return <AttendanceButton label="出勤" onClick={onClick} />;
};

export const LeaveWorkButton: FC = () => {
  const onClick = async () => {
    try {
      await attendAtWork(new Date(), "leave");
      successPopup("退出しました。");
    } catch (error) {
      errorPopup("失敗しました。");
      console.error(error);
    }
  };
  return <AttendanceButton label="退勤" onClick={onClick} />;
};
