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
          nextState: "leave" as const,
          startDatetime,
          endDatetime,
          breakSecond: lastLog.breakSecond,
        };
      }
      case "leave": {
        const { breakSecond } = new AttendAtWork({
          lastLeaveTime: lastLog.datetime,
        }).attend(input.date);

        return {
          nextState: "attend" as const,
          startDatetime: lastLog.startDatetime,
          endDatetime: input.date,
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
  nextState: AttendanceState;
  startDatetime: Date;
  endDatetime: Date;
  breakSecond: number;
};
