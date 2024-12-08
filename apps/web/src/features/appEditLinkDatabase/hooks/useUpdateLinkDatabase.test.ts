import { renderHook } from "@testing-library/react";
import * as useUpdateLinkDatabaseMutation from "@v3/graphql/public";

import { useUpdateLinkDatabase } from "./useUpdateLinkDatabase";

jest.mock("@v3/graphql/public");

describe("useUpdateLinkDatabase", () => {
  it("mutationに期待の引数が渡されること", async () => {
    const mutationSpy = jest.fn().mockResolvedValue({ data: {} });

    jest
      .spyOn(useUpdateLinkDatabaseMutation, "useUpdateLinkDatabaseMutation")
      .mockReturnValue([expect.anything(), mutationSpy]);

    const { updateLinkDatabase } = renderHook(() =>
      useUpdateLinkDatabase("appId"),
    ).result.current;

    await updateLinkDatabase({
      database: "neon",
      connection: {
        endpoint: "http://localhost:8080",
      },
      sql: "SELECT * FROM users",
      parameters: {},
      fieldColumnMaps: {},
    });

    expect(mutationSpy).toBeCalledWith({
      appId: "appId",
      input: {
        database: "neon",
        connection: {
          endpoint: "http://localhost:8080",
        },
        sql: "SELECT * FROM users",
        parameters: {},
        fieldColumnMaps: {},
        appId: "appId",
      },
    });
  });

  it("mutationが失敗した場合、エラーがスローされること", async () => {
    jest
      .spyOn(useUpdateLinkDatabaseMutation, "useUpdateLinkDatabaseMutation")
      .mockReturnValue([
        expect.anything(),
        jest.fn().mockResolvedValue({ error: {} }),
      ]);

    const { updateLinkDatabase } = renderHook(() =>
      useUpdateLinkDatabase("appId"),
    ).result.current;

    await expect(
      updateLinkDatabase({
        database: "neon",
        connection: {
          endpoint: "http://localhost:8080",
        },
        sql: "SELECT * FROM users",
        parameters: {},
        fieldColumnMaps: {},
      }),
    ).rejects.toThrowError("Failed to update link database");
  });
});
