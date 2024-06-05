import { GetViewRecordsSourceQuery } from "../../type";

/**
 * @package
 */
export type ViewAppsQuery = NonNullable<
  NonNullable<GetViewRecordsSourceQuery>["view"]
>["viewApps"];

/**
 * @package
 */
export type AppRecordQuery = NonNullable<
  NonNullable<GetViewRecordsSourceQuery>["view"]
>["viewApps"][number]["app"]["records"][number];

/**
 * @package
 */
export type ViewAppFieldsQuery = ViewAppsQuery[number]["fields"];
