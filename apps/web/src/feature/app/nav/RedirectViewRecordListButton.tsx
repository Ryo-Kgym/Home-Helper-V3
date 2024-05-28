import Link from "next/link";
import { paths } from "@routing/paths";

export const RedirectViewRecordListButton = ({
  viewId,
}: {
  viewId: string;
}) => {
  return <Link href={paths.view.show({ id: viewId })}>レコード一覧</Link>;
};
