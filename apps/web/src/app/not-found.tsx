import Link from "next/link";

import { paths } from "../routing/paths";

const NotFound = () => {
  return (
    <div className={"flex h-[100vh] items-center justify-center"}>
      <div>
        <div className={"text-xl"}>Not Found</div>
        <Link href={paths.group.select}>グループ選択へ戻る</Link>
      </div>
    </div>
  );
};

export default NotFound;
