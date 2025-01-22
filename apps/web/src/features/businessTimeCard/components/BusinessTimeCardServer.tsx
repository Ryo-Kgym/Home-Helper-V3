import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDailyAttendance } from "../server/fetchDailyAttendance";
import { AttendanceAtWorkButton, LeaveWorkButton } from "./AttendanceButton";
import { DailyAttendanceTable } from "./DailyAttendanceTable";

export const BusinessTimeCardServer = async ({
  baseDate,
}: {
  baseDate: YYYY_MM_DD;
}) => {
  const { days } = await fetchDailyAttendance(baseDate);

  return (
    <div>
      <AttendanceAtWorkButton />
      <LeaveWorkButton />
      <DailyAttendanceTable days={days} />
    </div>
  );
};
