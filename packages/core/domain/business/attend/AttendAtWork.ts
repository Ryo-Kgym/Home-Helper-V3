import type { TZDateTime } from "@/type/date/date";

export class AttendAtWork {
  private readonly lastLeaveTime: TZDateTime;

  constructor({ lastLeaveTime }: { lastLeaveTime: TZDateTime }) {
    this.lastLeaveTime = lastLeaveTime;
  }

  attend(attendTime: TZDateTime) {
    const breakMilliSecond =
      attendTime.getTime() - this.lastLeaveTime.getTime();

    return {
      breakSecond: Math.floor(breakMilliSecond / 1000),
    };
  }
}
