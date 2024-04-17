import { useModifyView } from "@feature/view/modify/useModifyView";
import { renderHook } from "@testing-library/react";
import * as graphqlMock from "@v3/graphql/public";
import { act } from "react-dom/test-utils";

jest.mock("@feature/app/function/generate-id", () => ({
  generateId: jest.fn().mockReturnValue("generated"),
}));

jest.mock("@v3/graphql/public");

describe("useModifyView", () => {
  it("引数に対して、期待した値が渡されること", async () => {
    const { mutMock } = setupMock();

    mutMock.mockResolvedValue({
      data: {},
    });

    const { modifyView } = renderHook(() => useModifyView({ viewId: "12345" }))
      .result.current;

    await act(async () => {
      await modifyView({
        apps: [
          {
            mode: "add",
            appId: "app1",
            viewFields: {
              field1: {
                appFieldId: "appField11",
              },
              field2: {
                appFieldId: "appField12",
              },
            },
          },
          {
            mode: "modify",
            id: "modify2",
            viewFields: {
              field1: {
                appFieldId: "appField21",
              },
              field2: {
                appFieldId: "appField22",
              },
            },
          },
        ],
      });
    });

    expect(mutMock).toHaveBeenCalledWith({
      viewAppObjects: [
        {
          id: "generated",
          viewId: "12345",
          appId: "app1",
          fields: {
            field1: {
              appFieldId: "appField11",
            },
            field2: {
              appFieldId: "appField12",
            },
          },
        },
        {
          id: "modify2",
          viewId: "12345",
          fields: {
            field1: {
              appFieldId: "appField21",
            },
            field2: {
              appFieldId: "appField22",
            },
          },
        },
      ],
    });
  });

  it("エラーが発生した場合、例外を投げる", () => {
    const { mutMock } = setupMock();

    mutMock.mockResolvedValue({
      error: new Error("error message"),
    });

    const { modifyView } = renderHook(() => useModifyView({ viewId: "12345" }))
      .result.current;

    void expect(
      modifyView({
        apps: [
          {
            mode: "add",
            appId: "app1",
            viewFields: {},
          },
        ],
      }),
    ).rejects.toThrow("error message");
  });
});

const setupMock = () => {
  const mutMock = jest.fn();

  jest
    .spyOn(graphqlMock, "useUpdateViewMutation")
    .mockReturnValue([{ data: {}, fetching: false, stale: true }, mutMock]);
  return { mutMock };
};
