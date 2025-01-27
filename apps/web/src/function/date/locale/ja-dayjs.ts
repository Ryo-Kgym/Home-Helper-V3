import * as dayjs from "dayjs";

// 日本時間に変換する
import "dayjs/locale/ja";

dayjs.locale("ja");

const jaDayjs = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  toInstance: (date: Date) => dayjs(date),
};

export default jaDayjs;
