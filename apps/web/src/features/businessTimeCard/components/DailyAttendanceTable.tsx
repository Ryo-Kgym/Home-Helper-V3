import { FC } from "react";

import {
  convertSecondToHour,
  convertSecondToMinute,
} from "../../../function/date/convertSecond";
import { convertToHms } from "../../../function/date/convertToHms";
import { DayAttendance } from "../types/type";
import styles from "./DailyAttendanceTable.module.scss";

type Props = {
  days: DayAttendance[];
};

export const DailyAttendanceTable: FC<Props> = ({ days }) => {
  return (
    <table className={styles.module}>
      <thead>
        <tr className={styles.tr}>
          <th>日付</th>
          <th>曜日</th>
          <th>出勤</th>
          <th>退出</th>
          <th>休憩</th>
          <th>勤務時間</th>
        </tr>
      </thead>
      <tbody>
        {days.map((day) => (
          <DayRow key={day.date} {...day} />
        ))}
      </tbody>
    </table>
  );
};

export const DayRow: FC<DayAttendance> = ({
  date,
  dayOfWeek,
  startDatetime,
  endDatetime,
  breakSecond,
  workSecond,
}) => {
  return (
    <tr className={styles.tr}>
      <td align={"center"}>{date.slice(8, 10)}</td>
      <td align={"center"}>{dayOfWeek}</td>
      <td align={"center"}>{convertToHms(startDatetime, "-")}</td>
      <td align={"center"}>{convertToHms(endDatetime, "-")}</td>
      <td align={"center"}>{convertSecondToMinute(breakSecond, "-").minute}</td>
      <td align={"center"}>{convertSecondToHour(workSecond, "-").hhmm}</td>
    </tr>
  );
};
