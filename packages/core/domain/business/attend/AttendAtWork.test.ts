import { describe, test } from "vitest";

import { AttendAtWork } from "./AttendAtWork";

describe("AttendAtWork", () => {
  test("最後の退勤時間と出勤時間が異なる場合", () => {
    const actual = new AttendAtWork({
      lastLeaveTime: new Date("2025-01-25T09:10:01"),
    }).attend(new Date("2025-01-25T10:10:00"));

    expect(actual).toEqual({
      breakSecond: 3599,
    });
  });

  test("最後の退勤時間と出勤時間が同じ場合", () => {
    const actual = new AttendAtWork({
      lastLeaveTime: new Date("2025-01-25T09:10:01"),
    }).attend(new Date("2025-01-25T09:10:01"));

    expect(actual).toEqual({
      breakSecond: 0,
    });
  });
});
