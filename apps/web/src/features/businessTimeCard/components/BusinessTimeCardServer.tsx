import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDailyAttendance } from "../server/fetchDailyAttendance";
import { AttendanceLogTable } from "./AttendanceLogTable";
import { AttendOrLeaveButton } from "./AttendOrLeaveButton";
import { DailyAttendanceTable } from "./DailyAttendanceTable";

export const BusinessTimeCardServer = async ({
  baseDate,
}: {
  baseDate: YYYY_MM_DD;
}) => {
  const { days, lastState, baseDateLogs } =
    await fetchDailyAttendance(baseDate);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <AttendOrLeaveButton lastState={lastState} />
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <DailyAttendanceTable days={days} />
        <AttendanceLogTable logs={baseDateLogs} />
      </div>
    </div>
  );
};
