import { describe, expect, test, vi } from "vitest";

import { CalcAttendanceLogUsecase } from "./CalcAttendanceLogUsecase";

vi.mock("../../gateway/attend/AttendanceGateway");

describe("CalcAttendanceLogUsecase", () => {
  test("typeが出勤だった場合、退勤にする", () => {
    const usecase = new CalcAttendanceLogUsecase({
      findBy: () =>
        Promise.resolve({
          datetime: new Date("2021-01-01T09:00:00Z"),
          state: "attend",
          startDatetime: new Date("2021-01-01T09:00:00Z"),
          endDatetime: new Date("2021-01-01T10:00:00Z"),
          breakSecond: 3600,
        }),
    });

    return usecase
      .handle({ date: new Date("2021-01-01T11:00:00Z") })
      .then((output) => {
        expect(output).toEqual({
          nextState: "leave",
          startDatetime: new Date("2021-01-01T09:00:00Z"),
          endDatetime: new Date("2021-01-01T11:00:00Z"),
          breakSecond: 3600,
        });
      });
  });

  test("typeが退勤だった場合、出勤にする", () => {
    const usecase = new CalcAttendanceLogUsecase({
      findBy: () =>
        Promise.resolve({
          datetime: new Date("2021-01-01T10:00:00Z"),
          state: "leave",
          startDatetime: new Date("2021-01-01T09:00:00Z"),
          endDatetime: new Date("2021-01-01T10:00:00Z"),
          breakSecond: 0,
        }),
    });

    return usecase
      .handle({ date: new Date("2021-01-01T11:00:00Z") })
      .then((output) => {
        expect(output).toEqual({
          nextState: "attend",
          startDatetime: new Date("2021-01-01T09:00:00Z"),
          endDatetime: new Date("2021-01-01T11:00:00Z"),
          breakSecond: 3600,
        });
      });
  });
});
