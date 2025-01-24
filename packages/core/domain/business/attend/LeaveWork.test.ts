import { describe, test } from "vitest";

import { LeaveWork } from "./LeaveWork";

describe("LeaveWork", () => {
  test("leave", () => {
    const actual = new LeaveWork({
      lastAttendedTime: new Date("2025-01-25T09:10:01"),
    }).leave(new Date("2025-01-25T10:10:01"));

    expect(actual).toEqual({
      startDatetime: new Date("2025-01-25T09:10:01"),
      endDatetime: new Date("2025-01-25T10:10:01"),
    });
  });
});
