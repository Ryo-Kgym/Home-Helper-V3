import { appendViewApp } from "@feature/view/modify/function/appendViewApp";
import {
  InputViewApp,
  InputViewApps,
} from "@feature/view/modify/type/inputViewApps";

describe("appendViewApp", () => {
  it("追加先が空オブジェクトの場合", () => {
    const viewApps: InputViewApps = {};
    const viewApp: InputViewApp = {
      mode: "add",
      appId: "1",
      viewFields: {
        "1": {
          appFieldId: "1",
        },
      },
    };
    appendViewApp(viewApps, viewApp);
    expect(viewApps).toEqual<InputViewApps>({
      0: {
        mode: "add",
        appId: "1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
    });
  });

  it("追加先が空オブジェクトでない場合", () => {
    const viewApps: InputViewApps = {
      0: {
        mode: "modify",
        appId: "1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
    };
    const viewApp: InputViewApp = {
      mode: "add",
      appId: "2",
      viewFields: {
        "2": {
          appFieldId: "2",
        },
      },
    };
    appendViewApp(viewApps, viewApp);
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
        mode: "add",
        appId: "2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
    });
  });
});
