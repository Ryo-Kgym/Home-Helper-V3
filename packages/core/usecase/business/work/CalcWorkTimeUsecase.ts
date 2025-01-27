import { AttendanceState } from "../../../domain/business/attend/AttendanceState";
import { DayOfWeek } from "../../../domain/date/dayOfWeek";
import { DayOfWeekFactory } from "../../../domain/date/DayOfWeekFactory";
import { YYYY_MM_DD } from "../../../domain/date/yyyyMMdd";
import { FindAttendanceGateway } from "../../../gateway/business/work/FindAttendanceGateway";
import { BusinessUsecase } from "../BusinessUsecase";
import { makeDaysOfMonth } from "./makeDaysOfMonth";

export class CalcWorkTimeUsecase
  implements BusinessUsecase<CalcWorkTimeInput, CalcWorkTimeOutput>
{
  private readonly findAttendanceGateway: FindAttendanceGateway;

  constructor(findAttendanceGateway: FindAttendanceGateway) {
    this.findAttendanceGateway = findAttendanceGateway;
  }

  async handle(input: CalcWorkTimeInput) {
    const monthlyList = makeDaysOfMonth(input.baseDate);

    const data = await this.findAttendanceGateway.findBy(
      monthlyList[0] ?? input.baseDate,
      monthlyList.slice(-1)[0] ?? input.baseDate,
    );

    const mergedDailyList: DayAttendance[] = monthlyList.map((date) => {
      const matched = data.days.find((day) => day.date === date);

      if (!matched) {
        return {
          date,
          dayOfWeek: DayOfWeekFactory.of(date),
          startDatetime: undefined,
          endDatetime: undefined,
          breakSecond: undefined,
          workSecond: undefined,
        };
      }

      return {
        date,
        dayOfWeek: DayOfWeekFactory.of(date),
        startDatetime: matched.startDatetime,
        endDatetime: matched.endDatetime,
        breakSecond: matched.breakSecond ?? 0,
        workSecond: 0,
      };
    });

    const baseDateLogs: AttendanceLog[] =
      data.days
        .find((day) => day.date === input.baseDate)
        ?.logs?.map((log) => ({
          id: log.id,
          state: log.state as AttendanceState,
          datetime: log.datetime,
        })) ?? [];
    const baseDateLastLog = baseDateLogs.slice(-1)[0];
    const lastState = (baseDateLastLog?.state ?? "leave") as AttendanceState;

    return {
      days: mergedDailyList,
      lastState,
      baseDateLogs,
    };
  }
}

type CalcWorkTimeInput = {
  baseDate: YYYY_MM_DD;
};

type CalcWorkTimeOutput = {
  days: DayAttendance[];
  lastState: AttendanceState;
  baseDateLogs: AttendanceLog[];
};

type DayAttendance = {
  date: YYYY_MM_DD;
  dayOfWeek: DayOfWeek;
  startDatetime: Date | undefined;
  endDatetime: Date | undefined;
  breakSecond: number | undefined;
  workSecond: number | undefined;
};

type AttendanceLog = {
  id: string;
  state: AttendanceState;
  datetime: Date;
};
