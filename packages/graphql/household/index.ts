import gql from "graphql-tag";
import * as Urql from "urql";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  json: any;
  numeric: any;
  timestamp: any;
  timestamptz: any;
};

export type AffiliationAggregateBoolExp = {
  count?: InputMaybe<AffiliationAggregateBoolExpCount>;
};

/** order by aggregate values of table "affiliation" */
export type AffiliationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AffiliationMaxOrderBy>;
  min?: InputMaybe<AffiliationMinOrderBy>;
};

/** input type for inserting array relation for remote table "affiliation" */
export type AffiliationArrRelInsertInput = {
  data: Array<AffiliationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AffiliationOnConflict>;
};

/** Boolean expression to filter rows from the table "affiliation". All fields are combined with a logical 'AND'. */
export type AffiliationBoolExp = {
  _and?: InputMaybe<Array<AffiliationBoolExp>>;
  _not?: InputMaybe<AffiliationBoolExp>;
  _or?: InputMaybe<Array<AffiliationBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  groupRole?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "affiliation" */
export enum AffiliationConstraint {
  /** unique or primary key constraint on columns "id" */
  AffiliationPkey = "affiliation_pkey",
}

/** input type for inserting data into table "affiliation" */
export type AffiliationInsertInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupRole?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "affiliation" */
export type AffiliationMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "affiliation" */
export type AffiliationMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "affiliation" */
export type AffiliationOnConflict = {
  constraint: AffiliationConstraint;
  updateColumns?: Array<AffiliationUpdateColumn>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** Ordering options when selecting data from "affiliation". */
export type AffiliationOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** select columns of table "affiliation" */
export enum AffiliationSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupRole = "groupRole",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** Streaming cursor of the table "affiliation" */
export type AffiliationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AffiliationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AffiliationStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupRole?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "affiliation" (current role has no relevant permissions) */
export enum AffiliationUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by aggregate values of table "app" */
export type AppAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AppMaxOrderBy>;
  min?: InputMaybe<AppMinOrderBy>;
};

/** input type for inserting array relation for remote table "app" */
export type AppArrRelInsertInput = {
  data: Array<AppInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AppOnConflict>;
};

/** Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'. */
export type AppBoolExp = {
  _and?: InputMaybe<Array<AppBoolExp>>;
  _not?: InputMaybe<AppBoolExp>;
  _or?: InputMaybe<Array<AppBoolExp>>;
  createUserId?: InputMaybe<StringComparisonExp>;
  fields?: InputMaybe<FieldBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  importFileHistories?: InputMaybe<ImportFileHistoryBoolExp>;
  importFileRecords?: InputMaybe<ImportFileRecordBoolExp>;
  importFileRecordsAggregate?: InputMaybe<ImportFileRecordAggregateBoolExp>;
  importFileSetting?: InputMaybe<ImportFileSettingBoolExp>;
  linkDatabase?: InputMaybe<LinkDatabaseBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  records?: InputMaybe<RecordBoolExp>;
  recordsAggregate?: InputMaybe<RecordAggregateBoolExp>;
  user?: InputMaybe<UserBoolExp>;
  viewApps?: InputMaybe<ViewAppBoolExp>;
};

/** unique or primary key constraints on table "app" */
export enum AppConstraint {
  /** unique or primary key constraint on columns "id" */
  AppPkey = "app_pkey",
}

/** input type for inserting data into table "app" */
export type AppInsertInput = {
  createUserId?: InputMaybe<Scalars["String"]>;
  fields?: InputMaybe<FieldArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importFileHistories?: InputMaybe<ImportFileHistoryArrRelInsertInput>;
  importFileRecords?: InputMaybe<ImportFileRecordArrRelInsertInput>;
  importFileSetting?: InputMaybe<ImportFileSettingObjRelInsertInput>;
  linkDatabase?: InputMaybe<LinkDatabaseObjRelInsertInput>;
  name?: InputMaybe<Scalars["String"]>;
  records?: InputMaybe<RecordArrRelInsertInput>;
  user?: InputMaybe<UserObjRelInsertInput>;
  viewApps?: InputMaybe<ViewAppArrRelInsertInput>;
};

/** order by max() on columns of table "app" */
export type AppMaxOrderBy = {
  createUserId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "app" */
export type AppMinOrderBy = {
  createUserId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "app" */
export type AppObjRelInsertInput = {
  data: AppInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AppOnConflict>;
};

/** on_conflict condition type for table "app" */
export type AppOnConflict = {
  constraint: AppConstraint;
  updateColumns?: Array<AppUpdateColumn>;
  where?: InputMaybe<AppBoolExp>;
};

/** Ordering options when selecting data from "app". */
export type AppOrderBy = {
  createUserId?: InputMaybe<OrderBy>;
  fieldsAggregate?: InputMaybe<FieldAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importFileHistoriesAggregate?: InputMaybe<ImportFileHistoryAggregateOrderBy>;
  importFileRecordsAggregate?: InputMaybe<ImportFileRecordAggregateOrderBy>;
  importFileSetting?: InputMaybe<ImportFileSettingOrderBy>;
  linkDatabase?: InputMaybe<LinkDatabaseOrderBy>;
  name?: InputMaybe<OrderBy>;
  recordsAggregate?: InputMaybe<RecordAggregateOrderBy>;
  user?: InputMaybe<UserOrderBy>;
  viewAppsAggregate?: InputMaybe<ViewAppAggregateOrderBy>;
};

/** primary key columns input for table: app */
export type AppPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "app" */
export enum AppSelectColumn {
  /** column name */
  CreateUserId = "createUserId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "app" */
export type AppSetInput = {
  name?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "app" */
export type AppStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AppStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStreamCursorValueInput = {
  createUserId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "app" */
export enum AppUpdateColumn {
  /** column name */
  Name = "name",
}

export type AppUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AppSetInput>;
  /** filter the rows which have to be updated */
  where: AppBoolExp;
};

/** Boolean expression to filter rows from the table "application". All fields are combined with a logical 'AND'. */
export type ApplicationBoolExp = {
  _and?: InputMaybe<Array<ApplicationBoolExp>>;
  _not?: InputMaybe<ApplicationBoolExp>;
  _or?: InputMaybe<Array<ApplicationBoolExp>>;
  groupApplications?: InputMaybe<GroupApplicationBoolExp>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  topUrl?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** Ordering options when selecting data from "application". */
export type ApplicationOrderBy = {
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  topUrl?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** select columns of table "application" */
export enum ApplicationSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  TopUrl = "topUrl",
  /** column name */
  ValidFlag = "validFlag",
}

/** Streaming cursor of the table "application" */
export type ApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars["Boolean"]>;
  _gt?: InputMaybe<Scalars["Boolean"]>;
  _gte?: InputMaybe<Scalars["Boolean"]>;
  _in?: InputMaybe<Array<Scalars["Boolean"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Boolean"]>;
  _lte?: InputMaybe<Scalars["Boolean"]>;
  _neq?: InputMaybe<Scalars["Boolean"]>;
  _nin?: InputMaybe<Array<Scalars["Boolean"]>>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars["date"]>;
  _gt?: InputMaybe<Scalars["date"]>;
  _gte?: InputMaybe<Scalars["date"]>;
  _in?: InputMaybe<Array<Scalars["date"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["date"]>;
  _lte?: InputMaybe<Scalars["date"]>;
  _neq?: InputMaybe<Scalars["date"]>;
  _nin?: InputMaybe<Array<Scalars["date"]>>;
};

/** order by aggregate values of table "field" */
export type FieldAggregateOrderBy = {
  avg?: InputMaybe<FieldAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FieldMaxOrderBy>;
  min?: InputMaybe<FieldMinOrderBy>;
  stddev?: InputMaybe<FieldStddevOrderBy>;
  stddevPop?: InputMaybe<FieldStddevPopOrderBy>;
  stddevSamp?: InputMaybe<FieldStddevSampOrderBy>;
  sum?: InputMaybe<FieldSumOrderBy>;
  varPop?: InputMaybe<FieldVarPopOrderBy>;
  varSamp?: InputMaybe<FieldVarSampOrderBy>;
  variance?: InputMaybe<FieldVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "field" */
export type FieldArrRelInsertInput = {
  data: Array<FieldInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<FieldOnConflict>;
};

/** order by avg() on columns of table "field" */
export type FieldAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "field". All fields are combined with a logical 'AND'. */
export type FieldBoolExp = {
  _and?: InputMaybe<Array<FieldBoolExp>>;
  _not?: InputMaybe<FieldBoolExp>;
  _or?: InputMaybe<Array<FieldBoolExp>>;
  app?: InputMaybe<AppBoolExp>;
  appId?: InputMaybe<StringComparisonExp>;
  fieldKind?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  options?: InputMaybe<JsonComparisonExp>;
};

/** unique or primary key constraints on table "field" */
export enum FieldConstraint {
  /** unique or primary key constraint on columns "id" */
  FieldPkey = "field_pkey",
}

/** input type for incrementing numeric columns in table "field" */
export type FieldIncInput = {
  index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "field" */
export type FieldInsertInput = {
  app?: InputMaybe<AppObjRelInsertInput>;
  appId?: InputMaybe<Scalars["String"]>;
  fieldKind?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Scalars["json"]>;
};

/** order by max() on columns of table "field" */
export type FieldMaxOrderBy = {
  appId?: InputMaybe<OrderBy>;
  fieldKind?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "field" */
export type FieldMinOrderBy = {
  appId?: InputMaybe<OrderBy>;
  fieldKind?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "field" */
export type FieldOnConflict = {
  constraint: FieldConstraint;
  updateColumns?: Array<FieldUpdateColumn>;
  where?: InputMaybe<FieldBoolExp>;
};

/** Ordering options when selecting data from "field". */
export type FieldOrderBy = {
  app?: InputMaybe<AppOrderBy>;
  appId?: InputMaybe<OrderBy>;
  fieldKind?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  options?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: field */
export type FieldPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "field" */
export enum FieldSelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  FieldKind = "fieldKind",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
  /** column name */
  Name = "name",
  /** column name */
  Options = "options",
}

/** input type for updating data in table "field" */
export type FieldSetInput = {
  fieldKind?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Scalars["json"]>;
};

/** order by stddev() on columns of table "field" */
export type FieldStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "field" */
export type FieldStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "field" */
export type FieldStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "field" */
export type FieldStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: FieldStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type FieldStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  fieldKind?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Scalars["json"]>;
};

/** order by sum() on columns of table "field" */
export type FieldSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "field" */
export enum FieldUpdateColumn {
  /** column name */
  FieldKind = "fieldKind",
  /** column name */
  Index = "index",
  /** column name */
  Name = "name",
  /** column name */
  Options = "options",
}

export type FieldUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FieldIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FieldSetInput>;
  /** filter the rows which have to be updated */
  where: FieldBoolExp;
};

/** order by varPop() on columns of table "field" */
export type FieldVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "field" */
export type FieldVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "field" */
export type FieldVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

export type GroupApplicationAggregateBoolExp = {
  count?: InputMaybe<GroupApplicationAggregateBoolExpCount>;
};

/** order by aggregate values of table "group_application" */
export type GroupApplicationAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GroupApplicationMaxOrderBy>;
  min?: InputMaybe<GroupApplicationMinOrderBy>;
};

/** Boolean expression to filter rows from the table "group_application". All fields are combined with a logical 'AND'. */
export type GroupApplicationBoolExp = {
  _and?: InputMaybe<Array<GroupApplicationBoolExp>>;
  _not?: InputMaybe<GroupApplicationBoolExp>;
  _or?: InputMaybe<Array<GroupApplicationBoolExp>>;
  application?: InputMaybe<ApplicationBoolExp>;
  applicationId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "group_application" */
export type GroupApplicationMaxOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "group_application" */
export type GroupApplicationMinOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "group_application". */
export type GroupApplicationOrderBy = {
  application?: InputMaybe<ApplicationOrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "group_application" */
export enum GroupApplicationSelectColumn {
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** Streaming cursor of the table "group_application" */
export type GroupApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupApplicationStreamCursorValueInput = {
  applicationId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type GroupBoolExp = {
  _and?: InputMaybe<Array<GroupBoolExp>>;
  _not?: InputMaybe<GroupBoolExp>;
  _or?: InputMaybe<Array<GroupBoolExp>>;
  accounts?: InputMaybe<HouseholdAccountBoolExp>;
  accountsAggregate?: InputMaybe<HouseholdAccountAggregateBoolExp>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  apps?: InputMaybe<AppBoolExp>;
  categories?: InputMaybe<HouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  dashboardSettings?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  depositCategories?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateBoolExp>;
  favoriteFilters?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  favoriteFiltersAggregate?: InputMaybe<HouseholdFavoriteFilterAggregateBoolExp>;
  genres?: InputMaybe<HouseholdGenreBoolExp>;
  genresAggregate?: InputMaybe<HouseholdGenreAggregateBoolExp>;
  groupApplications?: InputMaybe<GroupApplicationBoolExp>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  importFileHistories?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
  importFileHistoriesAggregate?: InputMaybe<HouseholdImportFileHistoryAggregateBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  summaryCategories?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
  summaryCategoriesAggregate?: InputMaybe<HouseholdSummaryCategoryAggregateBoolExp>;
  summaryViews?: InputMaybe<SummaryViewBoolExp>;
  totalByCategoryView?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  totalByCategoryViewAggregate?: InputMaybe<HouseholdTotalByCategoryViewAggregateBoolExp>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  views?: InputMaybe<ViewBoolExp>;
};

/** Ordering options when selecting data from "group". */
export type GroupOrderBy = {
  accountsAggregate?: InputMaybe<HouseholdAccountAggregateOrderBy>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  appsAggregate?: InputMaybe<AppAggregateOrderBy>;
  categoriesAggregate?: InputMaybe<HouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  dashboardSettingsAggregate?: InputMaybe<HouseholdDashboardSettingAggregateOrderBy>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateOrderBy>;
  favoriteFiltersAggregate?: InputMaybe<HouseholdFavoriteFilterAggregateOrderBy>;
  genresAggregate?: InputMaybe<HouseholdGenreAggregateOrderBy>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  importFileHistoriesAggregate?: InputMaybe<HouseholdImportFileHistoryAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  summaryCategoriesAggregate?: InputMaybe<HouseholdSummaryCategoryAggregateOrderBy>;
  summaryViewsAggregate?: InputMaybe<SummaryViewAggregateOrderBy>;
  totalByCategoryViewAggregate?: InputMaybe<HouseholdTotalByCategoryViewAggregateOrderBy>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryOrderBy>;
  viewsAggregate?: InputMaybe<ViewAggregateOrderBy>;
};

/** select columns of table "group" */
export enum GroupSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** Streaming cursor of the table "group" */
export type GroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

export type HouseholdAccountAggregateBoolExp = {
  bool_and?: InputMaybe<HouseholdAccountAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<HouseholdAccountAggregateBoolExpBool_Or>;
  count?: InputMaybe<HouseholdAccountAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.account" */
export type HouseholdAccountAggregateOrderBy = {
  avg?: InputMaybe<HouseholdAccountAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdAccountMaxOrderBy>;
  min?: InputMaybe<HouseholdAccountMinOrderBy>;
  stddev?: InputMaybe<HouseholdAccountStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdAccountStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdAccountStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdAccountSumOrderBy>;
  varPop?: InputMaybe<HouseholdAccountVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdAccountVarSampOrderBy>;
  variance?: InputMaybe<HouseholdAccountVarianceOrderBy>;
};

/** order by avg() on columns of table "household.account" */
export type HouseholdAccountAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.account". All fields are combined with a logical 'AND'. */
export type HouseholdAccountBoolExp = {
  _and?: InputMaybe<Array<HouseholdAccountBoolExp>>;
  _not?: InputMaybe<HouseholdAccountBoolExp>;
  _or?: InputMaybe<Array<HouseholdAccountBoolExp>>;
  allDetailViews?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  allDetailViewsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateBoolExp>;
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.account" */
export enum HouseholdAccountConstraint {
  /** unique or primary key constraint on columns "id" */
  AccountPkey = "account_pkey",
}

/** input type for inserting data into table "household.account" */
export type HouseholdAccountInsertInput = {
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "household.account" */
export type HouseholdAccountMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.account" */
export type HouseholdAccountMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.account" */
export type HouseholdAccountObjRelInsertInput = {
  data: HouseholdAccountInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdAccountOnConflict>;
};

/** on_conflict condition type for table "household.account" */
export type HouseholdAccountOnConflict = {
  constraint: HouseholdAccountConstraint;
  updateColumns?: Array<HouseholdAccountUpdateColumn>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

/** Ordering options when selecting data from "household.account". */
export type HouseholdAccountOrderBy = {
  allDetailViewsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** select columns of table "household.account" */
export enum HouseholdAccountSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdAccountAggregateBoolExpBool_andArgumentsColumns" columns of table "household.account" */
export enum HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdAccountAggregateBoolExpBool_orArgumentsColumns" columns of table "household.account" */
export enum HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** order by stddev() on columns of table "household.account" */
export type HouseholdAccountStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.account" */
export type HouseholdAccountStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.account" */
export type HouseholdAccountStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_account" */
export type HouseholdAccountStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdAccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdAccountStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "household.account" */
export type HouseholdAccountSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "household.account" (current role has no relevant permissions) */
export enum HouseholdAccountUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "household.account" */
export type HouseholdAccountVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.account" */
export type HouseholdAccountVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.account" */
export type HouseholdAccountVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdAllDetailViewAggregateBoolExp = {
  count?: InputMaybe<HouseholdAllDetailViewAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.all_detail_view" */
export type HouseholdAllDetailViewAggregateOrderBy = {
  avg?: InputMaybe<HouseholdAllDetailViewAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdAllDetailViewMaxOrderBy>;
  min?: InputMaybe<HouseholdAllDetailViewMinOrderBy>;
  stddev?: InputMaybe<HouseholdAllDetailViewStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdAllDetailViewStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdAllDetailViewStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdAllDetailViewSumOrderBy>;
  varPop?: InputMaybe<HouseholdAllDetailViewVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdAllDetailViewVarSampOrderBy>;
  variance?: InputMaybe<HouseholdAllDetailViewVarianceOrderBy>;
};

/** order by avg() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewAvgOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.all_detail_view". All fields are combined with a logical 'AND'. */
export type HouseholdAllDetailViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdAllDetailViewBoolExp>>;
  _not?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdAllDetailViewBoolExp>>;
  accountId?: InputMaybe<StringComparisonExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  originalAmount?: InputMaybe<NumericComparisonExp>;
  signedAmount?: InputMaybe<NumericComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.all_detail_view". */
export type HouseholdAllDetailViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** select columns of table "household.all_detail_view" */
export enum HouseholdAllDetailViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  OriginalAmount = "originalAmount",
  /** column name */
  SignedAmount = "signedAmount",
  /** column name */
  Type = "type",
}

/** order by stddev() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevPopOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevSampOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_all_detail_view" */
export type HouseholdAllDetailViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdAllDetailViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdAllDetailViewStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  originalAmount?: InputMaybe<Scalars["numeric"]>;
  signedAmount?: InputMaybe<Scalars["numeric"]>;
  type?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewSumOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarPopOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarSampOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarianceOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** order by aggregate values of table "household.category" */
export type HouseholdCategoryAggregateOrderBy = {
  avg?: InputMaybe<HouseholdCategoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdCategoryMinOrderBy>;
  stddev?: InputMaybe<HouseholdCategoryStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdCategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdCategoryStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdCategorySumOrderBy>;
  varPop?: InputMaybe<HouseholdCategoryVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdCategoryVarSampOrderBy>;
  variance?: InputMaybe<HouseholdCategoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.category" */
export type HouseholdCategoryArrRelInsertInput = {
  data: Array<HouseholdCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCategoryOnConflict>;
};

/** order by avg() on columns of table "household.category" */
export type HouseholdCategoryAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.category". All fields are combined with a logical 'AND'. */
export type HouseholdCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdCategoryBoolExp>>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  depositCategory?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  summaryCategories?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
  summaryCategoriesAggregate?: InputMaybe<HouseholdSummaryCategoryAggregateBoolExp>;
  transferCategories?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  transferCategoriesAggregate?: InputMaybe<HouseholdTransferCategoryAggregateBoolExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.category" */
export enum HouseholdCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  CategoryPkey = "category_pkey",
}

/** input type for incrementing numeric columns in table "household.category" */
export type HouseholdCategoryIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.category" */
export type HouseholdCategoryInsertInput = {
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genre?: InputMaybe<HouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  summaryCategories?: InputMaybe<HouseholdSummaryCategoryArrRelInsertInput>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "household.category" */
export type HouseholdCategoryMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.category" */
export type HouseholdCategoryMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.category" */
export type HouseholdCategoryObjRelInsertInput = {
  data: HouseholdCategoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCategoryOnConflict>;
};

/** on_conflict condition type for table "household.category" */
export type HouseholdCategoryOnConflict = {
  constraint: HouseholdCategoryConstraint;
  updateColumns?: Array<HouseholdCategoryUpdateColumn>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

/** Ordering options when selecting data from "household.category". */
export type HouseholdCategoryOrderBy = {
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  depositCategory?: InputMaybe<HouseholdDepositCategoryOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  summaryCategoriesAggregate?: InputMaybe<HouseholdSummaryCategoryAggregateOrderBy>;
  transferCategoriesAggregate?: InputMaybe<HouseholdTransferCategoryAggregateOrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.category */
export type HouseholdCategoryPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.category" */
export enum HouseholdCategorySelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "household.category" */
export type HouseholdCategorySetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by stddev() on columns of table "household.category" */
export type HouseholdCategoryStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.category" */
export type HouseholdCategoryStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.category" */
export type HouseholdCategoryStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_category" */
export type HouseholdCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCategoryStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "household.category" */
export type HouseholdCategorySumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "household.category" */
export enum HouseholdCategoryUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

export type HouseholdCategoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdCategoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdCategorySetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdCategoryBoolExp;
};

/** order by varPop() on columns of table "household.category" */
export type HouseholdCategoryVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.category" */
export type HouseholdCategoryVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.category" */
export type HouseholdCategoryVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdCreditCardDetailAggregateBoolExp = {
  count?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailAggregateOrderBy = {
  avg?: InputMaybe<HouseholdCreditCardDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdCreditCardDetailMaxOrderBy>;
  min?: InputMaybe<HouseholdCreditCardDetailMinOrderBy>;
  stddev?: InputMaybe<HouseholdCreditCardDetailStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdCreditCardDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdCreditCardDetailStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdCreditCardDetailSumOrderBy>;
  varPop?: InputMaybe<HouseholdCreditCardDetailVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdCreditCardDetailVarSampOrderBy>;
  variance?: InputMaybe<HouseholdCreditCardDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.credit_card_detail" */
export type HouseholdCreditCardDetailArrRelInsertInput = {
  data: Array<HouseholdCreditCardDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCreditCardDetailOnConflict>;
};

/** order by avg() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.credit_card_detail". All fields are combined with a logical 'AND'. */
export type HouseholdCreditCardDetailBoolExp = {
  _and?: InputMaybe<Array<HouseholdCreditCardDetailBoolExp>>;
  _not?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  _or?: InputMaybe<Array<HouseholdCreditCardDetailBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  creditCardSummary?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  date?: InputMaybe<DateComparisonExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  summaryId?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.credit_card_detail" */
export enum HouseholdCreditCardDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardDetailPkey = "credit_card_detail_pkey",
}

/** input type for incrementing numeric columns in table "household.credit_card_detail" */
export type HouseholdCreditCardDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "household.credit_card_detail" */
export type HouseholdCreditCardDetailInsertInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  creditCardSummary?: InputMaybe<HouseholdCreditCardSummaryObjRelInsertInput>;
  date?: InputMaybe<Scalars["date"]>;
  genre?: InputMaybe<HouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.credit_card_detail" */
export type HouseholdCreditCardDetailOnConflict = {
  constraint: HouseholdCreditCardDetailConstraint;
  updateColumns?: Array<HouseholdCreditCardDetailUpdateColumn>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** Ordering options when selecting data from "household.credit_card_detail". */
export type HouseholdCreditCardDetailOrderBy = {
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  creditCardSummary?: InputMaybe<HouseholdCreditCardSummaryOrderBy>;
  date?: InputMaybe<OrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.credit_card_detail */
export type HouseholdCreditCardDetailPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.credit_card_detail" */
export enum HouseholdCreditCardDetailSelectColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "household.credit_card_detail" */
export type HouseholdCreditCardDetailSetInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_credit_card_detail" */
export type HouseholdCreditCardDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCreditCardDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCreditCardDetailStreamCursorValueInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "household.credit_card_detail" */
export enum HouseholdCreditCardDetailUpdateColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

export type HouseholdCreditCardDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdCreditCardDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdCreditCardDetailSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdCreditCardDetailBoolExp;
};

/** order by varPop() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

export type HouseholdCreditCardSummaryAggregateBoolExp = {
  count?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAggregateOrderBy = {
  avg?: InputMaybe<HouseholdCreditCardSummaryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdCreditCardSummaryMaxOrderBy>;
  min?: InputMaybe<HouseholdCreditCardSummaryMinOrderBy>;
  stddev?: InputMaybe<HouseholdCreditCardSummaryStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdCreditCardSummaryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdCreditCardSummaryStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdCreditCardSummarySumOrderBy>;
  varPop?: InputMaybe<HouseholdCreditCardSummaryVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdCreditCardSummaryVarSampOrderBy>;
  variance?: InputMaybe<HouseholdCreditCardSummaryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryArrRelInsertInput = {
  data: Array<HouseholdCreditCardSummaryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCreditCardSummaryOnConflict>;
};

/** order by avg() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAvgOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.credit_card_summary". All fields are combined with a logical 'AND'. */
export type HouseholdCreditCardSummaryBoolExp = {
  _and?: InputMaybe<Array<HouseholdCreditCardSummaryBoolExp>>;
  _not?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  _or?: InputMaybe<Array<HouseholdCreditCardSummaryBoolExp>>;
  account?: InputMaybe<HouseholdAccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  count?: InputMaybe<IntComparisonExp>;
  creditCard?: InputMaybe<StringComparisonExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  totalAmount?: InputMaybe<NumericComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
};

/** unique or primary key constraints on table "household.credit_card_summary" */
export enum HouseholdCreditCardSummaryConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardSummaryPkey = "credit_card_summary_pkey",
}

/** input type for incrementing numeric columns in table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryIncInput = {
  count?: InputMaybe<Scalars["Int"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryInsertInput = {
  account?: InputMaybe<HouseholdAccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by max() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryObjRelInsertInput = {
  data: HouseholdCreditCardSummaryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdCreditCardSummaryOnConflict>;
};

/** on_conflict condition type for table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryOnConflict = {
  constraint: HouseholdCreditCardSummaryConstraint;
  updateColumns?: Array<HouseholdCreditCardSummaryUpdateColumn>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

/** Ordering options when selecting data from "household.credit_card_summary". */
export type HouseholdCreditCardSummaryOrderBy = {
  account?: InputMaybe<HouseholdAccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.credit_card_summary */
export type HouseholdCreditCardSummaryPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.credit_card_summary" */
export enum HouseholdCreditCardSummarySelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Count = "count",
  /** column name */
  CreditCard = "creditCard",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  TotalAmount = "totalAmount",
  /** column name */
  WithdrawalDate = "withdrawalDate",
}

/** input type for updating data in table "household.credit_card_summary" */
export type HouseholdCreditCardSummarySetInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by stddev() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_credit_card_summary" */
export type HouseholdCreditCardSummaryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCreditCardSummaryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCreditCardSummaryStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** order by sum() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummarySumOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.credit_card_summary_total_by_account_view". All fields are combined with a logical 'AND'. */
export type HouseholdCreditCardSummaryTotalByAccountViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>>;
  _not?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "household.credit_card_summary_total_by_account_view". */
export type HouseholdCreditCardSummaryTotalByAccountViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.credit_card_summary_total_by_account_view" */
export enum HouseholdCreditCardSummaryTotalByAccountViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Date = "date",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Name = "name",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "household_credit_card_summary_total_by_account_view" */
export type HouseholdCreditCardSummaryTotalByAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdCreditCardSummaryTotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdCreditCardSummaryTotalByAccountViewStreamCursorValueInput =
  {
    accountId?: InputMaybe<Scalars["String"]>;
    date?: InputMaybe<Scalars["date"]>;
    displayOrder?: InputMaybe<Scalars["Int"]>;
    groupId?: InputMaybe<Scalars["String"]>;
    iocomeType?: InputMaybe<Scalars["String"]>;
    name?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["numeric"]>;
  };

/** update columns of table "household.credit_card_summary" */
export enum HouseholdCreditCardSummaryUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Count = "count",
  /** column name */
  CreditCard = "creditCard",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  TotalAmount = "totalAmount",
  /** column name */
  WithdrawalDate = "withdrawalDate",
}

export type HouseholdCreditCardSummaryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdCreditCardSummaryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdCreditCardSummarySetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdCreditCardSummaryBoolExp;
};

/** order by varPop() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarianceOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

export type HouseholdDailyDetailAggregateBoolExp = {
  count?: InputMaybe<HouseholdDailyDetailAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.daily_detail" */
export type HouseholdDailyDetailAggregateOrderBy = {
  avg?: InputMaybe<HouseholdDailyDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDailyDetailMaxOrderBy>;
  min?: InputMaybe<HouseholdDailyDetailMinOrderBy>;
  stddev?: InputMaybe<HouseholdDailyDetailStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdDailyDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdDailyDetailStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdDailyDetailSumOrderBy>;
  varPop?: InputMaybe<HouseholdDailyDetailVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdDailyDetailVarSampOrderBy>;
  variance?: InputMaybe<HouseholdDailyDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.daily_detail" */
export type HouseholdDailyDetailArrRelInsertInput = {
  data: Array<HouseholdDailyDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDailyDetailOnConflict>;
};

/** order by avg() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.daily_detail". All fields are combined with a logical 'AND'. */
export type HouseholdDailyDetailBoolExp = {
  _and?: InputMaybe<Array<HouseholdDailyDetailBoolExp>>;
  _not?: InputMaybe<HouseholdDailyDetailBoolExp>;
  _or?: InputMaybe<Array<HouseholdDailyDetailBoolExp>>;
  account?: InputMaybe<HouseholdAccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.daily_detail" */
export enum HouseholdDailyDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  DailyDetailPkey = "daily_detail_pkey",
}

/** input type for incrementing numeric columns in table "household.daily_detail" */
export type HouseholdDailyDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "household.daily_detail" */
export type HouseholdDailyDetailInsertInput = {
  account?: InputMaybe<HouseholdAccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genre?: InputMaybe<HouseholdGenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.daily_detail" */
export type HouseholdDailyDetailOnConflict = {
  constraint: HouseholdDailyDetailConstraint;
  updateColumns?: Array<HouseholdDailyDetailUpdateColumn>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** Ordering options when selecting data from "household.daily_detail". */
export type HouseholdDailyDetailOrderBy = {
  account?: InputMaybe<HouseholdAccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.daily_detail */
export type HouseholdDailyDetailPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.daily_detail" */
export enum HouseholdDailyDetailSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "household.daily_detail" */
export type HouseholdDailyDetailSetInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_daily_detail" */
export type HouseholdDailyDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDailyDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDailyDetailStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "household.daily_detail" */
export enum HouseholdDailyDetailUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

export type HouseholdDailyDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdDailyDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdDailyDetailSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdDailyDetailBoolExp;
};

/** order by varPop() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.daily_total_view". All fields are combined with a logical 'AND'. */
export type HouseholdDailyTotalViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdDailyTotalViewBoolExp>>;
  _not?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdDailyTotalViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "household.daily_total_view". */
export type HouseholdDailyTotalViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.daily_total_view" */
export enum HouseholdDailyTotalViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "household_daily_total_view" */
export type HouseholdDailyTotalViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDailyTotalViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDailyTotalViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** order by aggregate values of table "household.dashboard_setting" */
export type HouseholdDashboardSettingAggregateOrderBy = {
  avg?: InputMaybe<HouseholdDashboardSettingAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDashboardSettingMaxOrderBy>;
  min?: InputMaybe<HouseholdDashboardSettingMinOrderBy>;
  stddev?: InputMaybe<HouseholdDashboardSettingStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdDashboardSettingStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdDashboardSettingStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdDashboardSettingSumOrderBy>;
  varPop?: InputMaybe<HouseholdDashboardSettingVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdDashboardSettingVarSampOrderBy>;
  variance?: InputMaybe<HouseholdDashboardSettingVarianceOrderBy>;
};

/** order by aggregate values of table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDashboardSettingArgsMaxOrderBy>;
  min?: InputMaybe<HouseholdDashboardSettingArgsMinOrderBy>;
};

/** input type for inserting array relation for remote table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsArrRelInsertInput = {
  data: Array<HouseholdDashboardSettingArgsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDashboardSettingArgsOnConflict>;
};

/** Boolean expression to filter rows from the table "household.dashboard_setting_args". All fields are combined with a logical 'AND'. */
export type HouseholdDashboardSettingArgsBoolExp = {
  _and?: InputMaybe<Array<HouseholdDashboardSettingArgsBoolExp>>;
  _not?: InputMaybe<HouseholdDashboardSettingArgsBoolExp>;
  _or?: InputMaybe<Array<HouseholdDashboardSettingArgsBoolExp>>;
  dashboardSetting?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  settingId?: InputMaybe<StringComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.dashboard_setting_args" */
export enum HouseholdDashboardSettingArgsConstraint {
  /** unique or primary key constraint on columns "id" */
  DashboardSettingArgsPkey = "dashboard_setting_args_pkey",
}

/** input type for inserting data into table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsInsertInput = {
  dashboardSetting?: InputMaybe<HouseholdDashboardSettingObjRelInsertInput>;
  id?: InputMaybe<Scalars["String"]>;
  settingId?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  settingId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  settingId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.dashboard_setting_args" */
export type HouseholdDashboardSettingArgsOnConflict = {
  constraint: HouseholdDashboardSettingArgsConstraint;
  updateColumns?: Array<HouseholdDashboardSettingArgsUpdateColumn>;
  where?: InputMaybe<HouseholdDashboardSettingArgsBoolExp>;
};

/** Ordering options when selecting data from "household.dashboard_setting_args". */
export type HouseholdDashboardSettingArgsOrderBy = {
  dashboardSetting?: InputMaybe<HouseholdDashboardSettingOrderBy>;
  id?: InputMaybe<OrderBy>;
  settingId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** select columns of table "household.dashboard_setting_args" */
export enum HouseholdDashboardSettingArgsSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  SettingId = "settingId",
  /** column name */
  Type = "type",
  /** column name */
  Value = "value",
}

/** Streaming cursor of the table "household_dashboard_setting_args" */
export type HouseholdDashboardSettingArgsStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDashboardSettingArgsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDashboardSettingArgsStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  settingId?: InputMaybe<Scalars["String"]>;
  type?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "household.dashboard_setting_args" (current role has no relevant permissions) */
export enum HouseholdDashboardSettingArgsUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by avg() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingAvgOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.dashboard_setting". All fields are combined with a logical 'AND'. */
export type HouseholdDashboardSettingBoolExp = {
  _and?: InputMaybe<Array<HouseholdDashboardSettingBoolExp>>;
  _not?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  _or?: InputMaybe<Array<HouseholdDashboardSettingBoolExp>>;
  dashboardSettingArgs?: InputMaybe<HouseholdDashboardSettingArgsBoolExp>;
  feature?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  order?: InputMaybe<IntComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.dashboard_setting" */
export enum HouseholdDashboardSettingConstraint {
  /** unique or primary key constraint on columns "id" */
  DashboardSettingPkey = "dashboard_setting_pkey",
}

/** input type for incrementing numeric columns in table "household.dashboard_setting" */
export type HouseholdDashboardSettingIncInput = {
  order?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.dashboard_setting" */
export type HouseholdDashboardSettingInsertInput = {
  dashboardSettingArgs?: InputMaybe<HouseholdDashboardSettingArgsArrRelInsertInput>;
  feature?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingMaxOrderBy = {
  feature?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingMinOrderBy = {
  feature?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.dashboard_setting" */
export type HouseholdDashboardSettingObjRelInsertInput = {
  data: HouseholdDashboardSettingInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDashboardSettingOnConflict>;
};

/** on_conflict condition type for table "household.dashboard_setting" */
export type HouseholdDashboardSettingOnConflict = {
  constraint: HouseholdDashboardSettingConstraint;
  updateColumns?: Array<HouseholdDashboardSettingUpdateColumn>;
  where?: InputMaybe<HouseholdDashboardSettingBoolExp>;
};

/** Ordering options when selecting data from "household.dashboard_setting". */
export type HouseholdDashboardSettingOrderBy = {
  dashboardSettingArgsAggregate?: InputMaybe<HouseholdDashboardSettingArgsAggregateOrderBy>;
  feature?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  order?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.dashboard_setting */
export type HouseholdDashboardSettingPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.dashboard_setting" */
export enum HouseholdDashboardSettingSelectColumn {
  /** column name */
  Feature = "feature",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Order = "order",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "household.dashboard_setting" */
export type HouseholdDashboardSettingSetInput = {
  feature?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingStddevOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingStddevPopOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingStddevSampOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_dashboard_setting" */
export type HouseholdDashboardSettingStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDashboardSettingStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDashboardSettingStreamCursorValueInput = {
  feature?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<Scalars["Int"]>;
  userId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingSumOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** update columns of table "household.dashboard_setting" */
export enum HouseholdDashboardSettingUpdateColumn {
  /** column name */
  Feature = "feature",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Order = "order",
  /** column name */
  UserId = "userId",
}

export type HouseholdDashboardSettingUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdDashboardSettingIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdDashboardSettingSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdDashboardSettingBoolExp;
};

/** order by varPop() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingVarPopOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingVarSampOrderBy = {
  order?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.dashboard_setting" */
export type HouseholdDashboardSettingVarianceOrderBy = {
  order?: InputMaybe<OrderBy>;
};

export type HouseholdDepositCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdDepositCategoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.deposit_category" */
export type HouseholdDepositCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDepositCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdDepositCategoryMinOrderBy>;
};

/** Boolean expression to filter rows from the table "household.deposit_category". All fields are combined with a logical 'AND'. */
export type HouseholdDepositCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdDepositCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdDepositCategoryBoolExp>>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "household.deposit_category" */
export type HouseholdDepositCategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.deposit_category" */
export type HouseholdDepositCategoryMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.deposit_category". */
export type HouseholdDepositCategoryOrderBy = {
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.deposit_category" */
export enum HouseholdDepositCategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  GroupId = "groupId",
}

/** Streaming cursor of the table "household_deposit_category" */
export type HouseholdDepositCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDepositCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDepositCategoryStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
};

export type HouseholdFavoriteFilterAggregateBoolExp = {
  count?: InputMaybe<HouseholdFavoriteFilterAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.favorite_filter" */
export type HouseholdFavoriteFilterAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdFavoriteFilterMaxOrderBy>;
  min?: InputMaybe<HouseholdFavoriteFilterMinOrderBy>;
};

export type HouseholdFavoriteFilterArgsAggregateBoolExp = {
  count?: InputMaybe<HouseholdFavoriteFilterArgsAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdFavoriteFilterArgsMaxOrderBy>;
  min?: InputMaybe<HouseholdFavoriteFilterArgsMinOrderBy>;
};

/** input type for inserting array relation for remote table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsArrRelInsertInput = {
  data: Array<HouseholdFavoriteFilterArgsInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdFavoriteFilterArgsOnConflict>;
};

/** Boolean expression to filter rows from the table "household.favorite_filter_args". All fields are combined with a logical 'AND'. */
export type HouseholdFavoriteFilterArgsBoolExp = {
  _and?: InputMaybe<Array<HouseholdFavoriteFilterArgsBoolExp>>;
  _not?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
  _or?: InputMaybe<Array<HouseholdFavoriteFilterArgsBoolExp>>;
  favoriteFilter?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  favoriteFilterArgCategoryId?: InputMaybe<HouseholdCategoryBoolExp>;
  filterId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  key?: InputMaybe<StringComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.favorite_filter_args" */
export enum HouseholdFavoriteFilterArgsConstraint {
  /** unique or primary key constraint on columns "id" */
  FavoriteFilterArgsPkey = "favorite_filter_args_pkey",
}

/** input type for inserting data into table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsInsertInput = {
  favoriteFilter?: InputMaybe<HouseholdFavoriteFilterObjRelInsertInput>;
  favoriteFilterArgCategoryId?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  filterId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  key?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsMaxOrderBy = {
  filterId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsMinOrderBy = {
  filterId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsOnConflict = {
  constraint: HouseholdFavoriteFilterArgsConstraint;
  updateColumns?: Array<HouseholdFavoriteFilterArgsUpdateColumn>;
  where?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
};

/** Ordering options when selecting data from "household.favorite_filter_args". */
export type HouseholdFavoriteFilterArgsOrderBy = {
  favoriteFilter?: InputMaybe<HouseholdFavoriteFilterOrderBy>;
  favoriteFilterArgCategoryId?: InputMaybe<HouseholdCategoryOrderBy>;
  filterId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.favorite_filter_args */
export type HouseholdFavoriteFilterArgsPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.favorite_filter_args" */
export enum HouseholdFavoriteFilterArgsSelectColumn {
  /** column name */
  FilterId = "filterId",
  /** column name */
  Id = "id",
  /** column name */
  Key = "key",
  /** column name */
  Value = "value",
}

/** input type for updating data in table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsSetInput = {
  key?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "household.favorite_filter_args" */
export enum HouseholdFavoriteFilterArgsUpdateColumn {
  /** column name */
  Key = "key",
  /** column name */
  Value = "value",
}

export type HouseholdFavoriteFilterArgsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdFavoriteFilterArgsSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdFavoriteFilterArgsBoolExp;
};

/** Boolean expression to filter rows from the table "household.favorite_filter". All fields are combined with a logical 'AND'. */
export type HouseholdFavoriteFilterBoolExp = {
  _and?: InputMaybe<Array<HouseholdFavoriteFilterBoolExp>>;
  _not?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  _or?: InputMaybe<Array<HouseholdFavoriteFilterBoolExp>>;
  favoriteFilterArgs?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
  favoriteFilterArgsAggregate?: InputMaybe<HouseholdFavoriteFilterArgsAggregateBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.favorite_filter" */
export enum HouseholdFavoriteFilterConstraint {
  /** unique or primary key constraint on columns "id" */
  FavoriteFilterPkey = "favorite_filter_pkey",
}

/** input type for inserting data into table "household.favorite_filter" */
export type HouseholdFavoriteFilterInsertInput = {
  favoriteFilterArgs?: InputMaybe<HouseholdFavoriteFilterArgsArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.favorite_filter" */
export type HouseholdFavoriteFilterMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.favorite_filter" */
export type HouseholdFavoriteFilterMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.favorite_filter" */
export type HouseholdFavoriteFilterObjRelInsertInput = {
  data: HouseholdFavoriteFilterInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdFavoriteFilterOnConflict>;
};

/** on_conflict condition type for table "household.favorite_filter" */
export type HouseholdFavoriteFilterOnConflict = {
  constraint: HouseholdFavoriteFilterConstraint;
  updateColumns?: Array<HouseholdFavoriteFilterUpdateColumn>;
  where?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
};

/** Ordering options when selecting data from "household.favorite_filter". */
export type HouseholdFavoriteFilterOrderBy = {
  favoriteFilterArgsAggregate?: InputMaybe<HouseholdFavoriteFilterArgsAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.favorite_filter */
export type HouseholdFavoriteFilterPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.favorite_filter" */
export enum HouseholdFavoriteFilterSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "household.favorite_filter" */
export type HouseholdFavoriteFilterSetInput = {
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "household.favorite_filter" */
export enum HouseholdFavoriteFilterUpdateColumn {
  /** column name */
  Name = "name",
}

export type HouseholdFavoriteFilterUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdFavoriteFilterSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdFavoriteFilterBoolExp;
};

export type HouseholdGenreAggregateBoolExp = {
  bool_and?: InputMaybe<HouseholdGenreAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<HouseholdGenreAggregateBoolExpBool_Or>;
  count?: InputMaybe<HouseholdGenreAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.genre" */
export type HouseholdGenreAggregateOrderBy = {
  avg?: InputMaybe<HouseholdGenreAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdGenreMaxOrderBy>;
  min?: InputMaybe<HouseholdGenreMinOrderBy>;
  stddev?: InputMaybe<HouseholdGenreStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdGenreStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdGenreStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdGenreSumOrderBy>;
  varPop?: InputMaybe<HouseholdGenreVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdGenreVarSampOrderBy>;
  variance?: InputMaybe<HouseholdGenreVarianceOrderBy>;
};

/** order by avg() on columns of table "household.genre" */
export type HouseholdGenreAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.genre". All fields are combined with a logical 'AND'. */
export type HouseholdGenreBoolExp = {
  _and?: InputMaybe<Array<HouseholdGenreBoolExp>>;
  _not?: InputMaybe<HouseholdGenreBoolExp>;
  _or?: InputMaybe<Array<HouseholdGenreBoolExp>>;
  categories?: InputMaybe<HouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genreType?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.genre" */
export enum HouseholdGenreConstraint {
  /** unique or primary key constraint on columns "id" */
  GenrePkey = "genre_pkey",
}

/** input type for incrementing numeric columns in table "household.genre" */
export type HouseholdGenreIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.genre" */
export type HouseholdGenreInsertInput = {
  categories?: InputMaybe<HouseholdCategoryArrRelInsertInput>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by max() on columns of table "household.genre" */
export type HouseholdGenreMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.genre" */
export type HouseholdGenreMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.genre" */
export type HouseholdGenreObjRelInsertInput = {
  data: HouseholdGenreInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdGenreOnConflict>;
};

/** on_conflict condition type for table "household.genre" */
export type HouseholdGenreOnConflict = {
  constraint: HouseholdGenreConstraint;
  updateColumns?: Array<HouseholdGenreUpdateColumn>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

/** Ordering options when selecting data from "household.genre". */
export type HouseholdGenreOrderBy = {
  categoriesAggregate?: InputMaybe<HouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.genre */
export type HouseholdGenrePkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.genre" */
export enum HouseholdGenreSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdGenreAggregateBoolExpBool_andArgumentsColumns" columns of table "household.genre" */
export enum HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "householdGenreAggregateBoolExpBool_orArgumentsColumns" columns of table "household.genre" */
export enum HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "household.genre" */
export type HouseholdGenreSetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by stddev() on columns of table "household.genre" */
export type HouseholdGenreStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.genre" */
export type HouseholdGenreStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.genre" */
export type HouseholdGenreStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_genre" */
export type HouseholdGenreStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdGenreStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdGenreStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** order by sum() on columns of table "household.genre" */
export type HouseholdGenreSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "household.genre" */
export enum HouseholdGenreUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Name = "name",
  /** column name */
  ValidFlag = "validFlag",
}

export type HouseholdGenreUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdGenreIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdGenreSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdGenreBoolExp;
};

/** order by varPop() on columns of table "household.genre" */
export type HouseholdGenreVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.genre" */
export type HouseholdGenreVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.genre" */
export type HouseholdGenreVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdImportFileHistoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdImportFileHistoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.import_file_history" */
export type HouseholdImportFileHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdImportFileHistoryMaxOrderBy>;
  min?: InputMaybe<HouseholdImportFileHistoryMinOrderBy>;
};

/** Boolean expression to filter rows from the table "household.import_file_history". All fields are combined with a logical 'AND'. */
export type HouseholdImportFileHistoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdImportFileHistoryBoolExp>>;
  _not?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdImportFileHistoryBoolExp>>;
  fileName?: InputMaybe<StringComparisonExp>;
  fileType?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  importDatetime?: InputMaybe<TimestampComparisonExp>;
  importUserId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.import_file_history" */
export enum HouseholdImportFileHistoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ImportFileHistoryPkey = "import_file_history_pkey",
}

/** input type for inserting data into table "household.import_file_history" */
export type HouseholdImportFileHistoryInsertInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.import_file_history" */
export type HouseholdImportFileHistoryMaxOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.import_file_history" */
export type HouseholdImportFileHistoryMinOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.import_file_history" */
export type HouseholdImportFileHistoryOnConflict = {
  constraint: HouseholdImportFileHistoryConstraint;
  updateColumns?: Array<HouseholdImportFileHistoryUpdateColumn>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

/** Ordering options when selecting data from "household.import_file_history". */
export type HouseholdImportFileHistoryOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.import_file_history" */
export enum HouseholdImportFileHistorySelectColumn {
  /** column name */
  FileName = "fileName",
  /** column name */
  FileType = "fileType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  ImportDatetime = "importDatetime",
  /** column name */
  ImportUserId = "importUserId",
}

/** Streaming cursor of the table "household_import_file_history" */
export type HouseholdImportFileHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdImportFileHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdImportFileHistoryStreamCursorValueInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "household.import_file_history" (current role has no relevant permissions) */
export enum HouseholdImportFileHistoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

export type HouseholdSummaryCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdSummaryCategoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.summary_category" */
export type HouseholdSummaryCategoryAggregateOrderBy = {
  avg?: InputMaybe<HouseholdSummaryCategoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdSummaryCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdSummaryCategoryMinOrderBy>;
  stddev?: InputMaybe<HouseholdSummaryCategoryStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdSummaryCategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdSummaryCategoryStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdSummaryCategorySumOrderBy>;
  varPop?: InputMaybe<HouseholdSummaryCategoryVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdSummaryCategoryVarSampOrderBy>;
  variance?: InputMaybe<HouseholdSummaryCategoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "household.summary_category" */
export type HouseholdSummaryCategoryArrRelInsertInput = {
  data: Array<HouseholdSummaryCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdSummaryCategoryOnConflict>;
};

/** order by avg() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.summary_category". All fields are combined with a logical 'AND'. */
export type HouseholdSummaryCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdSummaryCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdSummaryCategoryBoolExp>>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.summary_category" */
export enum HouseholdSummaryCategoryConstraint {
  /** unique or primary key constraint on columns "id" */
  SummaryCategoryByGroupPkey = "summary_category_by_group_pkey",
}

/** input type for inserting data into table "household.summary_category" */
export type HouseholdSummaryCategoryInsertInput = {
  category?: InputMaybe<HouseholdCategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.summary_category" */
export type HouseholdSummaryCategoryOnConflict = {
  constraint: HouseholdSummaryCategoryConstraint;
  updateColumns?: Array<HouseholdSummaryCategoryUpdateColumn>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

/** Ordering options when selecting data from "household.summary_category". */
export type HouseholdSummaryCategoryOrderBy = {
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** select columns of table "household.summary_category" */
export enum HouseholdSummaryCategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** order by stddev() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_summary_category" */
export type HouseholdSummaryCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdSummaryCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdSummaryCategoryStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.summary_category" */
export type HouseholdSummaryCategorySumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "household.summary_category" (current role has no relevant permissions) */
export enum HouseholdSummaryCategoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

export type HouseholdTotalByCategoryViewAggregateBoolExp = {
  count?: InputMaybe<HouseholdTotalByCategoryViewAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewAggregateOrderBy = {
  avg?: InputMaybe<HouseholdTotalByCategoryViewAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdTotalByCategoryViewMaxOrderBy>;
  min?: InputMaybe<HouseholdTotalByCategoryViewMinOrderBy>;
  stddev?: InputMaybe<HouseholdTotalByCategoryViewStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdTotalByCategoryViewStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdTotalByCategoryViewStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdTotalByCategoryViewSumOrderBy>;
  varPop?: InputMaybe<HouseholdTotalByCategoryViewVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdTotalByCategoryViewVarSampOrderBy>;
  variance?: InputMaybe<HouseholdTotalByCategoryViewVarianceOrderBy>;
};

/** order by avg() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewAvgOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.total_by_category_view". All fields are combined with a logical 'AND'. */
export type HouseholdTotalByCategoryViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdTotalByCategoryViewBoolExp>>;
  _not?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdTotalByCategoryViewBoolExp>>;
  categoryId?: InputMaybe<StringComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** order by max() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.total_by_category_view". */
export type HouseholdTotalByCategoryViewOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.total_by_category_view" */
export enum HouseholdTotalByCategoryViewSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** order by stddev() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewStddevOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewStddevPopOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewStddevSampOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_total_by_category_view" */
export type HouseholdTotalByCategoryViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTotalByCategoryViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTotalByCategoryViewStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["String"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewSumOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by varPop() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewVarPopOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewVarSampOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewVarianceOrderBy = {
  total?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.total_by_genre_view". All fields are combined with a logical 'AND'. */
export type HouseholdTotalByGenreViewBoolExp = {
  _and?: InputMaybe<Array<HouseholdTotalByGenreViewBoolExp>>;
  _not?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
  _or?: InputMaybe<Array<HouseholdTotalByGenreViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** Ordering options when selecting data from "household.total_by_genre_view". */
export type HouseholdTotalByGenreViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "household.total_by_genre_view" */
export enum HouseholdTotalByGenreViewSelectColumn {
  /** column name */
  Date = "date",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** Streaming cursor of the table "household_total_by_genre_view" */
export type HouseholdTotalByGenreViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTotalByGenreViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTotalByGenreViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

export type HouseholdTransferCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdTransferCategoryAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.transfer_category" */
export type HouseholdTransferCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdTransferCategoryMaxOrderBy>;
  min?: InputMaybe<HouseholdTransferCategoryMinOrderBy>;
};

/** Boolean expression to filter rows from the table "household.transfer_category". All fields are combined with a logical 'AND'. */
export type HouseholdTransferCategoryBoolExp = {
  _and?: InputMaybe<Array<HouseholdTransferCategoryBoolExp>>;
  _not?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  _or?: InputMaybe<Array<HouseholdTransferCategoryBoolExp>>;
  categoryByIncomeCategoryId?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryByOutcomeCategoryId?: InputMaybe<HouseholdCategoryBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  incomeCategoryId?: InputMaybe<StringComparisonExp>;
  outcomeCategoryId?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "household.transfer_category" */
export type HouseholdTransferCategoryMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.transfer_category" */
export type HouseholdTransferCategoryMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.transfer_category". */
export type HouseholdTransferCategoryOrderBy = {
  categoryByIncomeCategoryId?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryByOutcomeCategoryId?: InputMaybe<HouseholdCategoryOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.transfer_category" */
export enum HouseholdTransferCategorySelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  IncomeCategoryId = "incomeCategoryId",
  /** column name */
  OutcomeCategoryId = "outcomeCategoryId",
}

/** Streaming cursor of the table "household_transfer_category" */
export type HouseholdTransferCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTransferCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTransferCategoryStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  incomeCategoryId?: InputMaybe<Scalars["String"]>;
  outcomeCategoryId?: InputMaybe<Scalars["String"]>;
};

/** order by aggregate values of table "import_file_history" */
export type ImportFileHistoryAggregateOrderBy = {
  avg?: InputMaybe<ImportFileHistoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ImportFileHistoryMaxOrderBy>;
  min?: InputMaybe<ImportFileHistoryMinOrderBy>;
  stddev?: InputMaybe<ImportFileHistoryStddevOrderBy>;
  stddevPop?: InputMaybe<ImportFileHistoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ImportFileHistoryStddevSampOrderBy>;
  sum?: InputMaybe<ImportFileHistorySumOrderBy>;
  varPop?: InputMaybe<ImportFileHistoryVarPopOrderBy>;
  varSamp?: InputMaybe<ImportFileHistoryVarSampOrderBy>;
  variance?: InputMaybe<ImportFileHistoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "import_file_history" */
export type ImportFileHistoryArrRelInsertInput = {
  data: Array<ImportFileHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** order by avg() on columns of table "import_file_history" */
export type ImportFileHistoryAvgOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "import_file_history". All fields are combined with a logical 'AND'. */
export type ImportFileHistoryBoolExp = {
  _and?: InputMaybe<Array<ImportFileHistoryBoolExp>>;
  _not?: InputMaybe<ImportFileHistoryBoolExp>;
  _or?: InputMaybe<Array<ImportFileHistoryBoolExp>>;
  app?: InputMaybe<AppBoolExp>;
  appId?: InputMaybe<StringComparisonExp>;
  count?: InputMaybe<IntComparisonExp>;
  fileName?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  importDatetime?: InputMaybe<TimestamptzComparisonExp>;
  importFileRecords?: InputMaybe<ImportFileRecordBoolExp>;
  importFileRecordsAggregate?: InputMaybe<ImportFileRecordAggregateBoolExp>;
};

/** unique or primary key constraints on table "import_file_history" */
export enum ImportFileHistoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ImportFileHistoryPkey = "import_file_history_pkey",
}

/** input type for inserting data into table "import_file_history" */
export type ImportFileHistoryInsertInput = {
  app?: InputMaybe<AppObjRelInsertInput>;
  appId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  fileName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamptz"]>;
  importFileRecords?: InputMaybe<ImportFileRecordArrRelInsertInput>;
};

/** order by max() on columns of table "import_file_history" */
export type ImportFileHistoryMaxOrderBy = {
  appId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  fileName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "import_file_history" */
export type ImportFileHistoryMinOrderBy = {
  appId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  fileName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "import_file_history" */
export type ImportFileHistoryObjRelInsertInput = {
  data: ImportFileHistoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** on_conflict condition type for table "import_file_history" */
export type ImportFileHistoryOnConflict = {
  constraint: ImportFileHistoryConstraint;
  updateColumns?: Array<ImportFileHistoryUpdateColumn>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** Ordering options when selecting data from "import_file_history". */
export type ImportFileHistoryOrderBy = {
  app?: InputMaybe<AppOrderBy>;
  appId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  fileName?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importFileRecordsAggregate?: InputMaybe<ImportFileRecordAggregateOrderBy>;
};

/** select columns of table "import_file_history" */
export enum ImportFileHistorySelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  Count = "count",
  /** column name */
  FileName = "fileName",
  /** column name */
  Id = "id",
  /** column name */
  ImportDatetime = "importDatetime",
}

/** order by stddev() on columns of table "import_file_history" */
export type ImportFileHistoryStddevOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "import_file_history" */
export type ImportFileHistoryStddevPopOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "import_file_history" */
export type ImportFileHistoryStddevSampOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "import_file_history" */
export type ImportFileHistoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ImportFileHistoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ImportFileHistoryStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  count?: InputMaybe<Scalars["Int"]>;
  fileName?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  importDatetime?: InputMaybe<Scalars["timestamptz"]>;
};

/** order by sum() on columns of table "import_file_history" */
export type ImportFileHistorySumOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** placeholder for update columns of table "import_file_history" (current role has no relevant permissions) */
export enum ImportFileHistoryUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by varPop() on columns of table "import_file_history" */
export type ImportFileHistoryVarPopOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "import_file_history" */
export type ImportFileHistoryVarSampOrderBy = {
  count?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "import_file_history" */
export type ImportFileHistoryVarianceOrderBy = {
  count?: InputMaybe<OrderBy>;
};

export type ImportFileRecordAggregateBoolExp = {
  count?: InputMaybe<ImportFileRecordAggregateBoolExpCount>;
};

/** order by aggregate values of table "import_file_record" */
export type ImportFileRecordAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ImportFileRecordMaxOrderBy>;
  min?: InputMaybe<ImportFileRecordMinOrderBy>;
};

/** input type for inserting array relation for remote table "import_file_record" */
export type ImportFileRecordArrRelInsertInput = {
  data: Array<ImportFileRecordInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileRecordOnConflict>;
};

/** Boolean expression to filter rows from the table "import_file_record". All fields are combined with a logical 'AND'. */
export type ImportFileRecordBoolExp = {
  _and?: InputMaybe<Array<ImportFileRecordBoolExp>>;
  _not?: InputMaybe<ImportFileRecordBoolExp>;
  _or?: InputMaybe<Array<ImportFileRecordBoolExp>>;
  app?: InputMaybe<AppBoolExp>;
  appId?: InputMaybe<StringComparisonExp>;
  historyId?: InputMaybe<StringComparisonExp>;
  importFileHistory?: InputMaybe<ImportFileHistoryBoolExp>;
  record?: InputMaybe<RecordBoolExp>;
  recordId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "import_file_record" */
export enum ImportFileRecordConstraint {
  /** unique or primary key constraint on columns "record_id" */
  ImportFileRecordPkey = "import_file_record_pkey",
}

/** input type for inserting data into table "import_file_record" */
export type ImportFileRecordInsertInput = {
  app?: InputMaybe<AppObjRelInsertInput>;
  appId?: InputMaybe<Scalars["String"]>;
  historyId?: InputMaybe<Scalars["String"]>;
  importFileHistory?: InputMaybe<ImportFileHistoryObjRelInsertInput>;
  record?: InputMaybe<RecordObjRelInsertInput>;
  recordId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "import_file_record" */
export type ImportFileRecordMaxOrderBy = {
  appId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "import_file_record" */
export type ImportFileRecordMinOrderBy = {
  appId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  recordId?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "import_file_record" */
export type ImportFileRecordObjRelInsertInput = {
  data: ImportFileRecordInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileRecordOnConflict>;
};

/** on_conflict condition type for table "import_file_record" */
export type ImportFileRecordOnConflict = {
  constraint: ImportFileRecordConstraint;
  updateColumns?: Array<ImportFileRecordUpdateColumn>;
  where?: InputMaybe<ImportFileRecordBoolExp>;
};

/** Ordering options when selecting data from "import_file_record". */
export type ImportFileRecordOrderBy = {
  app?: InputMaybe<AppOrderBy>;
  appId?: InputMaybe<OrderBy>;
  historyId?: InputMaybe<OrderBy>;
  importFileHistory?: InputMaybe<ImportFileHistoryOrderBy>;
  record?: InputMaybe<RecordOrderBy>;
  recordId?: InputMaybe<OrderBy>;
};

/** select columns of table "import_file_record" */
export enum ImportFileRecordSelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  HistoryId = "historyId",
  /** column name */
  RecordId = "recordId",
}

/** Streaming cursor of the table "import_file_record" */
export type ImportFileRecordStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ImportFileRecordStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ImportFileRecordStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  historyId?: InputMaybe<Scalars["String"]>;
  recordId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "import_file_record" (current role has no relevant permissions) */
export enum ImportFileRecordUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** Boolean expression to filter rows from the table "import_file_setting". All fields are combined with a logical 'AND'. */
export type ImportFileSettingBoolExp = {
  _and?: InputMaybe<Array<ImportFileSettingBoolExp>>;
  _not?: InputMaybe<ImportFileSettingBoolExp>;
  _or?: InputMaybe<Array<ImportFileSettingBoolExp>>;
  app?: InputMaybe<AppBoolExp>;
  appId?: InputMaybe<StringComparisonExp>;
  settings?: InputMaybe<JsonComparisonExp>;
};

/** unique or primary key constraints on table "import_file_setting" */
export enum ImportFileSettingConstraint {
  /** unique or primary key constraint on columns "app_id" */
  ImportFileSettingPkey = "import_file_setting_pkey",
}

/** input type for inserting data into table "import_file_setting" */
export type ImportFileSettingInsertInput = {
  app?: InputMaybe<AppObjRelInsertInput>;
  appId?: InputMaybe<Scalars["String"]>;
  settings?: InputMaybe<Scalars["json"]>;
};

/** input type for inserting object relation for remote table "import_file_setting" */
export type ImportFileSettingObjRelInsertInput = {
  data: ImportFileSettingInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileSettingOnConflict>;
};

/** on_conflict condition type for table "import_file_setting" */
export type ImportFileSettingOnConflict = {
  constraint: ImportFileSettingConstraint;
  updateColumns?: Array<ImportFileSettingUpdateColumn>;
  where?: InputMaybe<ImportFileSettingBoolExp>;
};

/** Ordering options when selecting data from "import_file_setting". */
export type ImportFileSettingOrderBy = {
  app?: InputMaybe<AppOrderBy>;
  appId?: InputMaybe<OrderBy>;
  settings?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: import_file_setting */
export type ImportFileSettingPkColumnsInput = {
  appId: Scalars["String"];
};

/** select columns of table "import_file_setting" */
export enum ImportFileSettingSelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  Settings = "settings",
}

/** input type for updating data in table "import_file_setting" */
export type ImportFileSettingSetInput = {
  settings?: InputMaybe<Scalars["json"]>;
};

/** Streaming cursor of the table "import_file_setting" */
export type ImportFileSettingStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ImportFileSettingStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ImportFileSettingStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  settings?: InputMaybe<Scalars["json"]>;
};

/** update columns of table "import_file_setting" */
export enum ImportFileSettingUpdateColumn {
  /** column name */
  Settings = "settings",
}

export type ImportFileSettingUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ImportFileSettingSetInput>;
  /** filter the rows which have to be updated */
  where: ImportFileSettingBoolExp;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars["Int"]>;
  _gt?: InputMaybe<Scalars["Int"]>;
  _gte?: InputMaybe<Scalars["Int"]>;
  _in?: InputMaybe<Array<Scalars["Int"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["Int"]>;
  _lte?: InputMaybe<Scalars["Int"]>;
  _neq?: InputMaybe<Scalars["Int"]>;
  _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
  _eq?: InputMaybe<Scalars["json"]>;
  _gt?: InputMaybe<Scalars["json"]>;
  _gte?: InputMaybe<Scalars["json"]>;
  _in?: InputMaybe<Array<Scalars["json"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["json"]>;
  _lte?: InputMaybe<Scalars["json"]>;
  _neq?: InputMaybe<Scalars["json"]>;
  _nin?: InputMaybe<Array<Scalars["json"]>>;
};

/** Boolean expression to filter rows from the table "link_database". All fields are combined with a logical 'AND'. */
export type LinkDatabaseBoolExp = {
  _and?: InputMaybe<Array<LinkDatabaseBoolExp>>;
  _not?: InputMaybe<LinkDatabaseBoolExp>;
  _or?: InputMaybe<Array<LinkDatabaseBoolExp>>;
  appId?: InputMaybe<StringComparisonExp>;
  connection?: InputMaybe<JsonComparisonExp>;
  database?: InputMaybe<StringComparisonExp>;
  fieldColumnMaps?: InputMaybe<JsonComparisonExp>;
  parameters?: InputMaybe<JsonComparisonExp>;
  sql?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "link_database" */
export enum LinkDatabaseConstraint {
  /** unique or primary key constraint on columns "app_id" */
  LinkDatabasePkey = "link_database_pkey",
}

/** input type for inserting data into table "link_database" */
export type LinkDatabaseInsertInput = {
  appId?: InputMaybe<Scalars["String"]>;
  connection?: InputMaybe<Scalars["json"]>;
  database?: InputMaybe<Scalars["String"]>;
  fieldColumnMaps?: InputMaybe<Scalars["json"]>;
  parameters?: InputMaybe<Scalars["json"]>;
  sql?: InputMaybe<Scalars["String"]>;
};

/** input type for inserting object relation for remote table "link_database" */
export type LinkDatabaseObjRelInsertInput = {
  data: LinkDatabaseInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<LinkDatabaseOnConflict>;
};

/** on_conflict condition type for table "link_database" */
export type LinkDatabaseOnConflict = {
  constraint: LinkDatabaseConstraint;
  updateColumns?: Array<LinkDatabaseUpdateColumn>;
  where?: InputMaybe<LinkDatabaseBoolExp>;
};

/** Ordering options when selecting data from "link_database". */
export type LinkDatabaseOrderBy = {
  appId?: InputMaybe<OrderBy>;
  connection?: InputMaybe<OrderBy>;
  database?: InputMaybe<OrderBy>;
  fieldColumnMaps?: InputMaybe<OrderBy>;
  parameters?: InputMaybe<OrderBy>;
  sql?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: link_database */
export type LinkDatabasePkColumnsInput = {
  appId: Scalars["String"];
};

/** select columns of table "link_database" */
export enum LinkDatabaseSelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  Connection = "connection",
  /** column name */
  Database = "database",
  /** column name */
  FieldColumnMaps = "fieldColumnMaps",
  /** column name */
  Parameters = "parameters",
  /** column name */
  Sql = "sql",
}

/** input type for updating data in table "link_database" */
export type LinkDatabaseSetInput = {
  appId?: InputMaybe<Scalars["String"]>;
  connection?: InputMaybe<Scalars["json"]>;
  database?: InputMaybe<Scalars["String"]>;
  fieldColumnMaps?: InputMaybe<Scalars["json"]>;
  parameters?: InputMaybe<Scalars["json"]>;
  sql?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "link_database" */
export type LinkDatabaseStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: LinkDatabaseStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type LinkDatabaseStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  connection?: InputMaybe<Scalars["json"]>;
  database?: InputMaybe<Scalars["String"]>;
  fieldColumnMaps?: InputMaybe<Scalars["json"]>;
  parameters?: InputMaybe<Scalars["json"]>;
  sql?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "link_database" */
export enum LinkDatabaseUpdateColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  Connection = "connection",
  /** column name */
  Database = "database",
  /** column name */
  FieldColumnMaps = "fieldColumnMaps",
  /** column name */
  Parameters = "parameters",
  /** column name */
  Sql = "sql",
}

export type LinkDatabaseUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<LinkDatabaseSetInput>;
  /** filter the rows which have to be updated */
  where: LinkDatabaseBoolExp;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type NumericComparisonExp = {
  _eq?: InputMaybe<Scalars["numeric"]>;
  _gt?: InputMaybe<Scalars["numeric"]>;
  _gte?: InputMaybe<Scalars["numeric"]>;
  _in?: InputMaybe<Array<Scalars["numeric"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["numeric"]>;
  _lte?: InputMaybe<Scalars["numeric"]>;
  _neq?: InputMaybe<Scalars["numeric"]>;
  _nin?: InputMaybe<Array<Scalars["numeric"]>>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = "ASC",
  /** in ascending order, nulls first */
  AscNullsFirst = "ASC_NULLS_FIRST",
  /** in ascending order, nulls last */
  AscNullsLast = "ASC_NULLS_LAST",
  /** in descending order, nulls first */
  Desc = "DESC",
  /** in descending order, nulls first */
  DescNullsFirst = "DESC_NULLS_FIRST",
  /** in descending order, nulls last */
  DescNullsLast = "DESC_NULLS_LAST",
}

export type RecordAggregateBoolExp = {
  count?: InputMaybe<RecordAggregateBoolExpCount>;
};

/** order by aggregate values of table "record" */
export type RecordAggregateOrderBy = {
  avg?: InputMaybe<RecordAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<RecordMaxOrderBy>;
  min?: InputMaybe<RecordMinOrderBy>;
  stddev?: InputMaybe<RecordStddevOrderBy>;
  stddevPop?: InputMaybe<RecordStddevPopOrderBy>;
  stddevSamp?: InputMaybe<RecordStddevSampOrderBy>;
  sum?: InputMaybe<RecordSumOrderBy>;
  varPop?: InputMaybe<RecordVarPopOrderBy>;
  varSamp?: InputMaybe<RecordVarSampOrderBy>;
  variance?: InputMaybe<RecordVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "record" */
export type RecordArrRelInsertInput = {
  data: Array<RecordInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<RecordOnConflict>;
};

/** order by avg() on columns of table "record" */
export type RecordAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "record". All fields are combined with a logical 'AND'. */
export type RecordBoolExp = {
  _and?: InputMaybe<Array<RecordBoolExp>>;
  _not?: InputMaybe<RecordBoolExp>;
  _or?: InputMaybe<Array<RecordBoolExp>>;
  app?: InputMaybe<AppBoolExp>;
  appId?: InputMaybe<StringComparisonExp>;
  columns?: InputMaybe<JsonComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  importFileRecord?: InputMaybe<ImportFileRecordBoolExp>;
  index?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "record" */
export enum RecordConstraint {
  /** unique or primary key constraint on columns "id" */
  RecordPkey = "record_pkey",
}

/** input type for incrementing numeric columns in table "record" */
export type RecordIncInput = {
  index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "record" */
export type RecordInsertInput = {
  app?: InputMaybe<AppObjRelInsertInput>;
  appId?: InputMaybe<Scalars["String"]>;
  columns?: InputMaybe<Scalars["json"]>;
  id?: InputMaybe<Scalars["String"]>;
  importFileRecord?: InputMaybe<ImportFileRecordObjRelInsertInput>;
  index?: InputMaybe<Scalars["Int"]>;
};

/** order by max() on columns of table "record" */
export type RecordMaxOrderBy = {
  appId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "record" */
export type RecordMinOrderBy = {
  appId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "record" */
export type RecordObjRelInsertInput = {
  data: RecordInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<RecordOnConflict>;
};

/** on_conflict condition type for table "record" */
export type RecordOnConflict = {
  constraint: RecordConstraint;
  updateColumns?: Array<RecordUpdateColumn>;
  where?: InputMaybe<RecordBoolExp>;
};

/** Ordering options when selecting data from "record". */
export type RecordOrderBy = {
  app?: InputMaybe<AppOrderBy>;
  appId?: InputMaybe<OrderBy>;
  columns?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importFileRecord?: InputMaybe<ImportFileRecordOrderBy>;
  index?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: record */
export type RecordPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "record" */
export enum RecordSelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  Columns = "columns",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
}

/** input type for updating data in table "record" */
export type RecordSetInput = {
  columns?: InputMaybe<Scalars["json"]>;
  index?: InputMaybe<Scalars["Int"]>;
};

/** order by stddev() on columns of table "record" */
export type RecordStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "record" */
export type RecordStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "record" */
export type RecordStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "record" */
export type RecordStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: RecordStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type RecordStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  columns?: InputMaybe<Scalars["json"]>;
  id?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "record" */
export type RecordSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "record" */
export enum RecordUpdateColumn {
  /** column name */
  Columns = "columns",
  /** column name */
  Index = "index",
}

export type RecordUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<RecordIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<RecordSetInput>;
  /** filter the rows which have to be updated */
  where: RecordBoolExp;
};

/** order by varPop() on columns of table "record" */
export type RecordVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "record" */
export type RecordVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "record" */
export type RecordVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars["String"]>;
  _gt?: InputMaybe<Scalars["String"]>;
  _gte?: InputMaybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["String"]>;
  _in?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["String"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["String"]>;
  _lt?: InputMaybe<Scalars["String"]>;
  _lte?: InputMaybe<Scalars["String"]>;
  _neq?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["String"]>;
  _nin?: InputMaybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["String"]>;
};

/** order by aggregate values of table "summary_view" */
export type SummaryViewAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SummaryViewMaxOrderBy>;
  min?: InputMaybe<SummaryViewMinOrderBy>;
};

/** input type for inserting array relation for remote table "summary_view" */
export type SummaryViewArrRelInsertInput = {
  data: Array<SummaryViewInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SummaryViewOnConflict>;
};

/** Boolean expression to filter rows from the table "summary_view". All fields are combined with a logical 'AND'. */
export type SummaryViewBoolExp = {
  _and?: InputMaybe<Array<SummaryViewBoolExp>>;
  _not?: InputMaybe<SummaryViewBoolExp>;
  _or?: InputMaybe<Array<SummaryViewBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  groupingFields?: InputMaybe<JsonComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  summaryFields?: InputMaybe<JsonComparisonExp>;
  view?: InputMaybe<ViewBoolExp>;
  viewId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "summary_view" */
export enum SummaryViewConstraint {
  /** unique or primary key constraint on columns "id" */
  SummaryViewPkey = "summary_view_pkey",
}

/** input type for inserting data into table "summary_view" */
export type SummaryViewInsertInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupingFields?: InputMaybe<Scalars["json"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  summaryFields?: InputMaybe<Scalars["json"]>;
  view?: InputMaybe<ViewObjRelInsertInput>;
  viewId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "summary_view" */
export type SummaryViewMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "summary_view" */
export type SummaryViewMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "summary_view" */
export type SummaryViewOnConflict = {
  constraint: SummaryViewConstraint;
  updateColumns?: Array<SummaryViewUpdateColumn>;
  where?: InputMaybe<SummaryViewBoolExp>;
};

/** Ordering options when selecting data from "summary_view". */
export type SummaryViewOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupingFields?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  summaryFields?: InputMaybe<OrderBy>;
  view?: InputMaybe<ViewOrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** select columns of table "summary_view" */
export enum SummaryViewSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupingFields = "groupingFields",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
  /** column name */
  SummaryFields = "summaryFields",
  /** column name */
  ViewId = "viewId",
}

/** Streaming cursor of the table "summary_view" */
export type SummaryViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SummaryViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SummaryViewStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  groupingFields?: InputMaybe<Scalars["json"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  summaryFields?: InputMaybe<Scalars["json"]>;
  viewId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "summary_view" (current role has no relevant permissions) */
export enum SummaryViewUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamp"]>;
  _gt?: InputMaybe<Scalars["timestamp"]>;
  _gte?: InputMaybe<Scalars["timestamp"]>;
  _in?: InputMaybe<Array<Scalars["timestamp"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamp"]>;
  _lte?: InputMaybe<Scalars["timestamp"]>;
  _neq?: InputMaybe<Scalars["timestamp"]>;
  _nin?: InputMaybe<Array<Scalars["timestamp"]>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars["timestamptz"]>;
  _gt?: InputMaybe<Scalars["timestamptz"]>;
  _gte?: InputMaybe<Scalars["timestamptz"]>;
  _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["timestamptz"]>;
  _lte?: InputMaybe<Scalars["timestamptz"]>;
  _neq?: InputMaybe<Scalars["timestamptz"]>;
  _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  apps?: InputMaybe<AppBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  views?: InputMaybe<ViewBoolExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "id" */
  UserPkey = "user_pkey",
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  affiliations?: InputMaybe<AffiliationArrRelInsertInput>;
  apps?: InputMaybe<AppArrRelInsertInput>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  views?: InputMaybe<ViewArrRelInsertInput>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  updateColumns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  appsAggregate?: InputMaybe<AppAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  viewsAggregate?: InputMaybe<ViewAggregateOrderBy>;
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Email = "email",
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "user" (current role has no relevant permissions) */
export enum UserUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** order by aggregate values of table "view" */
export type ViewAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ViewMaxOrderBy>;
  min?: InputMaybe<ViewMinOrderBy>;
};

/** order by aggregate values of table "view_app" */
export type ViewAppAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ViewAppMaxOrderBy>;
  min?: InputMaybe<ViewAppMinOrderBy>;
};

/** input type for inserting array relation for remote table "view_app" */
export type ViewAppArrRelInsertInput = {
  data: Array<ViewAppInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ViewAppOnConflict>;
};

/** Boolean expression to filter rows from the table "view_app". All fields are combined with a logical 'AND'. */
export type ViewAppBoolExp = {
  _and?: InputMaybe<Array<ViewAppBoolExp>>;
  _not?: InputMaybe<ViewAppBoolExp>;
  _or?: InputMaybe<Array<ViewAppBoolExp>>;
  app?: InputMaybe<AppBoolExp>;
  appId?: InputMaybe<StringComparisonExp>;
  fields?: InputMaybe<JsonComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  view?: InputMaybe<ViewBoolExp>;
  viewId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "view_app" */
export enum ViewAppConstraint {
  /** unique or primary key constraint on columns "id" */
  ViewAppPkey = "view_app_pkey",
}

/** input type for inserting data into table "view_app" */
export type ViewAppInsertInput = {
  app?: InputMaybe<AppObjRelInsertInput>;
  appId?: InputMaybe<Scalars["String"]>;
  fields?: InputMaybe<Scalars["json"]>;
  id?: InputMaybe<Scalars["String"]>;
  view?: InputMaybe<ViewObjRelInsertInput>;
  viewId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "view_app" */
export type ViewAppMaxOrderBy = {
  appId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "view_app" */
export type ViewAppMinOrderBy = {
  appId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "view_app" */
export type ViewAppOnConflict = {
  constraint: ViewAppConstraint;
  updateColumns?: Array<ViewAppUpdateColumn>;
  where?: InputMaybe<ViewAppBoolExp>;
};

/** Ordering options when selecting data from "view_app". */
export type ViewAppOrderBy = {
  app?: InputMaybe<AppOrderBy>;
  appId?: InputMaybe<OrderBy>;
  fields?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  view?: InputMaybe<ViewOrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** select columns of table "view_app" */
export enum ViewAppSelectColumn {
  /** column name */
  AppId = "appId",
  /** column name */
  Fields = "fields",
  /** column name */
  Id = "id",
  /** column name */
  ViewId = "viewId",
}

/** Streaming cursor of the table "view_app" */
export type ViewAppStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ViewAppStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ViewAppStreamCursorValueInput = {
  appId?: InputMaybe<Scalars["String"]>;
  fields?: InputMaybe<Scalars["json"]>;
  id?: InputMaybe<Scalars["String"]>;
  viewId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "view_app" (current role has no relevant permissions) */
export enum ViewAppUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** input type for inserting array relation for remote table "view" */
export type ViewArrRelInsertInput = {
  data: Array<ViewInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ViewOnConflict>;
};

/** Boolean expression to filter rows from the table "view". All fields are combined with a logical 'AND'. */
export type ViewBoolExp = {
  _and?: InputMaybe<Array<ViewBoolExp>>;
  _not?: InputMaybe<ViewBoolExp>;
  _or?: InputMaybe<Array<ViewBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  summaryViews?: InputMaybe<SummaryViewBoolExp>;
  user?: InputMaybe<UserBoolExp>;
  viewApps?: InputMaybe<ViewAppBoolExp>;
  viewFields?: InputMaybe<ViewFieldBoolExp>;
};

/** unique or primary key constraints on table "view" */
export enum ViewConstraint {
  /** unique or primary key constraint on columns "id" */
  ViewPkey = "view_pkey",
}

/** order by aggregate values of table "view_field" */
export type ViewFieldAggregateOrderBy = {
  avg?: InputMaybe<ViewFieldAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ViewFieldMaxOrderBy>;
  min?: InputMaybe<ViewFieldMinOrderBy>;
  stddev?: InputMaybe<ViewFieldStddevOrderBy>;
  stddevPop?: InputMaybe<ViewFieldStddevPopOrderBy>;
  stddevSamp?: InputMaybe<ViewFieldStddevSampOrderBy>;
  sum?: InputMaybe<ViewFieldSumOrderBy>;
  varPop?: InputMaybe<ViewFieldVarPopOrderBy>;
  varSamp?: InputMaybe<ViewFieldVarSampOrderBy>;
  variance?: InputMaybe<ViewFieldVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "view_field" */
export type ViewFieldArrRelInsertInput = {
  data: Array<ViewFieldInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ViewFieldOnConflict>;
};

/** order by avg() on columns of table "view_field" */
export type ViewFieldAvgOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "view_field". All fields are combined with a logical 'AND'. */
export type ViewFieldBoolExp = {
  _and?: InputMaybe<Array<ViewFieldBoolExp>>;
  _not?: InputMaybe<ViewFieldBoolExp>;
  _or?: InputMaybe<Array<ViewFieldBoolExp>>;
  fieldKind?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  index?: InputMaybe<IntComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  options?: InputMaybe<JsonComparisonExp>;
  view?: InputMaybe<ViewBoolExp>;
  viewId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "view_field" */
export enum ViewFieldConstraint {
  /** unique or primary key constraint on columns "id" */
  ViewFieldPkey = "view_field_pkey",
}

/** input type for incrementing numeric columns in table "view_field" */
export type ViewFieldIncInput = {
  index?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "view_field" */
export type ViewFieldInsertInput = {
  fieldKind?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Scalars["json"]>;
  view?: InputMaybe<ViewObjRelInsertInput>;
  viewId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "view_field" */
export type ViewFieldMaxOrderBy = {
  fieldKind?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "view_field" */
export type ViewFieldMinOrderBy = {
  fieldKind?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "view_field" */
export type ViewFieldOnConflict = {
  constraint: ViewFieldConstraint;
  updateColumns?: Array<ViewFieldUpdateColumn>;
  where?: InputMaybe<ViewFieldBoolExp>;
};

/** Ordering options when selecting data from "view_field". */
export type ViewFieldOrderBy = {
  fieldKind?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  index?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  options?: InputMaybe<OrderBy>;
  view?: InputMaybe<ViewOrderBy>;
  viewId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: view_field */
export type ViewFieldPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "view_field" */
export enum ViewFieldSelectColumn {
  /** column name */
  FieldKind = "fieldKind",
  /** column name */
  Id = "id",
  /** column name */
  Index = "index",
  /** column name */
  Name = "name",
  /** column name */
  Options = "options",
  /** column name */
  ViewId = "viewId",
}

/** input type for updating data in table "view_field" */
export type ViewFieldSetInput = {
  index?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Scalars["json"]>;
};

/** order by stddev() on columns of table "view_field" */
export type ViewFieldStddevOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "view_field" */
export type ViewFieldStddevPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "view_field" */
export type ViewFieldStddevSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "view_field" */
export type ViewFieldStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ViewFieldStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ViewFieldStreamCursorValueInput = {
  fieldKind?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  index?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
  options?: InputMaybe<Scalars["json"]>;
  viewId?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "view_field" */
export type ViewFieldSumOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** update columns of table "view_field" */
export enum ViewFieldUpdateColumn {
  /** column name */
  Index = "index",
  /** column name */
  Name = "name",
  /** column name */
  Options = "options",
}

export type ViewFieldUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ViewFieldIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ViewFieldSetInput>;
  /** filter the rows which have to be updated */
  where: ViewFieldBoolExp;
};

/** order by varPop() on columns of table "view_field" */
export type ViewFieldVarPopOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "view_field" */
export type ViewFieldVarSampOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "view_field" */
export type ViewFieldVarianceOrderBy = {
  index?: InputMaybe<OrderBy>;
};

/** input type for inserting data into table "view" */
export type ViewInsertInput = {
  createUserId?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
  summaryViews?: InputMaybe<SummaryViewArrRelInsertInput>;
  user?: InputMaybe<UserObjRelInsertInput>;
  viewApps?: InputMaybe<ViewAppArrRelInsertInput>;
  viewFields?: InputMaybe<ViewFieldArrRelInsertInput>;
};

/** order by max() on columns of table "view" */
export type ViewMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "view" */
export type ViewMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "view" */
export type ViewObjRelInsertInput = {
  data: ViewInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ViewOnConflict>;
};

/** on_conflict condition type for table "view" */
export type ViewOnConflict = {
  constraint: ViewConstraint;
  updateColumns?: Array<ViewUpdateColumn>;
  where?: InputMaybe<ViewBoolExp>;
};

/** Ordering options when selecting data from "view". */
export type ViewOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  summaryViewsAggregate?: InputMaybe<SummaryViewAggregateOrderBy>;
  user?: InputMaybe<UserOrderBy>;
  viewAppsAggregate?: InputMaybe<ViewAppAggregateOrderBy>;
  viewFieldsAggregate?: InputMaybe<ViewFieldAggregateOrderBy>;
};

/** primary key columns input for table: view */
export type ViewPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "view" */
export enum ViewSelectColumn {
  /** column name */
  Id = "id",
  /** column name */
  Name = "name",
}

/** input type for updating data in table "view" */
export type ViewSetInput = {
  name?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "view" */
export type ViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ViewStreamCursorValueInput = {
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "view" */
export enum ViewUpdateColumn {
  /** column name */
  Name = "name",
}

export type ViewUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ViewSetInput>;
  /** filter the rows which have to be updated */
  where: ViewBoolExp;
};

export type AffiliationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AffiliationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<AffiliationBoolExp>;
  predicate: IntComparisonExp;
};

export type CategoryTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type DailyDetailByDateArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GenreTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["String"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GroupApplicationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<GroupApplicationBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdAccountAggregateBoolExpBool_And = {
  arguments: HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAccountBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdAccountAggregateBoolExpBool_Or = {
  arguments: HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAccountBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdAccountAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAccountBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdAllDetailViewAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdCreditCardDetailAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdCreditCardSummaryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdDailyDetailAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdDailyDetailBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdDepositCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdFavoriteFilterAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdFavoriteFilterSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdFavoriteFilterBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdFavoriteFilterArgsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdFavoriteFilterArgsSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdFavoriteFilterArgsBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdGenreAggregateBoolExpBool_And = {
  arguments: HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdGenreBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdGenreAggregateBoolExpBool_Or = {
  arguments: HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdGenreBoolExp>;
  predicate: BooleanComparisonExp;
};

export type HouseholdGenreAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdGenreBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdImportFileHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdSummaryCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdTotalByCategoryViewAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdTransferCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type ImportFileRecordAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ImportFileRecordSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<ImportFileRecordBoolExp>;
  predicate: IntComparisonExp;
};

export type RecordAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<RecordSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<RecordBoolExp>;
  predicate: IntComparisonExp;
};

export type CreateAccountMutationVariables = Exact<{
  accountId: Scalars["String"];
  accountName: Scalars["String"];
  displayOrder: Scalars["Int"];
  groupId: Scalars["String"];
}>;

export type CreateAccountMutation = {
  __typename?: "mutation_root";
  insertAccount?: {
    __typename?: "HouseholdAccountMutationResponse";
    returning: Array<{ __typename?: "HouseholdAccount"; accountId: string }>;
  } | null;
};

export type CreateCategoryMutationVariables = Exact<{
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  genreId: Scalars["String"];
  displayOrder: Scalars["Int"];
  validFlag: Scalars["Boolean"];
  groupId: Scalars["String"];
}>;

export type CreateCategoryMutation = {
  __typename?: "mutation_root";
  insertCategory?: {
    __typename?: "HouseholdCategoryMutationResponse";
    returning: Array<{ __typename?: "HouseholdCategory"; id: string }>;
  } | null;
};

export type CreateCreditCardDetailMutationVariables = Exact<{
  id: Scalars["String"];
  date: Scalars["date"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  amount: Scalars["numeric"];
  memo: Scalars["String"];
  summaryId: Scalars["String"];
  userId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type CreateCreditCardDetailMutation = {
  __typename?: "mutation_root";
  insertCreditCardDetail?: {
    __typename?: "HouseholdCreditCardDetailMutationResponse";
    returning: Array<{ __typename?: "HouseholdCreditCardDetail"; id: string }>;
  } | null;
};

export type CreateCreditCardSummaryMutationVariables = Exact<{
  accountId: Scalars["String"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  groupId: Scalars["String"];
  id: Scalars["String"];
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
}>;

export type CreateCreditCardSummaryMutation = {
  __typename?: "mutation_root";
  insertCreditCardSummary?: {
    __typename?: "HouseholdCreditCardSummaryMutationResponse";
    returning: Array<{ __typename?: "HouseholdCreditCardSummary"; id: string }>;
  } | null;
};

export type CreateDailyDetailMutationVariables = Exact<{
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  date: Scalars["date"];
  groupId: Scalars["String"];
  id: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
  userId: Scalars["String"];
}>;

export type CreateDailyDetailMutation = {
  __typename: "mutation_root";
  insertDailyDetail?: {
    __typename: "HouseholdDailyDetailMutationResponse";
    returning: Array<{ __typename: "HouseholdDailyDetail"; id: string }>;
  } | null;
};

export type CreateImportFileHistoryMutationVariables = Exact<{
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  groupId: Scalars["String"];
  id: Scalars["String"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["String"];
}>;

export type CreateImportFileHistoryMutation = {
  __typename?: "mutation_root";
  insertImportFileHistory?: {
    __typename?: "HouseholdImportFileHistoryMutationResponse";
    returning: Array<{ __typename?: "HouseholdImportFileHistory"; id: string }>;
  } | null;
};

export type CreateSummaryCategoryMutationVariables = Exact<{
  id: Scalars["String"];
  displayOrder: Scalars["Int"];
  categoryId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type CreateSummaryCategoryMutation = {
  __typename?: "mutation_root";
  insertSummaryCategoryByGroup?: {
    __typename?: "HouseholdSummaryCategoryMutationResponse";
    returning: Array<{ __typename?: "HouseholdSummaryCategory"; id: string }>;
  } | null;
};

export type CreateUserMutationVariables = Exact<{
  userId: Scalars["String"];
  userName: Scalars["String"];
  email: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type CreateUserMutation = {
  __typename?: "mutation_root";
  insertUser?: {
    __typename?: "UserMutationResponse";
    returning: Array<{ __typename?: "User"; email: string; userId: string }>;
  } | null;
};

export type DeleteDailyDetailBySerialNoMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteDailyDetailBySerialNoMutation = {
  __typename?: "mutation_root";
  deleteDailyDetailByPk?: {
    __typename: "HouseholdDailyDetail";
    id: string;
  } | null;
};

export type DeleteSummaryCategoryMutationVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type DeleteSummaryCategoryMutation = {
  __typename?: "mutation_root";
  deleteSummaryCategoryByGroup?: {
    __typename?: "HouseholdSummaryCategoryMutationResponse";
    returning: Array<{ __typename?: "HouseholdSummaryCategory"; id: string }>;
  } | null;
};

export type UpdateCategoryByIdMutationVariables = Exact<{
  categoryId: Scalars["String"];
  categoryName: Scalars["String"];
  genreId: Scalars["String"];
  displayOrder: Scalars["Int"];
  validFlag: Scalars["Boolean"];
}>;

export type UpdateCategoryByIdMutation = {
  __typename?: "mutation_root";
  updateCategoryByPk?: { __typename?: "HouseholdCategory"; id: string } | null;
};

export type UpdateCreditCardSummaryTotalMutationVariables = Exact<{
  id: Scalars["String"];
  totalAmount: Scalars["numeric"];
  count: Scalars["Int"];
}>;

export type UpdateCreditCardSummaryTotalMutation = {
  __typename?: "mutation_root";
  updateCreditCardSummary?: {
    __typename?: "HouseholdCreditCardSummary";
    id: string;
  } | null;
};

export type UpdateDailyDetailByIdMutationVariables = Exact<{
  id: Scalars["String"];
  date: Scalars["date"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateDailyDetailByIdMutation = {
  __typename?: "mutation_root";
  updateDailyDetailByPk?: {
    __typename: "HouseholdDailyDetail";
    id: string;
  } | null;
};

export type UpdateGenreByIdMutationVariables = Exact<{
  genreId: Scalars["String"];
  validFlag: Scalars["Boolean"];
  iocomeType: Scalars["String"];
  genreType: Scalars["String"];
  genreName: Scalars["String"];
  displayOrder: Scalars["Int"];
}>;

export type UpdateGenreByIdMutation = {
  __typename?: "mutation_root";
  updateGenreByPk?: { __typename?: "HouseholdGenre"; id: string } | null;
};

export type DeleteDashboardSettingMutationVariables = Exact<{
  settingId: Scalars["String"];
}>;

export type DeleteDashboardSettingMutation = {
  __typename?: "mutation_root";
  deleteHouseholdDashboardSettingArgs?: {
    __typename?: "HouseholdDashboardSettingArgsMutationResponse";
    returning: Array<{
      __typename: "HouseholdDashboardSettingArgs";
      id: string;
    }>;
  } | null;
  deleteHouseholdDashboardSettingByPk?: {
    __typename: "HouseholdDashboardSetting";
    id: string;
  } | null;
};

export type DeleteFavoriteFilterArgMutationVariables = Exact<{
  id: Scalars["String"];
}>;

export type DeleteFavoriteFilterArgMutation = {
  __typename?: "mutation_root";
  deleteHouseholdFavoriteFilterArgsByPk?: {
    __typename?: "HouseholdFavoriteFilterArgs";
    id: string;
  } | null;
};

export type DeleteInsertDashboardSettingArgsMutationVariables = Exact<{
  settingId: Scalars["String"];
  objects:
    | Array<HouseholdDashboardSettingArgsInsertInput>
    | HouseholdDashboardSettingArgsInsertInput;
}>;

export type DeleteInsertDashboardSettingArgsMutation = {
  __typename?: "mutation_root";
  deleteDashboardSettingArgs?: {
    __typename?: "HouseholdDashboardSettingArgsMutationResponse";
    returning: Array<{
      __typename: "HouseholdDashboardSettingArgs";
      id: string;
    }>;
  } | null;
  insertDashboardSettingArgs?: {
    __typename?: "HouseholdDashboardSettingArgsMutationResponse";
    returning: Array<{
      __typename: "HouseholdDashboardSettingArgs";
      id: string;
    }>;
  } | null;
};

export type InsertDashboardSettingMutationVariables = Exact<{
  settingId: Scalars["String"];
  feature: Scalars["String"];
  order: Scalars["Int"];
  userId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type InsertDashboardSettingMutation = {
  __typename?: "mutation_root";
  insertSetting?: {
    __typename?: "HouseholdDashboardSettingMutationResponse";
    returning: Array<{ __typename: "HouseholdDashboardSetting"; id: string }>;
  } | null;
};

export type InsertDashboardSettingArgsMutationVariables = Exact<{
  id: Scalars["String"];
  type: Scalars["String"];
  value: Scalars["String"];
  settingId: Scalars["String"];
}>;

export type InsertDashboardSettingArgsMutation = {
  __typename?: "mutation_root";
  insertSettingArgs?: {
    __typename?: "HouseholdDashboardSettingArgsMutationResponse";
    returning: Array<{
      __typename: "HouseholdDashboardSettingArgs";
      id: string;
    }>;
  } | null;
};

export type InsertFavoriteFilterMutationVariables = Exact<{
  filterId: Scalars["String"];
  name: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type InsertFavoriteFilterMutation = {
  __typename?: "mutation_root";
  insertHouseholdFavoriteFilterOne?: {
    __typename?: "HouseholdFavoriteFilter";
    id: string;
  } | null;
};

export type InsertFavoriteFilterArgMutationVariables = Exact<{
  argId: Scalars["String"];
  filterId: Scalars["String"];
  key: Scalars["String"];
  value: Scalars["String"];
}>;

export type InsertFavoriteFilterArgMutation = {
  __typename?: "mutation_root";
  insertArg?: { __typename: "HouseholdFavoriteFilterArgs"; id: string } | null;
};

export type UpdateCreditCardDetailAmountByIdMutationVariables = Exact<{
  id: Scalars["String"];
  amount: Scalars["numeric"];
}>;

export type UpdateCreditCardDetailAmountByIdMutation = {
  __typename?: "mutation_root";
  updateHouseholdCreditCardDetailByPk?: {
    __typename?: "HouseholdCreditCardDetail";
    id: string;
  } | null;
};

export type UpdateCreditCardDetailByIdMutationVariables = Exact<{
  id: Scalars["String"];
  genreId: Scalars["String"];
  categoryId: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateCreditCardDetailByIdMutation = {
  __typename?: "mutation_root";
  updateHouseholdCreditCardDetailByPk?: {
    __typename?: "HouseholdCreditCardDetail";
    id: string;
  } | null;
};

export type UpdateDashboardSettingMutationVariables = Exact<{
  settingId: Scalars["String"];
  feature: Scalars["String"];
  order: Scalars["Int"];
}>;

export type UpdateDashboardSettingMutation = {
  __typename?: "mutation_root";
  updateDashboardSetting?: {
    __typename: "HouseholdDashboardSetting";
    id: string;
  } | null;
};

export type UpdateDashboardSettingOrderMutationVariables = Exact<{
  settingId: Scalars["String"];
  order: Scalars["Int"];
}>;

export type UpdateDashboardSettingOrderMutation = {
  __typename?: "mutation_root";
  updateHouseholdDashboardSettingByPk?: {
    __typename: "HouseholdDashboardSetting";
    id: string;
  } | null;
};

export type UpdateFavoriteFilterMutationVariables = Exact<{
  filterId: Scalars["String"];
  name: Scalars["String"];
}>;

export type UpdateFavoriteFilterMutation = {
  __typename?: "mutation_root";
  updateHouseholdFavoriteFilterByPk?: {
    __typename: "HouseholdFavoriteFilter";
    id: string;
  } | null;
};

export type UpdateFavoriteFilterArgMutationVariables = Exact<{
  argId: Scalars["String"];
  value: Scalars["String"];
}>;

export type UpdateFavoriteFilterArgMutation = {
  __typename?: "mutation_root";
  insertArg?: { __typename: "HouseholdFavoriteFilterArgs"; id: string } | null;
};

export type GetAllCategoriesQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetAllCategoriesQuery = {
  __typename?: "query_root";
  categories: Array<{
    __typename?: "HouseholdCategory";
    id: string;
    displayOrder: number;
    validFlag?: boolean | null;
    categoryName: string;
    genre: {
      __typename?: "HouseholdGenre";
      genreId: string;
      genreName: string;
    };
  }>;
};

export type GetAllCategoryListWithCriteriaQueryVariables = Exact<{
  validCategoryIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  validGenreIn?: InputMaybe<Array<Scalars["Boolean"]> | Scalars["Boolean"]>;
  iocomeTypeIn?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
  categoryNotIn?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetAllCategoryListWithCriteriaQuery = {
  __typename?: "query_root";
  genres: Array<{
    __typename?: "HouseholdGenre";
    id: string;
    name: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    type: string;
    categories: Array<{
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      validFlag?: boolean | null;
      displayOrder: number;
    }>;
  }>;
};

export type GetAllGenreQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetAllGenreQuery = {
  __typename?: "query_root";
  genre: Array<{
    __typename?: "HouseholdGenre";
    id: string;
    genreType: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    genreName: string;
  }>;
};

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllUsersQuery = {
  __typename?: "query_root";
  users: Array<{
    __typename?: "User";
    id: string;
    name?: string | null;
    email: string;
    affiliation: Array<{
      __typename?: "Affiliation";
      group: { __typename?: "Group"; id: string; name: string };
    }>;
  }>;
};

export type GetCategoryByIdQueryVariables = Exact<{
  categoryId: Scalars["String"];
}>;

export type GetCategoryByIdQuery = {
  __typename?: "query_root";
  category?: {
    __typename?: "HouseholdCategory";
    validFlag?: boolean | null;
    displayOrder: number;
    categoryName: string;
    genre: {
      __typename?: "HouseholdGenre";
      iocomeType: string;
      genreId: string;
    };
  } | null;
};

export type GetCategoryTotalByMonthQueryVariables = Exact<{
  fromDate?: InputMaybe<Scalars["date"]>;
  toDate?: InputMaybe<Scalars["date"]>;
  groupId: Scalars["String"];
}>;

export type GetCategoryTotalByMonthQuery = {
  __typename?: "query_root";
  categoryTotalByMonth: Array<{
    __typename?: "HouseholdTotalByCategoryView";
    date?: any | null;
    iocomeType?: string | null;
    genreId?: string | null;
    genreName?: string | null;
    categoryId?: string | null;
    categoryName?: string | null;
    total?: any | null;
  }>;
};

export type GetCreditCardDetailBySummaryIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetCreditCardDetailBySummaryIdQuery = {
  __typename?: "query_root";
  creditCardSummary?: {
    __typename?: "HouseholdCreditCardSummary";
    id: string;
    creditCard: string;
    withdrawalDate: any;
    count: number;
    totalAmount: any;
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
    creditCardDetails: Array<{
      __typename?: "HouseholdCreditCardDetail";
      id: string;
      date: any;
      memo?: string | null;
      amount: any;
      category: {
        __typename?: "HouseholdCategory";
        id: string;
        name: string;
        genre: {
          __typename?: "HouseholdGenre";
          id: string;
          name: string;
          genreType: string;
          iocomeType: string;
        };
      };
    }>;
  } | null;
};

export type GetCreditCardListQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetCreditCardListQuery = {
  __typename?: "query_root";
  allCreditCardSummariesList: Array<{
    __typename?: "HouseholdCreditCardSummary";
    id: string;
    creditCard: string;
    count: number;
    withdrawalDate: any;
    totalAmount: any;
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  }>;
};

export type GetDailyDetailByDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetDailyDetailByDateQuery = {
  __typename?: "query_root";
  dailies: Array<{
    __typename: "HouseholdDailyDetail";
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    genre: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
      iocomeType: string;
    };
    category: { __typename?: "HouseholdCategory"; id: string; name: string };
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  }>;
};

export type GetDailyDetailByDateCategoryIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
  categoryId: Scalars["String"];
}>;

export type GetDailyDetailByDateCategoryIdQuery = {
  __typename?: "query_root";
  dailies: Array<{
    __typename: "HouseholdDailyDetail";
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    genre: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
      iocomeType: string;
    };
    category: { __typename?: "HouseholdCategory"; id: string; name: string };
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  }>;
};

export type GetDailyDetailByDateGenreIdQueryVariables = Exact<{
  genreId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetDailyDetailByDateGenreIdQuery = {
  __typename?: "query_root";
  allCategoriesList: Array<{
    __typename?: "HouseholdCategory";
    dailyDetailsByCategoryIdList: Array<{
      __typename?: "HouseholdDailyDetail";
      id: string;
      date: any;
      amount: any;
      memo?: string | null;
      categoryByCategoryId: {
        __typename?: "HouseholdCategory";
        categoryId: string;
        categoryName: string;
        genreByGenreId: {
          __typename?: "HouseholdGenre";
          genreType: string;
          iocomeType: string;
          genreId: string;
          genreName: string;
        };
      };
      accountByAccountId: {
        __typename?: "HouseholdAccount";
        accountId: string;
        accountName: string;
      };
      userByUserId: {
        __typename?: "User";
        userId: string;
        userName?: string | null;
      };
    }>;
  }>;
};

export type GetGenreByIdQueryVariables = Exact<{
  genreId: Scalars["String"];
}>;

export type GetGenreByIdQuery = {
  __typename?: "query_root";
  genreById?: {
    __typename?: "HouseholdGenre";
    id: string;
    genreType: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    genreName: string;
    categories: Array<{
      __typename?: "HouseholdCategory";
      categoryId: string;
      categoryName: string;
    }>;
  } | null;
};

export type GetGenreTotalByMonthQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetGenreTotalByMonthQuery = {
  __typename?: "query_root";
  genreTotalByMonthList: Array<{
    __typename?: "HouseholdTotalByGenreView";
    date?: any | null;
    iocomeType?: string | null;
    genreId?: string | null;
    genreName?: string | null;
    total?: any | null;
  }>;
};

export type GetSummaryCategoriesQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetSummaryCategoriesQuery = {
  __typename?: "query_root";
  categories: Array<{
    __typename?: "HouseholdSummaryCategory";
    id: string;
    groupId: string;
    displayOrder: number;
    category: {
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      genre: {
        __typename?: "HouseholdGenre";
        id: string;
        name: string;
        iocomeType: string;
        type: string;
      };
    };
  }>;
};

export type GetSummaryCategoryBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetSummaryCategoryBetweenDateQuery = {
  __typename?: "query_root";
  summaryCategoryList: Array<{
    __typename?: "HouseholdSummaryCategory";
    category: {
      __typename?: "HouseholdCategory";
      name: string;
      id: string;
      genre: { __typename?: "HouseholdGenre"; iocomeType: string };
      daily: Array<{
        __typename?: "HouseholdDailyDetail";
        date: any;
        amount: any;
      }>;
      creditCard: Array<{
        __typename?: "HouseholdCreditCardDetail";
        date: any;
        amount: any;
      }>;
    };
  }>;
};

export type GetTotalBetweenDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetTotalBetweenDateQuery = {
  __typename?: "query_root";
  incomeTotalByDate: Array<{
    __typename?: "HouseholdDailyTotalView";
    date?: any | null;
    iocomeType?: string | null;
    total?: any | null;
  }>;
  outcomeTotalByDate: Array<{
    __typename?: "HouseholdDailyTotalView";
    date?: any | null;
    iocomeType?: string | null;
    total?: any | null;
  }>;
};

export type GetTransferCategoryByQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetTransferCategoryByQuery = {
  __typename?: "query_root";
  transferCategory?: {
    __typename?: "HouseholdTransferCategory";
    id: string;
    incomeCategory: {
      __typename?: "HouseholdCategory";
      categoryId: string;
      genre: {
        __typename?: "HouseholdGenre";
        iocomeType: string;
        genreId: string;
      };
    };
    outcomeCategory: {
      __typename?: "HouseholdCategory";
      categoryId: string;
      genre: {
        __typename?: "HouseholdGenre";
        iocomeType: string;
        genreId: string;
      };
    };
  } | null;
};

export type GetValidAccountsQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetValidAccountsQuery = {
  __typename?: "query_root";
  allAccountsList: Array<{
    __typename?: "HouseholdAccount";
    accountId: string;
    accountName: string;
  }>;
};

export type GetValidCategoryByGenreIdQueryVariables = Exact<{
  groupId: Scalars["String"];
  genreId: Scalars["String"];
}>;

export type GetValidCategoryByGenreIdQuery = {
  __typename?: "query_root";
  genreById: Array<{
    __typename?: "HouseholdGenre";
    id: string;
    name: string;
    categories: Array<{
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      displayOrder: number;
    }>;
  }>;
  genre?: {
    __typename?: "HouseholdGenre";
    id: string;
    name: string;
    categories: Array<{
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      displayOrder: number;
    }>;
  } | null;
};

export type GetValidGenreListByIocomeTypeQueryVariables = Exact<{
  iocomeType: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type GetValidGenreListByIocomeTypeQuery = {
  __typename?: "query_root";
  allGenresList: Array<{
    __typename?: "HouseholdGenre";
    genreType: string;
    iocomeType: string;
    displayOrder: number;
    genreId: string;
    genreName: string;
    categoriesByGenreIdList: Array<{
      __typename?: "HouseholdCategory";
      displayOrder: number;
      categoryId: string;
      categoryName: string;
    }>;
  }>;
};

export type FragDailyDetailFragment = {
  __typename: "HouseholdDailyDetail";
  id: string;
  date: any;
  amount: any;
  memo?: string | null;
  genre: {
    __typename?: "HouseholdGenre";
    id: string;
    name: string;
    genreType: string;
    iocomeType: string;
  };
  category: { __typename?: "HouseholdCategory"; id: string; name: string };
  account: { __typename?: "HouseholdAccount"; id: string; name: string };
};

export type GetAccountBalanceListQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type GetAccountBalanceListQuery = {
  __typename?: "query_root";
  account: Array<{
    __typename: "HouseholdAccount";
    id: string;
    accountName: string;
    allDetailViewsAggregate: {
      __typename?: "HouseholdAllDetailViewAggregate";
      aggregate?: {
        __typename?: "HouseholdAllDetailViewAggregateFields";
        sum?: {
          __typename?: "HouseholdAllDetailViewSumFields";
          signedAmount?: any | null;
        } | null;
      } | null;
    };
  }>;
};

export type GetCreditCardSummaryByDateQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetCreditCardSummaryByDateQuery = {
  __typename?: "query_root";
  creditCardSummaries: Array<{
    __typename?: "HouseholdCreditCardSummary";
    id: string;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  }>;
};

export type GetDailyDetailByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetDailyDetailByIdQuery = {
  __typename?: "query_root";
  dailyDetail?: {
    __typename: "HouseholdDailyDetail";
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    genre: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
      iocomeType: string;
    };
    category: { __typename?: "HouseholdCategory"; id: string; name: string };
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  } | null;
};

export type GetDepositQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type GetDepositQuery = {
  __typename?: "query_root";
  depositCategory: Array<{
    __typename?: "HouseholdDepositCategory";
    category: {
      __typename?: "HouseholdCategory";
      id: string;
      categoryName: string;
      daily: {
        __typename?: "HouseholdDailyDetailAggregate";
        aggregate?: {
          __typename?: "HouseholdDailyDetailAggregateFields";
          count: number;
          sum?: {
            __typename?: "HouseholdDailyDetailSumFields";
            amount?: any | null;
          } | null;
          avg?: {
            __typename?: "HouseholdDailyDetailAvgFields";
            amount?: number | null;
          } | null;
        } | null;
        nodes: Array<{
          __typename?: "HouseholdDailyDetail";
          id: string;
          date: any;
          amount: any;
          memo?: string | null;
        }>;
      };
      credit: {
        __typename?: "HouseholdCreditCardDetailAggregate";
        aggregate?: {
          __typename?: "HouseholdCreditCardDetailAggregateFields";
          count: number;
          sum?: {
            __typename?: "HouseholdCreditCardDetailSumFields";
            amount?: any | null;
          } | null;
          avg?: {
            __typename?: "HouseholdCreditCardDetailAvgFields";
            amount?: number | null;
          } | null;
        } | null;
        nodes: Array<{
          __typename?: "HouseholdCreditCardDetail";
          id: string;
          date: any;
          amount: any;
          memo?: string | null;
        }>;
      };
    };
  }>;
};

export type FragCreditCardDetailFragment = {
  __typename?: "HouseholdCreditCardDetail";
  id: string;
  date: any;
  amount: any;
  memo?: string | null;
  genre: {
    __typename?: "HouseholdGenre";
    id: string;
    name: string;
    iocomeType: string;
    genreType: string;
  };
  category: { __typename?: "HouseholdCategory"; id: string; name: string };
  summary: {
    __typename?: "HouseholdCreditCardSummary";
    id: string;
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  };
};

export type FragFavoriteFilterFragment = {
  __typename: "HouseholdFavoriteFilter";
  id: string;
  name: string;
  args: Array<{
    __typename: "HouseholdFavoriteFilterArgs";
    id: string;
    key: string;
    value: string;
    category?: {
      __typename: "HouseholdCategory";
      id: string;
      name: string;
      genre: {
        __typename: "HouseholdGenre";
        id: string;
        name: string;
        iocomeType: string;
        genreType: string;
      };
    } | null;
  }>;
};

export type GetAccountByIdQueryVariables = Exact<{
  accountId: Scalars["String"];
}>;

export type GetAccountByIdQuery = {
  __typename?: "query_root";
  account?: {
    __typename?: "HouseholdAccount";
    id: string;
    name: string;
  } | null;
};

export type GetCreditCardDetailByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetCreditCardDetailByIdQuery = {
  __typename?: "query_root";
  creditCardDetail?: {
    __typename?: "HouseholdCreditCardDetail";
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    genre: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      iocomeType: string;
      genreType: string;
    };
    category: { __typename?: "HouseholdCategory"; id: string; name: string };
    summary: {
      __typename?: "HouseholdCreditCardSummary";
      id: string;
      account: { __typename?: "HouseholdAccount"; id: string; name: string };
    };
  } | null;
};

export type GetCreditCardDetailListQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
}>;

export type GetCreditCardDetailListQuery = {
  __typename?: "query_root";
  creditCardDetails: Array<{
    __typename?: "HouseholdCreditCardDetail";
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    genre: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      iocomeType: string;
      genreType: string;
    };
    category: { __typename?: "HouseholdCategory"; id: string; name: string };
    summary: {
      __typename?: "HouseholdCreditCardSummary";
      id: string;
      account: { __typename?: "HouseholdAccount"; id: string; name: string };
    };
  }>;
};

export type GetCreditCardSummaryByAccountIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  accountId: Scalars["String"];
}>;

export type GetCreditCardSummaryByAccountIdQuery = {
  __typename?: "query_root";
  creditCardSummaries: Array<{
    __typename: "HouseholdCreditCardSummary";
    id: string;
    withdrawalDate: any;
    totalAmount: any;
    creditCard: string;
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  }>;
};

export type GetCreditCardSummaryByIdQueryVariables = Exact<{
  summaryId: Scalars["String"];
}>;

export type GetCreditCardSummaryByIdQuery = {
  __typename?: "query_root";
  creditCardSummary?: {
    __typename?: "HouseholdCreditCardSummary";
    id: string;
    creditCard: string;
    withdrawalDate: any;
    totalAmount: any;
    count: number;
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  } | null;
};

export type GetDailyByAccountIdQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  accountId: Scalars["String"];
  groupId: Scalars["String"];
  orderBy?: InputMaybe<OrderBy>;
}>;

export type GetDailyByAccountIdQuery = {
  __typename: "query_root";
  dailies: Array<{
    __typename: "HouseholdDailyDetail";
    id: string;
    date: any;
    amount: any;
    memo?: string | null;
    genre: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
      iocomeType: string;
    };
    category: { __typename?: "HouseholdCategory"; id: string; name: string };
    account: { __typename?: "HouseholdAccount"; id: string; name: string };
  }>;
};

export type GetDashboardSettingQueryVariables = Exact<{
  userId: Scalars["String"];
  groupId: Scalars["String"];
}>;

export type GetDashboardSettingQuery = {
  __typename?: "query_root";
  setting: Array<{
    __typename: "HouseholdDashboardSetting";
    id: string;
    feature: string;
    order: number;
    args: Array<{
      __typename: "HouseholdDashboardSettingArgs";
      id: string;
      type: string;
      value: string;
    }>;
  }>;
};

export type GetDetailsByCategoryQueryVariables = Exact<{
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  groupId: Scalars["String"];
  iocomeType?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetDetailsByCategoryQuery = {
  __typename?: "query_root";
  group?: {
    __typename?: "Group";
    transfer?: {
      __typename?: "HouseholdTransferCategory";
      outcomeCategoryId: string;
      incomeCategoryId: string;
    } | null;
    dailyDetails: Array<{
      __typename?: "HouseholdDailyDetail";
      id: string;
      date: any;
      amount: any;
      memo?: string | null;
      genre: {
        __typename?: "HouseholdGenre";
        id: string;
        name: string;
        iocomeType: string;
        genreType: string;
      };
      category: { __typename?: "HouseholdCategory"; id: string; name: string };
    }>;
    creditCardDetails: Array<{
      __typename?: "HouseholdCreditCardDetail";
      id: string;
      date: any;
      amount: any;
      memo?: string | null;
      genre: {
        __typename?: "HouseholdGenre";
        id: string;
        name: string;
        iocomeType: string;
        genreType: string;
      };
      category: { __typename?: "HouseholdCategory"; id: string; name: string };
      summary: {
        __typename?: "HouseholdCreditCardSummary";
        id: string;
        account: { __typename?: "HouseholdAccount"; id: string; name: string };
      };
    }>;
  } | null;
};

export type GetFavoriteFilterQueryVariables = Exact<{
  filterId: Scalars["String"];
}>;

export type GetFavoriteFilterQuery = {
  __typename?: "query_root";
  filter?: {
    __typename: "HouseholdFavoriteFilter";
    id: string;
    name: string;
    args: Array<{
      __typename: "HouseholdFavoriteFilterArgs";
      id: string;
      key: string;
      value: string;
      category?: {
        __typename: "HouseholdCategory";
        id: string;
        name: string;
        genre: {
          __typename: "HouseholdGenre";
          id: string;
          name: string;
          iocomeType: string;
          genreType: string;
        };
      } | null;
    }>;
  } | null;
};

export type GetFavoriteFiltersQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetFavoriteFiltersQuery = {
  __typename?: "query_root";
  filters: Array<{
    __typename: "HouseholdFavoriteFilter";
    id: string;
    name: string;
    args: Array<{
      __typename: "HouseholdFavoriteFilterArgs";
      id: string;
      key: string;
      value: string;
      category?: {
        __typename: "HouseholdCategory";
        id: string;
        name: string;
        genre: {
          __typename: "HouseholdGenre";
          id: string;
          name: string;
          iocomeType: string;
          genreType: string;
        };
      } | null;
    }>;
  }>;
};

export const FragDailyDetailFragmentDoc = gql`
  fragment fragDailyDetail on HouseholdDailyDetail {
    __typename
    id
    date
    genre {
      id
      name
      genreType
      iocomeType
    }
    category {
      id
      name
    }
    account {
      id
      name
    }
    amount
    memo
  }
`;
export const FragCreditCardDetailFragmentDoc = gql`
  fragment fragCreditCardDetail on HouseholdCreditCardDetail {
    id
    date
    amount
    memo
    genre {
      id
      name
      iocomeType
      genreType
    }
    category {
      id
      name
    }
    summary: creditCardSummary {
      id
      account {
        id
        name
      }
    }
  }
`;
export const FragFavoriteFilterFragmentDoc = gql`
  fragment fragFavoriteFilter on HouseholdFavoriteFilter {
    __typename
    id
    name
    args: favoriteFilterArgs {
      __typename
      id
      key
      value
      category: favoriteFilterArgCategoryId {
        __typename
        id
        name
        genre {
          __typename
          id
          name
          iocomeType
          genreType
        }
      }
    }
  }
`;
export const CreateAccountDocument = gql`
  mutation CreateAccount(
    $accountId: String!
    $accountName: String!
    $displayOrder: Int!
    $groupId: String!
  ) {
    insertAccount: insertHouseholdAccount(
      objects: {
        id: $accountId
        name: $accountName
        displayOrder: $displayOrder
        groupId: $groupId
        validFlag: true
      }
    ) {
      returning {
        accountId: id
      }
    }
  }
`;

export function useCreateAccountMutation() {
  return Urql.useMutation<
    CreateAccountMutation,
    CreateAccountMutationVariables
  >(CreateAccountDocument);
}
export const CreateCategoryDocument = gql`
  mutation CreateCategory(
    $categoryId: String!
    $categoryName: String!
    $genreId: String!
    $displayOrder: Int!
    $validFlag: Boolean!
    $groupId: String!
  ) {
    insertCategory: insertHouseholdCategory(
      objects: {
        id: $categoryId
        name: $categoryName
        genreId: $genreId
        displayOrder: $displayOrder
        validFlag: $validFlag
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCategoryMutation() {
  return Urql.useMutation<
    CreateCategoryMutation,
    CreateCategoryMutationVariables
  >(CreateCategoryDocument);
}
export const CreateCreditCardDetailDocument = gql`
  mutation CreateCreditCardDetail(
    $id: String!
    $date: date!
    $genreId: String!
    $iocomeType: String!
    $categoryId: String!
    $amount: numeric!
    $memo: String!
    $summaryId: String!
    $userId: String!
    $groupId: String!
  ) {
    insertCreditCardDetail: insertHouseholdCreditCardDetail(
      objects: {
        id: $id
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        amount: $amount
        summaryId: $summaryId
        userId: $userId
        memo: $memo
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCreditCardDetailMutation() {
  return Urql.useMutation<
    CreateCreditCardDetailMutation,
    CreateCreditCardDetailMutationVariables
  >(CreateCreditCardDetailDocument);
}
export const CreateCreditCardSummaryDocument = gql`
  mutation CreateCreditCardSummary(
    $accountId: String!
    $count: Int!
    $creditCard: String!
    $groupId: String!
    $id: String!
    $totalAmount: numeric!
    $withdrawalDate: date!
  ) {
    insertCreditCardSummary: insertHouseholdCreditCardSummary(
      objects: {
        id: $id
        creditCard: $creditCard
        accountId: $accountId
        totalAmount: $totalAmount
        count: $count
        withdrawalDate: $withdrawalDate
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateCreditCardSummaryMutation() {
  return Urql.useMutation<
    CreateCreditCardSummaryMutation,
    CreateCreditCardSummaryMutationVariables
  >(CreateCreditCardSummaryDocument);
}
export const CreateDailyDetailDocument = gql`
  mutation CreateDailyDetail(
    $accountId: String!
    $amount: numeric!
    $genreId: String!
    $iocomeType: String!
    $categoryId: String!
    $date: date!
    $groupId: String!
    $id: String!
    $memo: String
    $userId: String!
  ) {
    __typename
    insertDailyDetail: insertHouseholdDailyDetail(
      objects: {
        id: $id
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        accountId: $accountId
        userId: $userId
        amount: $amount
        memo: $memo
        groupId: $groupId
      }
    ) {
      __typename
      returning {
        id
        __typename
      }
    }
  }
`;

export function useCreateDailyDetailMutation() {
  return Urql.useMutation<
    CreateDailyDetailMutation,
    CreateDailyDetailMutationVariables
  >(CreateDailyDetailDocument);
}
export const CreateImportFileHistoryDocument = gql`
  mutation CreateImportFileHistory(
    $fileName: String!
    $fileType: String!
    $groupId: String!
    $id: String!
    $importDatetime: timestamp!
    $importUserId: String!
  ) {
    insertImportFileHistory: insertHouseholdImportFileHistory(
      objects: {
        id: $id
        fileType: $fileType
        fileName: $fileName
        importUserId: $importUserId
        importDatetime: $importDatetime
        groupId: $groupId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateImportFileHistoryMutation() {
  return Urql.useMutation<
    CreateImportFileHistoryMutation,
    CreateImportFileHistoryMutationVariables
  >(CreateImportFileHistoryDocument);
}
export const CreateSummaryCategoryDocument = gql`
  mutation CreateSummaryCategory(
    $id: String!
    $displayOrder: Int!
    $categoryId: String!
    $groupId: String!
  ) {
    insertSummaryCategoryByGroup: insertHouseholdSummaryCategory(
      objects: {
        id: $id
        categoryId: $categoryId
        groupId: $groupId
        displayOrder: $displayOrder
      }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useCreateSummaryCategoryMutation() {
  return Urql.useMutation<
    CreateSummaryCategoryMutation,
    CreateSummaryCategoryMutationVariables
  >(CreateSummaryCategoryDocument);
}
export const CreateUserDocument = gql`
  mutation CreateUser(
    $userId: String!
    $userName: String!
    $email: String!
    $displayOrder: Int!
  ) {
    insertUser: insertUser(
      objects: {
        id: $userId
        name: $userName
        email: $email
        displayOrder: $displayOrder
      }
    ) {
      returning {
        userId: id
        email
      }
    }
  }
`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
  );
}
export const DeleteDailyDetailBySerialNoDocument = gql`
  mutation DeleteDailyDetailBySerialNo($id: String!) {
    deleteDailyDetailByPk: deleteHouseholdDailyDetailByPk(id: $id) {
      __typename
      id
    }
  }
`;

export function useDeleteDailyDetailBySerialNoMutation() {
  return Urql.useMutation<
    DeleteDailyDetailBySerialNoMutation,
    DeleteDailyDetailBySerialNoMutationVariables
  >(DeleteDailyDetailBySerialNoDocument);
}
export const DeleteSummaryCategoryDocument = gql`
  mutation DeleteSummaryCategory($groupId: String!) {
    deleteSummaryCategoryByGroup: deleteHouseholdSummaryCategory(
      where: { groupId: { _eq: $groupId } }
    ) {
      returning {
        id
      }
    }
  }
`;

export function useDeleteSummaryCategoryMutation() {
  return Urql.useMutation<
    DeleteSummaryCategoryMutation,
    DeleteSummaryCategoryMutationVariables
  >(DeleteSummaryCategoryDocument);
}
export const UpdateCategoryByIdDocument = gql`
  mutation UpdateCategoryById(
    $categoryId: String!
    $categoryName: String!
    $genreId: String!
    $displayOrder: Int!
    $validFlag: Boolean!
  ) {
    updateCategoryByPk: updateHouseholdCategoryByPk(
      pkColumns: { id: $categoryId }
      _set: {
        name: $categoryName
        genreId: $genreId
        displayOrder: $displayOrder
        validFlag: $validFlag
      }
    ) {
      id
    }
  }
`;

export function useUpdateCategoryByIdMutation() {
  return Urql.useMutation<
    UpdateCategoryByIdMutation,
    UpdateCategoryByIdMutationVariables
  >(UpdateCategoryByIdDocument);
}
export const UpdateCreditCardSummaryTotalDocument = gql`
  mutation UpdateCreditCardSummaryTotal(
    $id: String!
    $totalAmount: numeric!
    $count: Int!
  ) {
    updateCreditCardSummary: updateHouseholdCreditCardSummaryByPk(
      pkColumns: { id: $id }
      _set: { totalAmount: $totalAmount, count: $count }
    ) {
      id
    }
  }
`;

export function useUpdateCreditCardSummaryTotalMutation() {
  return Urql.useMutation<
    UpdateCreditCardSummaryTotalMutation,
    UpdateCreditCardSummaryTotalMutationVariables
  >(UpdateCreditCardSummaryTotalDocument);
}
export const UpdateDailyDetailByIdDocument = gql`
  mutation UpdateDailyDetailById(
    $id: String!
    $date: date!
    $genreId: String!
    $iocomeType: String!
    $categoryId: String!
    $accountId: String!
    $amount: numeric!
    $memo: String
  ) {
    updateDailyDetailByPk: updateHouseholdDailyDetailByPk(
      _set: {
        date: $date
        genreId: $genreId
        iocomeType: $iocomeType
        categoryId: $categoryId
        accountId: $accountId
        amount: $amount
        memo: $memo
      }
      pkColumns: { id: $id }
    ) {
      __typename
      id
    }
  }
`;

export function useUpdateDailyDetailByIdMutation() {
  return Urql.useMutation<
    UpdateDailyDetailByIdMutation,
    UpdateDailyDetailByIdMutationVariables
  >(UpdateDailyDetailByIdDocument);
}
export const UpdateGenreByIdDocument = gql`
  mutation UpdateGenreById(
    $genreId: String!
    $validFlag: Boolean!
    $iocomeType: String!
    $genreType: String!
    $genreName: String!
    $displayOrder: Int!
  ) {
    updateGenreByPk: updateHouseholdGenreByPk(
      pkColumns: { id: $genreId }
      _set: {
        name: $genreName
        genreType: $genreType
        iocomeType: $iocomeType
        validFlag: $validFlag
        displayOrder: $displayOrder
      }
    ) {
      id
    }
  }
`;

export function useUpdateGenreByIdMutation() {
  return Urql.useMutation<
    UpdateGenreByIdMutation,
    UpdateGenreByIdMutationVariables
  >(UpdateGenreByIdDocument);
}
export const DeleteDashboardSettingDocument = gql`
  mutation deleteDashboardSetting($settingId: String!) {
    deleteHouseholdDashboardSettingArgs(
      where: { settingId: { _eq: $settingId } }
    ) {
      returning {
        id
        __typename
      }
    }
    deleteHouseholdDashboardSettingByPk(id: $settingId) {
      id
      __typename
    }
  }
`;

export function useDeleteDashboardSettingMutation() {
  return Urql.useMutation<
    DeleteDashboardSettingMutation,
    DeleteDashboardSettingMutationVariables
  >(DeleteDashboardSettingDocument);
}
export const DeleteFavoriteFilterArgDocument = gql`
  mutation deleteFavoriteFilterArg($id: String!) {
    deleteHouseholdFavoriteFilterArgsByPk(id: $id) {
      id
    }
  }
`;

export function useDeleteFavoriteFilterArgMutation() {
  return Urql.useMutation<
    DeleteFavoriteFilterArgMutation,
    DeleteFavoriteFilterArgMutationVariables
  >(DeleteFavoriteFilterArgDocument);
}
export const DeleteInsertDashboardSettingArgsDocument = gql`
  mutation deleteInsertDashboardSettingArgs(
    $settingId: String!
    $objects: [HouseholdDashboardSettingArgsInsertInput!]!
  ) {
    deleteDashboardSettingArgs: deleteHouseholdDashboardSettingArgs(
      where: { settingId: { _eq: $settingId } }
    ) {
      returning {
        id
        __typename
      }
    }
    insertDashboardSettingArgs: insertHouseholdDashboardSettingArgs(
      objects: $objects
    ) {
      returning {
        id
        __typename
      }
    }
  }
`;

export function useDeleteInsertDashboardSettingArgsMutation() {
  return Urql.useMutation<
    DeleteInsertDashboardSettingArgsMutation,
    DeleteInsertDashboardSettingArgsMutationVariables
  >(DeleteInsertDashboardSettingArgsDocument);
}
export const InsertDashboardSettingDocument = gql`
  mutation insertDashboardSetting(
    $settingId: String!
    $feature: String!
    $order: Int!
    $userId: String!
    $groupId: String!
  ) {
    insertSetting: insertHouseholdDashboardSetting(
      objects: {
        id: $settingId
        feature: $feature
        order: $order
        userId: $userId
        groupId: $groupId
      }
    ) {
      returning {
        id
        __typename
      }
    }
  }
`;

export function useInsertDashboardSettingMutation() {
  return Urql.useMutation<
    InsertDashboardSettingMutation,
    InsertDashboardSettingMutationVariables
  >(InsertDashboardSettingDocument);
}
export const InsertDashboardSettingArgsDocument = gql`
  mutation insertDashboardSettingArgs(
    $id: String!
    $type: String!
    $value: String!
    $settingId: String!
  ) {
    insertSettingArgs: insertHouseholdDashboardSettingArgs(
      objects: { id: $id, type: $type, value: $value, settingId: $settingId }
    ) {
      returning {
        id
        __typename
      }
    }
  }
`;

export function useInsertDashboardSettingArgsMutation() {
  return Urql.useMutation<
    InsertDashboardSettingArgsMutation,
    InsertDashboardSettingArgsMutationVariables
  >(InsertDashboardSettingArgsDocument);
}
export const InsertFavoriteFilterDocument = gql`
  mutation insertFavoriteFilter(
    $filterId: String!
    $name: String!
    $groupId: String!
  ) {
    insertHouseholdFavoriteFilterOne(
      object: { id: $filterId, name: $name, groupId: $groupId }
    ) {
      id
    }
  }
`;

export function useInsertFavoriteFilterMutation() {
  return Urql.useMutation<
    InsertFavoriteFilterMutation,
    InsertFavoriteFilterMutationVariables
  >(InsertFavoriteFilterDocument);
}
export const InsertFavoriteFilterArgDocument = gql`
  mutation insertFavoriteFilterArg(
    $argId: String!
    $filterId: String!
    $key: String!
    $value: String!
  ) {
    insertArg: insertHouseholdFavoriteFilterArgsOne(
      object: { id: $argId, filterId: $filterId, key: $key, value: $value }
    ) {
      id
      __typename
    }
  }
`;

export function useInsertFavoriteFilterArgMutation() {
  return Urql.useMutation<
    InsertFavoriteFilterArgMutation,
    InsertFavoriteFilterArgMutationVariables
  >(InsertFavoriteFilterArgDocument);
}
export const UpdateCreditCardDetailAmountByIdDocument = gql`
  mutation updateCreditCardDetailAmountById($id: String!, $amount: numeric!) {
    updateHouseholdCreditCardDetailByPk(
      pkColumns: { id: $id }
      _set: { amount: $amount }
    ) {
      id
    }
  }
`;

export function useUpdateCreditCardDetailAmountByIdMutation() {
  return Urql.useMutation<
    UpdateCreditCardDetailAmountByIdMutation,
    UpdateCreditCardDetailAmountByIdMutationVariables
  >(UpdateCreditCardDetailAmountByIdDocument);
}
export const UpdateCreditCardDetailByIdDocument = gql`
  mutation updateCreditCardDetailById(
    $id: String!
    $genreId: String!
    $categoryId: String!
    $memo: String
  ) {
    updateHouseholdCreditCardDetailByPk(
      pkColumns: { id: $id }
      _set: { genreId: $genreId, categoryId: $categoryId, memo: $memo }
    ) {
      id
    }
  }
`;

export function useUpdateCreditCardDetailByIdMutation() {
  return Urql.useMutation<
    UpdateCreditCardDetailByIdMutation,
    UpdateCreditCardDetailByIdMutationVariables
  >(UpdateCreditCardDetailByIdDocument);
}
export const UpdateDashboardSettingDocument = gql`
  mutation updateDashboardSetting(
    $settingId: String!
    $feature: String!
    $order: Int!
  ) {
    updateDashboardSetting: updateHouseholdDashboardSettingByPk(
      pkColumns: { id: $settingId }
      _set: { feature: $feature, order: $order }
    ) {
      id
      __typename
    }
  }
`;

export function useUpdateDashboardSettingMutation() {
  return Urql.useMutation<
    UpdateDashboardSettingMutation,
    UpdateDashboardSettingMutationVariables
  >(UpdateDashboardSettingDocument);
}
export const UpdateDashboardSettingOrderDocument = gql`
  mutation updateDashboardSettingOrder($settingId: String!, $order: Int!) {
    updateHouseholdDashboardSettingByPk(
      pkColumns: { id: $settingId }
      _set: { order: $order }
    ) {
      id
      __typename
    }
  }
`;

export function useUpdateDashboardSettingOrderMutation() {
  return Urql.useMutation<
    UpdateDashboardSettingOrderMutation,
    UpdateDashboardSettingOrderMutationVariables
  >(UpdateDashboardSettingOrderDocument);
}
export const UpdateFavoriteFilterDocument = gql`
  mutation updateFavoriteFilter($filterId: String!, $name: String!) {
    updateHouseholdFavoriteFilterByPk(
      pkColumns: { id: $filterId }
      _set: { name: $name }
    ) {
      __typename
      id
    }
  }
`;

export function useUpdateFavoriteFilterMutation() {
  return Urql.useMutation<
    UpdateFavoriteFilterMutation,
    UpdateFavoriteFilterMutationVariables
  >(UpdateFavoriteFilterDocument);
}
export const UpdateFavoriteFilterArgDocument = gql`
  mutation updateFavoriteFilterArg($argId: String!, $value: String!) {
    insertArg: updateHouseholdFavoriteFilterArgsByPk(
      pkColumns: { id: $argId }
      _set: { value: $value }
    ) {
      id
      __typename
    }
  }
`;

export function useUpdateFavoriteFilterArgMutation() {
  return Urql.useMutation<
    UpdateFavoriteFilterArgMutation,
    UpdateFavoriteFilterArgMutationVariables
  >(UpdateFavoriteFilterArgDocument);
}
export const GetAllCategoriesDocument = gql`
  query GetAllCategories($groupId: String!) {
    categories: householdCategory(
      where: { groupId: { _eq: $groupId } }
      orderBy: [{ genre: { displayOrder: ASC } }, { displayOrder: ASC }]
    ) {
      id
      categoryName: name
      displayOrder
      validFlag
      genre {
        genreId: id
        genreName: name
      }
    }
  }
`;

export function useGetAllCategoriesQuery(
  options: Omit<Urql.UseQueryArgs<GetAllCategoriesQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>({
    query: GetAllCategoriesDocument,
    ...options,
  });
}
export const GetAllCategoryListWithCriteriaDocument = gql`
  query GetAllCategoryListWithCriteria(
    $validCategoryIn: [Boolean!] = [true, false]
    $validGenreIn: [Boolean!] = [true, false]
    $iocomeTypeIn: [String!] = ["INCOME", "OUTCOME"]
    $categoryNotIn: [String!] = []
  ) {
    genres: householdGenre(
      where: {
        validFlag: { _in: $validCategoryIn }
        _and: { iocomeType: { _in: $iocomeTypeIn } }
      }
      orderBy: { displayOrder: ASC }
    ) {
      id
      name
      type: genreType
      iocomeType
      validFlag
      displayOrder
      categories(
        where: {
          validFlag: { _in: $validGenreIn }
          _and: { id: { _nin: $categoryNotIn } }
        }
        orderBy: { displayOrder: ASC }
      ) {
        id
        name
        validFlag
        displayOrder
      }
    }
  }
`;

export function useGetAllCategoryListWithCriteriaQuery(
  options?: Omit<
    Urql.UseQueryArgs<GetAllCategoryListWithCriteriaQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetAllCategoryListWithCriteriaQuery,
    GetAllCategoryListWithCriteriaQueryVariables
  >({ query: GetAllCategoryListWithCriteriaDocument, ...options });
}
export const GetAllGenreDocument = gql`
  query GetAllGenre($groupId: String!) @cached {
    genre: householdGenre(
      where: { groupId: { _eq: $groupId } }
      orderBy: { displayOrder: ASC }
    ) {
      id
      genreName: name
      genreType
      iocomeType
      validFlag
      displayOrder
    }
  }
`;

export function useGetAllGenreQuery(
  options: Omit<Urql.UseQueryArgs<GetAllGenreQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAllGenreQuery, GetAllGenreQueryVariables>({
    query: GetAllGenreDocument,
    ...options,
  });
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users: user(orderBy: { displayOrder: ASC }) {
      id
      name
      email
      affiliation: affiliations {
        group {
          id
          name
        }
      }
    }
  }
`;

export function useGetAllUsersQuery(
  options?: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>({
    query: GetAllUsersDocument,
    ...options,
  });
}
export const GetCategoryByIdDocument = gql`
  query GetCategoryById($categoryId: String!) {
    category: householdCategoryByPk(id: $categoryId) {
      categoryName: name
      validFlag
      displayOrder
      genre {
        genreId: id
        iocomeType
      }
    }
  }
`;

export function useGetCategoryByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetCategoryByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>({
    query: GetCategoryByIdDocument,
    ...options,
  });
}
export const GetCategoryTotalByMonthDocument = gql`
  query GetCategoryTotalByMonth(
    $fromDate: date
    $toDate: date
    $groupId: String!
  ) {
    categoryTotalByMonth(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      date
      iocomeType
      genreId
      genreName
      categoryId
      categoryName
      total
    }
  }
`;

export function useGetCategoryTotalByMonthQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCategoryTotalByMonthQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCategoryTotalByMonthQuery,
    GetCategoryTotalByMonthQueryVariables
  >({ query: GetCategoryTotalByMonthDocument, ...options });
}
export const GetCreditCardDetailBySummaryIdDocument = gql`
  query GetCreditCardDetailBySummaryId($id: String!) {
    creditCardSummary: householdCreditCardSummaryByPk(id: $id) {
      id
      creditCard
      withdrawalDate
      account {
        id
        name
      }
      count
      totalAmount
      creditCardDetails(orderBy: { date: ASC }) {
        id
        date
        memo
        amount
        category {
          id
          name
          genre {
            id
            name
            genreType
            iocomeType
          }
        }
      }
    }
  }
`;

export function useGetCreditCardDetailBySummaryIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardDetailBySummaryIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardDetailBySummaryIdQuery,
    GetCreditCardDetailBySummaryIdQueryVariables
  >({ query: GetCreditCardDetailBySummaryIdDocument, ...options });
}
export const GetCreditCardListDocument = gql`
  query GetCreditCardList($groupId: String!) {
    allCreditCardSummariesList: householdCreditCardSummary(
      where: { groupId: { _eq: $groupId } }
      orderBy: { withdrawalDate: DESC }
    ) {
      id
      creditCard
      account {
        id
        name
      }
      count
      withdrawalDate
      totalAmount
    }
  }
`;

export function useGetCreditCardListQuery(
  options: Omit<Urql.UseQueryArgs<GetCreditCardListQueryVariables>, "query">,
) {
  return Urql.useQuery<GetCreditCardListQuery, GetCreditCardListQueryVariables>(
    { query: GetCreditCardListDocument, ...options },
  );
}
export const GetDailyDetailByDateDocument = gql`
  query GetDailyDetailByDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    dailies: dailyDetailByDate(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      ...fragDailyDetail
    }
  }
  ${FragDailyDetailFragmentDoc}
`;

export function useGetDailyDetailByDateQuery(
  options: Omit<Urql.UseQueryArgs<GetDailyDetailByDateQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetDailyDetailByDateQuery,
    GetDailyDetailByDateQueryVariables
  >({ query: GetDailyDetailByDateDocument, ...options });
}
export const GetDailyDetailByDateCategoryIdDocument = gql`
  query GetDailyDetailByDateCategoryId(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
    $categoryId: String!
  ) {
    dailies: dailyDetailByDate(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
      where: { categoryId: { _eq: $categoryId } }
    ) {
      ...fragDailyDetail
    }
  }
  ${FragDailyDetailFragmentDoc}
`;

export function useGetDailyDetailByDateCategoryIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetDailyDetailByDateCategoryIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetDailyDetailByDateCategoryIdQuery,
    GetDailyDetailByDateCategoryIdQueryVariables
  >({ query: GetDailyDetailByDateCategoryIdDocument, ...options });
}
export const GetDailyDetailByDateGenreIdDocument = gql`
  query GetDailyDetailByDateGenreId(
    $genreId: String!
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    allCategoriesList: householdCategory(
      where: { genreId: { _eq: $genreId } }
    ) {
      dailyDetailsByCategoryIdList: dailyDetails(
        where: {
          date: { _gte: $fromDate }
          _and: {
            date: { _lte: $toDate }
            _and: { groupId: { _eq: $groupId } }
          }
        }
      ) {
        id
        date
        amount
        memo
        categoryByCategoryId: category {
          categoryId: id
          categoryName: name
          genreByGenreId: genre {
            genreId: id
            genreName: name
            genreType
            iocomeType
          }
        }
        accountByAccountId: account {
          accountId: id
          accountName: name
        }
        userByUserId: user {
          userId: id
          userName: name
        }
      }
    }
  }
`;

export function useGetDailyDetailByDateGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetDailyDetailByDateGenreIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetDailyDetailByDateGenreIdQuery,
    GetDailyDetailByDateGenreIdQueryVariables
  >({ query: GetDailyDetailByDateGenreIdDocument, ...options });
}
export const GetGenreByIdDocument = gql`
  query GetGenreById($genreId: String!) {
    genreById: householdGenreByPk(id: $genreId) {
      id
      genreName: name
      genreType
      iocomeType
      validFlag
      displayOrder
      categories(where: { validFlag: { _eq: true } }) {
        categoryId: id
        categoryName: name
      }
    }
  }
`;

export function useGetGenreByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetGenreByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<GetGenreByIdQuery, GetGenreByIdQueryVariables>({
    query: GetGenreByIdDocument,
    ...options,
  });
}
export const GetGenreTotalByMonthDocument = gql`
  query GetGenreTotalByMonth(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    genreTotalByMonthList: genreTotalByMonth(
      args: { from_date: $fromDate, to_date: $toDate, group_id: $groupId }
    ) {
      date
      iocomeType
      genreId
      genreName
      total
    }
  }
`;

export function useGetGenreTotalByMonthQuery(
  options: Omit<Urql.UseQueryArgs<GetGenreTotalByMonthQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetGenreTotalByMonthQuery,
    GetGenreTotalByMonthQueryVariables
  >({ query: GetGenreTotalByMonthDocument, ...options });
}
export const GetSummaryCategoriesDocument = gql`
  query GetSummaryCategories($groupId: String!) {
    categories: householdSummaryCategory(
      where: { groupId: { _eq: $groupId } }
      orderBy: { displayOrder: ASC }
    ) {
      id
      groupId
      displayOrder
      category: category {
        id
        name
        genre: genre {
          id
          name
          type: genreType
          iocomeType
        }
      }
    }
  }
`;

export function useGetSummaryCategoriesQuery(
  options: Omit<Urql.UseQueryArgs<GetSummaryCategoriesQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetSummaryCategoriesQuery,
    GetSummaryCategoriesQueryVariables
  >({ query: GetSummaryCategoriesDocument, ...options });
}
export const GetSummaryCategoryBetweenDateDocument = gql`
  query GetSummaryCategoryBetweenDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    summaryCategoryList: householdSummaryCategory(
      orderBy: { displayOrder: ASC }
      where: { groupId: { _eq: $groupId } }
    ) {
      category {
        name
        id
        genre {
          iocomeType
        }
        daily: dailyDetails(
          where: {
            groupId: { _eq: $groupId }
            _and: {
              date: { _gte: $fromDate }
              _and: { date: { _lte: $toDate } }
            }
          }
          orderBy: { date: ASC }
        ) {
          date
          amount
        }
        creditCard: creditCardDetails(
          where: {
            groupId: { _eq: $groupId }
            _and: {
              date: { _gte: $fromDate }
              _and: { date: { _lte: $toDate } }
            }
          }
          orderBy: { date: ASC }
        ) {
          date
          amount
        }
      }
    }
  }
`;

export function useGetSummaryCategoryBetweenDateQuery(
  options: Omit<
    Urql.UseQueryArgs<GetSummaryCategoryBetweenDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetSummaryCategoryBetweenDateQuery,
    GetSummaryCategoryBetweenDateQueryVariables
  >({ query: GetSummaryCategoryBetweenDateDocument, ...options });
}
export const GetTotalBetweenDateDocument = gql`
  query GetTotalBetweenDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    incomeTotalByDate: householdDailyTotalView(
      where: {
        iocomeType: { _eq: "INCOME" }
        _and: {
          groupId: { _eq: $groupId }
          _and: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
        }
      }
    ) {
      date
      iocomeType
      total
    }
    outcomeTotalByDate: householdDailyTotalView(
      where: {
        iocomeType: { _eq: "OUTCOME" }
        _and: {
          groupId: { _eq: $groupId }
          _and: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
        }
      }
    ) {
      date
      iocomeType
      total
    }
  }
`;

export function useGetTotalBetweenDateQuery(
  options: Omit<Urql.UseQueryArgs<GetTotalBetweenDateQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetTotalBetweenDateQuery,
    GetTotalBetweenDateQueryVariables
  >({ query: GetTotalBetweenDateDocument, ...options });
}
export const GetTransferCategoryByDocument = gql`
  query GetTransferCategoryBy($groupId: String!) {
    transferCategory: householdTransferCategoryByPk(groupId: $groupId) {
      id: groupId
      incomeCategory: categoryByIncomeCategoryId {
        categoryId: id
        genre {
          genreId: id
          iocomeType
        }
      }
      outcomeCategory: categoryByOutcomeCategoryId {
        categoryId: id
        genre {
          genreId: id
          iocomeType
        }
      }
    }
  }
`;

export function useGetTransferCategoryByQuery(
  options: Omit<
    Urql.UseQueryArgs<GetTransferCategoryByQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetTransferCategoryByQuery,
    GetTransferCategoryByQueryVariables
  >({ query: GetTransferCategoryByDocument, ...options });
}
export const GetValidAccountsDocument = gql`
  query GetValidAccounts($groupId: String!) {
    allAccountsList: householdAccount(
      where: { validFlag: { _eq: true }, _and: { groupId: { _eq: $groupId } } }
      orderBy: { displayOrder: ASC }
    ) {
      accountId: id
      accountName: name
    }
  }
`;

export function useGetValidAccountsQuery(
  options: Omit<Urql.UseQueryArgs<GetValidAccountsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetValidAccountsQuery, GetValidAccountsQueryVariables>({
    query: GetValidAccountsDocument,
    ...options,
  });
}
export const GetValidCategoryByGenreIdDocument = gql`
  query GetValidCategoryByGenreId($groupId: String!, $genreId: String!) {
    genreById: householdGenre(
      where: {
        groupId: { _eq: $groupId }
        _and: { validFlag: { _eq: true }, _and: { id: { _eq: $genreId } } }
      }
      orderBy: { displayOrder: ASC }
    ) {
      id
      name
      categories(where: { validFlag: { _eq: true } }) {
        id
        name
        displayOrder
      }
    }
    genre: householdGenreByPk(id: $genreId) {
      id
      name
      categories(
        where: { validFlag: { _eq: true } }
        orderBy: { displayOrder: ASC }
      ) {
        id
        name
        displayOrder
      }
    }
  }
`;

export function useGetValidCategoryByGenreIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetValidCategoryByGenreIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetValidCategoryByGenreIdQuery,
    GetValidCategoryByGenreIdQueryVariables
  >({ query: GetValidCategoryByGenreIdDocument, ...options });
}
export const GetValidGenreListByIocomeTypeDocument = gql`
  query GetValidGenreListByIocomeType($iocomeType: String!, $groupId: String!) {
    allGenresList: householdGenre(
      where: {
        validFlag: { _eq: true }
        iocomeType: { _eq: $iocomeType }
        groupId: { _eq: $groupId }
      }
      orderBy: { displayOrder: ASC }
    ) {
      genreId: id
      genreName: name
      genreType
      iocomeType
      displayOrder
      categoriesByGenreIdList: categories(
        orderBy: { displayOrder: ASC }
        where: { validFlag: { _eq: true } }
      ) {
        categoryId: id
        categoryName: name
        displayOrder
      }
    }
  }
`;

export function useGetValidGenreListByIocomeTypeQuery(
  options: Omit<
    Urql.UseQueryArgs<GetValidGenreListByIocomeTypeQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetValidGenreListByIocomeTypeQuery,
    GetValidGenreListByIocomeTypeQueryVariables
  >({ query: GetValidGenreListByIocomeTypeDocument, ...options });
}
export const GetAccountBalanceListDocument = gql`
  query getAccountBalanceList(
    $groupId: String!
    $fromDate: date!
    $toDate: date!
  ) {
    account: householdAccount(
      where: { _and: { groupId: { _eq: $groupId } } }
      orderBy: { displayOrder: ASC }
    ) {
      __typename
      id
      accountName: name
      allDetailViewsAggregate(
        where: { date: { _gte: $fromDate }, _and: { date: { _lte: $toDate } } }
      ) {
        aggregate {
          sum {
            signedAmount
          }
        }
      }
    }
  }
`;

export function useGetAccountBalanceListQuery(
  options: Omit<
    Urql.UseQueryArgs<GetAccountBalanceListQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetAccountBalanceListQuery,
    GetAccountBalanceListQueryVariables
  >({ query: GetAccountBalanceListDocument, ...options });
}
export const GetCreditCardSummaryByDateDocument = gql`
  query getCreditCardSummaryByDate(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    creditCardSummaries: householdCreditCardSummary(
      where: {
        withdrawalDate: { _gte: $fromDate }
        _and: {
          withdrawalDate: { _lte: $toDate }
          _and: { groupId: { _eq: $groupId } }
        }
      }
      orderBy: { withdrawalDate: ASC }
    ) {
      id
      withdrawalDate
      totalAmount
      creditCard
      account {
        id
        name
      }
    }
  }
`;

export function useGetCreditCardSummaryByDateQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardSummaryByDateQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardSummaryByDateQuery,
    GetCreditCardSummaryByDateQueryVariables
  >({ query: GetCreditCardSummaryByDateDocument, ...options });
}
export const GetDailyDetailByIdDocument = gql`
  query GetDailyDetailById($id: String!) {
    dailyDetail: householdDailyDetailByPk(id: $id) {
      ...fragDailyDetail
    }
  }
  ${FragDailyDetailFragmentDoc}
`;

export function useGetDailyDetailByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetDailyDetailByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetDailyDetailByIdQuery,
    GetDailyDetailByIdQueryVariables
  >({ query: GetDailyDetailByIdDocument, ...options });
}
export const GetDepositDocument = gql`
  query getDeposit($groupId: String!, $fromDate: date!, $toDate: date!) {
    depositCategory: householdDepositCategory(
      where: { groupId: { _eq: $groupId } }
    ) {
      category {
        id
        categoryName: name
        daily: dailyDetailsAggregate(
          orderBy: { date: ASC }
          where: {
            date: { _gte: $fromDate }
            _and: { date: { _lte: $toDate } }
          }
        ) {
          aggregate {
            count
            sum {
              amount
            }
            avg {
              amount
            }
          }
          nodes {
            id
            date
            amount
            memo
          }
        }
        credit: creditCardDetailsAggregate(
          orderBy: { date: ASC }
          where: {
            date: { _gte: $fromDate }
            _and: { date: { _lte: $toDate } }
          }
        ) {
          aggregate {
            count
            sum {
              amount
            }
            avg {
              amount
            }
          }
          nodes {
            id
            date
            amount
            memo
          }
        }
      }
    }
  }
`;

export function useGetDepositQuery(
  options: Omit<Urql.UseQueryArgs<GetDepositQueryVariables>, "query">,
) {
  return Urql.useQuery<GetDepositQuery, GetDepositQueryVariables>({
    query: GetDepositDocument,
    ...options,
  });
}
export const GetAccountByIdDocument = gql`
  query getAccountById($accountId: String!) {
    account: householdAccountByPk(id: $accountId) {
      id
      name
    }
  }
`;

export function useGetAccountByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetAccountByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAccountByIdQuery, GetAccountByIdQueryVariables>({
    query: GetAccountByIdDocument,
    ...options,
  });
}
export const GetCreditCardDetailByIdDocument = gql`
  query getCreditCardDetailById($id: String!) {
    creditCardDetail: householdCreditCardDetailByPk(id: $id) {
      ...fragCreditCardDetail
    }
  }
  ${FragCreditCardDetailFragmentDoc}
`;

export function useGetCreditCardDetailByIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardDetailByIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardDetailByIdQuery,
    GetCreditCardDetailByIdQueryVariables
  >({ query: GetCreditCardDetailByIdDocument, ...options });
}
export const GetCreditCardDetailListDocument = gql`
  query getCreditCardDetailList(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
  ) {
    creditCardDetails: householdCreditCardDetail(
      where: {
        date: { _gte: $fromDate, _lte: $toDate }
        _and: { groupId: { _eq: $groupId } }
      }
    ) {
      ...fragCreditCardDetail
    }
  }
  ${FragCreditCardDetailFragmentDoc}
`;

export function useGetCreditCardDetailListQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardDetailListQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardDetailListQuery,
    GetCreditCardDetailListQueryVariables
  >({ query: GetCreditCardDetailListDocument, ...options });
}
export const GetCreditCardSummaryByAccountIdDocument = gql`
  query getCreditCardSummaryByAccountId(
    $fromDate: date!
    $toDate: date!
    $accountId: String!
  ) {
    creditCardSummaries: householdCreditCardSummary(
      where: {
        withdrawalDate: { _gte: $fromDate }
        _and: {
          withdrawalDate: { _lte: $toDate }
          _and: { accountId: { _eq: $accountId } }
        }
      }
      orderBy: { withdrawalDate: ASC }
    ) {
      __typename
      id
      withdrawalDate
      totalAmount
      creditCard
      account {
        id
        name
      }
    }
  }
`;

export function useGetCreditCardSummaryByAccountIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardSummaryByAccountIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardSummaryByAccountIdQuery,
    GetCreditCardSummaryByAccountIdQueryVariables
  >({ query: GetCreditCardSummaryByAccountIdDocument, ...options });
}
export const GetCreditCardSummaryByIdDocument = gql`
  query getCreditCardSummaryById($summaryId: String!) {
    creditCardSummary: householdCreditCardSummaryByPk(id: $summaryId) {
      id
      creditCard
      withdrawalDate
      account {
        id
        name
      }
      totalAmount
      count
    }
  }
`;

export function useGetCreditCardSummaryByIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetCreditCardSummaryByIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetCreditCardSummaryByIdQuery,
    GetCreditCardSummaryByIdQueryVariables
  >({ query: GetCreditCardSummaryByIdDocument, ...options });
}
export const GetDailyByAccountIdDocument = gql`
  query getDailyByAccountId(
    $fromDate: date!
    $toDate: date!
    $accountId: String!
    $groupId: String!
    $orderBy: OrderBy = ASC
  ) {
    __typename
    dailies: dailyDetailByDate(
      args: { group_id: $groupId, from_date: $fromDate, to_date: $toDate }
      where: { accountId: { _eq: $accountId } }
      orderBy: { date: $orderBy, id: DESC }
    ) {
      ...fragDailyDetail
    }
  }
  ${FragDailyDetailFragmentDoc}
`;

export function useGetDailyByAccountIdQuery(
  options: Omit<Urql.UseQueryArgs<GetDailyByAccountIdQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetDailyByAccountIdQuery,
    GetDailyByAccountIdQueryVariables
  >({ query: GetDailyByAccountIdDocument, ...options });
}
export const GetDashboardSettingDocument = gql`
  query getDashboardSetting($userId: String!, $groupId: String!) {
    setting: householdDashboardSetting(
      where: { userId: { _eq: $userId }, _and: { groupId: { _eq: $groupId } } }
      orderBy: { order: ASC }
    ) {
      id
      feature
      order
      __typename
      args: dashboardSettingArgs(orderBy: { type: ASC }) {
        id
        type
        value
        __typename
      }
    }
  }
`;

export function useGetDashboardSettingQuery(
  options: Omit<Urql.UseQueryArgs<GetDashboardSettingQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetDashboardSettingQuery,
    GetDashboardSettingQueryVariables
  >({ query: GetDashboardSettingDocument, ...options });
}
export const GetDetailsByCategoryDocument = gql`
  query getDetailsByCategory(
    $fromDate: date!
    $toDate: date!
    $groupId: String!
    $iocomeType: [String!] = ["INCOME", "OUTCOME"]
  ) {
    group: groupByPk(id: $groupId) {
      transfer: transferCategory {
        outcomeCategoryId
        incomeCategoryId
      }
      dailyDetails(
        where: {
          date: { _gte: $fromDate, _lte: $toDate }
          _and: { iocomeType: { _in: $iocomeType } }
        }
      ) {
        id
        date
        genre {
          id
          name
          iocomeType
          genreType
        }
        category {
          id
          name
        }
        amount
        memo
      }
      creditCardDetails(
        where: {
          date: { _gte: $fromDate, _lte: $toDate }
          _and: { iocomeType: { _in: $iocomeType } }
        }
      ) {
        ...fragCreditCardDetail
      }
    }
  }
  ${FragCreditCardDetailFragmentDoc}
`;

export function useGetDetailsByCategoryQuery(
  options: Omit<Urql.UseQueryArgs<GetDetailsByCategoryQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetDetailsByCategoryQuery,
    GetDetailsByCategoryQueryVariables
  >({ query: GetDetailsByCategoryDocument, ...options });
}
export const GetFavoriteFilterDocument = gql`
  query getFavoriteFilter($filterId: String!) {
    filter: householdFavoriteFilterByPk(id: $filterId) {
      ...fragFavoriteFilter
    }
  }
  ${FragFavoriteFilterFragmentDoc}
`;

export function useGetFavoriteFilterQuery(
  options: Omit<Urql.UseQueryArgs<GetFavoriteFilterQueryVariables>, "query">,
) {
  return Urql.useQuery<GetFavoriteFilterQuery, GetFavoriteFilterQueryVariables>(
    { query: GetFavoriteFilterDocument, ...options },
  );
}
export const GetFavoriteFiltersDocument = gql`
  query getFavoriteFilters($groupId: String!) {
    filters: householdFavoriteFilter(where: { groupId: { _eq: $groupId } }) {
      ...fragFavoriteFilter
    }
  }
  ${FragFavoriteFilterFragmentDoc}
`;

export function useGetFavoriteFiltersQuery(
  options: Omit<Urql.UseQueryArgs<GetFavoriteFiltersQueryVariables>, "query">,
) {
  return Urql.useQuery<
    GetFavoriteFiltersQuery,
    GetFavoriteFiltersQueryVariables
  >({ query: GetFavoriteFiltersDocument, ...options });
}
