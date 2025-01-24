import { AttendanceState } from "../../../domain/business/attend/AttendanceState";
import { AttendAtWork } from "../../../domain/business/attend/AttendAtWork";
import { LeaveWork } from "../../../domain/business/attend/LeaveWork";
import { FindLastAttendanceLogGateway } from "../../../gateway/business/attend/FindLastAttendanceLogGateway";
import { BusinessUsecase } from "../BusinessUsecase";

export class CalcAttendanceLogUsecase
  implements BusinessUsecase<CalcAttendanceLogInput, CalcAttendanceLogOutput>
{
  constructor(
    private readonly attendanceGateway: FindLastAttendanceLogGateway,
  ) {
    this.attendanceGateway = attendanceGateway;
  }

  async handle(input: CalcAttendanceLogInput) {
    const lastLog = await this.attendanceGateway.findBy(input.date);

    switch (lastLog.state) {
      case "attend": {
        const { startDatetime, endDatetime } = new LeaveWork({
          lastAttendedTime: lastLog.startDatetime,
        }).leave(input.date);

        return {
          dailyAttendanceId: lastLog.dailyAttendanceId,
          nextState: "leave" as const,
          startDatetime,
          endDatetime,
          breakSecond: lastLog.breakSecond,
        };
      }
      case "leave": {
        const { breakSecond } = new AttendAtWork({
          lastLeaveTime: lastLog.endDatetime,
        }).attend(input.date);

        return {
          dailyAttendanceId: lastLog.dailyAttendanceId,
          nextState: "attend" as const,
          startDatetime: lastLog.startDatetime,
          endDatetime: lastLog.endDatetime,
          breakSecond: lastLog.breakSecond + breakSecond,
        };
      }
    }
  }
}

export type CalcAttendanceLogInput = {
  date: Date;
};

export type CalcAttendanceLogOutput = {
  dailyAttendanceId: string | null;
  nextState: AttendanceState;
  startDatetime: Date;
  endDatetime: Date;
  breakSecond: number;
};
