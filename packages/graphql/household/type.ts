import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  date: any;
  numeric: any;
  timestamp: any;
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
export type AffiliationConstraint =
  /** unique or primary key constraint on columns "id" */
  "affiliation_pkey";

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
export type AffiliationSelectColumn =
  /** column name */
  | "groupId"
  /** column name */
  | "groupRole"
  /** column name */
  | "id"
  /** column name */
  | "userId";

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
export type AffiliationUpdateColumn =
  /** placeholder (do not use) */
  "_PLACEHOLDER";

/** order by aggregate values of table "app" */
export type AppAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AppMaxOrderBy>;
  min?: InputMaybe<AppMinOrderBy>;
};

/** Boolean expression to filter rows from the table "app". All fields are combined with a logical 'AND'. */
export type AppBoolExp = {
  _and?: InputMaybe<Array<AppBoolExp>>;
  _not?: InputMaybe<AppBoolExp>;
  _or?: InputMaybe<Array<AppBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** order by max() on columns of table "app" */
export type AppMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "app" */
export type AppMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "app". */
export type AppOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** select columns of table "app" */
export type AppSelectColumn =
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "name";

/** Streaming cursor of the table "app" */
export type AppStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AppStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AppStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
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
export type ApplicationSelectColumn =
  /** column name */
  | "id"
  /** column name */
  | "name"
  /** column name */
  | "topUrl"
  /** column name */
  | "validFlag";

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

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type BpcharComparisonExp = {
  _eq?: InputMaybe<Scalars["bpchar"]>;
  _gt?: InputMaybe<Scalars["bpchar"]>;
  _gte?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars["bpchar"]>;
  _in?: InputMaybe<Array<Scalars["bpchar"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars["bpchar"]>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars["bpchar"]>;
  _lt?: InputMaybe<Scalars["bpchar"]>;
  _lte?: InputMaybe<Scalars["bpchar"]>;
  _neq?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars["bpchar"]>;
  _nin?: InputMaybe<Array<Scalars["bpchar"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars["bpchar"]>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars["bpchar"]>;
};

/** ordering argument of a cursor */
export type CursorOrdering =
  /** ascending ordering of the cursor */
  | "ASC"
  /** descending ordering of the cursor */
  | "DESC";

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
export type GroupApplicationSelectColumn =
  /** column name */
  | "applicationId"
  /** column name */
  | "groupId"
  /** column name */
  | "id";

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
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dashboardSettings?: InputMaybe<HouseholdDashboardSettingBoolExp>;
  depositCategories?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateBoolExp>;
  details?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateBoolExp>;
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
  tags?: InputMaybe<HouseholdTagBoolExp>;
  totalByCategoryView?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
  totalByCategoryViewAggregate?: InputMaybe<HouseholdTotalByCategoryViewAggregateBoolExp>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryBoolExp>;
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
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateOrderBy>;
  favoriteFiltersAggregate?: InputMaybe<HouseholdFavoriteFilterAggregateOrderBy>;
  genresAggregate?: InputMaybe<HouseholdGenreAggregateOrderBy>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  importFileHistoriesAggregate?: InputMaybe<HouseholdImportFileHistoryAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  tagsAggregate?: InputMaybe<HouseholdTagAggregateOrderBy>;
  totalByCategoryViewAggregate?: InputMaybe<HouseholdTotalByCategoryViewAggregateOrderBy>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryOrderBy>;
};

/** select columns of table "group" */
export type GroupSelectColumn =
  /** column name */
  | "id"
  /** column name */
  | "name";

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
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.account" */
export type HouseholdAccountConstraint =
  /** unique or primary key constraint on columns "id" */
  "account_pkey";

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
export type HouseholdAccountSelectColumn =
  /** column name */
  | "displayOrder"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "name"
  /** column name */
  | "validFlag";

/** select "householdAccountAggregateBoolExpBool_andArgumentsColumns" columns of table "household.account" */
export type HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  "validFlag";

/** select "householdAccountAggregateBoolExpBool_orArgumentsColumns" columns of table "household.account" */
export type HouseholdAccountSelectColumnHouseholdAccountAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  "validFlag";

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
export type HouseholdAccountUpdateColumn =
  /** placeholder (do not use) */
  "_PLACEHOLDER";

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
  account?: InputMaybe<HouseholdAccountBoolExp>;
  accountId?: InputMaybe<StringComparisonExp>;
  category?: InputMaybe<HouseholdCategoryBoolExp>;
  categoryId?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  originalAmount?: InputMaybe<NumericComparisonExp>;
  settlementDate?: InputMaybe<DateComparisonExp>;
  signedAmount?: InputMaybe<NumericComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
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
  settlementDate?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
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
  settlementDate?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** Ordering options when selecting data from "household.all_detail_view". */
export type HouseholdAllDetailViewOrderBy = {
  account?: InputMaybe<HouseholdAccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  category?: InputMaybe<HouseholdCategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
  genre?: InputMaybe<HouseholdGenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  originalAmount?: InputMaybe<OrderBy>;
  settlementDate?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** select columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewSelectColumn =
  /** column name */
  | "accountId"
  /** column name */
  | "categoryId"
  /** column name */
  | "date"
  /** column name */
  | "genreId"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "iocomeType"
  /** column name */
  | "memo"
  /** column name */
  | "originalAmount"
  /** column name */
  | "settlementDate"
  /** column name */
  | "signedAmount"
  /** column name */
  | "type"
  /** column name */
  | "withdrawalDate";

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
  settlementDate?: InputMaybe<Scalars["date"]>;
  signedAmount?: InputMaybe<Scalars["numeric"]>;
  type?: InputMaybe<Scalars["String"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
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
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  depositCategory?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genre?: InputMaybe<HouseholdGenreBoolExp>;
  genreId?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  transferCategories?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  transferCategoriesAggregate?: InputMaybe<HouseholdTransferCategoryAggregateBoolExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "household.category" */
export type HouseholdCategoryConstraint =
  /** unique or primary key constraint on columns "id" */
  "category_pkey";

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
  transferCategoriesAggregate?: InputMaybe<HouseholdTransferCategoryAggregateOrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.category */
export type HouseholdCategoryPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.category" */
export type HouseholdCategorySelectColumn =
  /** column name */
  | "displayOrder"
  /** column name */
  | "genreId"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "name"
  /** column name */
  | "validFlag";

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
export type HouseholdCategoryUpdateColumn =
  /** column name */
  | "displayOrder"
  /** column name */
  | "genreId"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "name"
  /** column name */
  | "validFlag";

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
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
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
export type HouseholdCreditCardDetailConstraint =
  /** unique or primary key constraint on columns "id" */
  "credit_card_detail_pkey";

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
  detailTags?: InputMaybe<HouseholdDetailTagArrRelInsertInput>;
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
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
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
export type HouseholdCreditCardDetailSelectColumn =
  /** column name */
  | "amount"
  /** column name */
  | "categoryId"
  /** column name */
  | "date"
  /** column name */
  | "genreId"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "iocomeType"
  /** column name */
  | "memo"
  /** column name */
  | "summaryId"
  /** column name */
  | "userId";

/** input type for updating data in table "household.credit_card_detail" */
export type HouseholdCreditCardDetailSetInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
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
export type HouseholdCreditCardDetailUpdateColumn =
  /** column name */
  | "amount"
  /** column name */
  | "categoryId"
  /** column name */
  | "genreId"
  /** column name */
  | "iocomeType"
  /** column name */
  | "memo";

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
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  totalAmount?: InputMaybe<NumericComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
};

/** unique or primary key constraints on table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryConstraint =
  /** unique or primary key constraint on columns "id" */
  "credit_card_summary_pkey";

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
export type HouseholdCreditCardSummarySelectColumn =
  /** column name */
  | "accountId"
  /** column name */
  | "count"
  /** column name */
  | "creditCard"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "totalAmount"
  /** column name */
  | "withdrawalDate";

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
export type HouseholdCreditCardSummaryTotalByAccountViewSelectColumn =
  /** column name */
  | "accountId"
  /** column name */
  | "date"
  /** column name */
  | "displayOrder"
  /** column name */
  | "groupId"
  /** column name */
  | "iocomeType"
  /** column name */
  | "name"
  /** column name */
  | "total";

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
export type HouseholdCreditCardSummaryUpdateColumn =
  /** column name */
  | "accountId"
  /** column name */
  | "count"
  /** column name */
  | "creditCard"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "totalAmount"
  /** column name */
  | "withdrawalDate";

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
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
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
export type HouseholdDailyDetailConstraint =
  /** unique or primary key constraint on columns "id" */
  "daily_detail_pkey";

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
  detailTags?: InputMaybe<HouseholdDetailTagArrRelInsertInput>;
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
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
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
export type HouseholdDailyDetailSelectColumn =
  /** column name */
  | "accountId"
  /** column name */
  | "amount"
  /** column name */
  | "categoryId"
  /** column name */
  | "date"
  /** column name */
  | "genreId"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "iocomeType"
  /** column name */
  | "memo"
  /** column name */
  | "userId";

/** input type for updating data in table "household.daily_detail" */
export type HouseholdDailyDetailSetInput = {
  accountId?: InputMaybe<Scalars["String"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["String"]>;
  iocomeType?: InputMaybe<Scalars["String"]>;
  memo?: InputMaybe<Scalars["String"]>;
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
export type HouseholdDailyDetailUpdateColumn =
  /** column name */
  | "accountId"
  /** column name */
  | "amount"
  /** column name */
  | "categoryId"
  /** column name */
  | "date"
  /** column name */
  | "genreId"
  /** column name */
  | "iocomeType"
  /** column name */
  | "memo";

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
export type HouseholdDailyTotalViewSelectColumn =
  /** column name */
  | "date"
  /** column name */
  | "groupId"
  /** column name */
  | "iocomeType"
  /** column name */
  | "total";

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
export type HouseholdDashboardSettingArgsConstraint =
  /** unique or primary key constraint on columns "id" */
  "dashboard_setting_args_pkey";

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
export type HouseholdDashboardSettingArgsSelectColumn =
  /** column name */
  | "id"
  /** column name */
  | "settingId"
  /** column name */
  | "type"
  /** column name */
  | "value";

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
export type HouseholdDashboardSettingArgsUpdateColumn =
  /** placeholder (do not use) */
  "_PLACEHOLDER";

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
export type HouseholdDashboardSettingConstraint =
  /** unique or primary key constraint on columns "id" */
  "dashboard_setting_pkey";

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
export type HouseholdDashboardSettingSelectColumn =
  /** column name */
  | "feature"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "order"
  /** column name */
  | "userId";

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
export type HouseholdDashboardSettingUpdateColumn =
  /** column name */
  | "feature"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "order"
  /** column name */
  | "userId";

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
export type HouseholdDepositCategorySelectColumn =
  /** column name */
  | "categoryId"
  /** column name */
  | "groupId";

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

export type HouseholdDetailTagAggregateBoolExp = {
  count?: InputMaybe<HouseholdDetailTagAggregateBoolExpCount>;
};

/** order by aggregate values of table "household.detail_tag" */
export type HouseholdDetailTagAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdDetailTagMaxOrderBy>;
  min?: InputMaybe<HouseholdDetailTagMinOrderBy>;
};

/** input type for inserting array relation for remote table "household.detail_tag" */
export type HouseholdDetailTagArrRelInsertInput = {
  data: Array<HouseholdDetailTagInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdDetailTagOnConflict>;
};

/** Boolean expression to filter rows from the table "household.detail_tag". All fields are combined with a logical 'AND'. */
export type HouseholdDetailTagBoolExp = {
  _and?: InputMaybe<Array<HouseholdDetailTagBoolExp>>;
  _not?: InputMaybe<HouseholdDetailTagBoolExp>;
  _or?: InputMaybe<Array<HouseholdDetailTagBoolExp>>;
  creditCardDetailsDetailTag?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  dailyDetailsDetailTag?: InputMaybe<HouseholdDailyDetailBoolExp>;
  detailId?: InputMaybe<StringComparisonExp>;
  details?: InputMaybe<HouseholdAllDetailViewBoolExp>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  tag?: InputMaybe<HouseholdTagBoolExp>;
  tagId?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.detail_tag" */
export type HouseholdDetailTagConstraint =
  /** unique or primary key constraint on columns "id" */
  "detail_tag_pkey";

/** input type for inserting data into table "household.detail_tag" */
export type HouseholdDetailTagInsertInput = {
  creditCardDetailsDetailTag?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetailsDetailTag?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  detailId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  tag?: InputMaybe<HouseholdTagObjRelInsertInput>;
  tagId?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.detail_tag" */
export type HouseholdDetailTagMaxOrderBy = {
  detailId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.detail_tag" */
export type HouseholdDetailTagMinOrderBy = {
  detailId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

/** on_conflict condition type for table "household.detail_tag" */
export type HouseholdDetailTagOnConflict = {
  constraint: HouseholdDetailTagConstraint;
  updateColumns?: Array<HouseholdDetailTagUpdateColumn>;
  where?: InputMaybe<HouseholdDetailTagBoolExp>;
};

/** Ordering options when selecting data from "household.detail_tag". */
export type HouseholdDetailTagOrderBy = {
  creditCardDetailsDetailTagAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsDetailTagAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  detailId?: InputMaybe<OrderBy>;
  detailsAggregate?: InputMaybe<HouseholdAllDetailViewAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  tag?: InputMaybe<HouseholdTagOrderBy>;
  tagId?: InputMaybe<OrderBy>;
};

/** select columns of table "household.detail_tag" */
export type HouseholdDetailTagSelectColumn =
  /** column name */
  | "detailId"
  /** column name */
  | "id"
  /** column name */
  | "tagId";

/** Streaming cursor of the table "household_detail_tag" */
export type HouseholdDetailTagStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdDetailTagStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdDetailTagStreamCursorValueInput = {
  detailId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  tagId?: InputMaybe<Scalars["String"]>;
};

/** placeholder for update columns of table "household.detail_tag" (current role has no relevant permissions) */
export type HouseholdDetailTagUpdateColumn =
  /** placeholder (do not use) */
  "_PLACEHOLDER";

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
export type HouseholdFavoriteFilterArgsConstraint =
  /** unique or primary key constraint on columns "id" */
  "favorite_filter_args_pkey";

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
export type HouseholdFavoriteFilterArgsSelectColumn =
  /** column name */
  | "filterId"
  /** column name */
  | "id"
  /** column name */
  | "key"
  /** column name */
  | "value";

/** input type for updating data in table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsSetInput = {
  key?: InputMaybe<Scalars["String"]>;
  value?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "household.favorite_filter_args" */
export type HouseholdFavoriteFilterArgsUpdateColumn =
  /** column name */
  | "key"
  /** column name */
  | "value";

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
export type HouseholdFavoriteFilterConstraint =
  /** unique or primary key constraint on columns "id" */
  "favorite_filter_pkey";

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
export type HouseholdFavoriteFilterSelectColumn =
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "name";

/** input type for updating data in table "household.favorite_filter" */
export type HouseholdFavoriteFilterSetInput = {
  name?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "household.favorite_filter" */
export type HouseholdFavoriteFilterUpdateColumn =
  /** column name */
  "name";

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
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
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
export type HouseholdGenreConstraint =
  /** unique or primary key constraint on columns "id" */
  "genre_pkey";

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
export type HouseholdGenreSelectColumn =
  /** column name */
  | "displayOrder"
  /** column name */
  | "genreType"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "iocomeType"
  /** column name */
  | "name"
  /** column name */
  | "validFlag";

/** select "householdGenreAggregateBoolExpBool_andArgumentsColumns" columns of table "household.genre" */
export type HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_AndArgumentsColumns =
  /** column name */
  "validFlag";

/** select "householdGenreAggregateBoolExpBool_orArgumentsColumns" columns of table "household.genre" */
export type HouseholdGenreSelectColumnHouseholdGenreAggregateBoolExpBool_OrArgumentsColumns =
  /** column name */
  "validFlag";

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
export type HouseholdGenreUpdateColumn =
  /** column name */
  | "displayOrder"
  /** column name */
  | "genreType"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "iocomeType"
  /** column name */
  | "name"
  /** column name */
  | "validFlag";

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
export type HouseholdImportFileHistoryConstraint =
  /** unique or primary key constraint on columns "id" */
  "import_file_history_pkey";

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
export type HouseholdImportFileHistorySelectColumn =
  /** column name */
  | "fileName"
  /** column name */
  | "fileType"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "importDatetime"
  /** column name */
  | "importUserId";

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
export type HouseholdImportFileHistoryUpdateColumn =
  /** placeholder (do not use) */
  "_PLACEHOLDER";

/** order by aggregate values of table "household.tag" */
export type HouseholdTagAggregateOrderBy = {
  avg?: InputMaybe<HouseholdTagAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HouseholdTagMaxOrderBy>;
  min?: InputMaybe<HouseholdTagMinOrderBy>;
  stddev?: InputMaybe<HouseholdTagStddevOrderBy>;
  stddevPop?: InputMaybe<HouseholdTagStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HouseholdTagStddevSampOrderBy>;
  sum?: InputMaybe<HouseholdTagSumOrderBy>;
  varPop?: InputMaybe<HouseholdTagVarPopOrderBy>;
  varSamp?: InputMaybe<HouseholdTagVarSampOrderBy>;
  variance?: InputMaybe<HouseholdTagVarianceOrderBy>;
};

/** order by avg() on columns of table "household.tag" */
export type HouseholdTagAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "household.tag". All fields are combined with a logical 'AND'. */
export type HouseholdTagBoolExp = {
  _and?: InputMaybe<Array<HouseholdTagBoolExp>>;
  _not?: InputMaybe<HouseholdTagBoolExp>;
  _or?: InputMaybe<Array<HouseholdTagBoolExp>>;
  colorCode?: InputMaybe<BpcharComparisonExp>;
  detailTags?: InputMaybe<HouseholdDetailTagBoolExp>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "household.tag" */
export type HouseholdTagConstraint =
  /** unique or primary key constraint on columns "id" */
  "m_tag_pkey";

/** input type for incrementing numeric columns in table "household.tag" */
export type HouseholdTagIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "household.tag" */
export type HouseholdTagInsertInput = {
  colorCode?: InputMaybe<Scalars["bpchar"]>;
  detailTags?: InputMaybe<HouseholdDetailTagArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.tag" */
export type HouseholdTagMaxOrderBy = {
  colorCode?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** order by min() on columns of table "household.tag" */
export type HouseholdTagMinOrderBy = {
  colorCode?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** input type for inserting object relation for remote table "household.tag" */
export type HouseholdTagObjRelInsertInput = {
  data: HouseholdTagInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HouseholdTagOnConflict>;
};

/** on_conflict condition type for table "household.tag" */
export type HouseholdTagOnConflict = {
  constraint: HouseholdTagConstraint;
  updateColumns?: Array<HouseholdTagUpdateColumn>;
  where?: InputMaybe<HouseholdTagBoolExp>;
};

/** Ordering options when selecting data from "household.tag". */
export type HouseholdTagOrderBy = {
  colorCode?: InputMaybe<OrderBy>;
  detailTagsAggregate?: InputMaybe<HouseholdDetailTagAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: household.tag */
export type HouseholdTagPkColumnsInput = {
  id: Scalars["String"];
};

/** select columns of table "household.tag" */
export type HouseholdTagSelectColumn =
  /** column name */
  | "colorCode"
  /** column name */
  | "displayOrder"
  /** column name */
  | "groupId"
  /** column name */
  | "id"
  /** column name */
  | "name";

/** input type for updating data in table "household.tag" */
export type HouseholdTagSetInput = {
  colorCode?: InputMaybe<Scalars["bpchar"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by stddev() on columns of table "household.tag" */
export type HouseholdTagStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevPop() on columns of table "household.tag" */
export type HouseholdTagStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by stddevSamp() on columns of table "household.tag" */
export type HouseholdTagStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "household_tag" */
export type HouseholdTagStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HouseholdTagStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HouseholdTagStreamCursorValueInput = {
  colorCode?: InputMaybe<Scalars["bpchar"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** order by sum() on columns of table "household.tag" */
export type HouseholdTagSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "household.tag" */
export type HouseholdTagUpdateColumn =
  /** column name */
  | "colorCode"
  /** column name */
  | "displayOrder"
  /** column name */
  | "name";

export type HouseholdTagUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HouseholdTagIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HouseholdTagSetInput>;
  /** filter the rows which have to be updated */
  where: HouseholdTagBoolExp;
};

/** order by varPop() on columns of table "household.tag" */
export type HouseholdTagVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by varSamp() on columns of table "household.tag" */
export type HouseholdTagVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** order by variance() on columns of table "household.tag" */
export type HouseholdTagVarianceOrderBy = {
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
export type HouseholdTotalByCategoryViewSelectColumn =
  /** column name */
  | "categoryId"
  /** column name */
  | "categoryName"
  /** column name */
  | "date"
  /** column name */
  | "genreId"
  /** column name */
  | "genreName"
  /** column name */
  | "groupId"
  /** column name */
  | "iocomeType"
  /** column name */
  | "total";

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
export type HouseholdTotalByGenreViewSelectColumn =
  /** column name */
  | "date"
  /** column name */
  | "genreId"
  /** column name */
  | "genreName"
  /** column name */
  | "groupId"
  /** column name */
  | "iocomeType"
  /** column name */
  | "total";

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
export type HouseholdTransferCategorySelectColumn =
  /** column name */
  | "groupId"
  /** column name */
  | "incomeCategoryId"
  /** column name */
  | "outcomeCategoryId";

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
export type OrderBy =
  /** in ascending order, nulls last */
  | "ASC"
  /** in ascending order, nulls first */
  | "ASC_NULLS_FIRST"
  /** in ascending order, nulls last */
  | "ASC_NULLS_LAST"
  /** in descending order, nulls first */
  | "DESC"
  /** in descending order, nulls first */
  | "DESC_NULLS_FIRST"
  /** in descending order, nulls last */
  | "DESC_NULLS_LAST";

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

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export type UserConstraint =
  /** unique or primary key constraint on columns "email" */
  | "user_email_key"
  /** unique or primary key constraint on columns "id" */
  | "user_pkey";

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  affiliations?: InputMaybe<AffiliationArrRelInsertInput>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
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
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** select columns of table "user" */
export type UserSelectColumn =
  /** column name */
  | "displayOrder"
  /** column name */
  | "email"
  /** column name */
  | "id"
  /** column name */
  | "name";

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
export type UserUpdateColumn =
  /** placeholder (do not use) */
  "_PLACEHOLDER";

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

export type HouseholdCreditCardSummaryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdDepositCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type HouseholdDetailTagAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdDetailTagSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdDetailTagBoolExp>;
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

export type UpdateDailyDetailByIdMutationVariables = Exact<{
  id: Scalars["String"];
  date: Scalars["date"];
  genreId: Scalars["String"];
  iocomeType: Scalars["String"];
  categoryId: Scalars["String"];
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  memo?: InputMaybe<Scalars["String"]>;
  tagDetails:
    | Array<HouseholdDetailTagInsertInput>
    | HouseholdDetailTagInsertInput;
}>;

export type UpdateDailyDetailByIdMutation = {
  __typename?: "mutation_root";
  updateDailyDetailByPk?: {
    __typename: "HouseholdDailyDetail";
    id: string;
  } | null;
  deleteDetailTags?: {
    __typename?: "HouseholdDetailTagMutationResponse";
    affectedRows: number;
  } | null;
  insertDetailTags?: {
    __typename?: "HouseholdDetailTagMutationResponse";
    affectedRows: number;
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

export type ModifyTagMutationVariables = Exact<{
  id: Scalars["String"];
  form: HouseholdTagSetInput;
}>;

export type ModifyTagMutation = {
  __typename?: "mutation_root";
  updateHouseholdTagByPk?: { __typename: "HouseholdTag"; id: string } | null;
};

export type AddTagMutationVariables = Exact<{
  form: HouseholdTagInsertInput;
}>;

export type AddTagMutation = {
  __typename?: "mutation_root";
  insertHouseholdTagOne?: { __typename: "HouseholdTag"; id: string } | null;
};

export type UpdateCreditCardDetailByIdMutationVariables = Exact<{
  id: Scalars["String"];
  genreId: Scalars["String"];
  categoryId: Scalars["String"];
  memo?: InputMaybe<Scalars["String"]>;
  tagDetails:
    | Array<HouseholdDetailTagInsertInput>
    | HouseholdDetailTagInsertInput;
}>;

export type UpdateCreditCardDetailByIdMutation = {
  __typename?: "mutation_root";
  updateHouseholdCreditCardDetailByPk?: {
    __typename?: "HouseholdCreditCardDetail";
    id: string;
  } | null;
  deleteDetailTags?: {
    __typename?: "HouseholdDetailTagMutationResponse";
    affectedRows: number;
  } | null;
  insertDetailTags?: {
    __typename?: "HouseholdDetailTagMutationResponse";
    affectedRows: number;
  } | null;
};

export type UpdateCreditSummaryMutationVariables = Exact<{
  id: Scalars["String"];
  form: HouseholdCreditCardSummarySetInput;
}>;

export type UpdateCreditSummaryMutation = {
  __typename?: "mutation_root";
  updateCreditCardSummary?: {
    __typename?: "HouseholdCreditCardSummary";
    id: string;
  } | null;
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
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
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
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
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
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
  }>;
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

export type ChartDataQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type ChartDataQuery = {
  __typename?: "query_root";
  detailView: Array<{
    __typename: "HouseholdAllDetailView";
    id?: string | null;
    type?: string | null;
    settlementDate?: any | null;
    withdrawalDate?: any | null;
    iocomeType?: string | null;
    memo?: string | null;
    amount?: any | null;
    account?: {
      __typename?: "HouseholdAccount";
      id: string;
      name: string;
    } | null;
    genre?: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
    } | null;
    category?: {
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      depositCategory?: {
        __typename?: "HouseholdDepositCategory";
        id: string;
      } | null;
    } | null;
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
  }>;
  transferCategory?: {
    __typename: "HouseholdTransferCategory";
    incomeCategoryId: string;
    outcomeCategoryId: string;
    id: string;
  } | null;
};

export type ChartDetailTableFilterWithdrawalDateQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type ChartDetailTableFilterWithdrawalDateQuery = {
  __typename?: "query_root";
  detailView: Array<{
    __typename: "HouseholdAllDetailView";
    id?: string | null;
    type?: string | null;
    settlementDate?: any | null;
    withdrawalDate?: any | null;
    iocomeType?: string | null;
    memo?: string | null;
    amount?: any | null;
    account?: {
      __typename?: "HouseholdAccount";
      id: string;
      name: string;
    } | null;
    genre?: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
    } | null;
    category?: {
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      depositCategory?: {
        __typename?: "HouseholdDepositCategory";
        id: string;
      } | null;
    } | null;
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
  }>;
};

export type ChartDetailTableFilterSettlementDateQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
}>;

export type ChartDetailTableFilterSettlementDateQuery = {
  __typename?: "query_root";
  detailView: Array<{
    __typename: "HouseholdAllDetailView";
    id?: string | null;
    type?: string | null;
    settlementDate?: any | null;
    withdrawalDate?: any | null;
    iocomeType?: string | null;
    memo?: string | null;
    amount?: any | null;
    account?: {
      __typename?: "HouseholdAccount";
      id: string;
      name: string;
    } | null;
    genre?: {
      __typename?: "HouseholdGenre";
      id: string;
      name: string;
      genreType: string;
    } | null;
    category?: {
      __typename?: "HouseholdCategory";
      id: string;
      name: string;
      depositCategory?: {
        __typename?: "HouseholdDepositCategory";
        id: string;
      } | null;
    } | null;
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
  }>;
};

export type FragAllDetailViewFragment = {
  __typename: "HouseholdAllDetailView";
  id?: string | null;
  type?: string | null;
  settlementDate?: any | null;
  withdrawalDate?: any | null;
  iocomeType?: string | null;
  memo?: string | null;
  amount?: any | null;
  account?: {
    __typename?: "HouseholdAccount";
    id: string;
    name: string;
  } | null;
  genre?: {
    __typename?: "HouseholdGenre";
    id: string;
    name: string;
    genreType: string;
  } | null;
  category?: {
    __typename?: "HouseholdCategory";
    id: string;
    name: string;
    depositCategory?: {
      __typename?: "HouseholdDepositCategory";
      id: string;
    } | null;
  } | null;
  tags: Array<{
    __typename: "HouseholdDetailTag";
    id: string;
    tag: {
      __typename: "HouseholdTag";
      id: string;
      name: string;
      colorCode: any;
      displayOrder: number;
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
  tags: Array<{
    __typename: "HouseholdDetailTag";
    id: string;
    tag: {
      __typename: "HouseholdTag";
      id: string;
      name: string;
      colorCode: any;
      displayOrder: number;
    };
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
  tags: Array<{
    __typename: "HouseholdDetailTag";
    id: string;
    tag: {
      __typename: "HouseholdTag";
      id: string;
      name: string;
      colorCode: any;
      displayOrder: number;
    };
  }>;
};

export type FragTagFragment = {
  __typename: "HouseholdTag";
  id: string;
  name: string;
  colorCode: any;
  displayOrder: number;
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
          id?: any | null;
        } | null;
        max?: {
          __typename?: "HouseholdAllDetailViewMaxFields";
          id?: string | null;
        } | null;
      } | null;
    };
  }>;
};

export type GetAllDetailViewQueryVariables = Exact<{
  groupId: Scalars["String"];
  fromDate: Scalars["date"];
  toDate: Scalars["date"];
  tagIds?: InputMaybe<Array<Scalars["String"]> | Scalars["String"]>;
}>;

export type GetAllDetailViewQuery = {
  __typename?: "query_root";
  group?: {
    __typename?: "Group";
    id: string;
    details: Array<{
      __typename: "HouseholdAllDetailView";
      id?: string | null;
      type?: string | null;
      settlementDate?: any | null;
      withdrawalDate?: any | null;
      iocomeType?: string | null;
      memo?: string | null;
      amount?: any | null;
      account?: {
        __typename?: "HouseholdAccount";
        id: string;
        name: string;
      } | null;
      genre?: {
        __typename?: "HouseholdGenre";
        id: string;
        name: string;
        genreType: string;
      } | null;
      category?: {
        __typename?: "HouseholdCategory";
        id: string;
        name: string;
        depositCategory?: {
          __typename?: "HouseholdDepositCategory";
          id: string;
        } | null;
      } | null;
      tags: Array<{
        __typename: "HouseholdDetailTag";
        id: string;
        tag: {
          __typename: "HouseholdTag";
          id: string;
          name: string;
          colorCode: any;
          displayOrder: number;
        };
      }>;
    }>;
    tags: Array<{
      __typename?: "HouseholdTag";
      id: string;
      detailTags: Array<{
        __typename?: "HouseholdDetailTag";
        id: string;
        details: Array<{
          __typename: "HouseholdAllDetailView";
          id?: string | null;
          type?: string | null;
          settlementDate?: any | null;
          withdrawalDate?: any | null;
          iocomeType?: string | null;
          memo?: string | null;
          amount?: any | null;
          account?: {
            __typename?: "HouseholdAccount";
            id: string;
            name: string;
          } | null;
          genre?: {
            __typename?: "HouseholdGenre";
            id: string;
            name: string;
            genreType: string;
          } | null;
          category?: {
            __typename?: "HouseholdCategory";
            id: string;
            name: string;
            depositCategory?: {
              __typename?: "HouseholdDepositCategory";
              id: string;
            } | null;
          } | null;
          tags: Array<{
            __typename: "HouseholdDetailTag";
            id: string;
            tag: {
              __typename: "HouseholdTag";
              id: string;
              name: string;
              colorCode: any;
              displayOrder: number;
            };
          }>;
        }>;
      }>;
    }>;
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
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
  } | null;
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
      tags: Array<{
        __typename: "HouseholdDetailTag";
        id: string;
        tag: {
          __typename: "HouseholdTag";
          id: string;
          name: string;
          colorCode: any;
          displayOrder: number;
        };
      }>;
    }>;
  } | null;
};

export type GetDailyDetailByIdQueryVariables = Exact<{
  id: Scalars["String"];
}>;

export type GetDailyDetailByIdQuery = {
  __typename?: "query_root";
  daily?: {
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
    tags: Array<{
      __typename: "HouseholdDetailTag";
      id: string;
      tag: {
        __typename: "HouseholdTag";
        id: string;
        name: string;
        colorCode: any;
        displayOrder: number;
      };
    }>;
  } | null;
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
    id: string;
    transfer?: {
      __typename?: "HouseholdTransferCategory";
      outcomeCategoryId: string;
      incomeCategoryId: string;
      id: string;
    } | null;
    dailyDetails: Array<{
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
      tags: Array<{
        __typename: "HouseholdDetailTag";
        id: string;
        tag: {
          __typename: "HouseholdTag";
          id: string;
          name: string;
          colorCode: any;
          displayOrder: number;
        };
      }>;
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
      tags: Array<{
        __typename: "HouseholdDetailTag";
        id: string;
        tag: {
          __typename: "HouseholdTag";
          id: string;
          name: string;
          colorCode: any;
          displayOrder: number;
        };
      }>;
    }>;
    withdrawalCreditCardDetails: Array<{
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
      tags: Array<{
        __typename: "HouseholdDetailTag";
        id: string;
        tag: {
          __typename: "HouseholdTag";
          id: string;
          name: string;
          colorCode: any;
          displayOrder: number;
        };
      }>;
    }>;
  } | null;
};

export type GetGenreByIdQueryVariables = Exact<{
  genreId: Scalars["String"];
}>;

export type GetGenreByIdQuery = {
  __typename?: "query_root";
  genreById?: {
    __typename: "HouseholdGenre";
    id: string;
    genreType: string;
    iocomeType: string;
    validFlag?: boolean | null;
    displayOrder: number;
    genreName: string;
    categories: Array<{
      __typename: "HouseholdCategory";
      id: string;
      categoryId: string;
      categoryName: string;
    }>;
  } | null;
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
      id: string;
      categoryId: string;
      genre: {
        __typename?: "HouseholdGenre";
        id: string;
        iocomeType: string;
        genreId: string;
      };
    };
    outcomeCategory: {
      __typename?: "HouseholdCategory";
      id: string;
      categoryId: string;
      genre: {
        __typename?: "HouseholdGenre";
        id: string;
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
    id: string;
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
    __typename: "HouseholdGenre";
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
    __typename: "HouseholdGenre";
    id: string;
    name: string;
    categories: Array<{
      __typename: "HouseholdCategory";
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
    __typename: "HouseholdGenre";
    id: string;
    genreType: string;
    iocomeType: string;
    displayOrder: number;
    genreId: string;
    genreName: string;
    categoriesByGenreIdList: Array<{
      __typename: "HouseholdCategory";
      id: string;
      displayOrder: number;
      categoryId: string;
      categoryName: string;
    }>;
  }>;
};

export type GetTagListQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetTagListQuery = {
  __typename?: "query_root";
  group?: {
    __typename?: "Group";
    id: string;
    tags: Array<{
      __typename: "HouseholdTag";
      id: string;
      name: string;
      colorCode: any;
      displayOrder: number;
      detailTagsAggregate: {
        __typename?: "HouseholdDetailTagAggregate";
        aggregate?: {
          __typename?: "HouseholdDetailTagAggregateFields";
          count: number;
        } | null;
      };
    }>;
  } | null;
};

export const FragFavoriteFilterFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragFavoriteFilter" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdFavoriteFilter" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "args" },
            name: { kind: "Name", value: "favoriteFilterArgs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "category" },
                  name: { kind: "Name", value: "favoriteFilterArgCategoryId" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genre" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "iocomeType" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "genreType" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FragFavoriteFilterFragment, unknown>;
export const FragTagFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FragTagFragment, unknown>;
export const FragAllDetailViewFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragAllDetailView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdAllDetailView" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "settlementDate" } },
          { kind: "Field", name: { kind: "Name", value: "withdrawalDate" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "amount" },
            name: { kind: "Name", value: "originalAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "categoryId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FragAllDetailViewFragment, unknown>;
export const FragCreditCardDetailFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragCreditCardDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdCreditCardDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "summary" },
            name: { kind: "Name", value: "creditCardSummary" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FragCreditCardDetailFragment, unknown>;
export const FragDailyDetailFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragDailyDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdDailyDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FragDailyDetailFragment, unknown>;
export const CreateCategoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateCategory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "displayOrder" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "validFlag" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertCategory" },
            name: { kind: "Name", value: "insertHouseholdCategory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "validFlag" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "validFlag" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCategoryMutation,
  CreateCategoryMutationVariables
>;
export const CreateCreditCardDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateCreditCardDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "date" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amount" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "numeric" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "memo" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "summaryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertCreditCardDetail" },
            name: { kind: "Name", value: "insertHouseholdCreditCardDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "date" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "iocomeType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "iocomeType" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "categoryId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "amount" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "amount" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "summaryId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "summaryId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "memo" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "memo" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCreditCardDetailMutation,
  CreateCreditCardDetailMutationVariables
>;
export const CreateCreditCardSummaryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateCreditCardSummary" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "count" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "creditCard" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "totalAmount" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "numeric" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "withdrawalDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertCreditCardSummary" },
            name: { kind: "Name", value: "insertHouseholdCreditCardSummary" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "creditCard" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "creditCard" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "accountId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "totalAmount" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "totalAmount" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "count" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "count" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "withdrawalDate" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCreditCardSummaryMutation,
  CreateCreditCardSummaryMutationVariables
>;
export const CreateDailyDetailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateDailyDetail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amount" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "numeric" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "date" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "memo" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertDailyDetail" },
            name: { kind: "Name", value: "insertHouseholdDailyDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "date" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "iocomeType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "iocomeType" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "categoryId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "accountId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "amount" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "amount" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "memo" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "memo" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateDailyDetailMutation,
  CreateDailyDetailMutationVariables
>;
export const CreateImportFileHistoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateImportFileHistory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fileName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fileType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "importDatetime" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "timestamp" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "importUserId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertImportFileHistory" },
            name: { kind: "Name", value: "insertHouseholdImportFileHistory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "fileType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fileType" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "fileName" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fileName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "importUserId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "importUserId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "importDatetime" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "importDatetime" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateImportFileHistoryMutation,
  CreateImportFileHistoryMutationVariables
>;
export const CreateUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateUser" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "displayOrder" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertUser" },
            name: { kind: "Name", value: "insertUser" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "userId" },
                        name: { kind: "Name", value: "id" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "email" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteDailyDetailBySerialNoDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteDailyDetailBySerialNo" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "deleteDailyDetailByPk" },
            name: { kind: "Name", value: "deleteHouseholdDailyDetailByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteDailyDetailBySerialNoMutation,
  DeleteDailyDetailBySerialNoMutationVariables
>;
export const UpdateCategoryByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateCategoryById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "displayOrder" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "validFlag" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "updateCategoryByPk" },
            name: { kind: "Name", value: "updateHouseholdCategoryByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "validFlag" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "validFlag" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCategoryByIdMutation,
  UpdateCategoryByIdMutationVariables
>;
export const UpdateDailyDetailByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateDailyDetailById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "date" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amount" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "numeric" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "memo" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tagDetails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "HouseholdDetailTagInsertInput",
                  },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "updateDailyDetailByPk" },
            name: { kind: "Name", value: "updateHouseholdDailyDetailByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "date" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "iocomeType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "iocomeType" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "categoryId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "accountId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "amount" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "amount" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "memo" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "memo" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "deleteDetailTags" },
            name: { kind: "Name", value: "deleteHouseholdDetailTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "detailId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedRows" },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertDetailTags" },
            name: { kind: "Name", value: "insertHouseholdDetailTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tagDetails" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedRows" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateDailyDetailByIdMutation,
  UpdateDailyDetailByIdMutationVariables
>;
export const UpdateGenreByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateGenreById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "validFlag" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "Boolean" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "displayOrder" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "updateGenreByPk" },
            name: { kind: "Name", value: "updateHouseholdGenreByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreName" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreType" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "iocomeType" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "iocomeType" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "validFlag" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "validFlag" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateGenreByIdMutation,
  UpdateGenreByIdMutationVariables
>;
export const DeleteDashboardSettingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteDashboardSetting" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "settingId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "deleteHouseholdDashboardSettingArgs",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "settingId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "settingId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "deleteHouseholdDashboardSettingByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "settingId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteDashboardSettingMutation,
  DeleteDashboardSettingMutationVariables
>;
export const DeleteFavoriteFilterArgDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteFavoriteFilterArg" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "deleteHouseholdFavoriteFilterArgsByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteFavoriteFilterArgMutation,
  DeleteFavoriteFilterArgMutationVariables
>;
export const DeleteInsertDashboardSettingArgsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deleteInsertDashboardSettingArgs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "settingId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "objects" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "HouseholdDashboardSettingArgsInsertInput",
                  },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "deleteDashboardSettingArgs" },
            name: {
              kind: "Name",
              value: "deleteHouseholdDashboardSettingArgs",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "settingId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "settingId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertDashboardSettingArgs" },
            name: {
              kind: "Name",
              value: "insertHouseholdDashboardSettingArgs",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "objects" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteInsertDashboardSettingArgsMutation,
  DeleteInsertDashboardSettingArgsMutationVariables
>;
export const InsertDashboardSettingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertDashboardSetting" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "settingId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "feature" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "order" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertSetting" },
            name: { kind: "Name", value: "insertHouseholdDashboardSetting" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "settingId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "feature" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "feature" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "order" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "order" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertDashboardSettingMutation,
  InsertDashboardSettingMutationVariables
>;
export const InsertDashboardSettingArgsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertDashboardSettingArgs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "value" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "settingId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertSettingArgs" },
            name: {
              kind: "Name",
              value: "insertHouseholdDashboardSettingArgs",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "type" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "type" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "value" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "settingId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "settingId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "returning" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertDashboardSettingArgsMutation,
  InsertDashboardSettingArgsMutationVariables
>;
export const InsertFavoriteFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertFavoriteFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filterId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertHouseholdFavoriteFilterOne" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filterId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertFavoriteFilterMutation,
  InsertFavoriteFilterMutationVariables
>;
export const InsertFavoriteFilterArgDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "insertFavoriteFilterArg" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "argId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filterId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "key" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "value" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertArg" },
            name: {
              kind: "Name",
              value: "insertHouseholdFavoriteFilterArgsOne",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "argId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "filterId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filterId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "key" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "key" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "value" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  InsertFavoriteFilterArgMutation,
  InsertFavoriteFilterArgMutationVariables
>;
export const UpdateCreditCardDetailAmountByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCreditCardDetailAmountById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "amount" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "numeric" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "updateHouseholdCreditCardDetailByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "amount" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "amount" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreditCardDetailAmountByIdMutation,
  UpdateCreditCardDetailAmountByIdMutationVariables
>;
export const UpdateDashboardSettingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateDashboardSetting" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "settingId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "feature" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "order" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "updateDashboardSetting" },
            name: {
              kind: "Name",
              value: "updateHouseholdDashboardSettingByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "settingId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "feature" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "feature" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "order" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "order" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateDashboardSettingMutation,
  UpdateDashboardSettingMutationVariables
>;
export const UpdateDashboardSettingOrderDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateDashboardSettingOrder" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "settingId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "order" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "updateHouseholdDashboardSettingByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "settingId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "order" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "order" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateDashboardSettingOrderMutation,
  UpdateDashboardSettingOrderMutationVariables
>;
export const UpdateFavoriteFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateFavoriteFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filterId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateHouseholdFavoriteFilterByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "filterId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "name" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "name" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateFavoriteFilterMutation,
  UpdateFavoriteFilterMutationVariables
>;
export const UpdateFavoriteFilterArgDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateFavoriteFilterArg" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "argId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "value" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertArg" },
            name: {
              kind: "Name",
              value: "updateHouseholdFavoriteFilterArgsByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "argId" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "value" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "value" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateFavoriteFilterArgMutation,
  UpdateFavoriteFilterArgMutationVariables
>;
export const ModifyTagDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "modifyTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "form" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "HouseholdTagSetInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateHouseholdTagByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "form" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ModifyTagMutation, ModifyTagMutationVariables>;
export const AddTagDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "addTag" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "form" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "HouseholdTagInsertInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "insertHouseholdTagOne" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "object" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "form" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddTagMutation, AddTagMutationVariables>;
export const UpdateCreditCardDetailByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCreditCardDetailById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "memo" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tagDetails" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "HouseholdDetailTagInsertInput",
                  },
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: {
              kind: "Name",
              value: "updateHouseholdCreditCardDetailByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "genreId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "genreId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "categoryId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "categoryId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "memo" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "memo" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "deleteDetailTags" },
            name: { kind: "Name", value: "deleteHouseholdDetailTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "detailId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "id" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedRows" },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "insertDetailTags" },
            name: { kind: "Name", value: "insertHouseholdDetailTag" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "objects" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "tagDetails" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "affectedRows" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreditCardDetailByIdMutation,
  UpdateCreditCardDetailByIdMutationVariables
>;
export const UpdateCreditSummaryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "updateCreditSummary" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "form" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "HouseholdCreditCardSummarySetInput",
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "updateCreditCardSummary" },
            name: {
              kind: "Name",
              value: "updateHouseholdCreditCardSummaryByPk",
            },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "pkColumns" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "_set" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "form" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreditSummaryMutation,
  UpdateCreditSummaryMutationVariables
>;
export const GetAllCategoriesDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllCategories" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "categories" },
            name: { kind: "Name", value: "householdCategory" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "genre" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "displayOrder" },
                                value: { kind: "EnumValue", value: "ASC" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "displayOrder" },
                          value: { kind: "EnumValue", value: "ASC" },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "categoryName" },
                  name: { kind: "Name", value: "name" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "displayOrder" },
                },
                { kind: "Field", name: { kind: "Name", value: "validFlag" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "genre" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "genreId" },
                        name: { kind: "Name", value: "id" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "genreName" },
                        name: { kind: "Name", value: "name" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllCategoriesQuery,
  GetAllCategoriesQueryVariables
>;
export const GetAllCategoryListWithCriteriaDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllCategoryListWithCriteria" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "validCategoryIn" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Boolean" },
              },
            },
          },
          defaultValue: {
            kind: "ListValue",
            values: [
              { kind: "BooleanValue", value: true },
              { kind: "BooleanValue", value: false },
            ],
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "validGenreIn" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "Boolean" },
              },
            },
          },
          defaultValue: {
            kind: "ListValue",
            values: [
              { kind: "BooleanValue", value: true },
              { kind: "BooleanValue", value: false },
            ],
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeTypeIn" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
          defaultValue: {
            kind: "ListValue",
            values: [
              { kind: "StringValue", value: "INCOME", block: false },
              { kind: "StringValue", value: "OUTCOME", block: false },
            ],
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryNotIn" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
          defaultValue: { kind: "ListValue", values: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "genres" },
            name: { kind: "Name", value: "householdGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "validFlag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_in" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "validCategoryIn" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "iocomeType" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_in" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "iocomeTypeIn",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "type" },
                  name: { kind: "Name", value: "genreType" },
                },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "validFlag" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "displayOrder" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "validFlag" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_in" },
                                  value: {
                                    kind: "Variable",
                                    name: {
                                      kind: "Name",
                                      value: "validGenreIn",
                                    },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "id" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_nin" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "categoryNotIn",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "validFlag" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllCategoryListWithCriteriaQuery,
  GetAllCategoryListWithCriteriaQueryVariables
>;
export const GetAllGenreDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllGenre" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      directives: [
        { kind: "Directive", name: { kind: "Name", value: "cached" } },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "genre" },
            name: { kind: "Name", value: "householdGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "genreName" },
                  name: { kind: "Name", value: "name" },
                },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "validFlag" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "displayOrder" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllGenreQuery, GetAllGenreQueryVariables>;
export const GetAllUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAllUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "users" },
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "affiliation" },
                  name: { kind: "Name", value: "affiliations" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "group" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetCategoryByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCategoryById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "categoryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "category" },
            name: { kind: "Name", value: "householdCategoryByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "categoryId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "categoryName" },
                  name: { kind: "Name", value: "name" },
                },
                { kind: "Field", name: { kind: "Name", value: "validFlag" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "displayOrder" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "genre" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "genreId" },
                        name: { kind: "Name", value: "id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "iocomeType" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCategoryByIdQuery,
  GetCategoryByIdQueryVariables
>;
export const GetCreditCardListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCreditCardList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "allCreditCardSummariesList" },
            name: { kind: "Name", value: "householdCreditCardSummary" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: { kind: "EnumValue", value: "DESC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "creditCard" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "count" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "withdrawalDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "totalAmount" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardListQuery,
  GetCreditCardListQueryVariables
>;
export const GetDailyDetailByDateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDailyDetailByDate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "dailies" },
            name: { kind: "Name", value: "dailyDetailByDate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "args" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "from_date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fromDate" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "to_date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "toDate" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "group_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragDailyDetail" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragDailyDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdDailyDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDailyDetailByDateQuery,
  GetDailyDetailByDateQueryVariables
>;
export const GetCreditCardSummaryByDateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCreditCardSummaryByDate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "creditCardSummaries" },
            name: { kind: "Name", value: "householdCreditCardSummary" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "fromDate" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "withdrawalDate" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "groupId" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "groupId",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "withdrawalDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "totalAmount" } },
                { kind: "Field", name: { kind: "Name", value: "creditCard" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardSummaryByDateQuery,
  GetCreditCardSummaryByDateQueryVariables
>;
export const GetAccountByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAccountById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "account" },
            name: { kind: "Name", value: "householdAccountByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "accountId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAccountByIdQuery, GetAccountByIdQueryVariables>;
export const GetCreditCardDetailListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCreditCardDetailList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "creditCardDetails" },
            name: { kind: "Name", value: "householdCreditCardDetail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "fromDate" },
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_lte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "toDate" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "groupId" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "groupId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragCreditCardDetail" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragCreditCardDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdCreditCardDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "summary" },
            name: { kind: "Name", value: "creditCardSummary" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardDetailListQuery,
  GetCreditCardDetailListQueryVariables
>;
export const GetCreditCardSummaryByAccountIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCreditCardSummaryByAccountId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "creditCardSummaries" },
            name: { kind: "Name", value: "householdCreditCardSummary" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "fromDate" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "withdrawalDate" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "accountId" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "accountId",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "withdrawalDate" },
                },
                { kind: "Field", name: { kind: "Name", value: "totalAmount" } },
                { kind: "Field", name: { kind: "Name", value: "creditCard" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardSummaryByAccountIdQuery,
  GetCreditCardSummaryByAccountIdQueryVariables
>;
export const GetCreditCardSummaryByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCreditCardSummaryById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "summaryId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "creditCardSummary" },
            name: { kind: "Name", value: "householdCreditCardSummaryByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "summaryId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "creditCard" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "withdrawalDate" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "totalAmount" } },
                { kind: "Field", name: { kind: "Name", value: "count" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardSummaryByIdQuery,
  GetCreditCardSummaryByIdQueryVariables
>;
export const GetDailyByAccountIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getDailyByAccountId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "accountId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "orderBy" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "OrderBy" } },
          defaultValue: { kind: "EnumValue", value: "ASC" },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "dailies" },
            name: { kind: "Name", value: "dailyDetailByDate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "args" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "group_id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "groupId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "from_date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "fromDate" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "to_date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "toDate" },
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "accountId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "accountId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "orderBy" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: { kind: "EnumValue", value: "DESC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragDailyDetail" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragDailyDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdDailyDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDailyByAccountIdQuery,
  GetDailyByAccountIdQueryVariables
>;
export const GetFavoriteFilterDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getFavoriteFilter" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filterId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "filter" },
            name: { kind: "Name", value: "householdFavoriteFilterByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filterId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragFavoriteFilter" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragFavoriteFilter" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdFavoriteFilter" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "args" },
            name: { kind: "Name", value: "favoriteFilterArgs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "category" },
                  name: { kind: "Name", value: "favoriteFilterArgCategoryId" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genre" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "iocomeType" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "genreType" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetFavoriteFilterQuery,
  GetFavoriteFilterQueryVariables
>;
export const GetFavoriteFiltersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getFavoriteFilters" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "filters" },
            name: { kind: "Name", value: "householdFavoriteFilter" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragFavoriteFilter" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragFavoriteFilter" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdFavoriteFilter" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "args" },
            name: { kind: "Name", value: "favoriteFilterArgs" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "key" } },
                { kind: "Field", name: { kind: "Name", value: "value" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "category" },
                  name: { kind: "Name", value: "favoriteFilterArgCategoryId" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genre" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "__typename" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "iocomeType" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "genreType" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetFavoriteFiltersQuery,
  GetFavoriteFiltersQueryVariables
>;
export const ChartDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "chartData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "detailView" },
            name: { kind: "Name", value: "householdAllDetailView" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "date" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "fromDate" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "date" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragAllDetailView" },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "transferCategory" },
            name: { kind: "Name", value: "householdTransferCategoryByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "groupId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "groupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "id" },
                  name: { kind: "Name", value: "groupId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incomeCategoryId" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "outcomeCategoryId" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragAllDetailView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdAllDetailView" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "settlementDate" } },
          { kind: "Field", name: { kind: "Name", value: "withdrawalDate" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "amount" },
            name: { kind: "Name", value: "originalAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "categoryId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ChartDataQuery, ChartDataQueryVariables>;
export const ChartDetailTableFilterWithdrawalDateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "chartDetailTableFilterWithdrawalDate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "detailView" },
            name: { kind: "Name", value: "householdAllDetailView" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "withdrawalDate" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "fromDate" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "withdrawalDate" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "withdrawalDate" },
                          value: { kind: "EnumValue", value: "ASC" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "settlementDate" },
                          value: { kind: "EnumValue", value: "ASC" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "category" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "displayOrder" },
                                value: { kind: "EnumValue", value: "ASC" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragAllDetailView" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragAllDetailView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdAllDetailView" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "settlementDate" } },
          { kind: "Field", name: { kind: "Name", value: "withdrawalDate" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "amount" },
            name: { kind: "Name", value: "originalAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "categoryId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ChartDetailTableFilterWithdrawalDateQuery,
  ChartDetailTableFilterWithdrawalDateQueryVariables
>;
export const ChartDetailTableFilterSettlementDateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "chartDetailTableFilterSettlementDate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "detailView" },
            name: { kind: "Name", value: "householdAllDetailView" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "settlementDate" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_gte" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "fromDate" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "settlementDate" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ListValue",
                  values: [
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "settlementDate" },
                          value: { kind: "EnumValue", value: "ASC" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "withdrawalDate" },
                          value: { kind: "EnumValue", value: "ASC" },
                        },
                      ],
                    },
                    {
                      kind: "ObjectValue",
                      fields: [
                        {
                          kind: "ObjectField",
                          name: { kind: "Name", value: "category" },
                          value: {
                            kind: "ObjectValue",
                            fields: [
                              {
                                kind: "ObjectField",
                                name: { kind: "Name", value: "displayOrder" },
                                value: { kind: "EnumValue", value: "ASC" },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragAllDetailView" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragAllDetailView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdAllDetailView" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "settlementDate" } },
          { kind: "Field", name: { kind: "Name", value: "withdrawalDate" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "amount" },
            name: { kind: "Name", value: "originalAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "categoryId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ChartDetailTableFilterSettlementDateQuery,
  ChartDetailTableFilterSettlementDateQueryVariables
>;
export const GetAccountBalanceListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAccountBalanceList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "account" },
            name: { kind: "Name", value: "householdAccount" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "groupId" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "groupId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "accountName" },
                  name: { kind: "Name", value: "name" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "allDetailViewsAggregate" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "date" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_gte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "fromDate" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "date" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_lte" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "toDate",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "aggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "sum" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "id" },
                                    name: {
                                      kind: "Name",
                                      value: "originalAmount",
                                    },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "signedAmount",
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "max" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    alias: { kind: "Name", value: "id" },
                                    name: { kind: "Name", value: "accountId" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAccountBalanceListQuery,
  GetAccountBalanceListQueryVariables
>;
export const GetAllDetailViewDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getAllDetailView" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "tagIds" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
          defaultValue: { kind: "ListValue", values: [] },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "group" },
            name: { kind: "Name", value: "groupByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "groupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "details" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "settlementDate" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_gte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "fromDate" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: {
                                    kind: "Name",
                                    value: "settlementDate",
                                  },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_lte" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "toDate",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "settlementDate" },
                            value: { kind: "EnumValue", value: "DESC" },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "withdrawalDate" },
                            value: { kind: "EnumValue", value: "DESC" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragAllDetailView" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "id" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_in" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "tagIds" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "detailTags" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "details" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "where" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: {
                                          kind: "Name",
                                          value: "settlementDate",
                                        },
                                        value: {
                                          kind: "ObjectValue",
                                          fields: [
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "_gte",
                                              },
                                              value: {
                                                kind: "Variable",
                                                name: {
                                                  kind: "Name",
                                                  value: "fromDate",
                                                },
                                              },
                                            },
                                          ],
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_and" },
                                        value: {
                                          kind: "ObjectValue",
                                          fields: [
                                            {
                                              kind: "ObjectField",
                                              name: {
                                                kind: "Name",
                                                value: "settlementDate",
                                              },
                                              value: {
                                                kind: "ObjectValue",
                                                fields: [
                                                  {
                                                    kind: "ObjectField",
                                                    name: {
                                                      kind: "Name",
                                                      value: "_lte",
                                                    },
                                                    value: {
                                                      kind: "Variable",
                                                      name: {
                                                        kind: "Name",
                                                        value: "toDate",
                                                      },
                                                    },
                                                  },
                                                ],
                                              },
                                            },
                                          ],
                                        },
                                      },
                                    ],
                                  },
                                },
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "orderBy" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: {
                                          kind: "Name",
                                          value: "settlementDate",
                                        },
                                        value: {
                                          kind: "EnumValue",
                                          value: "DESC",
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: {
                                          kind: "Name",
                                          value: "withdrawalDate",
                                        },
                                        value: {
                                          kind: "EnumValue",
                                          value: "DESC",
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "fragAllDetailView",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragAllDetailView" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdAllDetailView" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "type" } },
          { kind: "Field", name: { kind: "Name", value: "settlementDate" } },
          { kind: "Field", name: { kind: "Name", value: "withdrawalDate" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "amount" },
            name: { kind: "Name", value: "originalAmount" },
          },
          { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "depositCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "categoryId" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAllDetailViewQuery,
  GetAllDetailViewQueryVariables
>;
export const GetCreditCardDetailByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCreditCardDetailById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "creditCardDetail" },
            name: { kind: "Name", value: "householdCreditCardDetailByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragCreditCardDetail" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragCreditCardDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdCreditCardDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "summary" },
            name: { kind: "Name", value: "creditCardSummary" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardDetailByIdQuery,
  GetCreditCardDetailByIdQueryVariables
>;
export const GetCreditCardDetailBySummaryIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getCreditCardDetailBySummaryId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "creditCardSummary" },
            name: { kind: "Name", value: "householdCreditCardSummaryByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "creditCard" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "withdrawalDate" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "count" } },
                { kind: "Field", name: { kind: "Name", value: "totalAmount" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creditCardDetails" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "date" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragCreditCardDetail" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragCreditCardDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdCreditCardDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "summary" },
            name: { kind: "Name", value: "creditCardSummary" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreditCardDetailBySummaryIdQuery,
  GetCreditCardDetailBySummaryIdQueryVariables
>;
export const GetDailyDetailByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getDailyDetailById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "daily" },
            name: { kind: "Name", value: "householdDailyDetailByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "fragDailyDetail" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragDailyDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdDailyDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDailyDetailByIdQuery,
  GetDailyDetailByIdQueryVariables
>;
export const GetDashboardSettingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getDashboardSetting" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "setting" },
            name: { kind: "Name", value: "householdDashboardSetting" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "groupId" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "groupId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "order" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "feature" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "args" },
                  name: { kind: "Name", value: "dashboardSettingArgs" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "type" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDashboardSettingQuery,
  GetDashboardSettingQueryVariables
>;
export const GetDetailsByCategoryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getDetailsByCategory" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "fromDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "toDate" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "date" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeType" },
          },
          type: {
            kind: "ListType",
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: { kind: "Name", value: "String" },
              },
            },
          },
          defaultValue: {
            kind: "ListValue",
            values: [
              { kind: "StringValue", value: "INCOME", block: false },
              { kind: "StringValue", value: "OUTCOME", block: false },
            ],
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "group" },
            name: { kind: "Name", value: "groupByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "groupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "transfer" },
                  name: { kind: "Name", value: "transferCategory" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "id" },
                        name: { kind: "Name", value: "groupId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "outcomeCategoryId" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "incomeCategoryId" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "dailyDetails" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "date" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_gte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "fromDate" },
                                  },
                                },
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "iocomeType" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_in" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "iocomeType",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragDailyDetail" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "creditCardDetails" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "date" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_gte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "fromDate" },
                                  },
                                },
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_lte" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "toDate" },
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "iocomeType" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_in" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "iocomeType",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragCreditCardDetail" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "withdrawalCreditCardDetails" },
                  name: { kind: "Name", value: "creditCardDetails" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "creditCardSummary" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: {
                                    kind: "Name",
                                    value: "withdrawalDate",
                                  },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_gte" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "fromDate",
                                          },
                                        },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_lte" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "toDate",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "iocomeType" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_in" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "iocomeType",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragCreditCardDetail" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragTag" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdTag" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "colorCode" } },
          { kind: "Field", name: { kind: "Name", value: "displayOrder" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragDailyDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdDailyDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "__typename" } },
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "account" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "fragCreditCardDetail" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "HouseholdCreditCardDetail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "date" } },
          { kind: "Field", name: { kind: "Name", value: "amount" } },
          { kind: "Field", name: { kind: "Name", value: "memo" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "genre" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
              ],
            },
          },
          {
            kind: "Field",
            name: { kind: "Name", value: "category" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "summary" },
            name: { kind: "Name", value: "creditCardSummary" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "account" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "tags" },
            name: { kind: "Name", value: "detailTags" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "tag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tag" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "fragTag" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDetailsByCategoryQuery,
  GetDetailsByCategoryQueryVariables
>;
export const GetGenreByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getGenreById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "genreById" },
            name: { kind: "Name", value: "householdGenreByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "genreId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "genreName" },
                  name: { kind: "Name", value: "name" },
                },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                { kind: "Field", name: { kind: "Name", value: "validFlag" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "displayOrder" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "validFlag" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "categoryId" },
                        name: { kind: "Name", value: "id" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "categoryName" },
                        name: { kind: "Name", value: "name" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetGenreByIdQuery, GetGenreByIdQueryVariables>;
export const GetTransferCategoryByDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetTransferCategoryBy" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "transferCategory" },
            name: { kind: "Name", value: "householdTransferCategoryByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "groupId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "groupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "id" },
                  name: { kind: "Name", value: "groupId" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "incomeCategory" },
                  name: { kind: "Name", value: "categoryByIncomeCategoryId" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "categoryId" },
                        name: { kind: "Name", value: "id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genre" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "genreId" },
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "iocomeType" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "outcomeCategory" },
                  name: { kind: "Name", value: "categoryByOutcomeCategoryId" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "categoryId" },
                        name: { kind: "Name", value: "id" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "genre" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              alias: { kind: "Name", value: "genreId" },
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "iocomeType" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTransferCategoryByQuery,
  GetTransferCategoryByQueryVariables
>;
export const GetValidAccountsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getValidAccounts" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "allAccountsList" },
            name: { kind: "Name", value: "householdAccount" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "validFlag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "groupId" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: {
                                    kind: "Variable",
                                    name: { kind: "Name", value: "groupId" },
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "accountId" },
                  name: { kind: "Name", value: "id" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "accountName" },
                  name: { kind: "Name", value: "name" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetValidAccountsQuery,
  GetValidAccountsQueryVariables
>;
export const GetValidCategoryByGenreIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getValidCategoryByGenreId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "genreId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "genreById" },
            name: { kind: "Name", value: "householdGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "_and" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "validFlag" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_and" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "id" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "_eq" },
                                        value: {
                                          kind: "Variable",
                                          name: {
                                            kind: "Name",
                                            value: "genreId",
                                          },
                                        },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "validFlag" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: "Field",
            alias: { kind: "Name", value: "genre" },
            name: { kind: "Name", value: "householdGenreByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "genreId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "categories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "validFlag" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetValidCategoryByGenreIdQuery,
  GetValidCategoryByGenreIdQueryVariables
>;
export const GetValidGenreListByIocomeTypeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getValidGenreListByIocomeType" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "iocomeType" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "allGenresList" },
            name: { kind: "Name", value: "householdGenre" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "validFlag" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: { kind: "BooleanValue", value: true },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "iocomeType" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "iocomeType" },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "groupId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "_eq" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "groupId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "orderBy" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "displayOrder" },
                      value: { kind: "EnumValue", value: "ASC" },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "genreId" },
                  name: { kind: "Name", value: "id" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "genreName" },
                  name: { kind: "Name", value: "name" },
                },
                { kind: "Field", name: { kind: "Name", value: "genreType" } },
                { kind: "Field", name: { kind: "Name", value: "iocomeType" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "displayOrder" },
                },
                {
                  kind: "Field",
                  alias: { kind: "Name", value: "categoriesByGenreIdList" },
                  name: { kind: "Name", value: "categories" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "where" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "validFlag" },
                            value: {
                              kind: "ObjectValue",
                              fields: [
                                {
                                  kind: "ObjectField",
                                  name: { kind: "Name", value: "_eq" },
                                  value: { kind: "BooleanValue", value: true },
                                },
                              ],
                            },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "categoryId" },
                        name: { kind: "Name", value: "id" },
                      },
                      {
                        kind: "Field",
                        alias: { kind: "Name", value: "categoryName" },
                        name: { kind: "Name", value: "name" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetValidGenreListByIocomeTypeQuery,
  GetValidGenreListByIocomeTypeQueryVariables
>;
export const GetTagListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getTagList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "groupId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "group" },
            name: { kind: "Name", value: "groupByPk" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "groupId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "tags" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "orderBy" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "displayOrder" },
                            value: { kind: "EnumValue", value: "ASC" },
                          },
                        ],
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "__typename" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "colorCode" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayOrder" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "detailTagsAggregate" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "aggregate" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "count" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTagListQuery, GetTagListQueryVariables>;
