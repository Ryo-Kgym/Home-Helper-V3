import * as useGetAppFieldListQueryMock from "../../../../../../packages/graphql/public";
import { useMakeSelector } from "./useMakeSelector";

jest.mock("../../../../../../packages/graphql/public");
jest.mock("@persistence/browser/client/useFindUser", () => ({
  useFindUser: jest.fn().mockReturnValue({ group: { id: "groupId" } }),
}));

describe("useMakeSelector", () => {
  it("アプリ・フィールドデータを取得できた場合、期待した値が返される。", () => {
    const useGetAppFieldListQuerySpyOn = jest.spyOn(
      useGetAppFieldListQueryMock,
      "useGetAppFieldListQuery",
    );
    useGetAppFieldListQuerySpyOn.mockReturnValue([
      {
        data: {
          group: {
            id: "groupId",
            apps: [
              {
                id: "appId1",
                name: "app1",
                fields: [
                  {
                    __typename: "Field",
                    id: "fieldId1",
                    name: "field1",
                    fieldKind: "text",
                    index: 0,
                    options: {},
                  },
                  {
                    __typename: "Field",
                    id: "fieldId2",
                    name: "field2",
                    fieldKind: "selectBox",
                    index: 1,
                    options: {
                      selector: [
                        { label: "option1", value: "option1" },
                        { label: "option2", value: "option2" },
                      ],
                    },
                  },
                ],
              },
              {
                id: "appId2",
                name: "app2",
                fields: [
                  {
                    __typename: "Field",
                    id: "fieldId3",
                    name: "field3",
                    fieldKind: "text",
                    index: 0,
                    options: {},
                  },
                  {
                    __typename: "Field",
                    id: "fieldId4",
                    name: "field4",
                    fieldKind: "selectBox",
                    index: 1,
                    options: {
                      selector: [
                        { label: "option3", value: "option3" },
                        { label: "option4", value: "option4" },
                      ],
                    },
                  },
                ],
              },
            ],
          },
        },
        fetching: false,
        stale: false,
      },
      jest.fn(),
    ]);
    const actual = useMakeSelector({ appId: "appId1" });

    const appListData = [
      { label: "app1", value: "appId1" },
      { label: "app2", value: "appId2" },
    ];
    const fieldListData = [
      { label: "field1", value: "fieldId1" },
      { label: "field2", value: "fieldId2" },
    ];
    const fields = {
      fieldId1: {
        id: "fieldId1",
        fieldName: "field1",
        fieldKind: "text",
        fieldIndex: 0,
        options: {},
      },
      fieldId2: {
        id: "fieldId2",
        fieldName: "field2",
        fieldKind: "selectBox",
        fieldIndex: 1,
        options: {
          selector: [
            { label: "option1", value: "option1" },
            { label: "option2", value: "option2" },
          ],
        },
      },
    };

    expect(actual).toEqual({ appListData, fieldListData, fields });
  });

  it("アプリ・フィールドデータを取得できない場合、空で返される", () => {
    const useGetAppFieldListQuerySpyOn = jest.spyOn(
      useGetAppFieldListQueryMock,
      "useGetAppFieldListQuery",
    );
    useGetAppFieldListQuerySpyOn.mockReturnValue([
      {
        data: undefined,
        fetching: false,
        stale: false,
      },
      jest.fn(),
    ]);
    const actual = useMakeSelector({ appId: "appId1" });
    expect(actual).toEqual({ appListData: [], fieldListData: [], fields: {} });
  });
});
