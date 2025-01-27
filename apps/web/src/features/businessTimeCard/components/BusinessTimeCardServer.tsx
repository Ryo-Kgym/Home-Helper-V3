import { Tabs } from "../../../components/ui/v4/tab";
import { YYYY_MM_DD } from "../../../types/yyyyMMdd";
import { fetchDailyAttendance } from "../server/fetchDailyAttendance";
import { AttendanceLogTable } from "./AttendanceLogTable";
import { AttendOrLeaveButton } from "./AttendOrLeaveButton";
import { DailyAttendanceTable } from "./DailyAttendanceTable";
import { MonthlySummary } from "./MonthlySummary";

export const BusinessTimeCardServer = async ({
  baseDate,
}: {
  baseDate: YYYY_MM_DD;
}) => {
  const { days, lastState, baseDateLogs, totalWorkSecond } =
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
      <MonthlySummary totalWorkSecond={totalWorkSecond} />
      <div
        style={{
          display: "flex",
          gap: "40px",
          alignItems: "start",
        }}
      >
        <Tabs
          tabs={{
            monthly: {
              label: "日毎",
              Component: <DailyAttendanceTable days={days} />,
            },
            log: {
              label: "履歴",
              Component: <AttendanceLogTable logs={baseDateLogs} />,
            },
          }}
          defaultTab={"monthly"}
        />
      </div>
    </div>
  );
};
