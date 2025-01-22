import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDailyAttendance } from "../server/fetchDailyAttendance";
import { AttendanceButton } from "./AttendanceButton";
import { DailyAttendanceTable } from "./DailyAttendanceTable";

export const BusinessTimeCardServer = async ({
  baseDate,
}: {
  baseDate: YYYY_MM_DD;
}) => {
  const { days } = await fetchDailyAttendance(baseDate);

  return (
    <div>
      <AttendanceButton label="出勤" />
      <AttendanceButton label="退勤" />
      <DailyAttendanceTable days={days} />
    </div>
  );
};
