import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDailyAttendance } from "../server/fetchDailyAttendance";
import { AttendOrLeaveButton } from "./AttendOrLeaveButton";
import { DailyAttendanceTable } from "./DailyAttendanceTable";

export const BusinessTimeCardServer = async ({
  baseDate,
}: {
  baseDate: YYYY_MM_DD;
}) => {
  const { days } = await fetchDailyAttendance(baseDate);

  return (
    <div>
      <AttendOrLeaveButton />
      <DailyAttendanceTable days={days} />
    </div>
  );
};
