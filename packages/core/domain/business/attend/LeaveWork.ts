export class LeaveWork {
  private readonly lastAttendedTime: Date;

  constructor({ lastAttendedTime }: { lastAttendedTime: Date }) {
    this.lastAttendedTime = lastAttendedTime;
  }

  leave(leaveTime: Date) {
    return {
      startDatetime: this.lastAttendedTime,
      endDatetime: leaveTime,
    };
  }
}
