import { FC } from "react";

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
  startTime,
  endTime,
  breakTime,
}) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{dayOfWeek}</td>
      <td align={"center"}>{startTime ?? "-"}</td>
      <td align={"center"}>{endTime ?? "-"}</td>
      <td align={"center"}>{breakTime ?? "-"}</td>
    </tr>
  );
};
