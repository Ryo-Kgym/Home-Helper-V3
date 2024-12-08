import Link from "next/link";

import { paths } from "~/routing/paths";

export const RedirectViewSettingButton = ({ viewId }: { viewId: string }) => {
  return <Link href={paths.view.modify({ id: viewId })}>ビュー設定変更</Link>;
};
