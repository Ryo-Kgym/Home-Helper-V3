import { act, renderHook } from "@testing-library/react";
import * as mut from "@v3/graphql/public";

import { useCreateView } from "./useCreateView";

jest.mock("@v3/graphql/public");

jest.mock("@feature/app/function/generateId", () => ({
  generateId: jest.fn().mockReturnValue("123"),
}));

jest.mock("@hooks/user/useUser", () => ({
  useUser: jest.fn().mockReturnValue({
    userId: "user1",
    email: "",
    userName: "",
    save: jest.fn(),
    hasUserId: () => true,
  }),
}));

jest.mock("@hooks/group/useGroup", () => ({
  useGroup: jest.fn().mockReturnValue({
    groupId: "group1",
    groupName: "",
    save: jest.fn(),
  }),
}));

describe("useCreateView", () => {
  it("登録に成功した場合", async () => {
    const { mockMutation } = setupMock();
    mockMutation.mockResolvedValue({
      data: "123",
    });

    const { createView } = renderHook(() => useCreateView()).result.current;
    await act(() =>
      createView({
        viewName: "Test View",
        fields: {
          "0": {
            fieldName: "Field1",
            fieldKind: "text",
            options: {},
            mode: "add",
          },
          "1": {
            fieldName: "Field2",
            fieldKind: "selectBox",
            options: {
              selector: [
                {
                  label: "Option1",
                  value: "option1",
                },
                {
                  label: "Option2",
                  value: "option2",
                },
              ],
            },
            mode: "add",
          },
        },
      }),
    );

    expect(mockMutation).toBeCalledWith({
      viewId: "123",
      name: "Test View",
      fields: [
        {
          id: "123",
          viewId: "123",
          name: "Field1",
          index: 0,
          fieldKind: "text",
          options: {},
        },
        {
          id: "123",
          viewId: "123",
          name: "Field2",
          index: 1,
          fieldKind: "selectBox",
          options: {
            selector: [
              {
                label: "Option1",
                value: "option1",
              },
              {
                label: "Option2",
                value: "option2",
              },
            ],
          },
        },
      ],
      createUserId: "user1",
      groupId: "group1",
    });
  });

  it("登録できない場合は、エラーを投げる", async () => {
    const { mockMutation } = setupMock();

    mockMutation.mockResolvedValue({
      data: undefined,
      error: new Error("Error"),
    });

    const { createView } = renderHook(() => useCreateView()).result.current;

    await expect(
      createView({ viewName: "Test View", fields: {} }),
    ).rejects.toThrow("Error");
  });
});

const setupMock = () => {
  const mockMutation = jest.fn();

  jest
    .spyOn(mut, "useInsertViewMutation")
    .mockReturnValue([
      { data: {}, fetching: false, stale: true },
      mockMutation,
    ]);

  return { mockMutation };
};
