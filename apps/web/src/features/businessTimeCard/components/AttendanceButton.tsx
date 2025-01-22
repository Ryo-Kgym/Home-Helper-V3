import { FC } from "react";

type Props = {
  label: string;
};
export const AttendanceButton: FC<Props> = ({ label }) => {
  return <button>{label}</button>;
};
