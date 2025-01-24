import { FC } from "react";

import { convertSecondToMinute } from "../../../function/date/convertSecond";
import { convertToHms } from "../../../function/date/convertToHms";
import { DayAttendance } from "../types/type";

type Props = {
  days: DayAttendance[];
};

export const DailyAttendanceTable: FC<Props> = ({ days }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>日付</th>
          <th>曜日</th>
          <th>出勤時間</th>
          <th>退出時間</th>
          <th>休憩時間</th>
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
}) => {
  return (
    <tr>
      <td>{date.slice(5, 10)}</td>
      <td>{dayOfWeek}</td>
      <td align={"center"}>{convertToHms(startDatetime, "-")}</td>
      <td align={"center"}>{convertToHms(endDatetime, "-")}</td>
      <td align={"center"}>{convertSecondToMinute(breakSecond, "-").mmss}</td>
    </tr>
  );
};
