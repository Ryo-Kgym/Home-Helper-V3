import { useRouter } from "next/navigation";
import { Button } from "@components/ui/v4/button";
import { notify } from "@components/ui/v4/notify/notify";
import { useCreateView } from "@feature/view/create/useCreateView";
import { useGetViewFieldValue } from "@feature/view/create/useGetViewFieldValue";
import { paths } from "@routing/paths";

export const CreateViewButton = ({ viewName }: { viewName: string }) => {
  const { push } = useRouter();
  const { createView } = useCreateView();
  const { fields } = useGetViewFieldValue();

  const creatable =
    !!viewName &&
    Object.values(fields).length > 0 &&
    Object.values(fields).every((field) => field.fieldName);

  const clickHandler = async () => {
    try {
      const { viewId } = await createView({ viewName, fields });
      notify("ビューを作成しました");

      push(paths.view.show({ id: viewId }));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Button
      label={"ビュー作成"}
      clickHandler={clickHandler}
      disabled={!creatable}
      type={"create"}
    />
  );
};
