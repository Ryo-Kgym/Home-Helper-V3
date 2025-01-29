import { TZDateTime } from "@/type/date/date";

export class LeaveWork {
  private readonly lastAttendedTime: TZDateTime;

  constructor({ lastAttendedTime }: { lastAttendedTime: TZDateTime }) {
    this.lastAttendedTime = lastAttendedTime;
  }

  leave(leaveTime: TZDateTime) {
    return {
      startDatetime: this.lastAttendedTime,
      endDatetime: leaveTime,
    };
  }
}
