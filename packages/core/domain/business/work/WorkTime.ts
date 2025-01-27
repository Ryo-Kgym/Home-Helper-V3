export class WorkTime {
  private readonly startDatetime: Date;
  private readonly endDatetime: Date;

  constructor({
    startDatetime,
    endDatetime,
  }: {
    startDatetime: Date;
    endDatetime: Date;
  }) {
    this.startDatetime = startDatetime;
    this.endDatetime = endDatetime;
  }

  calcWorkSecond(breakSecond: number) {
    const workPeriodSecondForDay =
      Math.floor(this.endDatetime.getTime() - this.startDatetime.getTime()) /
      1000;

    return workPeriodSecondForDay - breakSecond;
  }
}
