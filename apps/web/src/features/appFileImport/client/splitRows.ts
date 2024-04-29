import {
  Quotation,
  Splitter,
} from "@oneforall/domain/schema/importFileSettingsSchema";

/**
 * @package
 */
export const splitRows = (
  rows: string[],
  splitter: Splitter,
  quotation: Quotation,
) => rows.map((r) => r.split(splitter).map((s) => s.replaceAll(quotation, "")));
