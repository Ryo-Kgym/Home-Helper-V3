import { paths } from "@routing/paths";
import Link from "next/link";

export const RedirectImportButton = ({ appId }: { appId: string }) => {
  return <Link href={paths.app.import({ id: appId })}>ファイル取込</Link>;
};
