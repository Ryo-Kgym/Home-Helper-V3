import { buildParams } from "@features/householdDashboard/server/buildParams";

describe("buildParams", () => {
  test("複数の引数があっても、1番目にとれたデータを採択する", () => {
    const actual = buildParams({
      dashboardSettingArgs: [
        {
          id: "1",
          type: "month",
          value: "2",
        },
        {
          id: "2",
          type: "month",
          value: "1",
        },
      ],
      targetMonth: new Date("2022-12-05"),
    });

    expect(actual).toEqual({
      firstDay: "2023-02-01",
      lastDay: "2023-02-28",
    });
  });
});
