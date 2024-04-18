import { changeToModifyMode } from "@feature/view/modify/function/changeToModifyMode";
import { InputViewApps } from "@feature/view/modify/type/inputViewApps";

describe("changeToModifyMode", () => {
  it("全てのアプリのモードをmodifyに変更する", () => {
    const viewApps: InputViewApps = {
      0: {
        mode: "add",
        appId: "1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "add",
        appId: "2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
      2: {
        mode: "modify",
        appId: "3",
        viewFields: {
          "3": {
            appFieldId: "3",
          },
        },
      },
    };
    changeToModifyMode(viewApps);
    expect(viewApps).toEqual<InputViewApps>({
      0: {
        mode: "modify",
        appId: "1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "modify",
        appId: "2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
      2: {
        mode: "modify",
        appId: "3",
        viewFields: {
          "3": {
            appFieldId: "3",
          },
        },
      },
    });
  });
});
