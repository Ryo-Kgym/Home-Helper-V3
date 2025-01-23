export class AttendAtWork {
  private readonly lastLeaveTime: Date;

  constructor({ lastLeaveTime }: { lastLeaveTime: Date }) {
    this.lastLeaveTime = lastLeaveTime;
  }

  attend(attendTime: Date) {
    const breakMilliSecond =
      attendTime.getTime() - this.lastLeaveTime.getTime();

    return {
      breakSecond: breakMilliSecond / 1000,
    };
  }
}
