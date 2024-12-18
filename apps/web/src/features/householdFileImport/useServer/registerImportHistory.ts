"use server";

import { CreateImportFileHistoryDocument } from "@v3/graphql/household/type";

import { generateId } from "../../../function/generateId";
import { findUser } from "../../../persistence/browser/server/find-user";
import { execMutation } from "../../../persistence/database/server/execMutation";
import { ImportFileType } from "../types/importFileType";

export const registerImportHistory = async ({
  importFileType,
  fileName,
}: {
  importFileType: ImportFileType;
  fileName: string;
}) => {
  const fileImportId = generateId();
  const {
    id: importUserId,
    group: { id: groupId },
  } = await findUser();
  await execMutation(CreateImportFileHistoryDocument, {
    id: fileImportId,
    fileType: importFileType,
    fileName,
    importUserId,
    importDatetime: new Date(),
    groupId,
  });

  return { fileImportId };
};
