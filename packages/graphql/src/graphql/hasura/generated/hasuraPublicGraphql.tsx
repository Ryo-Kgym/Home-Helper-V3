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
  numeric: any;
  timestamp: any;
};

/** columns and relationships of "affiliation" */
export type Affiliation = {
  __typename?: "Affiliation";
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  groupRole: Scalars["String"];
  id: Scalars["String"];
  /** An object relationship */
  user: User;
  userId: Scalars["String"];
};

/** aggregated selection of "affiliation" */
export type AffiliationAggregate = {
  __typename?: "AffiliationAggregate";
  aggregate?: Maybe<AffiliationAggregateFields>;
  nodes: Array<Affiliation>;
};

export type AffiliationAggregateBoolExp = {
  count?: InputMaybe<AffiliationAggregateBoolExpCount>;
};

/** aggregate fields of "affiliation" */
export type AffiliationAggregateFields = {
  __typename?: "AffiliationAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<AffiliationMaxFields>;
  min?: Maybe<AffiliationMinFields>;
};

/** aggregate fields of "affiliation" */
export type AffiliationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AffiliationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate max on columns */
export type AffiliationMaxFields = {
  __typename?: "AffiliationMaxFields";
  groupId?: Maybe<Scalars["String"]>;
  groupRole?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "affiliation" */
export type AffiliationMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AffiliationMinFields = {
  __typename?: "AffiliationMinFields";
  groupId?: Maybe<Scalars["String"]>;
  groupRole?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "affiliation" */
export type AffiliationMinOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  groupRole?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "affiliation" */
export type AffiliationMutationResponse = {
  __typename?: "AffiliationMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Affiliation>;
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

/** columns and relationships of "application" */
export type Application = {
  __typename?: "Application";
  /** An array relationship */
  groupApplications: Array<GroupApplication>;
  /** An aggregate relationship */
  groupApplicationsAggregate: GroupApplicationAggregate;
  id: Scalars["String"];
  name: Scalars["String"];
  topUrl: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "application" */
export type ApplicationGroupApplicationsArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** columns and relationships of "application" */
export type ApplicationGroupApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** aggregated selection of "application" */
export type ApplicationAggregate = {
  __typename?: "ApplicationAggregate";
  aggregate?: Maybe<ApplicationAggregateFields>;
  nodes: Array<Application>;
};

/** aggregate fields of "application" */
export type ApplicationAggregateFields = {
  __typename?: "ApplicationAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<ApplicationMaxFields>;
  min?: Maybe<ApplicationMinFields>;
};

/** aggregate fields of "application" */
export type ApplicationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate max on columns */
export type ApplicationMaxFields = {
  __typename?: "ApplicationMaxFields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  topUrl?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type ApplicationMinFields = {
  __typename?: "ApplicationMinFields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  topUrl?: Maybe<Scalars["String"]>;
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

/** columns and relationships of "group" */
export type Group = {
  __typename?: "Group";
  /** An array relationship */
  accounts: Array<HouseholdAccount>;
  /** An aggregate relationship */
  accountsAggregate: HouseholdAccountAggregate;
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: AffiliationAggregate;
  /** An array relationship */
  categories: Array<HouseholdCategory>;
  /** An array relationship */
  creditCardDetails: Array<HouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: HouseholdCreditCardDetailAggregate;
  /** An array relationship */
  creditCardSummaries: Array<HouseholdCreditCardSummary>;
  /** An aggregate relationship */
  creditCardSummariesAggregate: HouseholdCreditCardSummaryAggregate;
  /** An array relationship */
  dailyDetails: Array<HouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: HouseholdDailyDetailAggregate;
  /** An array relationship */
  depositCategories: Array<HouseholdDepositCategory>;
  /** An aggregate relationship */
  depositCategoriesAggregate: HouseholdDepositCategoryAggregate;
  /** An array relationship */
  genres: Array<HouseholdGenre>;
  /** An aggregate relationship */
  genresAggregate: HouseholdGenreAggregate;
  /** An array relationship */
  groupApplications: Array<GroupApplication>;
  /** An aggregate relationship */
  groupApplicationsAggregate: GroupApplicationAggregate;
  id: Scalars["String"];
  /** An array relationship */
  importFileHistories: Array<HouseholdImportFileHistory>;
  /** An aggregate relationship */
  importFileHistoriesAggregate: HouseholdImportFileHistoryAggregate;
  name: Scalars["String"];
  /** An array relationship */
  summaryCategories: Array<HouseholdSummaryCategory>;
  /** An aggregate relationship */
  summaryCategoriesAggregate: HouseholdSummaryCategoryAggregate;
  /** An object relationship */
  transferCategory?: Maybe<HouseholdTransferCategory>;
};

/** columns and relationships of "group" */
export type GroupAccountsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAccountOrderBy>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

/** columns and relationships of "group" */
export type GroupAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAccountOrderBy>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

/** columns and relationships of "group" */
export type GroupAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupAffiliationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCategoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCategoryOrderBy>>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCreditCardSummariesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCreditCardSummariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDailyDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDepositCategoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDepositCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGenresArgs = {
  distinctOn?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdGenreOrderBy>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGenresAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdGenreOrderBy>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGroupApplicationsArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGroupApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupImportFileHistoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupImportFileHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupSummaryCategoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupSummaryCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

/** aggregated selection of "group" */
export type GroupAggregate = {
  __typename?: "GroupAggregate";
  aggregate?: Maybe<GroupAggregateFields>;
  nodes: Array<Group>;
};

/** aggregate fields of "group" */
export type GroupAggregateFields = {
  __typename?: "GroupAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<GroupMaxFields>;
  min?: Maybe<GroupMinFields>;
};

/** aggregate fields of "group" */
export type GroupAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GroupSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** columns and relationships of "group_application" */
export type GroupApplication = {
  __typename?: "GroupApplication";
  /** An object relationship */
  application: Application;
  applicationId: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
};

/** aggregated selection of "group_application" */
export type GroupApplicationAggregate = {
  __typename?: "GroupApplicationAggregate";
  aggregate?: Maybe<GroupApplicationAggregateFields>;
  nodes: Array<GroupApplication>;
};

export type GroupApplicationAggregateBoolExp = {
  count?: InputMaybe<GroupApplicationAggregateBoolExpCount>;
};

/** aggregate fields of "group_application" */
export type GroupApplicationAggregateFields = {
  __typename?: "GroupApplicationAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<GroupApplicationMaxFields>;
  min?: Maybe<GroupApplicationMinFields>;
};

/** aggregate fields of "group_application" */
export type GroupApplicationAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate max on columns */
export type GroupApplicationMaxFields = {
  __typename?: "GroupApplicationMaxFields";
  applicationId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "group_application" */
export type GroupApplicationMaxOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GroupApplicationMinFields = {
  __typename?: "GroupApplicationMinFields";
  applicationId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
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
  categories?: InputMaybe<HouseholdCategoryBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  creditCardSummaries?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  depositCategories?: InputMaybe<HouseholdDepositCategoryBoolExp>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateBoolExp>;
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
  transferCategory?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

/** aggregate max on columns */
export type GroupMaxFields = {
  __typename?: "GroupMaxFields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type GroupMinFields = {
  __typename?: "GroupMinFields";
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** Ordering options when selecting data from "group". */
export type GroupOrderBy = {
  accountsAggregate?: InputMaybe<HouseholdAccountAggregateOrderBy>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  categoriesAggregate?: InputMaybe<HouseholdCategoryAggregateOrderBy>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateOrderBy>;
  creditCardSummariesAggregate?: InputMaybe<HouseholdCreditCardSummaryAggregateOrderBy>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateOrderBy>;
  depositCategoriesAggregate?: InputMaybe<HouseholdDepositCategoryAggregateOrderBy>;
  genresAggregate?: InputMaybe<HouseholdGenreAggregateOrderBy>;
  groupApplicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  importFileHistoriesAggregate?: InputMaybe<HouseholdImportFileHistoryAggregateOrderBy>;
  name?: InputMaybe<OrderBy>;
  summaryCategoriesAggregate?: InputMaybe<HouseholdSummaryCategoryAggregateOrderBy>;
  transferCategory?: InputMaybe<HouseholdTransferCategoryOrderBy>;
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

/** columns and relationships of "household.account" */
export type HouseholdAccount = {
  __typename?: "HouseholdAccount";
  /** An array relationship */
  allDetailViews: Array<HouseholdAllDetailView>;
  /** An aggregate relationship */
  allDetailViewsAggregate: HouseholdAllDetailViewAggregate;
  /** An array relationship */
  creditCardSummaries: Array<HouseholdCreditCardSummary>;
  /** An aggregate relationship */
  creditCardSummariesAggregate: HouseholdCreditCardSummaryAggregate;
  /** An array relationship */
  dailyDetails: Array<HouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: HouseholdDailyDetailAggregate;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "household.account" */
export type HouseholdAccountAllDetailViewsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

/** columns and relationships of "household.account" */
export type HouseholdAccountAllDetailViewsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

/** columns and relationships of "household.account" */
export type HouseholdAccountCreditCardSummariesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

/** columns and relationships of "household.account" */
export type HouseholdAccountCreditCardSummariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

/** columns and relationships of "household.account" */
export type HouseholdAccountDailyDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "household.account" */
export type HouseholdAccountDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** aggregated selection of "household.account" */
export type HouseholdAccountAggregate = {
  __typename?: "HouseholdAccountAggregate";
  aggregate?: Maybe<HouseholdAccountAggregateFields>;
  nodes: Array<HouseholdAccount>;
};

export type HouseholdAccountAggregateBoolExp = {
  bool_and?: InputMaybe<HouseholdAccountAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<HouseholdAccountAggregateBoolExpBool_Or>;
  count?: InputMaybe<HouseholdAccountAggregateBoolExpCount>;
};

/** aggregate fields of "household.account" */
export type HouseholdAccountAggregateFields = {
  __typename?: "HouseholdAccountAggregateFields";
  avg?: Maybe<HouseholdAccountAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdAccountMaxFields>;
  min?: Maybe<HouseholdAccountMinFields>;
  stddev?: Maybe<HouseholdAccountStddevFields>;
  stddevPop?: Maybe<HouseholdAccountStddevPopFields>;
  stddevSamp?: Maybe<HouseholdAccountStddevSampFields>;
  sum?: Maybe<HouseholdAccountSumFields>;
  varPop?: Maybe<HouseholdAccountVarPopFields>;
  varSamp?: Maybe<HouseholdAccountVarSampFields>;
  variance?: Maybe<HouseholdAccountVarianceFields>;
};

/** aggregate fields of "household.account" */
export type HouseholdAccountAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdAccountAvgFields = {
  __typename?: "HouseholdAccountAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdAccountMaxFields = {
  __typename?: "HouseholdAccountMaxFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.account" */
export type HouseholdAccountMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HouseholdAccountMinFields = {
  __typename?: "HouseholdAccountMinFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "household.account" */
export type HouseholdAccountMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "household.account" */
export type HouseholdAccountMutationResponse = {
  __typename?: "HouseholdAccountMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdAccount>;
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

/** aggregate stddev on columns */
export type HouseholdAccountStddevFields = {
  __typename?: "HouseholdAccountStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.account" */
export type HouseholdAccountStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdAccountStddevPopFields = {
  __typename?: "HouseholdAccountStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.account" */
export type HouseholdAccountStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdAccountStddevSampFields = {
  __typename?: "HouseholdAccountStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdAccountSumFields = {
  __typename?: "HouseholdAccountSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
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

/** aggregate varPop on columns */
export type HouseholdAccountVarPopFields = {
  __typename?: "HouseholdAccountVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.account" */
export type HouseholdAccountVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdAccountVarSampFields = {
  __typename?: "HouseholdAccountVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.account" */
export type HouseholdAccountVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdAccountVarianceFields = {
  __typename?: "HouseholdAccountVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.account" */
export type HouseholdAccountVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.all_detail_view" */
export type HouseholdAllDetailView = {
  __typename?: "HouseholdAllDetailView";
  accountId?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["String"]>;
};

/** aggregated selection of "household.all_detail_view" */
export type HouseholdAllDetailViewAggregate = {
  __typename?: "HouseholdAllDetailViewAggregate";
  aggregate?: Maybe<HouseholdAllDetailViewAggregateFields>;
  nodes: Array<HouseholdAllDetailView>;
};

export type HouseholdAllDetailViewAggregateBoolExp = {
  count?: InputMaybe<HouseholdAllDetailViewAggregateBoolExpCount>;
};

/** aggregate fields of "household.all_detail_view" */
export type HouseholdAllDetailViewAggregateFields = {
  __typename?: "HouseholdAllDetailViewAggregateFields";
  avg?: Maybe<HouseholdAllDetailViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdAllDetailViewMaxFields>;
  min?: Maybe<HouseholdAllDetailViewMinFields>;
  stddev?: Maybe<HouseholdAllDetailViewStddevFields>;
  stddevPop?: Maybe<HouseholdAllDetailViewStddevPopFields>;
  stddevSamp?: Maybe<HouseholdAllDetailViewStddevSampFields>;
  sum?: Maybe<HouseholdAllDetailViewSumFields>;
  varPop?: Maybe<HouseholdAllDetailViewVarPopFields>;
  varSamp?: Maybe<HouseholdAllDetailViewVarSampFields>;
  variance?: Maybe<HouseholdAllDetailViewVarianceFields>;
};

/** aggregate fields of "household.all_detail_view" */
export type HouseholdAllDetailViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdAllDetailViewAvgFields = {
  __typename?: "HouseholdAllDetailViewAvgFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdAllDetailViewMaxFields = {
  __typename?: "HouseholdAllDetailViewMaxFields";
  accountId?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["String"]>;
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

/** aggregate min on columns */
export type HouseholdAllDetailViewMinFields = {
  __typename?: "HouseholdAllDetailViewMinFields";
  accountId?: Maybe<Scalars["String"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
  type?: Maybe<Scalars["String"]>;
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

/** aggregate stddev on columns */
export type HouseholdAllDetailViewStddevFields = {
  __typename?: "HouseholdAllDetailViewStddevFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdAllDetailViewStddevPopFields = {
  __typename?: "HouseholdAllDetailViewStddevPopFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewStddevPopOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdAllDetailViewStddevSampFields = {
  __typename?: "HouseholdAllDetailViewStddevSampFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdAllDetailViewSumFields = {
  __typename?: "HouseholdAllDetailViewSumFields";
  originalAmount?: Maybe<Scalars["numeric"]>;
  signedAmount?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewSumOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** aggregate varPop on columns */
export type HouseholdAllDetailViewVarPopFields = {
  __typename?: "HouseholdAllDetailViewVarPopFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarPopOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdAllDetailViewVarSampFields = {
  __typename?: "HouseholdAllDetailViewVarSampFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarSampOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdAllDetailViewVarianceFields = {
  __typename?: "HouseholdAllDetailViewVarianceFields";
  originalAmount?: Maybe<Scalars["Float"]>;
  signedAmount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.all_detail_view" */
export type HouseholdAllDetailViewVarianceOrderBy = {
  originalAmount?: InputMaybe<OrderBy>;
  signedAmount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategory = {
  __typename?: "HouseholdCategory";
  /** An array relationship */
  creditCardDetails: Array<HouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: HouseholdCreditCardDetailAggregate;
  /** An array relationship */
  dailyDetails: Array<HouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: HouseholdDailyDetailAggregate;
  /** An object relationship */
  depositCategory?: Maybe<HouseholdDepositCategory>;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  genre: HouseholdGenre;
  genreId: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  name: Scalars["String"];
  /** An array relationship */
  summaryCategories: Array<HouseholdSummaryCategory>;
  /** An aggregate relationship */
  summaryCategoriesAggregate: HouseholdSummaryCategoryAggregate;
  /** An array relationship */
  transferCategories: Array<HouseholdTransferCategory>;
  /** An aggregate relationship */
  transferCategoriesAggregate: HouseholdTransferCategoryAggregate;
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategoryCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategoryCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategoryDailyDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategoryDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategorySummaryCategoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategorySummaryCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategoryTransferCategoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

/** columns and relationships of "household.category" */
export type HouseholdCategoryTransferCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
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

/** response of any mutation on the table "household.category" */
export type HouseholdCategoryMutationResponse = {
  __typename?: "HouseholdCategoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdCategory>;
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

/** columns and relationships of "household.credit_card_detail" */
export type HouseholdCreditCardDetail = {
  __typename?: "HouseholdCreditCardDetail";
  amount: Scalars["numeric"];
  /** An object relationship */
  category: HouseholdCategory;
  categoryId: Scalars["String"];
  /** An object relationship */
  creditCardSummary: HouseholdCreditCardSummary;
  date: Scalars["date"];
  /** An object relationship */
  genre: HouseholdGenre;
  genreId: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  iocomeType: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
  summaryId: Scalars["String"];
  /** An object relationship */
  user: User;
  userId: Scalars["String"];
};

/** aggregated selection of "household.credit_card_detail" */
export type HouseholdCreditCardDetailAggregate = {
  __typename?: "HouseholdCreditCardDetailAggregate";
  aggregate?: Maybe<HouseholdCreditCardDetailAggregateFields>;
  nodes: Array<HouseholdCreditCardDetail>;
};

export type HouseholdCreditCardDetailAggregateBoolExp = {
  count?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExpCount>;
};

/** aggregate fields of "household.credit_card_detail" */
export type HouseholdCreditCardDetailAggregateFields = {
  __typename?: "HouseholdCreditCardDetailAggregateFields";
  avg?: Maybe<HouseholdCreditCardDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdCreditCardDetailMaxFields>;
  min?: Maybe<HouseholdCreditCardDetailMinFields>;
  stddev?: Maybe<HouseholdCreditCardDetailStddevFields>;
  stddevPop?: Maybe<HouseholdCreditCardDetailStddevPopFields>;
  stddevSamp?: Maybe<HouseholdCreditCardDetailStddevSampFields>;
  sum?: Maybe<HouseholdCreditCardDetailSumFields>;
  varPop?: Maybe<HouseholdCreditCardDetailVarPopFields>;
  varSamp?: Maybe<HouseholdCreditCardDetailVarSampFields>;
  variance?: Maybe<HouseholdCreditCardDetailVarianceFields>;
};

/** aggregate fields of "household.credit_card_detail" */
export type HouseholdCreditCardDetailAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdCreditCardDetailAvgFields = {
  __typename?: "HouseholdCreditCardDetailAvgFields";
  amount?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdCreditCardDetailMaxFields = {
  __typename?: "HouseholdCreditCardDetailMaxFields";
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  summaryId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
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

/** aggregate min on columns */
export type HouseholdCreditCardDetailMinFields = {
  __typename?: "HouseholdCreditCardDetailMinFields";
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  summaryId?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
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

/** response of any mutation on the table "household.credit_card_detail" */
export type HouseholdCreditCardDetailMutationResponse = {
  __typename?: "HouseholdCreditCardDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdCreditCardDetail>;
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

/** aggregate stddev on columns */
export type HouseholdCreditCardDetailStddevFields = {
  __typename?: "HouseholdCreditCardDetailStddevFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdCreditCardDetailStddevPopFields = {
  __typename?: "HouseholdCreditCardDetailStddevPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdCreditCardDetailStddevSampFields = {
  __typename?: "HouseholdCreditCardDetailStddevSampFields";
  amount?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdCreditCardDetailSumFields = {
  __typename?: "HouseholdCreditCardDetailSumFields";
  amount?: Maybe<Scalars["numeric"]>;
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

/** aggregate varPop on columns */
export type HouseholdCreditCardDetailVarPopFields = {
  __typename?: "HouseholdCreditCardDetailVarPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdCreditCardDetailVarSampFields = {
  __typename?: "HouseholdCreditCardDetailVarSampFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdCreditCardDetailVarianceFields = {
  __typename?: "HouseholdCreditCardDetailVarianceFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.credit_card_detail" */
export type HouseholdCreditCardDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.credit_card_summary" */
export type HouseholdCreditCardSummary = {
  __typename?: "HouseholdCreditCardSummary";
  /** An object relationship */
  account: HouseholdAccount;
  accountId: Scalars["String"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  /** An array relationship */
  creditCardDetails: Array<HouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: HouseholdCreditCardDetailAggregate;
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
};

/** columns and relationships of "household.credit_card_summary" */
export type HouseholdCreditCardSummaryCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "household.credit_card_summary" */
export type HouseholdCreditCardSummaryCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** aggregated selection of "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAggregate = {
  __typename?: "HouseholdCreditCardSummaryAggregate";
  aggregate?: Maybe<HouseholdCreditCardSummaryAggregateFields>;
  nodes: Array<HouseholdCreditCardSummary>;
};

export type HouseholdCreditCardSummaryAggregateBoolExp = {
  count?: InputMaybe<HouseholdCreditCardSummaryAggregateBoolExpCount>;
};

/** aggregate fields of "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAggregateFields = {
  __typename?: "HouseholdCreditCardSummaryAggregateFields";
  avg?: Maybe<HouseholdCreditCardSummaryAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdCreditCardSummaryMaxFields>;
  min?: Maybe<HouseholdCreditCardSummaryMinFields>;
  stddev?: Maybe<HouseholdCreditCardSummaryStddevFields>;
  stddevPop?: Maybe<HouseholdCreditCardSummaryStddevPopFields>;
  stddevSamp?: Maybe<HouseholdCreditCardSummaryStddevSampFields>;
  sum?: Maybe<HouseholdCreditCardSummarySumFields>;
  varPop?: Maybe<HouseholdCreditCardSummaryVarPopFields>;
  varSamp?: Maybe<HouseholdCreditCardSummaryVarSampFields>;
  variance?: Maybe<HouseholdCreditCardSummaryVarianceFields>;
};

/** aggregate fields of "household.credit_card_summary" */
export type HouseholdCreditCardSummaryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdCreditCardSummaryAvgFields = {
  __typename?: "HouseholdCreditCardSummaryAvgFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdCreditCardSummaryMaxFields = {
  __typename?: "HouseholdCreditCardSummaryMaxFields";
  accountId?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["Int"]>;
  creditCard?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
  withdrawalDate?: Maybe<Scalars["date"]>;
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

/** aggregate min on columns */
export type HouseholdCreditCardSummaryMinFields = {
  __typename?: "HouseholdCreditCardSummaryMinFields";
  accountId?: Maybe<Scalars["String"]>;
  count?: Maybe<Scalars["Int"]>;
  creditCard?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
  withdrawalDate?: Maybe<Scalars["date"]>;
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

/** response of any mutation on the table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryMutationResponse = {
  __typename?: "HouseholdCreditCardSummaryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdCreditCardSummary>;
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

/** aggregate stddev on columns */
export type HouseholdCreditCardSummaryStddevFields = {
  __typename?: "HouseholdCreditCardSummaryStddevFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdCreditCardSummaryStddevPopFields = {
  __typename?: "HouseholdCreditCardSummaryStddevPopFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryStddevPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdCreditCardSummaryStddevSampFields = {
  __typename?: "HouseholdCreditCardSummaryStddevSampFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdCreditCardSummarySumFields = {
  __typename?: "HouseholdCreditCardSummarySumFields";
  count?: Maybe<Scalars["Int"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummarySumOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.credit_card_summary_total_by_account_view" */
export type HouseholdCreditCardSummaryTotalByAccountView = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountView";
  accountId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "household.credit_card_summary_total_by_account_view" */
export type HouseholdCreditCardSummaryTotalByAccountViewAggregate = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewAggregate";
  aggregate?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewAggregateFields>;
  nodes: Array<HouseholdCreditCardSummaryTotalByAccountView>;
};

/** aggregate fields of "household.credit_card_summary_total_by_account_view" */
export type HouseholdCreditCardSummaryTotalByAccountViewAggregateFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewAggregateFields";
  avg?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewMaxFields>;
  min?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewMinFields>;
  stddev?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewStddevFields>;
  stddevPop?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewStddevPopFields>;
  stddevSamp?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewStddevSampFields>;
  sum?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewSumFields>;
  varPop?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewVarPopFields>;
  varSamp?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewVarSampFields>;
  variance?: Maybe<HouseholdCreditCardSummaryTotalByAccountViewVarianceFields>;
};

/** aggregate fields of "household.credit_card_summary_total_by_account_view" */
export type HouseholdCreditCardSummaryTotalByAccountViewAggregateFieldsCountArgs =
  {
    columns?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
    >;
    distinct?: InputMaybe<Scalars["Boolean"]>;
  };

/** aggregate avg on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewAvgFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewMaxFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewMaxFields";
  accountId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewMinFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewMinFields";
  accountId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
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

/** aggregate stddev on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewStddevFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewStddevPopFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewStddevSampFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

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

/** aggregate sum on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewSumFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewVarPopFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewVarSampFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HouseholdCreditCardSummaryTotalByAccountViewVarianceFields = {
  __typename?: "HouseholdCreditCardSummaryTotalByAccountViewVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
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

/** aggregate varPop on columns */
export type HouseholdCreditCardSummaryVarPopFields = {
  __typename?: "HouseholdCreditCardSummaryVarPopFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdCreditCardSummaryVarSampFields = {
  __typename?: "HouseholdCreditCardSummaryVarSampFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdCreditCardSummaryVarianceFields = {
  __typename?: "HouseholdCreditCardSummaryVarianceFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.credit_card_summary" */
export type HouseholdCreditCardSummaryVarianceOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.daily_detail" */
export type HouseholdDailyDetail = {
  __typename?: "HouseholdDailyDetail";
  /** An object relationship */
  account: HouseholdAccount;
  accountId: Scalars["String"];
  amount: Scalars["numeric"];
  /** An object relationship */
  category: HouseholdCategory;
  categoryId: Scalars["String"];
  date: Scalars["date"];
  /** An object relationship */
  genre: HouseholdGenre;
  genreId: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  iocomeType: Scalars["String"];
  memo?: Maybe<Scalars["String"]>;
  /** An object relationship */
  user: User;
  userId: Scalars["String"];
};

/** aggregated selection of "household.daily_detail" */
export type HouseholdDailyDetailAggregate = {
  __typename?: "HouseholdDailyDetailAggregate";
  aggregate?: Maybe<HouseholdDailyDetailAggregateFields>;
  nodes: Array<HouseholdDailyDetail>;
};

export type HouseholdDailyDetailAggregateBoolExp = {
  count?: InputMaybe<HouseholdDailyDetailAggregateBoolExpCount>;
};

/** aggregate fields of "household.daily_detail" */
export type HouseholdDailyDetailAggregateFields = {
  __typename?: "HouseholdDailyDetailAggregateFields";
  avg?: Maybe<HouseholdDailyDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdDailyDetailMaxFields>;
  min?: Maybe<HouseholdDailyDetailMinFields>;
  stddev?: Maybe<HouseholdDailyDetailStddevFields>;
  stddevPop?: Maybe<HouseholdDailyDetailStddevPopFields>;
  stddevSamp?: Maybe<HouseholdDailyDetailStddevSampFields>;
  sum?: Maybe<HouseholdDailyDetailSumFields>;
  varPop?: Maybe<HouseholdDailyDetailVarPopFields>;
  varSamp?: Maybe<HouseholdDailyDetailVarSampFields>;
  variance?: Maybe<HouseholdDailyDetailVarianceFields>;
};

/** aggregate fields of "household.daily_detail" */
export type HouseholdDailyDetailAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdDailyDetailAvgFields = {
  __typename?: "HouseholdDailyDetailAvgFields";
  amount?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdDailyDetailMaxFields = {
  __typename?: "HouseholdDailyDetailMaxFields";
  accountId?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
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

/** aggregate min on columns */
export type HouseholdDailyDetailMinFields = {
  __typename?: "HouseholdDailyDetailMinFields";
  accountId?: Maybe<Scalars["String"]>;
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  memo?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["String"]>;
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

/** response of any mutation on the table "household.daily_detail" */
export type HouseholdDailyDetailMutationResponse = {
  __typename?: "HouseholdDailyDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdDailyDetail>;
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

/** aggregate stddev on columns */
export type HouseholdDailyDetailStddevFields = {
  __typename?: "HouseholdDailyDetailStddevFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdDailyDetailStddevPopFields = {
  __typename?: "HouseholdDailyDetailStddevPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdDailyDetailStddevSampFields = {
  __typename?: "HouseholdDailyDetailStddevSampFields";
  amount?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdDailyDetailSumFields = {
  __typename?: "HouseholdDailyDetailSumFields";
  amount?: Maybe<Scalars["numeric"]>;
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

/** aggregate varPop on columns */
export type HouseholdDailyDetailVarPopFields = {
  __typename?: "HouseholdDailyDetailVarPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdDailyDetailVarSampFields = {
  __typename?: "HouseholdDailyDetailVarSampFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdDailyDetailVarianceFields = {
  __typename?: "HouseholdDailyDetailVarianceFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.daily_detail" */
export type HouseholdDailyDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.daily_total_view" */
export type HouseholdDailyTotalView = {
  __typename?: "HouseholdDailyTotalView";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "household.daily_total_view" */
export type HouseholdDailyTotalViewAggregate = {
  __typename?: "HouseholdDailyTotalViewAggregate";
  aggregate?: Maybe<HouseholdDailyTotalViewAggregateFields>;
  nodes: Array<HouseholdDailyTotalView>;
};

/** aggregate fields of "household.daily_total_view" */
export type HouseholdDailyTotalViewAggregateFields = {
  __typename?: "HouseholdDailyTotalViewAggregateFields";
  avg?: Maybe<HouseholdDailyTotalViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdDailyTotalViewMaxFields>;
  min?: Maybe<HouseholdDailyTotalViewMinFields>;
  stddev?: Maybe<HouseholdDailyTotalViewStddevFields>;
  stddevPop?: Maybe<HouseholdDailyTotalViewStddevPopFields>;
  stddevSamp?: Maybe<HouseholdDailyTotalViewStddevSampFields>;
  sum?: Maybe<HouseholdDailyTotalViewSumFields>;
  varPop?: Maybe<HouseholdDailyTotalViewVarPopFields>;
  varSamp?: Maybe<HouseholdDailyTotalViewVarSampFields>;
  variance?: Maybe<HouseholdDailyTotalViewVarianceFields>;
};

/** aggregate fields of "household.daily_total_view" */
export type HouseholdDailyTotalViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdDailyTotalViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type HouseholdDailyTotalViewAvgFields = {
  __typename?: "HouseholdDailyTotalViewAvgFields";
  total?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdDailyTotalViewMaxFields = {
  __typename?: "HouseholdDailyTotalViewMaxFields";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type HouseholdDailyTotalViewMinFields = {
  __typename?: "HouseholdDailyTotalViewMinFields";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
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

/** aggregate stddev on columns */
export type HouseholdDailyTotalViewStddevFields = {
  __typename?: "HouseholdDailyTotalViewStddevFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HouseholdDailyTotalViewStddevPopFields = {
  __typename?: "HouseholdDailyTotalViewStddevPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HouseholdDailyTotalViewStddevSampFields = {
  __typename?: "HouseholdDailyTotalViewStddevSampFields";
  total?: Maybe<Scalars["Float"]>;
};

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

/** aggregate sum on columns */
export type HouseholdDailyTotalViewSumFields = {
  __typename?: "HouseholdDailyTotalViewSumFields";
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type HouseholdDailyTotalViewVarPopFields = {
  __typename?: "HouseholdDailyTotalViewVarPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HouseholdDailyTotalViewVarSampFields = {
  __typename?: "HouseholdDailyTotalViewVarSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HouseholdDailyTotalViewVarianceFields = {
  __typename?: "HouseholdDailyTotalViewVarianceFields";
  total?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "household.deposit_category" */
export type HouseholdDepositCategory = {
  __typename?: "HouseholdDepositCategory";
  /** An object relationship */
  category: HouseholdCategory;
  categoryId: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
};

/** aggregated selection of "household.deposit_category" */
export type HouseholdDepositCategoryAggregate = {
  __typename?: "HouseholdDepositCategoryAggregate";
  aggregate?: Maybe<HouseholdDepositCategoryAggregateFields>;
  nodes: Array<HouseholdDepositCategory>;
};

export type HouseholdDepositCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdDepositCategoryAggregateBoolExpCount>;
};

/** aggregate fields of "household.deposit_category" */
export type HouseholdDepositCategoryAggregateFields = {
  __typename?: "HouseholdDepositCategoryAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<HouseholdDepositCategoryMaxFields>;
  min?: Maybe<HouseholdDepositCategoryMinFields>;
};

/** aggregate fields of "household.deposit_category" */
export type HouseholdDepositCategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate max on columns */
export type HouseholdDepositCategoryMaxFields = {
  __typename?: "HouseholdDepositCategoryMaxFields";
  categoryId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.deposit_category" */
export type HouseholdDepositCategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HouseholdDepositCategoryMinFields = {
  __typename?: "HouseholdDepositCategoryMinFields";
  categoryId?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
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

/** columns and relationships of "household.genre" */
export type HouseholdGenre = {
  __typename?: "HouseholdGenre";
  /** An array relationship */
  categories: Array<HouseholdCategory>;
  /** An array relationship */
  creditCardDetails: Array<HouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: HouseholdCreditCardDetailAggregate;
  /** An array relationship */
  dailyDetails: Array<HouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: HouseholdDailyDetailAggregate;
  displayOrder: Scalars["Int"];
  genreType: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  iocomeType: Scalars["String"];
  name: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "household.genre" */
export type HouseholdGenreCategoriesArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCategoryOrderBy>>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

/** columns and relationships of "household.genre" */
export type HouseholdGenreCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "household.genre" */
export type HouseholdGenreCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "household.genre" */
export type HouseholdGenreDailyDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "household.genre" */
export type HouseholdGenreDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** aggregated selection of "household.genre" */
export type HouseholdGenreAggregate = {
  __typename?: "HouseholdGenreAggregate";
  aggregate?: Maybe<HouseholdGenreAggregateFields>;
  nodes: Array<HouseholdGenre>;
};

export type HouseholdGenreAggregateBoolExp = {
  bool_and?: InputMaybe<HouseholdGenreAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<HouseholdGenreAggregateBoolExpBool_Or>;
  count?: InputMaybe<HouseholdGenreAggregateBoolExpCount>;
};

/** aggregate fields of "household.genre" */
export type HouseholdGenreAggregateFields = {
  __typename?: "HouseholdGenreAggregateFields";
  avg?: Maybe<HouseholdGenreAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdGenreMaxFields>;
  min?: Maybe<HouseholdGenreMinFields>;
  stddev?: Maybe<HouseholdGenreStddevFields>;
  stddevPop?: Maybe<HouseholdGenreStddevPopFields>;
  stddevSamp?: Maybe<HouseholdGenreStddevSampFields>;
  sum?: Maybe<HouseholdGenreSumFields>;
  varPop?: Maybe<HouseholdGenreVarPopFields>;
  varSamp?: Maybe<HouseholdGenreVarSampFields>;
  variance?: Maybe<HouseholdGenreVarianceFields>;
};

/** aggregate fields of "household.genre" */
export type HouseholdGenreAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdGenreAvgFields = {
  __typename?: "HouseholdGenreAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdGenreMaxFields = {
  __typename?: "HouseholdGenreMaxFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  genreType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
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

/** aggregate min on columns */
export type HouseholdGenreMinFields = {
  __typename?: "HouseholdGenreMinFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  genreType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
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

/** response of any mutation on the table "household.genre" */
export type HouseholdGenreMutationResponse = {
  __typename?: "HouseholdGenreMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdGenre>;
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

/** aggregate stddev on columns */
export type HouseholdGenreStddevFields = {
  __typename?: "HouseholdGenreStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.genre" */
export type HouseholdGenreStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdGenreStddevPopFields = {
  __typename?: "HouseholdGenreStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.genre" */
export type HouseholdGenreStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdGenreStddevSampFields = {
  __typename?: "HouseholdGenreStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdGenreSumFields = {
  __typename?: "HouseholdGenreSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
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

/** aggregate varPop on columns */
export type HouseholdGenreVarPopFields = {
  __typename?: "HouseholdGenreVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.genre" */
export type HouseholdGenreVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdGenreVarSampFields = {
  __typename?: "HouseholdGenreVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.genre" */
export type HouseholdGenreVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdGenreVarianceFields = {
  __typename?: "HouseholdGenreVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.genre" */
export type HouseholdGenreVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.import_file_history" */
export type HouseholdImportFileHistory = {
  __typename?: "HouseholdImportFileHistory";
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["String"];
};

/** aggregated selection of "household.import_file_history" */
export type HouseholdImportFileHistoryAggregate = {
  __typename?: "HouseholdImportFileHistoryAggregate";
  aggregate?: Maybe<HouseholdImportFileHistoryAggregateFields>;
  nodes: Array<HouseholdImportFileHistory>;
};

export type HouseholdImportFileHistoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdImportFileHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "household.import_file_history" */
export type HouseholdImportFileHistoryAggregateFields = {
  __typename?: "HouseholdImportFileHistoryAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<HouseholdImportFileHistoryMaxFields>;
  min?: Maybe<HouseholdImportFileHistoryMinFields>;
};

/** aggregate fields of "household.import_file_history" */
export type HouseholdImportFileHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate max on columns */
export type HouseholdImportFileHistoryMaxFields = {
  __typename?: "HouseholdImportFileHistoryMaxFields";
  fileName?: Maybe<Scalars["String"]>;
  fileType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  importDatetime?: Maybe<Scalars["timestamp"]>;
  importUserId?: Maybe<Scalars["String"]>;
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

/** aggregate min on columns */
export type HouseholdImportFileHistoryMinFields = {
  __typename?: "HouseholdImportFileHistoryMinFields";
  fileName?: Maybe<Scalars["String"]>;
  fileType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  importDatetime?: Maybe<Scalars["timestamp"]>;
  importUserId?: Maybe<Scalars["String"]>;
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

/** response of any mutation on the table "household.import_file_history" */
export type HouseholdImportFileHistoryMutationResponse = {
  __typename?: "HouseholdImportFileHistoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdImportFileHistory>;
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

/** columns and relationships of "household.summary_category" */
export type HouseholdSummaryCategory = {
  __typename?: "HouseholdSummaryCategory";
  /** An object relationship */
  category: HouseholdCategory;
  categoryId: Scalars["String"];
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  id: Scalars["String"];
};

/** aggregated selection of "household.summary_category" */
export type HouseholdSummaryCategoryAggregate = {
  __typename?: "HouseholdSummaryCategoryAggregate";
  aggregate?: Maybe<HouseholdSummaryCategoryAggregateFields>;
  nodes: Array<HouseholdSummaryCategory>;
};

export type HouseholdSummaryCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdSummaryCategoryAggregateBoolExpCount>;
};

/** aggregate fields of "household.summary_category" */
export type HouseholdSummaryCategoryAggregateFields = {
  __typename?: "HouseholdSummaryCategoryAggregateFields";
  avg?: Maybe<HouseholdSummaryCategoryAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdSummaryCategoryMaxFields>;
  min?: Maybe<HouseholdSummaryCategoryMinFields>;
  stddev?: Maybe<HouseholdSummaryCategoryStddevFields>;
  stddevPop?: Maybe<HouseholdSummaryCategoryStddevPopFields>;
  stddevSamp?: Maybe<HouseholdSummaryCategoryStddevSampFields>;
  sum?: Maybe<HouseholdSummaryCategorySumFields>;
  varPop?: Maybe<HouseholdSummaryCategoryVarPopFields>;
  varSamp?: Maybe<HouseholdSummaryCategoryVarSampFields>;
  variance?: Maybe<HouseholdSummaryCategoryVarianceFields>;
};

/** aggregate fields of "household.summary_category" */
export type HouseholdSummaryCategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate avg on columns */
export type HouseholdSummaryCategoryAvgFields = {
  __typename?: "HouseholdSummaryCategoryAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdSummaryCategoryMaxFields = {
  __typename?: "HouseholdSummaryCategoryMaxFields";
  categoryId?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HouseholdSummaryCategoryMinFields = {
  __typename?: "HouseholdSummaryCategoryMinFields";
  categoryId?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
};

/** order by min() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "household.summary_category" */
export type HouseholdSummaryCategoryMutationResponse = {
  __typename?: "HouseholdSummaryCategoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HouseholdSummaryCategory>;
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

/** aggregate stddev on columns */
export type HouseholdSummaryCategoryStddevFields = {
  __typename?: "HouseholdSummaryCategoryStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HouseholdSummaryCategoryStddevPopFields = {
  __typename?: "HouseholdSummaryCategoryStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HouseholdSummaryCategoryStddevSampFields = {
  __typename?: "HouseholdSummaryCategoryStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdSummaryCategorySumFields = {
  __typename?: "HouseholdSummaryCategorySumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
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

/** aggregate varPop on columns */
export type HouseholdSummaryCategoryVarPopFields = {
  __typename?: "HouseholdSummaryCategoryVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HouseholdSummaryCategoryVarSampFields = {
  __typename?: "HouseholdSummaryCategoryVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HouseholdSummaryCategoryVarianceFields = {
  __typename?: "HouseholdSummaryCategoryVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "household.summary_category" */
export type HouseholdSummaryCategoryVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "household.total_by_category_view" */
export type HouseholdTotalByCategoryView = {
  __typename?: "HouseholdTotalByCategoryView";
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

export type HouseholdTotalByCategoryViewAggregate = {
  __typename?: "HouseholdTotalByCategoryViewAggregate";
  aggregate?: Maybe<HouseholdTotalByCategoryViewAggregateFields>;
  nodes: Array<HouseholdTotalByCategoryView>;
};

/** aggregate fields of "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewAggregateFields = {
  __typename?: "HouseholdTotalByCategoryViewAggregateFields";
  avg?: Maybe<HouseholdTotalByCategoryViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdTotalByCategoryViewMaxFields>;
  min?: Maybe<HouseholdTotalByCategoryViewMinFields>;
  stddev?: Maybe<HouseholdTotalByCategoryViewStddevFields>;
  stddevPop?: Maybe<HouseholdTotalByCategoryViewStddevPopFields>;
  stddevSamp?: Maybe<HouseholdTotalByCategoryViewStddevSampFields>;
  sum?: Maybe<HouseholdTotalByCategoryViewSumFields>;
  varPop?: Maybe<HouseholdTotalByCategoryViewVarPopFields>;
  varSamp?: Maybe<HouseholdTotalByCategoryViewVarSampFields>;
  variance?: Maybe<HouseholdTotalByCategoryViewVarianceFields>;
};

/** aggregate fields of "household.total_by_category_view" */
export type HouseholdTotalByCategoryViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type HouseholdTotalByCategoryViewAvgFields = {
  __typename?: "HouseholdTotalByCategoryViewAvgFields";
  total?: Maybe<Scalars["Float"]>;
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
  groupId?: InputMaybe<StringComparisonExp>;
  iocomeType?: InputMaybe<StringComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type HouseholdTotalByCategoryViewMaxFields = {
  __typename?: "HouseholdTotalByCategoryViewMaxFields";
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type HouseholdTotalByCategoryViewMinFields = {
  __typename?: "HouseholdTotalByCategoryViewMinFields";
  categoryId?: Maybe<Scalars["String"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Ordering options when selecting data from "household.total_by_category_view". */
export type HouseholdTotalByCategoryViewOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
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

/** aggregate stddev on columns */
export type HouseholdTotalByCategoryViewStddevFields = {
  __typename?: "HouseholdTotalByCategoryViewStddevFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HouseholdTotalByCategoryViewStddevPopFields = {
  __typename?: "HouseholdTotalByCategoryViewStddevPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HouseholdTotalByCategoryViewStddevSampFields = {
  __typename?: "HouseholdTotalByCategoryViewStddevSampFields";
  total?: Maybe<Scalars["Float"]>;
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

/** aggregate sum on columns */
export type HouseholdTotalByCategoryViewSumFields = {
  __typename?: "HouseholdTotalByCategoryViewSumFields";
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type HouseholdTotalByCategoryViewVarPopFields = {
  __typename?: "HouseholdTotalByCategoryViewVarPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HouseholdTotalByCategoryViewVarSampFields = {
  __typename?: "HouseholdTotalByCategoryViewVarSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HouseholdTotalByCategoryViewVarianceFields = {
  __typename?: "HouseholdTotalByCategoryViewVarianceFields";
  total?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "household.total_by_genre_view" */
export type HouseholdTotalByGenreView = {
  __typename?: "HouseholdTotalByGenreView";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

export type HouseholdTotalByGenreViewAggregate = {
  __typename?: "HouseholdTotalByGenreViewAggregate";
  aggregate?: Maybe<HouseholdTotalByGenreViewAggregateFields>;
  nodes: Array<HouseholdTotalByGenreView>;
};

/** aggregate fields of "household.total_by_genre_view" */
export type HouseholdTotalByGenreViewAggregateFields = {
  __typename?: "HouseholdTotalByGenreViewAggregateFields";
  avg?: Maybe<HouseholdTotalByGenreViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HouseholdTotalByGenreViewMaxFields>;
  min?: Maybe<HouseholdTotalByGenreViewMinFields>;
  stddev?: Maybe<HouseholdTotalByGenreViewStddevFields>;
  stddevPop?: Maybe<HouseholdTotalByGenreViewStddevPopFields>;
  stddevSamp?: Maybe<HouseholdTotalByGenreViewStddevSampFields>;
  sum?: Maybe<HouseholdTotalByGenreViewSumFields>;
  varPop?: Maybe<HouseholdTotalByGenreViewVarPopFields>;
  varSamp?: Maybe<HouseholdTotalByGenreViewVarSampFields>;
  variance?: Maybe<HouseholdTotalByGenreViewVarianceFields>;
};

/** aggregate fields of "household.total_by_genre_view" */
export type HouseholdTotalByGenreViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type HouseholdTotalByGenreViewAvgFields = {
  __typename?: "HouseholdTotalByGenreViewAvgFields";
  total?: Maybe<Scalars["Float"]>;
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

/** aggregate max on columns */
export type HouseholdTotalByGenreViewMaxFields = {
  __typename?: "HouseholdTotalByGenreViewMaxFields";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type HouseholdTotalByGenreViewMinFields = {
  __typename?: "HouseholdTotalByGenreViewMinFields";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["String"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["String"]>;
  iocomeType?: Maybe<Scalars["String"]>;
  total?: Maybe<Scalars["numeric"]>;
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

/** aggregate stddev on columns */
export type HouseholdTotalByGenreViewStddevFields = {
  __typename?: "HouseholdTotalByGenreViewStddevFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HouseholdTotalByGenreViewStddevPopFields = {
  __typename?: "HouseholdTotalByGenreViewStddevPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HouseholdTotalByGenreViewStddevSampFields = {
  __typename?: "HouseholdTotalByGenreViewStddevSampFields";
  total?: Maybe<Scalars["Float"]>;
};

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

/** aggregate sum on columns */
export type HouseholdTotalByGenreViewSumFields = {
  __typename?: "HouseholdTotalByGenreViewSumFields";
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type HouseholdTotalByGenreViewVarPopFields = {
  __typename?: "HouseholdTotalByGenreViewVarPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HouseholdTotalByGenreViewVarSampFields = {
  __typename?: "HouseholdTotalByGenreViewVarSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HouseholdTotalByGenreViewVarianceFields = {
  __typename?: "HouseholdTotalByGenreViewVarianceFields";
  total?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "household.transfer_category" */
export type HouseholdTransferCategory = {
  __typename?: "HouseholdTransferCategory";
  /** An object relationship */
  categoryByIncomeCategoryId: HouseholdCategory;
  /** An object relationship */
  categoryByOutcomeCategoryId: HouseholdCategory;
  /** An object relationship */
  group: Group;
  groupId: Scalars["String"];
  incomeCategoryId: Scalars["String"];
  outcomeCategoryId: Scalars["String"];
};

/** aggregated selection of "household.transfer_category" */
export type HouseholdTransferCategoryAggregate = {
  __typename?: "HouseholdTransferCategoryAggregate";
  aggregate?: Maybe<HouseholdTransferCategoryAggregateFields>;
  nodes: Array<HouseholdTransferCategory>;
};

export type HouseholdTransferCategoryAggregateBoolExp = {
  count?: InputMaybe<HouseholdTransferCategoryAggregateBoolExpCount>;
};

/** aggregate fields of "household.transfer_category" */
export type HouseholdTransferCategoryAggregateFields = {
  __typename?: "HouseholdTransferCategoryAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<HouseholdTransferCategoryMaxFields>;
  min?: Maybe<HouseholdTransferCategoryMinFields>;
};

/** aggregate fields of "household.transfer_category" */
export type HouseholdTransferCategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
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

/** aggregate max on columns */
export type HouseholdTransferCategoryMaxFields = {
  __typename?: "HouseholdTransferCategoryMaxFields";
  groupId?: Maybe<Scalars["String"]>;
  incomeCategoryId?: Maybe<Scalars["String"]>;
  outcomeCategoryId?: Maybe<Scalars["String"]>;
};

/** order by max() on columns of table "household.transfer_category" */
export type HouseholdTransferCategoryMaxOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HouseholdTransferCategoryMinFields = {
  __typename?: "HouseholdTransferCategoryMinFields";
  groupId?: Maybe<Scalars["String"]>;
  incomeCategoryId?: Maybe<Scalars["String"]>;
  outcomeCategoryId?: Maybe<Scalars["String"]>;
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

/** columns and relationships of "user" */
export type User = {
  __typename?: "User";
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: AffiliationAggregate;
  /** An array relationship */
  creditCardDetails: Array<HouseholdCreditCardDetail>;
  /** An aggregate relationship */
  creditCardDetailsAggregate: HouseholdCreditCardDetailAggregate;
  /** An array relationship */
  dailyDetails: Array<HouseholdDailyDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: HouseholdDailyDetailAggregate;
  displayOrder?: Maybe<Scalars["Int"]>;
  email: Scalars["String"];
  id: Scalars["String"];
  name?: Maybe<Scalars["String"]>;
};

/** columns and relationships of "user" */
export type UserAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** columns and relationships of "user" */
export type UserAffiliationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** columns and relationships of "user" */
export type UserCreditCardDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "user" */
export type UserCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

/** columns and relationships of "user" */
export type UserDailyDetailsArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** columns and relationships of "user" */
export type UserDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: "UserAggregate";
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: "UserAggregateFields";
  avg?: Maybe<UserAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
  stddev?: Maybe<UserStddevFields>;
  stddevPop?: Maybe<UserStddevPopFields>;
  stddevSamp?: Maybe<UserStddevSampFields>;
  sum?: Maybe<UserSumFields>;
  varPop?: Maybe<UserVarPopFields>;
  varSamp?: Maybe<UserVarSampFields>;
  variance?: Maybe<UserVarianceFields>;
};

/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type UserAvgFields = {
  __typename?: "UserAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
  creditCardDetailsAggregate?: InputMaybe<HouseholdCreditCardDetailAggregateBoolExp>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailBoolExp>;
  dailyDetailsAggregate?: InputMaybe<HouseholdDailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
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
  creditCardDetails?: InputMaybe<HouseholdCreditCardDetailArrRelInsertInput>;
  dailyDetails?: InputMaybe<HouseholdDailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  id?: InputMaybe<Scalars["String"]>;
  name?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: "UserMaxFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: "UserMinFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: "UserMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
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

/** aggregate stddev on columns */
export type UserStddevFields = {
  __typename?: "UserStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type UserStddevPopFields = {
  __typename?: "UserStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type UserStddevSampFields = {
  __typename?: "UserStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

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

/** aggregate sum on columns */
export type UserSumFields = {
  __typename?: "UserSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** placeholder for update columns of table "user" (current role has no relevant permissions) */
export enum UserUpdateColumn {
  /** placeholder (do not use) */
  Placeholder = "_PLACEHOLDER",
}

/** aggregate varPop on columns */
export type UserVarPopFields = {
  __typename?: "UserVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type UserVarSampFields = {
  __typename?: "UserVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type UserVarianceFields = {
  __typename?: "UserVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
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

export type HouseholdTransferCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HouseholdTransferCategoryBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "household.daily_detail" */
  deleteHouseholdDailyDetail?: Maybe<HouseholdDailyDetailMutationResponse>;
  /** delete single row from the table: "household.daily_detail" */
  deleteHouseholdDailyDetailByPk?: Maybe<HouseholdDailyDetail>;
  /** delete data from the table: "household.summary_category" */
  deleteHouseholdSummaryCategory?: Maybe<HouseholdSummaryCategoryMutationResponse>;
  /** delete single row from the table: "household.summary_category" */
  deleteHouseholdSummaryCategoryByPk?: Maybe<HouseholdSummaryCategory>;
  /** insert data into the table: "affiliation" */
  insertAffiliation?: Maybe<AffiliationMutationResponse>;
  /** insert a single row into the table: "affiliation" */
  insertAffiliationOne?: Maybe<Affiliation>;
  /** insert data into the table: "household.account" */
  insertHouseholdAccount?: Maybe<HouseholdAccountMutationResponse>;
  /** insert a single row into the table: "household.account" */
  insertHouseholdAccountOne?: Maybe<HouseholdAccount>;
  /** insert data into the table: "household.category" */
  insertHouseholdCategory?: Maybe<HouseholdCategoryMutationResponse>;
  /** insert a single row into the table: "household.category" */
  insertHouseholdCategoryOne?: Maybe<HouseholdCategory>;
  /** insert data into the table: "household.credit_card_detail" */
  insertHouseholdCreditCardDetail?: Maybe<HouseholdCreditCardDetailMutationResponse>;
  /** insert a single row into the table: "household.credit_card_detail" */
  insertHouseholdCreditCardDetailOne?: Maybe<HouseholdCreditCardDetail>;
  /** insert data into the table: "household.credit_card_summary" */
  insertHouseholdCreditCardSummary?: Maybe<HouseholdCreditCardSummaryMutationResponse>;
  /** insert a single row into the table: "household.credit_card_summary" */
  insertHouseholdCreditCardSummaryOne?: Maybe<HouseholdCreditCardSummary>;
  /** insert data into the table: "household.daily_detail" */
  insertHouseholdDailyDetail?: Maybe<HouseholdDailyDetailMutationResponse>;
  /** insert a single row into the table: "household.daily_detail" */
  insertHouseholdDailyDetailOne?: Maybe<HouseholdDailyDetail>;
  /** insert data into the table: "household.genre" */
  insertHouseholdGenre?: Maybe<HouseholdGenreMutationResponse>;
  /** insert a single row into the table: "household.genre" */
  insertHouseholdGenreOne?: Maybe<HouseholdGenre>;
  /** insert data into the table: "household.import_file_history" */
  insertHouseholdImportFileHistory?: Maybe<HouseholdImportFileHistoryMutationResponse>;
  /** insert a single row into the table: "household.import_file_history" */
  insertHouseholdImportFileHistoryOne?: Maybe<HouseholdImportFileHistory>;
  /** insert data into the table: "household.summary_category" */
  insertHouseholdSummaryCategory?: Maybe<HouseholdSummaryCategoryMutationResponse>;
  /** insert a single row into the table: "household.summary_category" */
  insertHouseholdSummaryCategoryOne?: Maybe<HouseholdSummaryCategory>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** update data of the table: "household.category" */
  updateHouseholdCategory?: Maybe<HouseholdCategoryMutationResponse>;
  /** update single row of the table: "household.category" */
  updateHouseholdCategoryByPk?: Maybe<HouseholdCategory>;
  /** update multiples rows of table: "household.category" */
  updateHouseholdCategoryMany?: Maybe<
    Array<Maybe<HouseholdCategoryMutationResponse>>
  >;
  /** update data of the table: "household.credit_card_detail" */
  updateHouseholdCreditCardDetail?: Maybe<HouseholdCreditCardDetailMutationResponse>;
  /** update single row of the table: "household.credit_card_detail" */
  updateHouseholdCreditCardDetailByPk?: Maybe<HouseholdCreditCardDetail>;
  /** update multiples rows of table: "household.credit_card_detail" */
  updateHouseholdCreditCardDetailMany?: Maybe<
    Array<Maybe<HouseholdCreditCardDetailMutationResponse>>
  >;
  /** update data of the table: "household.credit_card_summary" */
  updateHouseholdCreditCardSummary?: Maybe<HouseholdCreditCardSummaryMutationResponse>;
  /** update single row of the table: "household.credit_card_summary" */
  updateHouseholdCreditCardSummaryByPk?: Maybe<HouseholdCreditCardSummary>;
  /** update multiples rows of table: "household.credit_card_summary" */
  updateHouseholdCreditCardSummaryMany?: Maybe<
    Array<Maybe<HouseholdCreditCardSummaryMutationResponse>>
  >;
  /** update data of the table: "household.daily_detail" */
  updateHouseholdDailyDetail?: Maybe<HouseholdDailyDetailMutationResponse>;
  /** update single row of the table: "household.daily_detail" */
  updateHouseholdDailyDetailByPk?: Maybe<HouseholdDailyDetail>;
  /** update multiples rows of table: "household.daily_detail" */
  updateHouseholdDailyDetailMany?: Maybe<
    Array<Maybe<HouseholdDailyDetailMutationResponse>>
  >;
  /** update data of the table: "household.genre" */
  updateHouseholdGenre?: Maybe<HouseholdGenreMutationResponse>;
  /** update single row of the table: "household.genre" */
  updateHouseholdGenreByPk?: Maybe<HouseholdGenre>;
  /** update multiples rows of table: "household.genre" */
  updateHouseholdGenreMany?: Maybe<
    Array<Maybe<HouseholdGenreMutationResponse>>
  >;
};

/** mutation root */
export type Mutation_RootDeleteHouseholdDailyDetailArgs = {
  where: HouseholdDailyDetailBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHouseholdDailyDetailByPkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootDeleteHouseholdSummaryCategoryArgs = {
  where: HouseholdSummaryCategoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHouseholdSummaryCategoryByPkArgs = {
  id: Scalars["String"];
};

/** mutation root */
export type Mutation_RootInsertAffiliationArgs = {
  objects: Array<AffiliationInsertInput>;
  onConflict?: InputMaybe<AffiliationOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAffiliationOneArgs = {
  object: AffiliationInsertInput;
  onConflict?: InputMaybe<AffiliationOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdAccountArgs = {
  objects: Array<HouseholdAccountInsertInput>;
  onConflict?: InputMaybe<HouseholdAccountOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdAccountOneArgs = {
  object: HouseholdAccountInsertInput;
  onConflict?: InputMaybe<HouseholdAccountOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdCategoryArgs = {
  objects: Array<HouseholdCategoryInsertInput>;
  onConflict?: InputMaybe<HouseholdCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdCategoryOneArgs = {
  object: HouseholdCategoryInsertInput;
  onConflict?: InputMaybe<HouseholdCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdCreditCardDetailArgs = {
  objects: Array<HouseholdCreditCardDetailInsertInput>;
  onConflict?: InputMaybe<HouseholdCreditCardDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdCreditCardDetailOneArgs = {
  object: HouseholdCreditCardDetailInsertInput;
  onConflict?: InputMaybe<HouseholdCreditCardDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdCreditCardSummaryArgs = {
  objects: Array<HouseholdCreditCardSummaryInsertInput>;
  onConflict?: InputMaybe<HouseholdCreditCardSummaryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdCreditCardSummaryOneArgs = {
  object: HouseholdCreditCardSummaryInsertInput;
  onConflict?: InputMaybe<HouseholdCreditCardSummaryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdDailyDetailArgs = {
  objects: Array<HouseholdDailyDetailInsertInput>;
  onConflict?: InputMaybe<HouseholdDailyDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdDailyDetailOneArgs = {
  object: HouseholdDailyDetailInsertInput;
  onConflict?: InputMaybe<HouseholdDailyDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdGenreArgs = {
  objects: Array<HouseholdGenreInsertInput>;
  onConflict?: InputMaybe<HouseholdGenreOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdGenreOneArgs = {
  object: HouseholdGenreInsertInput;
  onConflict?: InputMaybe<HouseholdGenreOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdImportFileHistoryArgs = {
  objects: Array<HouseholdImportFileHistoryInsertInput>;
  onConflict?: InputMaybe<HouseholdImportFileHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdImportFileHistoryOneArgs = {
  object: HouseholdImportFileHistoryInsertInput;
  onConflict?: InputMaybe<HouseholdImportFileHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdSummaryCategoryArgs = {
  objects: Array<HouseholdSummaryCategoryInsertInput>;
  onConflict?: InputMaybe<HouseholdSummaryCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHouseholdSummaryCategoryOneArgs = {
  object: HouseholdSummaryCategoryInsertInput;
  onConflict?: InputMaybe<HouseholdSummaryCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  onConflict?: InputMaybe<UserOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertUserOneArgs = {
  object: UserInsertInput;
  onConflict?: InputMaybe<UserOnConflict>;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCategoryArgs = {
  _inc?: InputMaybe<HouseholdCategoryIncInput>;
  _set?: InputMaybe<HouseholdCategorySetInput>;
  where: HouseholdCategoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCategoryByPkArgs = {
  _inc?: InputMaybe<HouseholdCategoryIncInput>;
  _set?: InputMaybe<HouseholdCategorySetInput>;
  pkColumns: HouseholdCategoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCategoryManyArgs = {
  updates: Array<HouseholdCategoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCreditCardDetailArgs = {
  _inc?: InputMaybe<HouseholdCreditCardDetailIncInput>;
  _set?: InputMaybe<HouseholdCreditCardDetailSetInput>;
  where: HouseholdCreditCardDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCreditCardDetailByPkArgs = {
  _inc?: InputMaybe<HouseholdCreditCardDetailIncInput>;
  _set?: InputMaybe<HouseholdCreditCardDetailSetInput>;
  pkColumns: HouseholdCreditCardDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCreditCardDetailManyArgs = {
  updates: Array<HouseholdCreditCardDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCreditCardSummaryArgs = {
  _inc?: InputMaybe<HouseholdCreditCardSummaryIncInput>;
  _set?: InputMaybe<HouseholdCreditCardSummarySetInput>;
  where: HouseholdCreditCardSummaryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCreditCardSummaryByPkArgs = {
  _inc?: InputMaybe<HouseholdCreditCardSummaryIncInput>;
  _set?: InputMaybe<HouseholdCreditCardSummarySetInput>;
  pkColumns: HouseholdCreditCardSummaryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdCreditCardSummaryManyArgs = {
  updates: Array<HouseholdCreditCardSummaryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdDailyDetailArgs = {
  _inc?: InputMaybe<HouseholdDailyDetailIncInput>;
  _set?: InputMaybe<HouseholdDailyDetailSetInput>;
  where: HouseholdDailyDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdDailyDetailByPkArgs = {
  _inc?: InputMaybe<HouseholdDailyDetailIncInput>;
  _set?: InputMaybe<HouseholdDailyDetailSetInput>;
  pkColumns: HouseholdDailyDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdDailyDetailManyArgs = {
  updates: Array<HouseholdDailyDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdGenreArgs = {
  _inc?: InputMaybe<HouseholdGenreIncInput>;
  _set?: InputMaybe<HouseholdGenreSetInput>;
  where: HouseholdGenreBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdGenreByPkArgs = {
  _inc?: InputMaybe<HouseholdGenreIncInput>;
  _set?: InputMaybe<HouseholdGenreSetInput>;
  pkColumns: HouseholdGenrePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHouseholdGenreManyArgs = {
  updates: Array<HouseholdGenreUpdates>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "affiliation" */
  affiliation: Array<Affiliation>;
  /** fetch aggregated fields from the table: "affiliation" */
  affiliationAggregate: AffiliationAggregate;
  /** fetch data from the table: "affiliation" using primary key columns */
  affiliationByPk?: Maybe<Affiliation>;
  /** fetch data from the table: "application" */
  application: Array<Application>;
  /** fetch aggregated fields from the table: "application" */
  applicationAggregate: ApplicationAggregate;
  /** fetch data from the table: "application" using primary key columns */
  applicationByPk?: Maybe<Application>;
  /** execute function "category_total_by_month" which returns "household.total_by_category_view" */
  categoryTotalByMonth: Array<HouseholdTotalByCategoryView>;
  /** execute function "category_total_by_month" and query aggregates on result of table type "household.total_by_category_view" */
  categoryTotalByMonthAggregate: HouseholdTotalByCategoryViewAggregate;
  /** execute function "daily_detail_by_date" which returns "household.daily_detail" */
  dailyDetailByDate: Array<HouseholdDailyDetail>;
  /** execute function "daily_detail_by_date" and query aggregates on result of table type "household.daily_detail" */
  dailyDetailByDateAggregate: HouseholdDailyDetailAggregate;
  /** execute function "genre_total_by_month" which returns "household.total_by_genre_view" */
  genreTotalByMonth: Array<HouseholdTotalByGenreView>;
  /** execute function "genre_total_by_month" and query aggregates on result of table type "household.total_by_genre_view" */
  genreTotalByMonthAggregate: HouseholdTotalByGenreViewAggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  groupAggregate: GroupAggregate;
  /** fetch data from the table: "group_application" */
  groupApplication: Array<GroupApplication>;
  /** fetch aggregated fields from the table: "group_application" */
  groupApplicationAggregate: GroupApplicationAggregate;
  /** fetch data from the table: "group_application" using primary key columns */
  groupApplicationByPk?: Maybe<GroupApplication>;
  /** fetch data from the table: "group" using primary key columns */
  groupByPk?: Maybe<Group>;
  /** fetch data from the table: "household.account" */
  householdAccount: Array<HouseholdAccount>;
  /** fetch aggregated fields from the table: "household.account" */
  householdAccountAggregate: HouseholdAccountAggregate;
  /** fetch data from the table: "household.account" using primary key columns */
  householdAccountByPk?: Maybe<HouseholdAccount>;
  /** fetch data from the table: "household.all_detail_view" */
  householdAllDetailView: Array<HouseholdAllDetailView>;
  /** fetch aggregated fields from the table: "household.all_detail_view" */
  householdAllDetailViewAggregate: HouseholdAllDetailViewAggregate;
  /** fetch data from the table: "household.category" */
  householdCategory: Array<HouseholdCategory>;
  /** fetch data from the table: "household.category" using primary key columns */
  householdCategoryByPk?: Maybe<HouseholdCategory>;
  /** fetch data from the table: "household.credit_card_detail" */
  householdCreditCardDetail: Array<HouseholdCreditCardDetail>;
  /** fetch aggregated fields from the table: "household.credit_card_detail" */
  householdCreditCardDetailAggregate: HouseholdCreditCardDetailAggregate;
  /** fetch data from the table: "household.credit_card_detail" using primary key columns */
  householdCreditCardDetailByPk?: Maybe<HouseholdCreditCardDetail>;
  /** fetch data from the table: "household.credit_card_summary" */
  householdCreditCardSummary: Array<HouseholdCreditCardSummary>;
  /** fetch aggregated fields from the table: "household.credit_card_summary" */
  householdCreditCardSummaryAggregate: HouseholdCreditCardSummaryAggregate;
  /** fetch data from the table: "household.credit_card_summary" using primary key columns */
  householdCreditCardSummaryByPk?: Maybe<HouseholdCreditCardSummary>;
  /** fetch data from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountView: Array<HouseholdCreditCardSummaryTotalByAccountView>;
  /** fetch aggregated fields from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountViewAggregate: HouseholdCreditCardSummaryTotalByAccountViewAggregate;
  /** fetch data from the table: "household.daily_detail" */
  householdDailyDetail: Array<HouseholdDailyDetail>;
  /** fetch aggregated fields from the table: "household.daily_detail" */
  householdDailyDetailAggregate: HouseholdDailyDetailAggregate;
  /** fetch data from the table: "household.daily_detail" using primary key columns */
  householdDailyDetailByPk?: Maybe<HouseholdDailyDetail>;
  /** fetch data from the table: "household.daily_total_view" */
  householdDailyTotalView: Array<HouseholdDailyTotalView>;
  /** fetch aggregated fields from the table: "household.daily_total_view" */
  householdDailyTotalViewAggregate: HouseholdDailyTotalViewAggregate;
  /** fetch data from the table: "household.deposit_category" */
  householdDepositCategory: Array<HouseholdDepositCategory>;
  /** fetch aggregated fields from the table: "household.deposit_category" */
  householdDepositCategoryAggregate: HouseholdDepositCategoryAggregate;
  /** fetch data from the table: "household.deposit_category" using primary key columns */
  householdDepositCategoryByPk?: Maybe<HouseholdDepositCategory>;
  /** fetch data from the table: "household.genre" */
  householdGenre: Array<HouseholdGenre>;
  /** fetch aggregated fields from the table: "household.genre" */
  householdGenreAggregate: HouseholdGenreAggregate;
  /** fetch data from the table: "household.genre" using primary key columns */
  householdGenreByPk?: Maybe<HouseholdGenre>;
  /** fetch data from the table: "household.import_file_history" */
  householdImportFileHistory: Array<HouseholdImportFileHistory>;
  /** fetch aggregated fields from the table: "household.import_file_history" */
  householdImportFileHistoryAggregate: HouseholdImportFileHistoryAggregate;
  /** fetch data from the table: "household.import_file_history" using primary key columns */
  householdImportFileHistoryByPk?: Maybe<HouseholdImportFileHistory>;
  /** fetch data from the table: "household.summary_category" */
  householdSummaryCategory: Array<HouseholdSummaryCategory>;
  /** fetch aggregated fields from the table: "household.summary_category" */
  householdSummaryCategoryAggregate: HouseholdSummaryCategoryAggregate;
  /** fetch data from the table: "household.summary_category" using primary key columns */
  householdSummaryCategoryByPk?: Maybe<HouseholdSummaryCategory>;
  /** fetch data from the table: "household.total_by_category_view" */
  householdTotalByCategoryView: Array<HouseholdTotalByCategoryView>;
  /** fetch aggregated fields from the table: "household.total_by_category_view" */
  householdTotalByCategoryViewAggregate: HouseholdTotalByCategoryViewAggregate;
  /** fetch data from the table: "household.total_by_genre_view" */
  householdTotalByGenreView: Array<HouseholdTotalByGenreView>;
  /** fetch aggregated fields from the table: "household.total_by_genre_view" */
  householdTotalByGenreViewAggregate: HouseholdTotalByGenreViewAggregate;
  /** fetch data from the table: "household.transfer_category" */
  householdTransferCategory: Array<HouseholdTransferCategory>;
  /** fetch aggregated fields from the table: "household.transfer_category" */
  householdTransferCategoryAggregate: HouseholdTransferCategoryAggregate;
  /** fetch data from the table: "household.transfer_category" using primary key columns */
  householdTransferCategoryByPk?: Maybe<HouseholdTransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

export type Query_RootAffiliationArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Query_RootAffiliationAggregateArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Query_RootAffiliationByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootApplicationArgs = {
  distinctOn?: InputMaybe<Array<ApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Query_RootApplicationAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Query_RootApplicationByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootCategoryTotalByMonthArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Query_RootCategoryTotalByMonthAggregateArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Query_RootDailyDetailByDateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Query_RootDailyDetailByDateAggregateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Query_RootGenreTotalByMonthArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Query_RootGenreTotalByMonthAggregateArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Query_RootGroupArgs = {
  distinctOn?: InputMaybe<Array<GroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Query_RootGroupAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Query_RootGroupApplicationArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Query_RootGroupApplicationAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Query_RootGroupApplicationByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootGroupByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdAccountArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAccountOrderBy>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

export type Query_RootHouseholdAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAccountOrderBy>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

export type Query_RootHouseholdAccountByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdAllDetailViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

export type Query_RootHouseholdAllDetailViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

export type Query_RootHouseholdCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCategoryOrderBy>>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

export type Query_RootHouseholdCategoryByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdCreditCardDetailArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

export type Query_RootHouseholdCreditCardDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

export type Query_RootHouseholdCreditCardDetailByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdCreditCardSummaryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

export type Query_RootHouseholdCreditCardSummaryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

export type Query_RootHouseholdCreditCardSummaryByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdCreditCardSummaryTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<
    Array<HouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<
    Array<HouseholdCreditCardSummaryTotalByAccountViewOrderBy>
  >;
  where?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Query_RootHouseholdCreditCardSummaryTotalByAccountViewAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewOrderBy>
    >;
    where?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  };

export type Query_RootHouseholdDailyDetailArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Query_RootHouseholdDailyDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Query_RootHouseholdDailyDetailByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdDailyTotalViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
};

export type Query_RootHouseholdDailyTotalViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
};

export type Query_RootHouseholdDepositCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

export type Query_RootHouseholdDepositCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

export type Query_RootHouseholdDepositCategoryByPkArgs = {
  categoryId: Scalars["String"];
};

export type Query_RootHouseholdGenreArgs = {
  distinctOn?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdGenreOrderBy>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

export type Query_RootHouseholdGenreAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdGenreOrderBy>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

export type Query_RootHouseholdGenreByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdImportFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

export type Query_RootHouseholdImportFileHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

export type Query_RootHouseholdImportFileHistoryByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdSummaryCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

export type Query_RootHouseholdSummaryCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

export type Query_RootHouseholdSummaryCategoryByPkArgs = {
  id: Scalars["String"];
};

export type Query_RootHouseholdTotalByCategoryViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Query_RootHouseholdTotalByCategoryViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Query_RootHouseholdTotalByGenreViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Query_RootHouseholdTotalByGenreViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Query_RootHouseholdTransferCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

export type Query_RootHouseholdTransferCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

export type Query_RootHouseholdTransferCategoryByPkArgs = {
  groupId: Scalars["String"];
};

export type Query_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Query_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Query_RootUserByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "affiliation" */
  affiliation: Array<Affiliation>;
  /** fetch aggregated fields from the table: "affiliation" */
  affiliationAggregate: AffiliationAggregate;
  /** fetch data from the table: "affiliation" using primary key columns */
  affiliationByPk?: Maybe<Affiliation>;
  /** fetch data from the table in a streaming manner: "affiliation" */
  affiliationStream: Array<Affiliation>;
  /** fetch data from the table: "application" */
  application: Array<Application>;
  /** fetch aggregated fields from the table: "application" */
  applicationAggregate: ApplicationAggregate;
  /** fetch data from the table: "application" using primary key columns */
  applicationByPk?: Maybe<Application>;
  /** fetch data from the table in a streaming manner: "application" */
  applicationStream: Array<Application>;
  /** execute function "category_total_by_month" which returns "household.total_by_category_view" */
  categoryTotalByMonth: Array<HouseholdTotalByCategoryView>;
  /** execute function "category_total_by_month" and query aggregates on result of table type "household.total_by_category_view" */
  categoryTotalByMonthAggregate: HouseholdTotalByCategoryViewAggregate;
  /** execute function "daily_detail_by_date" which returns "household.daily_detail" */
  dailyDetailByDate: Array<HouseholdDailyDetail>;
  /** execute function "daily_detail_by_date" and query aggregates on result of table type "household.daily_detail" */
  dailyDetailByDateAggregate: HouseholdDailyDetailAggregate;
  /** execute function "genre_total_by_month" which returns "household.total_by_genre_view" */
  genreTotalByMonth: Array<HouseholdTotalByGenreView>;
  /** execute function "genre_total_by_month" and query aggregates on result of table type "household.total_by_genre_view" */
  genreTotalByMonthAggregate: HouseholdTotalByGenreViewAggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  groupAggregate: GroupAggregate;
  /** fetch data from the table: "group_application" */
  groupApplication: Array<GroupApplication>;
  /** fetch aggregated fields from the table: "group_application" */
  groupApplicationAggregate: GroupApplicationAggregate;
  /** fetch data from the table: "group_application" using primary key columns */
  groupApplicationByPk?: Maybe<GroupApplication>;
  /** fetch data from the table in a streaming manner: "group_application" */
  groupApplicationStream: Array<GroupApplication>;
  /** fetch data from the table: "group" using primary key columns */
  groupByPk?: Maybe<Group>;
  /** fetch data from the table in a streaming manner: "group" */
  groupStream: Array<Group>;
  /** fetch data from the table: "household.account" */
  householdAccount: Array<HouseholdAccount>;
  /** fetch aggregated fields from the table: "household.account" */
  householdAccountAggregate: HouseholdAccountAggregate;
  /** fetch data from the table: "household.account" using primary key columns */
  householdAccountByPk?: Maybe<HouseholdAccount>;
  /** fetch data from the table in a streaming manner: "household.account" */
  householdAccountStream: Array<HouseholdAccount>;
  /** fetch data from the table: "household.all_detail_view" */
  householdAllDetailView: Array<HouseholdAllDetailView>;
  /** fetch aggregated fields from the table: "household.all_detail_view" */
  householdAllDetailViewAggregate: HouseholdAllDetailViewAggregate;
  /** fetch data from the table in a streaming manner: "household.all_detail_view" */
  householdAllDetailViewStream: Array<HouseholdAllDetailView>;
  /** fetch data from the table: "household.category" */
  householdCategory: Array<HouseholdCategory>;
  /** fetch data from the table: "household.category" using primary key columns */
  householdCategoryByPk?: Maybe<HouseholdCategory>;
  /** fetch data from the table in a streaming manner: "household.category" */
  householdCategoryStream: Array<HouseholdCategory>;
  /** fetch data from the table: "household.credit_card_detail" */
  householdCreditCardDetail: Array<HouseholdCreditCardDetail>;
  /** fetch aggregated fields from the table: "household.credit_card_detail" */
  householdCreditCardDetailAggregate: HouseholdCreditCardDetailAggregate;
  /** fetch data from the table: "household.credit_card_detail" using primary key columns */
  householdCreditCardDetailByPk?: Maybe<HouseholdCreditCardDetail>;
  /** fetch data from the table in a streaming manner: "household.credit_card_detail" */
  householdCreditCardDetailStream: Array<HouseholdCreditCardDetail>;
  /** fetch data from the table: "household.credit_card_summary" */
  householdCreditCardSummary: Array<HouseholdCreditCardSummary>;
  /** fetch aggregated fields from the table: "household.credit_card_summary" */
  householdCreditCardSummaryAggregate: HouseholdCreditCardSummaryAggregate;
  /** fetch data from the table: "household.credit_card_summary" using primary key columns */
  householdCreditCardSummaryByPk?: Maybe<HouseholdCreditCardSummary>;
  /** fetch data from the table in a streaming manner: "household.credit_card_summary" */
  householdCreditCardSummaryStream: Array<HouseholdCreditCardSummary>;
  /** fetch data from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountView: Array<HouseholdCreditCardSummaryTotalByAccountView>;
  /** fetch aggregated fields from the table: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountViewAggregate: HouseholdCreditCardSummaryTotalByAccountViewAggregate;
  /** fetch data from the table in a streaming manner: "household.credit_card_summary_total_by_account_view" */
  householdCreditCardSummaryTotalByAccountViewStream: Array<HouseholdCreditCardSummaryTotalByAccountView>;
  /** fetch data from the table: "household.daily_detail" */
  householdDailyDetail: Array<HouseholdDailyDetail>;
  /** fetch aggregated fields from the table: "household.daily_detail" */
  householdDailyDetailAggregate: HouseholdDailyDetailAggregate;
  /** fetch data from the table: "household.daily_detail" using primary key columns */
  householdDailyDetailByPk?: Maybe<HouseholdDailyDetail>;
  /** fetch data from the table in a streaming manner: "household.daily_detail" */
  householdDailyDetailStream: Array<HouseholdDailyDetail>;
  /** fetch data from the table: "household.daily_total_view" */
  householdDailyTotalView: Array<HouseholdDailyTotalView>;
  /** fetch aggregated fields from the table: "household.daily_total_view" */
  householdDailyTotalViewAggregate: HouseholdDailyTotalViewAggregate;
  /** fetch data from the table in a streaming manner: "household.daily_total_view" */
  householdDailyTotalViewStream: Array<HouseholdDailyTotalView>;
  /** fetch data from the table: "household.deposit_category" */
  householdDepositCategory: Array<HouseholdDepositCategory>;
  /** fetch aggregated fields from the table: "household.deposit_category" */
  householdDepositCategoryAggregate: HouseholdDepositCategoryAggregate;
  /** fetch data from the table: "household.deposit_category" using primary key columns */
  householdDepositCategoryByPk?: Maybe<HouseholdDepositCategory>;
  /** fetch data from the table in a streaming manner: "household.deposit_category" */
  householdDepositCategoryStream: Array<HouseholdDepositCategory>;
  /** fetch data from the table: "household.genre" */
  householdGenre: Array<HouseholdGenre>;
  /** fetch aggregated fields from the table: "household.genre" */
  householdGenreAggregate: HouseholdGenreAggregate;
  /** fetch data from the table: "household.genre" using primary key columns */
  householdGenreByPk?: Maybe<HouseholdGenre>;
  /** fetch data from the table in a streaming manner: "household.genre" */
  householdGenreStream: Array<HouseholdGenre>;
  /** fetch data from the table: "household.import_file_history" */
  householdImportFileHistory: Array<HouseholdImportFileHistory>;
  /** fetch aggregated fields from the table: "household.import_file_history" */
  householdImportFileHistoryAggregate: HouseholdImportFileHistoryAggregate;
  /** fetch data from the table: "household.import_file_history" using primary key columns */
  householdImportFileHistoryByPk?: Maybe<HouseholdImportFileHistory>;
  /** fetch data from the table in a streaming manner: "household.import_file_history" */
  householdImportFileHistoryStream: Array<HouseholdImportFileHistory>;
  /** fetch data from the table: "household.summary_category" */
  householdSummaryCategory: Array<HouseholdSummaryCategory>;
  /** fetch aggregated fields from the table: "household.summary_category" */
  householdSummaryCategoryAggregate: HouseholdSummaryCategoryAggregate;
  /** fetch data from the table: "household.summary_category" using primary key columns */
  householdSummaryCategoryByPk?: Maybe<HouseholdSummaryCategory>;
  /** fetch data from the table in a streaming manner: "household.summary_category" */
  householdSummaryCategoryStream: Array<HouseholdSummaryCategory>;
  /** fetch data from the table: "household.total_by_category_view" */
  householdTotalByCategoryView: Array<HouseholdTotalByCategoryView>;
  /** fetch aggregated fields from the table: "household.total_by_category_view" */
  householdTotalByCategoryViewAggregate: HouseholdTotalByCategoryViewAggregate;
  /** fetch data from the table in a streaming manner: "household.total_by_category_view" */
  householdTotalByCategoryViewStream: Array<HouseholdTotalByCategoryView>;
  /** fetch data from the table: "household.total_by_genre_view" */
  householdTotalByGenreView: Array<HouseholdTotalByGenreView>;
  /** fetch aggregated fields from the table: "household.total_by_genre_view" */
  householdTotalByGenreViewAggregate: HouseholdTotalByGenreViewAggregate;
  /** fetch data from the table in a streaming manner: "household.total_by_genre_view" */
  householdTotalByGenreViewStream: Array<HouseholdTotalByGenreView>;
  /** fetch data from the table: "household.transfer_category" */
  householdTransferCategory: Array<HouseholdTransferCategory>;
  /** fetch aggregated fields from the table: "household.transfer_category" */
  householdTransferCategoryAggregate: HouseholdTransferCategoryAggregate;
  /** fetch data from the table: "household.transfer_category" using primary key columns */
  householdTransferCategoryByPk?: Maybe<HouseholdTransferCategory>;
  /** fetch data from the table in a streaming manner: "household.transfer_category" */
  householdTransferCategoryStream: Array<HouseholdTransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
};

export type Subscription_RootAffiliationArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Subscription_RootAffiliationAggregateArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Subscription_RootAffiliationByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootAffiliationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<AffiliationStreamCursorInput>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

export type Subscription_RootApplicationArgs = {
  distinctOn?: InputMaybe<Array<ApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Subscription_RootApplicationAggregateArgs = {
  distinctOn?: InputMaybe<Array<ApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ApplicationOrderBy>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Subscription_RootApplicationByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootApplicationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<ApplicationStreamCursorInput>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Subscription_RootCategoryTotalByMonthArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Subscription_RootCategoryTotalByMonthAggregateArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Subscription_RootDailyDetailByDateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailByDateAggregateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Subscription_RootGenreTotalByMonthArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Subscription_RootGenreTotalByMonthAggregateArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Subscription_RootGroupArgs = {
  distinctOn?: InputMaybe<Array<GroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Subscription_RootGroupAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupOrderBy>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Subscription_RootGroupApplicationArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Subscription_RootGroupApplicationAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Subscription_RootGroupApplicationByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootGroupApplicationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupApplicationStreamCursorInput>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Subscription_RootGroupByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootGroupStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupStreamCursorInput>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Subscription_RootHouseholdAccountArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAccountOrderBy>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

export type Subscription_RootHouseholdAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAccountOrderBy>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

export type Subscription_RootHouseholdAccountByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdAccountStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdAccountStreamCursorInput>>;
  where?: InputMaybe<HouseholdAccountBoolExp>;
};

export type Subscription_RootHouseholdAllDetailViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

export type Subscription_RootHouseholdAllDetailViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdAllDetailViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdAllDetailViewOrderBy>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

export type Subscription_RootHouseholdAllDetailViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdAllDetailViewStreamCursorInput>>;
  where?: InputMaybe<HouseholdAllDetailViewBoolExp>;
};

export type Subscription_RootHouseholdCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCategoryOrderBy>>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

export type Subscription_RootHouseholdCategoryByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdCategoryStreamCursorInput>>;
  where?: InputMaybe<HouseholdCategoryBoolExp>;
};

export type Subscription_RootHouseholdCreditCardDetailArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

export type Subscription_RootHouseholdCreditCardDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardDetailOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

export type Subscription_RootHouseholdCreditCardDetailByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdCreditCardDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdCreditCardDetailStreamCursorInput>>;
  where?: InputMaybe<HouseholdCreditCardDetailBoolExp>;
};

export type Subscription_RootHouseholdCreditCardSummaryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

export type Subscription_RootHouseholdCreditCardSummaryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdCreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdCreditCardSummaryOrderBy>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

export type Subscription_RootHouseholdCreditCardSummaryByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdCreditCardSummaryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdCreditCardSummaryStreamCursorInput>>;
  where?: InputMaybe<HouseholdCreditCardSummaryBoolExp>;
};

export type Subscription_RootHouseholdCreditCardSummaryTotalByAccountViewArgs =
  {
    distinctOn?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewOrderBy>
    >;
    where?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  };

export type Subscription_RootHouseholdCreditCardSummaryTotalByAccountViewAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<
      Array<HouseholdCreditCardSummaryTotalByAccountViewOrderBy>
    >;
    where?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  };

export type Subscription_RootHouseholdCreditCardSummaryTotalByAccountViewStreamArgs =
  {
    batchSize: Scalars["Int"];
    cursor: Array<
      InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewStreamCursorInput>
    >;
    where?: InputMaybe<HouseholdCreditCardSummaryTotalByAccountViewBoolExp>;
  };

export type Subscription_RootHouseholdDailyDetailArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Subscription_RootHouseholdDailyDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyDetailOrderBy>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Subscription_RootHouseholdDailyDetailByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdDailyDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdDailyDetailStreamCursorInput>>;
  where?: InputMaybe<HouseholdDailyDetailBoolExp>;
};

export type Subscription_RootHouseholdDailyTotalViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
};

export type Subscription_RootHouseholdDailyTotalViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDailyTotalViewOrderBy>>;
  where?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
};

export type Subscription_RootHouseholdDailyTotalViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdDailyTotalViewStreamCursorInput>>;
  where?: InputMaybe<HouseholdDailyTotalViewBoolExp>;
};

export type Subscription_RootHouseholdDepositCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

export type Subscription_RootHouseholdDepositCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdDepositCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdDepositCategoryOrderBy>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

export type Subscription_RootHouseholdDepositCategoryByPkArgs = {
  categoryId: Scalars["String"];
};

export type Subscription_RootHouseholdDepositCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdDepositCategoryStreamCursorInput>>;
  where?: InputMaybe<HouseholdDepositCategoryBoolExp>;
};

export type Subscription_RootHouseholdGenreArgs = {
  distinctOn?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdGenreOrderBy>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

export type Subscription_RootHouseholdGenreAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdGenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdGenreOrderBy>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

export type Subscription_RootHouseholdGenreByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdGenreStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdGenreStreamCursorInput>>;
  where?: InputMaybe<HouseholdGenreBoolExp>;
};

export type Subscription_RootHouseholdImportFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

export type Subscription_RootHouseholdImportFileHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdImportFileHistoryOrderBy>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

export type Subscription_RootHouseholdImportFileHistoryByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdImportFileHistoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdImportFileHistoryStreamCursorInput>>;
  where?: InputMaybe<HouseholdImportFileHistoryBoolExp>;
};

export type Subscription_RootHouseholdSummaryCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

export type Subscription_RootHouseholdSummaryCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdSummaryCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdSummaryCategoryOrderBy>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

export type Subscription_RootHouseholdSummaryCategoryByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootHouseholdSummaryCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdSummaryCategoryStreamCursorInput>>;
  where?: InputMaybe<HouseholdSummaryCategoryBoolExp>;
};

export type Subscription_RootHouseholdTotalByCategoryViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Subscription_RootHouseholdTotalByCategoryViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByCategoryViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Subscription_RootHouseholdTotalByCategoryViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdTotalByCategoryViewStreamCursorInput>>;
  where?: InputMaybe<HouseholdTotalByCategoryViewBoolExp>;
};

export type Subscription_RootHouseholdTotalByGenreViewArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Subscription_RootHouseholdTotalByGenreViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTotalByGenreViewOrderBy>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Subscription_RootHouseholdTotalByGenreViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdTotalByGenreViewStreamCursorInput>>;
  where?: InputMaybe<HouseholdTotalByGenreViewBoolExp>;
};

export type Subscription_RootHouseholdTransferCategoryArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

export type Subscription_RootHouseholdTransferCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<HouseholdTransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HouseholdTransferCategoryOrderBy>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

export type Subscription_RootHouseholdTransferCategoryByPkArgs = {
  groupId: Scalars["String"];
};

export type Subscription_RootHouseholdTransferCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HouseholdTransferCategoryStreamCursorInput>>;
  where?: InputMaybe<HouseholdTransferCategoryBoolExp>;
};

export type Subscription_RootUserArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Subscription_RootUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};

export type Subscription_RootUserByPkArgs = {
  id: Scalars["String"];
};

export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

export type GetAppsQueryVariables = Exact<{
  groupId: Scalars["String"];
}>;

export type GetAppsQuery = {
  __typename?: "query_root";
  group: Array<{
    __typename?: "GroupApplication";
    app: {
      __typename?: "Application";
      id: string;
      name: string;
      topUrl: string;
    };
  }>;
};

export const GetAppsDocument = gql`
  query getApps($groupId: String!) {
    group: groupApplication(where: { groupId: { _eq: $groupId } }) {
      app: application {
        id
        name
        topUrl
      }
    }
  }
`;

export function useGetAppsQuery(
  options: Omit<Urql.UseQueryArgs<GetAppsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetAppsQuery, GetAppsQueryVariables>({
    query: GetAppsDocument,
    ...options,
  });
}
