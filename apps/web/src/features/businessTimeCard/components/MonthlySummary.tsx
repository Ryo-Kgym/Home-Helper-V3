import { FC } from "react";

import { convertSecondToHour } from "../../../function/date/convertSecond";

type Props = {
  totalWorkSecond: number;
};

export const MonthlySummary: FC<Props> = ({ totalWorkSecond }) => {
  return (
    <table
      style={{
        width: "100%",
      }}
    >
      <thead>
        <tr>
          <th>月間勤務時間</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td align={"center"}>{convertSecondToHour(totalWorkSecond).hhmm}</td>
        </tr>
      </tbody>
    </table>
  );
};
