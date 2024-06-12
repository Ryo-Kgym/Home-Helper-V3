import { changeToModifyMode } from "../function/changeToModifyMode";
import { InputViewApps } from "../type/inputViewApps";

describe("changeToModifyMode", () => {
  it("mode=addのappが一つ存在する場合、当該のappを変更する", () => {
    const viewApps: InputViewApps = {
      0: {
        mode: "add",
        appId: "app1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "modify",
        id: "2",
        appId: "app2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
      2: {
        mode: "modify",
        id: "3",
        appId: "app3",
        viewFields: {
          "3": {
            appFieldId: "3",
          },
        },
      },
    };
    changeToModifyMode(viewApps, "newViewAppId");
    expect(viewApps).toEqual<InputViewApps>({
      0: {
        mode: "modify",
        id: "newViewAppId",
        appId: "app1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "modify",
        id: "2",
        appId: "app2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
      2: {
        mode: "modify",
        id: "3",
        appId: "app3",
        viewFields: {
          "3": {
            appFieldId: "3",
          },
        },
      },
    });
  });

  it("mode=addのappが存在しない場合、そのまま返す", () => {
    const viewApps: InputViewApps = {
      0: {
        mode: "modify",
        id: "1",
        appId: "app1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "modify",
        id: "2",
        appId: "app2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
    };
    changeToModifyMode(viewApps, "newViewAppId");
    expect(viewApps).toEqual<InputViewApps>({
      0: {
        mode: "modify",
        id: "1",
        appId: "app1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "modify",
        id: "2",
        appId: "app2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
    });
  });

  it("mode=addのappが2つ以上存在する場合、初めのappだけmodeを変更する", () => {
    const viewApps: InputViewApps = {
      0: {
        mode: "add",
        appId: "app1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "add",
        appId: "app2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
    };
    changeToModifyMode(viewApps, "newViewAppId");
    expect(viewApps).toEqual<InputViewApps>({
      0: {
        mode: "modify",
        id: "newViewAppId",
        appId: "app1",
        viewFields: {
          "1": {
            appFieldId: "1",
          },
        },
      },
      1: {
        mode: "add",
        appId: "app2",
        viewFields: {
          "2": {
            appFieldId: "2",
          },
        },
      },
    });
  });
});
