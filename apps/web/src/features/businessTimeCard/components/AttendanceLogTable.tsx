import { FC } from "react";

import { convertToHms } from "../../../function/date/convertToHms";
import { AttendanceLog } from "../types/type";

type Props = {
  logs: AttendanceLog[];
};

export const AttendanceLogTable: FC<Props> = ({ logs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>時刻</th>
          <th>イベント</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <LogRow key={log.id} {...log} />
        ))}
      </tbody>
    </table>
  );
};

const LogRow = (log: AttendanceLog) => {
  return (
    <tr>
      <td align={"center"}>{convertToHms(log.datetime)}</td>
      <td align={"center"}>{log.state === "attend" ? "出勤" : "退勤"}</td>
    </tr>
  );
};
