/*
 * Copyright (c) 2024 Ryo-Kgym.
 */

// @ts-ignore
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
  genre_type: any;
  iocome_type: any;
  numeric: any;
  timestamp: any;
  uuid: any;
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: "Account";
  accountId: Scalars["uuid"];
  accountName: Scalars["String"];
  /** An aggregate relationship */
  creditCardSummariesAggregate: CreditCardSummaryAggregate;
  /** An array relationship */
  credit_card_summaries: Array<CreditCardSummary>;
  /** An aggregate relationship */
  dailyDetailsAggregate: DailyDetailAggregate;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "account" */
export type AccountCreditCardSummariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** columns and relationships of "account" */
export type AccountCredit_Card_SummariesArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** columns and relationships of "account" */
export type AccountDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "account" */
export type AccountDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** aggregated selection of "account" */
export type AccountAggregate = {
  __typename?: "AccountAggregate";
  aggregate?: Maybe<AccountAggregateFields>;
  nodes: Array<Account>;
};

export type AccountAggregateBoolExp = {
  bool_and?: InputMaybe<AccountAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<AccountAggregateBoolExpBool_Or>;
  count?: InputMaybe<AccountAggregateBoolExpCount>;
};

/** aggregate fields of "account" */
export type AccountAggregateFields = {
  __typename?: "AccountAggregateFields";
  avg?: Maybe<AccountAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<AccountMaxFields>;
  min?: Maybe<AccountMinFields>;
  stddev?: Maybe<AccountStddevFields>;
  stddevPop?: Maybe<AccountStddevPopFields>;
  stddevSamp?: Maybe<AccountStddevSampFields>;
  sum?: Maybe<AccountSumFields>;
  varPop?: Maybe<AccountVarPopFields>;
  varSamp?: Maybe<AccountVarSampFields>;
  variance?: Maybe<AccountVarianceFields>;
};

/** aggregate fields of "account" */
export type AccountAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "account" */
export type AccountAggregateOrderBy = {
  avg?: InputMaybe<AccountAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AccountMaxOrderBy>;
  min?: InputMaybe<AccountMinOrderBy>;
  stddev?: InputMaybe<AccountStddevOrderBy>;
  stddevPop?: InputMaybe<AccountStddevPopOrderBy>;
  stddevSamp?: InputMaybe<AccountStddevSampOrderBy>;
  sum?: InputMaybe<AccountSumOrderBy>;
  varPop?: InputMaybe<AccountVarPopOrderBy>;
  varSamp?: InputMaybe<AccountVarSampOrderBy>;
  variance?: InputMaybe<AccountVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "account" */
export type AccountArrRelInsertInput = {
  data: Array<AccountInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** aggregate avg on columns */
export type AccountAvgFields = {
  __typename?: "AccountAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "account" */
export type AccountAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type AccountBoolExp = {
  _and?: InputMaybe<Array<AccountBoolExp>>;
  _not?: InputMaybe<AccountBoolExp>;
  _or?: InputMaybe<Array<AccountBoolExp>>;
  accountId?: InputMaybe<UuidComparisonExp>;
  accountName?: InputMaybe<StringComparisonExp>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryBoolExp>;
  credit_card_summariesAggregate?: InputMaybe<CreditCardSummaryAggregateBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "account" */
export enum AccountConstraint {
  /** unique or primary key constraint on columns "account_id" */
  AccountPkey = "account_pkey",
}

/** input type for incrementing numeric columns in table "account" */
export type AccountIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "account" */
export type AccountInsertInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type AccountMaxFields = {
  __typename?: "AccountMaxFields";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "account" */
export type AccountMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AccountMinFields = {
  __typename?: "AccountMinFields";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "account" */
export type AccountMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "account" */
export type AccountMutationResponse = {
  __typename?: "AccountMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type AccountObjRelInsertInput = {
  data: AccountInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** on_conflict condition type for table "account" */
export type AccountOnConflict = {
  constraint: AccountConstraint;
  updateColumns?: Array<AccountUpdateColumn>;
  where?: InputMaybe<AccountBoolExp>;
};

/** Ordering options when selecting data from "account". */
export type AccountOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  credit_card_summariesAggregate?: InputMaybe<CreditCardSummaryAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: account */
export type AccountPkColumnsInput = {
  accountId: Scalars["uuid"];
};

/** select columns of table "account" */
export enum AccountSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "accountAggregateBoolExpBool_andArgumentsColumns" columns of table "account" */
export enum AccountSelectColumnAccountAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "accountAggregateBoolExpBool_orArgumentsColumns" columns of table "account" */
export enum AccountSelectColumnAccountAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "account" */
export type AccountSetInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type AccountStddevFields = {
  __typename?: "AccountStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "account" */
export type AccountStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type AccountStddevPopFields = {
  __typename?: "AccountStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "account" */
export type AccountStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type AccountStddevSampFields = {
  __typename?: "AccountStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "account" */
export type AccountStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "account" */
export type AccountStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AccountStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AccountStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate sum on columns */
export type AccountSumFields = {
  __typename?: "AccountSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "account" */
export type AccountSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "account" */
export enum AccountUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

export type AccountUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AccountIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AccountSetInput>;
  /** filter the rows which have to be updated */
  where: AccountBoolExp;
};

/** aggregate varPop on columns */
export type AccountVarPopFields = {
  __typename?: "AccountVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "account" */
export type AccountVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type AccountVarSampFields = {
  __typename?: "AccountVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "account" */
export type AccountVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AccountVarianceFields = {
  __typename?: "AccountVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "account" */
export type AccountVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "affiliation" */
export type Affiliation = {
  __typename?: "Affiliation";
  affiliationId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  groupRoleId: Scalars["uuid"];
  /** An object relationship */
  group_role: GroupRole;
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
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
  affiliationId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  groupRoleId?: InputMaybe<UuidComparisonExp>;
  group_role?: InputMaybe<GroupRoleBoolExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "affiliation" */
export enum AffiliationConstraint {
  /** unique or primary key constraint on columns "affiliation_id" */
  AffiliationPkey = "affiliation_pkey",
}

/** input type for inserting data into table "affiliation" */
export type AffiliationInsertInput = {
  affiliationId?: InputMaybe<Scalars["uuid"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  group_role?: InputMaybe<GroupRoleObjRelInsertInput>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type AffiliationMaxFields = {
  __typename?: "AffiliationMaxFields";
  affiliationId?: Maybe<Scalars["uuid"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  groupRoleId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "affiliation" */
export type AffiliationMaxOrderBy = {
  affiliationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AffiliationMinFields = {
  __typename?: "AffiliationMinFields";
  affiliationId?: Maybe<Scalars["uuid"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  groupRoleId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "affiliation" */
export type AffiliationMinOrderBy = {
  affiliationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
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
  affiliationId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  group_role?: InputMaybe<GroupRoleOrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: affiliation */
export type AffiliationPkColumnsInput = {
  affiliationId: Scalars["uuid"];
};

/** select columns of table "affiliation" */
export enum AffiliationSelectColumn {
  /** column name */
  AffiliationId = "affiliationId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupRoleId = "groupRoleId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "affiliation" */
export type AffiliationSetInput = {
  affiliationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "affiliation" */
export type AffiliationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: AffiliationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AffiliationStreamCursorValueInput = {
  affiliationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "affiliation" */
export enum AffiliationUpdateColumn {
  /** column name */
  AffiliationId = "affiliationId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupRoleId = "groupRoleId",
  /** column name */
  UserId = "userId",
}

export type AffiliationUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AffiliationSetInput>;
  /** filter the rows which have to be updated */
  where: AffiliationBoolExp;
};

/** columns and relationships of "application" */
export type Application = {
  __typename?: "Application";
  application: Scalars["String"];
  applicationId: Scalars["uuid"];
  /** An aggregate relationship */
  groupApplicationsAggregate: GroupApplicationAggregate;
  /** An array relationship */
  group_applications: Array<GroupApplication>;
  topUrl: Scalars["String"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "application" */
export type ApplicationGroupApplicationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** columns and relationships of "application" */
export type ApplicationGroup_ApplicationsArgs = {
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
  application?: InputMaybe<StringComparisonExp>;
  applicationId?: InputMaybe<UuidComparisonExp>;
  group_applications?: InputMaybe<GroupApplicationBoolExp>;
  group_applicationsAggregate?: InputMaybe<GroupApplicationAggregateBoolExp>;
  topUrl?: InputMaybe<StringComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "application" */
export enum ApplicationConstraint {
  /** unique or primary key constraint on columns "application_id" */
  ApplicationPkey = "application_pkey",
}

/** input type for inserting data into table "application" */
export type ApplicationInsertInput = {
  application?: InputMaybe<Scalars["String"]>;
  applicationId?: InputMaybe<Scalars["uuid"]>;
  group_applications?: InputMaybe<GroupApplicationArrRelInsertInput>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type ApplicationMaxFields = {
  __typename?: "ApplicationMaxFields";
  application?: Maybe<Scalars["String"]>;
  applicationId?: Maybe<Scalars["uuid"]>;
  topUrl?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type ApplicationMinFields = {
  __typename?: "ApplicationMinFields";
  application?: Maybe<Scalars["String"]>;
  applicationId?: Maybe<Scalars["uuid"]>;
  topUrl?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "application" */
export type ApplicationMutationResponse = {
  __typename?: "ApplicationMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Application>;
};

/** input type for inserting object relation for remote table "application" */
export type ApplicationObjRelInsertInput = {
  data: ApplicationInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<ApplicationOnConflict>;
};

/** on_conflict condition type for table "application" */
export type ApplicationOnConflict = {
  constraint: ApplicationConstraint;
  updateColumns?: Array<ApplicationUpdateColumn>;
  where?: InputMaybe<ApplicationBoolExp>;
};

/** Ordering options when selecting data from "application". */
export type ApplicationOrderBy = {
  application?: InputMaybe<OrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  group_applicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  topUrl?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: application */
export type ApplicationPkColumnsInput = {
  applicationId: Scalars["uuid"];
};

/** select columns of table "application" */
export enum ApplicationSelectColumn {
  /** column name */
  Application = "application",
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  TopUrl = "topUrl",
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "application" */
export type ApplicationSetInput = {
  application?: InputMaybe<Scalars["String"]>;
  applicationId?: InputMaybe<Scalars["uuid"]>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** Streaming cursor of the table "application" */
export type ApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: ApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ApplicationStreamCursorValueInput = {
  application?: InputMaybe<Scalars["String"]>;
  applicationId?: InputMaybe<Scalars["uuid"]>;
  topUrl?: InputMaybe<Scalars["String"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** update columns of table "application" */
export enum ApplicationUpdateColumn {
  /** column name */
  Application = "application",
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  TopUrl = "topUrl",
  /** column name */
  ValidFlag = "validFlag",
}

export type ApplicationUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ApplicationSetInput>;
  /** filter the rows which have to be updated */
  where: ApplicationBoolExp;
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

/** columns and relationships of "category" */
export type Category = {
  __typename?: "Category";
  categoryId: Scalars["uuid"];
  categoryName: Scalars["String"];
  /** An aggregate relationship */
  creditCardDetailsAggregate: CreditCardDetailAggregate;
  /** An array relationship */
  credit_card_details: Array<CreditCardDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: DailyDetailAggregate;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  displayOrder: Scalars["Int"];
  /** An object relationship */
  genre: Genre;
  genreId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  /** An aggregate relationship */
  incomeTransferCategoryAggregate: TransferCategoryAggregate;
  /** An array relationship */
  income_transfer_category: Array<TransferCategory>;
  /** An aggregate relationship */
  outcomeTransferCategoryAggregate: TransferCategoryAggregate;
  /** An array relationship */
  outcome_transfer_category: Array<TransferCategory>;
  /** An aggregate relationship */
  summaryCategoryByGroupsAggregate: SummaryCategoryByGroupAggregate;
  /** An aggregate relationship */
  summaryCategoryByUsersAggregate: SummaryCategoryByUserAggregate;
  /** An array relationship */
  summary_category_by_groups: Array<SummaryCategoryByGroup>;
  /** An array relationship */
  summary_category_by_users: Array<SummaryCategoryByUser>;
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "category" */
export type CategoryCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryCredit_Card_DetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryIncomeTransferCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryIncome_Transfer_CategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryOutcomeTransferCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** columns and relationships of "category" */
export type CategoryOutcome_Transfer_CategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** columns and relationships of "category" */
export type CategorySummaryCategoryByGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** columns and relationships of "category" */
export type CategorySummaryCategoryByUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

/** columns and relationships of "category" */
export type CategorySummary_Category_By_GroupsArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** columns and relationships of "category" */
export type CategorySummary_Category_By_UsersArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

/** aggregated selection of "category" */
export type CategoryAggregate = {
  __typename?: "CategoryAggregate";
  aggregate?: Maybe<CategoryAggregateFields>;
  nodes: Array<Category>;
};

export type CategoryAggregateBoolExp = {
  bool_and?: InputMaybe<CategoryAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<CategoryAggregateBoolExpBool_Or>;
  count?: InputMaybe<CategoryAggregateBoolExpCount>;
};

/** aggregate fields of "category" */
export type CategoryAggregateFields = {
  __typename?: "CategoryAggregateFields";
  avg?: Maybe<CategoryAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<CategoryMaxFields>;
  min?: Maybe<CategoryMinFields>;
  stddev?: Maybe<CategoryStddevFields>;
  stddevPop?: Maybe<CategoryStddevPopFields>;
  stddevSamp?: Maybe<CategoryStddevSampFields>;
  sum?: Maybe<CategorySumFields>;
  varPop?: Maybe<CategoryVarPopFields>;
  varSamp?: Maybe<CategoryVarSampFields>;
  variance?: Maybe<CategoryVarianceFields>;
};

/** aggregate fields of "category" */
export type CategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "category" */
export type CategoryAggregateOrderBy = {
  avg?: InputMaybe<CategoryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CategoryMaxOrderBy>;
  min?: InputMaybe<CategoryMinOrderBy>;
  stddev?: InputMaybe<CategoryStddevOrderBy>;
  stddevPop?: InputMaybe<CategoryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CategoryStddevSampOrderBy>;
  sum?: InputMaybe<CategorySumOrderBy>;
  varPop?: InputMaybe<CategoryVarPopOrderBy>;
  varSamp?: InputMaybe<CategoryVarSampOrderBy>;
  variance?: InputMaybe<CategoryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "category" */
export type CategoryArrRelInsertInput = {
  data: Array<CategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** aggregate avg on columns */
export type CategoryAvgFields = {
  __typename?: "CategoryAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "category" */
export type CategoryAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type CategoryBoolExp = {
  _and?: InputMaybe<Array<CategoryBoolExp>>;
  _not?: InputMaybe<CategoryBoolExp>;
  _or?: InputMaybe<Array<CategoryBoolExp>>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  credit_card_details?: InputMaybe<CreditCardDetailBoolExp>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genre?: InputMaybe<GenreBoolExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  income_transfer_category?: InputMaybe<TransferCategoryBoolExp>;
  income_transfer_categoryAggregate?: InputMaybe<TransferCategoryAggregateBoolExp>;
  outcome_transfer_category?: InputMaybe<TransferCategoryBoolExp>;
  outcome_transfer_categoryAggregate?: InputMaybe<TransferCategoryAggregateBoolExp>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  summary_category_by_groupsAggregate?: InputMaybe<SummaryCategoryByGroupAggregateBoolExp>;
  summary_category_by_users?: InputMaybe<SummaryCategoryByUserBoolExp>;
  summary_category_by_usersAggregate?: InputMaybe<SummaryCategoryByUserAggregateBoolExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "category" */
export enum CategoryConstraint {
  /** unique or primary key constraint on columns "category_id" */
  CategoryPkey = "category_pkey",
}

/** input type for incrementing numeric columns in table "category" */
export type CategoryIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "category" */
export type CategoryInsertInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  credit_card_details?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genre?: InputMaybe<GenreObjRelInsertInput>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  income_transfer_category?: InputMaybe<TransferCategoryArrRelInsertInput>;
  outcome_transfer_category?: InputMaybe<TransferCategoryArrRelInsertInput>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupArrRelInsertInput>;
  summary_category_by_users?: InputMaybe<SummaryCategoryByUserArrRelInsertInput>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type CategoryMaxFields = {
  __typename?: "CategoryMaxFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  categoryName?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  groupId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "category" */
export type CategoryMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CategoryMinFields = {
  __typename?: "CategoryMinFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  categoryName?: Maybe<Scalars["String"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  groupId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "category" */
export type CategoryMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "category" */
export type CategoryMutationResponse = {
  __typename?: "CategoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type CategoryObjRelInsertInput = {
  data: CategoryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** on_conflict condition type for table "category" */
export type CategoryOnConflict = {
  constraint: CategoryConstraint;
  updateColumns?: Array<CategoryUpdateColumn>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** Ordering options when selecting data from "category". */
export type CategoryOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genre?: InputMaybe<GenreOrderBy>;
  genreId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  income_transfer_categoryAggregate?: InputMaybe<TransferCategoryAggregateOrderBy>;
  outcome_transfer_categoryAggregate?: InputMaybe<TransferCategoryAggregateOrderBy>;
  summary_category_by_groupsAggregate?: InputMaybe<SummaryCategoryByGroupAggregateOrderBy>;
  summary_category_by_usersAggregate?: InputMaybe<SummaryCategoryByUserAggregateOrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: category */
export type CategoryPkColumnsInput = {
  categoryId: Scalars["uuid"];
};

/** select columns of table "category" */
export enum CategorySelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "categoryAggregateBoolExpBool_andArgumentsColumns" columns of table "category" */
export enum CategorySelectColumnCategoryAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "categoryAggregateBoolExpBool_orArgumentsColumns" columns of table "category" */
export enum CategorySelectColumnCategoryAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "category" */
export type CategorySetInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type CategoryStddevFields = {
  __typename?: "CategoryStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "category" */
export type CategoryStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CategoryStddevPopFields = {
  __typename?: "CategoryStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "category" */
export type CategoryStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CategoryStddevSampFields = {
  __typename?: "CategoryStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "category" */
export type CategoryStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "category" */
export type CategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CategoryStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate sum on columns */
export type CategorySumFields = {
  __typename?: "CategorySumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "category" */
export type CategorySumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "category" */
export enum CategoryUpdateColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  CategoryName = "categoryName",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  ValidFlag = "validFlag",
}

export type CategoryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CategoryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CategorySetInput>;
  /** filter the rows which have to be updated */
  where: CategoryBoolExp;
};

/** aggregate varPop on columns */
export type CategoryVarPopFields = {
  __typename?: "CategoryVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "category" */
export type CategoryVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CategoryVarSampFields = {
  __typename?: "CategoryVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "category" */
export type CategoryVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CategoryVarianceFields = {
  __typename?: "CategoryVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "category" */
export type CategoryVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "credit_card_detail" */
export type CreditCardDetail = {
  __typename?: "CreditCardDetail";
  amount: Scalars["numeric"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  /** An object relationship */
  credit_card_summary: CreditCardSummary;
  date: Scalars["date"];
  id: Scalars["uuid"];
  memo?: Maybe<Scalars["String"]>;
  summaryId: Scalars["uuid"];
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
};

/** aggregated selection of "credit_card_detail" */
export type CreditCardDetailAggregate = {
  __typename?: "CreditCardDetailAggregate";
  aggregate?: Maybe<CreditCardDetailAggregateFields>;
  nodes: Array<CreditCardDetail>;
};

export type CreditCardDetailAggregateBoolExp = {
  count?: InputMaybe<CreditCardDetailAggregateBoolExpCount>;
};

/** aggregate fields of "credit_card_detail" */
export type CreditCardDetailAggregateFields = {
  __typename?: "CreditCardDetailAggregateFields";
  avg?: Maybe<CreditCardDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<CreditCardDetailMaxFields>;
  min?: Maybe<CreditCardDetailMinFields>;
  stddev?: Maybe<CreditCardDetailStddevFields>;
  stddevPop?: Maybe<CreditCardDetailStddevPopFields>;
  stddevSamp?: Maybe<CreditCardDetailStddevSampFields>;
  sum?: Maybe<CreditCardDetailSumFields>;
  varPop?: Maybe<CreditCardDetailVarPopFields>;
  varSamp?: Maybe<CreditCardDetailVarSampFields>;
  variance?: Maybe<CreditCardDetailVarianceFields>;
};

/** aggregate fields of "credit_card_detail" */
export type CreditCardDetailAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "credit_card_detail" */
export type CreditCardDetailAggregateOrderBy = {
  avg?: InputMaybe<CreditCardDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CreditCardDetailMaxOrderBy>;
  min?: InputMaybe<CreditCardDetailMinOrderBy>;
  stddev?: InputMaybe<CreditCardDetailStddevOrderBy>;
  stddevPop?: InputMaybe<CreditCardDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CreditCardDetailStddevSampOrderBy>;
  sum?: InputMaybe<CreditCardDetailSumOrderBy>;
  varPop?: InputMaybe<CreditCardDetailVarPopOrderBy>;
  varSamp?: InputMaybe<CreditCardDetailVarSampOrderBy>;
  variance?: InputMaybe<CreditCardDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "credit_card_detail" */
export type CreditCardDetailArrRelInsertInput = {
  data: Array<CreditCardDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CreditCardDetailOnConflict>;
};

/** aggregate avg on columns */
export type CreditCardDetailAvgFields = {
  __typename?: "CreditCardDetailAvgFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "credit_card_detail" */
export type CreditCardDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "credit_card_detail". All fields are combined with a logical 'AND'. */
export type CreditCardDetailBoolExp = {
  _and?: InputMaybe<Array<CreditCardDetailBoolExp>>;
  _not?: InputMaybe<CreditCardDetailBoolExp>;
  _or?: InputMaybe<Array<CreditCardDetailBoolExp>>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  credit_card_summary?: InputMaybe<CreditCardSummaryBoolExp>;
  date?: InputMaybe<DateComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  summaryId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "credit_card_detail" */
export enum CreditCardDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardDetailPkey = "credit_card_detail_pkey",
}

/** input type for incrementing numeric columns in table "credit_card_detail" */
export type CreditCardDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "credit_card_detail" */
export type CreditCardDetailInsertInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  credit_card_summary?: InputMaybe<CreditCardSummaryObjRelInsertInput>;
  date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type CreditCardDetailMaxFields = {
  __typename?: "CreditCardDetailMaxFields";
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["uuid"]>;
  memo?: Maybe<Scalars["String"]>;
  summaryId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "credit_card_detail" */
export type CreditCardDetailMaxOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CreditCardDetailMinFields = {
  __typename?: "CreditCardDetailMinFields";
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  date?: Maybe<Scalars["date"]>;
  id?: Maybe<Scalars["uuid"]>;
  memo?: Maybe<Scalars["String"]>;
  summaryId?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "credit_card_detail" */
export type CreditCardDetailMinOrderBy = {
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "credit_card_detail" */
export type CreditCardDetailMutationResponse = {
  __typename?: "CreditCardDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<CreditCardDetail>;
};

/** on_conflict condition type for table "credit_card_detail" */
export type CreditCardDetailOnConflict = {
  constraint: CreditCardDetailConstraint;
  updateColumns?: Array<CreditCardDetailUpdateColumn>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** Ordering options when selecting data from "credit_card_detail". */
export type CreditCardDetailOrderBy = {
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  credit_card_summary?: InputMaybe<CreditCardSummaryOrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  summaryId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: credit_card_detail */
export type CreditCardDetailPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "credit_card_detail" */
export enum CreditCardDetailSelectColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  Id = "id",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "credit_card_detail" */
export type CreditCardDetailSetInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type CreditCardDetailStddevFields = {
  __typename?: "CreditCardDetailStddevFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "credit_card_detail" */
export type CreditCardDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CreditCardDetailStddevPopFields = {
  __typename?: "CreditCardDetailStddevPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "credit_card_detail" */
export type CreditCardDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CreditCardDetailStddevSampFields = {
  __typename?: "CreditCardDetailStddevSampFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "credit_card_detail" */
export type CreditCardDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "credit_card_detail" */
export type CreditCardDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CreditCardDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardDetailStreamCursorValueInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  memo?: InputMaybe<Scalars["String"]>;
  summaryId?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type CreditCardDetailSumFields = {
  __typename?: "CreditCardDetailSumFields";
  amount?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "credit_card_detail" */
export type CreditCardDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "credit_card_detail" */
export enum CreditCardDetailUpdateColumn {
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  Id = "id",
  /** column name */
  Memo = "memo",
  /** column name */
  SummaryId = "summaryId",
  /** column name */
  UserId = "userId",
}

export type CreditCardDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CreditCardDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CreditCardDetailSetInput>;
  /** filter the rows which have to be updated */
  where: CreditCardDetailBoolExp;
};

/** aggregate varPop on columns */
export type CreditCardDetailVarPopFields = {
  __typename?: "CreditCardDetailVarPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "credit_card_detail" */
export type CreditCardDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CreditCardDetailVarSampFields = {
  __typename?: "CreditCardDetailVarSampFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "credit_card_detail" */
export type CreditCardDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CreditCardDetailVarianceFields = {
  __typename?: "CreditCardDetailVarianceFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "credit_card_detail" */
export type CreditCardDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "credit_card_summary" */
export type CreditCardSummary = {
  __typename?: "CreditCardSummary";
  /** An object relationship */
  account: Account;
  accountId: Scalars["uuid"];
  count: Scalars["Int"];
  creditCard: Scalars["String"];
  /** An aggregate relationship */
  creditCardDetailsAggregate: CreditCardDetailAggregate;
  /** An array relationship */
  credit_card_details: Array<CreditCardDetail>;
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  /** An object relationship */
  import_file_history: ImportFileHistory;
  totalAmount: Scalars["numeric"];
  withdrawalDate: Scalars["date"];
};

/** columns and relationships of "credit_card_summary" */
export type CreditCardSummaryCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** columns and relationships of "credit_card_summary" */
export type CreditCardSummaryCredit_Card_DetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** aggregated selection of "credit_card_summary" */
export type CreditCardSummaryAggregate = {
  __typename?: "CreditCardSummaryAggregate";
  aggregate?: Maybe<CreditCardSummaryAggregateFields>;
  nodes: Array<CreditCardSummary>;
};

export type CreditCardSummaryAggregateBoolExp = {
  count?: InputMaybe<CreditCardSummaryAggregateBoolExpCount>;
};

/** aggregate fields of "credit_card_summary" */
export type CreditCardSummaryAggregateFields = {
  __typename?: "CreditCardSummaryAggregateFields";
  avg?: Maybe<CreditCardSummaryAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<CreditCardSummaryMaxFields>;
  min?: Maybe<CreditCardSummaryMinFields>;
  stddev?: Maybe<CreditCardSummaryStddevFields>;
  stddevPop?: Maybe<CreditCardSummaryStddevPopFields>;
  stddevSamp?: Maybe<CreditCardSummaryStddevSampFields>;
  sum?: Maybe<CreditCardSummarySumFields>;
  varPop?: Maybe<CreditCardSummaryVarPopFields>;
  varSamp?: Maybe<CreditCardSummaryVarSampFields>;
  variance?: Maybe<CreditCardSummaryVarianceFields>;
};

/** aggregate fields of "credit_card_summary" */
export type CreditCardSummaryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "credit_card_summary" */
export type CreditCardSummaryAggregateOrderBy = {
  avg?: InputMaybe<CreditCardSummaryAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CreditCardSummaryMaxOrderBy>;
  min?: InputMaybe<CreditCardSummaryMinOrderBy>;
  stddev?: InputMaybe<CreditCardSummaryStddevOrderBy>;
  stddevPop?: InputMaybe<CreditCardSummaryStddevPopOrderBy>;
  stddevSamp?: InputMaybe<CreditCardSummaryStddevSampOrderBy>;
  sum?: InputMaybe<CreditCardSummarySumOrderBy>;
  varPop?: InputMaybe<CreditCardSummaryVarPopOrderBy>;
  varSamp?: InputMaybe<CreditCardSummaryVarSampOrderBy>;
  variance?: InputMaybe<CreditCardSummaryVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "credit_card_summary" */
export type CreditCardSummaryArrRelInsertInput = {
  data: Array<CreditCardSummaryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** aggregate avg on columns */
export type CreditCardSummaryAvgFields = {
  __typename?: "CreditCardSummaryAvgFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "credit_card_summary" */
export type CreditCardSummaryAvgOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "credit_card_summary". All fields are combined with a logical 'AND'. */
export type CreditCardSummaryBoolExp = {
  _and?: InputMaybe<Array<CreditCardSummaryBoolExp>>;
  _not?: InputMaybe<CreditCardSummaryBoolExp>;
  _or?: InputMaybe<Array<CreditCardSummaryBoolExp>>;
  account?: InputMaybe<AccountBoolExp>;
  accountId?: InputMaybe<UuidComparisonExp>;
  count?: InputMaybe<IntComparisonExp>;
  creditCard?: InputMaybe<StringComparisonExp>;
  credit_card_details?: InputMaybe<CreditCardDetailBoolExp>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateBoolExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  import_file_history?: InputMaybe<ImportFileHistoryBoolExp>;
  totalAmount?: InputMaybe<NumericComparisonExp>;
  withdrawalDate?: InputMaybe<DateComparisonExp>;
};

/** unique or primary key constraints on table "credit_card_summary" */
export enum CreditCardSummaryConstraint {
  /** unique or primary key constraint on columns "id" */
  CreditCardSummaryPkey = "credit_card_summary_pkey",
}

/** input type for incrementing numeric columns in table "credit_card_summary" */
export type CreditCardSummaryIncInput = {
  count?: InputMaybe<Scalars["Int"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "credit_card_summary" */
export type CreditCardSummaryInsertInput = {
  account?: InputMaybe<AccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["uuid"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  credit_card_details?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  import_file_history?: InputMaybe<ImportFileHistoryObjRelInsertInput>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** aggregate max on columns */
export type CreditCardSummaryMaxFields = {
  __typename?: "CreditCardSummaryMaxFields";
  accountId?: Maybe<Scalars["uuid"]>;
  count?: Maybe<Scalars["Int"]>;
  creditCard?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
  withdrawalDate?: Maybe<Scalars["date"]>;
};

/** order by max() on columns of table "credit_card_summary" */
export type CreditCardSummaryMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CreditCardSummaryMinFields = {
  __typename?: "CreditCardSummaryMinFields";
  accountId?: Maybe<Scalars["uuid"]>;
  count?: Maybe<Scalars["Int"]>;
  creditCard?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
  withdrawalDate?: Maybe<Scalars["date"]>;
};

/** order by min() on columns of table "credit_card_summary" */
export type CreditCardSummaryMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "credit_card_summary" */
export type CreditCardSummaryMutationResponse = {
  __typename?: "CreditCardSummaryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<CreditCardSummary>;
};

/** input type for inserting object relation for remote table "credit_card_summary" */
export type CreditCardSummaryObjRelInsertInput = {
  data: CreditCardSummaryInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** on_conflict condition type for table "credit_card_summary" */
export type CreditCardSummaryOnConflict = {
  constraint: CreditCardSummaryConstraint;
  updateColumns?: Array<CreditCardSummaryUpdateColumn>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** Ordering options when selecting data from "credit_card_summary". */
export type CreditCardSummaryOrderBy = {
  account?: InputMaybe<AccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  count?: InputMaybe<OrderBy>;
  creditCard?: InputMaybe<OrderBy>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  import_file_history?: InputMaybe<ImportFileHistoryOrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
  withdrawalDate?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: credit_card_summary */
export type CreditCardSummaryPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "credit_card_summary" */
export enum CreditCardSummarySelectColumn {
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

/** input type for updating data in table "credit_card_summary" */
export type CreditCardSummarySetInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** aggregate stddev on columns */
export type CreditCardSummaryStddevFields = {
  __typename?: "CreditCardSummaryStddevFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "credit_card_summary" */
export type CreditCardSummaryStddevOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type CreditCardSummaryStddevPopFields = {
  __typename?: "CreditCardSummaryStddevPopFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "credit_card_summary" */
export type CreditCardSummaryStddevPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type CreditCardSummaryStddevSampFields = {
  __typename?: "CreditCardSummaryStddevSampFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "credit_card_summary" */
export type CreditCardSummaryStddevSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "credit_card_summary" */
export type CreditCardSummaryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CreditCardSummaryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardSummaryStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  count?: InputMaybe<Scalars["Int"]>;
  creditCard?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  totalAmount?: InputMaybe<Scalars["numeric"]>;
  withdrawalDate?: InputMaybe<Scalars["date"]>;
};

/** aggregate sum on columns */
export type CreditCardSummarySumFields = {
  __typename?: "CreditCardSummarySumFields";
  count?: Maybe<Scalars["Int"]>;
  totalAmount?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "credit_card_summary" */
export type CreditCardSummarySumOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountView = {
  __typename?: "CreditCardSummaryTotalByAccountView";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountViewAggregate = {
  __typename?: "CreditCardSummaryTotalByAccountViewAggregate";
  aggregate?: Maybe<CreditCardSummaryTotalByAccountViewAggregateFields>;
  nodes: Array<CreditCardSummaryTotalByAccountView>;
};

/** aggregate fields of "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountViewAggregateFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewAggregateFields";
  avg?: Maybe<CreditCardSummaryTotalByAccountViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<CreditCardSummaryTotalByAccountViewMaxFields>;
  min?: Maybe<CreditCardSummaryTotalByAccountViewMinFields>;
  stddev?: Maybe<CreditCardSummaryTotalByAccountViewStddevFields>;
  stddevPop?: Maybe<CreditCardSummaryTotalByAccountViewStddevPopFields>;
  stddevSamp?: Maybe<CreditCardSummaryTotalByAccountViewStddevSampFields>;
  sum?: Maybe<CreditCardSummaryTotalByAccountViewSumFields>;
  varPop?: Maybe<CreditCardSummaryTotalByAccountViewVarPopFields>;
  varSamp?: Maybe<CreditCardSummaryTotalByAccountViewVarSampFields>;
  variance?: Maybe<CreditCardSummaryTotalByAccountViewVarianceFields>;
};

/** aggregate fields of "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type CreditCardSummaryTotalByAccountViewAvgFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "credit_card_summary_total_by_account_view". All fields are combined with a logical 'AND'. */
export type CreditCardSummaryTotalByAccountViewBoolExp = {
  _and?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewBoolExp>>;
  _not?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<UuidComparisonExp>;
  accountName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type CreditCardSummaryTotalByAccountViewMaxFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewMaxFields";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type CreditCardSummaryTotalByAccountViewMinFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewMinFields";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Ordering options when selecting data from "credit_card_summary_total_by_account_view". */
export type CreditCardSummaryTotalByAccountViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "credit_card_summary_total_by_account_view" */
export enum CreditCardSummaryTotalByAccountViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  Date = "date",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** aggregate stddev on columns */
export type CreditCardSummaryTotalByAccountViewStddevFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type CreditCardSummaryTotalByAccountViewStddevPopFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type CreditCardSummaryTotalByAccountViewStddevSampFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "credit_card_summary_total_by_account_view" */
export type CreditCardSummaryTotalByAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: CreditCardSummaryTotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CreditCardSummaryTotalByAccountViewStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate sum on columns */
export type CreditCardSummaryTotalByAccountViewSumFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type CreditCardSummaryTotalByAccountViewVarPopFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type CreditCardSummaryTotalByAccountViewVarSampFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type CreditCardSummaryTotalByAccountViewVarianceFields = {
  __typename?: "CreditCardSummaryTotalByAccountViewVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** update columns of table "credit_card_summary" */
export enum CreditCardSummaryUpdateColumn {
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

export type CreditCardSummaryUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CreditCardSummaryIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CreditCardSummarySetInput>;
  /** filter the rows which have to be updated */
  where: CreditCardSummaryBoolExp;
};

/** aggregate varPop on columns */
export type CreditCardSummaryVarPopFields = {
  __typename?: "CreditCardSummaryVarPopFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "credit_card_summary" */
export type CreditCardSummaryVarPopOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type CreditCardSummaryVarSampFields = {
  __typename?: "CreditCardSummaryVarSampFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "credit_card_summary" */
export type CreditCardSummaryVarSampOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CreditCardSummaryVarianceFields = {
  __typename?: "CreditCardSummaryVarianceFields";
  count?: Maybe<Scalars["Float"]>;
  totalAmount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "credit_card_summary" */
export type CreditCardSummaryVarianceOrderBy = {
  count?: InputMaybe<OrderBy>;
  totalAmount?: InputMaybe<OrderBy>;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = "ASC",
  /** descending ordering of the cursor */
  Desc = "DESC",
}

/** columns and relationships of "daily_detail" */
export type DailyDetail = {
  __typename?: "DailyDetail";
  /** An object relationship */
  account: Account;
  accountId: Scalars["uuid"];
  amount: Scalars["numeric"];
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  date: Scalars["date"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  memo?: Maybe<Scalars["String"]>;
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
};

/** aggregated selection of "daily_detail" */
export type DailyDetailAggregate = {
  __typename?: "DailyDetailAggregate";
  aggregate?: Maybe<DailyDetailAggregateFields>;
  nodes: Array<DailyDetail>;
};

export type DailyDetailAggregateBoolExp = {
  count?: InputMaybe<DailyDetailAggregateBoolExpCount>;
};

/** aggregate fields of "daily_detail" */
export type DailyDetailAggregateFields = {
  __typename?: "DailyDetailAggregateFields";
  avg?: Maybe<DailyDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<DailyDetailMaxFields>;
  min?: Maybe<DailyDetailMinFields>;
  stddev?: Maybe<DailyDetailStddevFields>;
  stddevPop?: Maybe<DailyDetailStddevPopFields>;
  stddevSamp?: Maybe<DailyDetailStddevSampFields>;
  sum?: Maybe<DailyDetailSumFields>;
  varPop?: Maybe<DailyDetailVarPopFields>;
  varSamp?: Maybe<DailyDetailVarSampFields>;
  variance?: Maybe<DailyDetailVarianceFields>;
};

/** aggregate fields of "daily_detail" */
export type DailyDetailAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DailyDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "daily_detail" */
export type DailyDetailAggregateOrderBy = {
  avg?: InputMaybe<DailyDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<DailyDetailMaxOrderBy>;
  min?: InputMaybe<DailyDetailMinOrderBy>;
  stddev?: InputMaybe<DailyDetailStddevOrderBy>;
  stddevPop?: InputMaybe<DailyDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<DailyDetailStddevSampOrderBy>;
  sum?: InputMaybe<DailyDetailSumOrderBy>;
  varPop?: InputMaybe<DailyDetailVarPopOrderBy>;
  varSamp?: InputMaybe<DailyDetailVarSampOrderBy>;
  variance?: InputMaybe<DailyDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "daily_detail" */
export type DailyDetailArrRelInsertInput = {
  data: Array<DailyDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<DailyDetailOnConflict>;
};

/** aggregate avg on columns */
export type DailyDetailAvgFields = {
  __typename?: "DailyDetailAvgFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "daily_detail" */
export type DailyDetailAvgOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "daily_detail". All fields are combined with a logical 'AND'. */
export type DailyDetailBoolExp = {
  _and?: InputMaybe<Array<DailyDetailBoolExp>>;
  _not?: InputMaybe<DailyDetailBoolExp>;
  _or?: InputMaybe<Array<DailyDetailBoolExp>>;
  account?: InputMaybe<AccountBoolExp>;
  accountId?: InputMaybe<UuidComparisonExp>;
  amount?: InputMaybe<NumericComparisonExp>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  memo?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "daily_detail" */
export enum DailyDetailConstraint {
  /** unique or primary key constraint on columns "id" */
  DailyDetailPkey = "daily_detail_pkey",
}

/** input type for incrementing numeric columns in table "daily_detail" */
export type DailyDetailIncInput = {
  amount?: InputMaybe<Scalars["numeric"]>;
};

/** input type for inserting data into table "daily_detail" */
export type DailyDetailInsertInput = {
  account?: InputMaybe<AccountObjRelInsertInput>;
  accountId?: InputMaybe<Scalars["uuid"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  memo?: InputMaybe<Scalars["String"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type DailyDetailMaxFields = {
  __typename?: "DailyDetailMaxFields";
  accountId?: Maybe<Scalars["uuid"]>;
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  memo?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "daily_detail" */
export type DailyDetailMaxOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type DailyDetailMinFields = {
  __typename?: "DailyDetailMinFields";
  accountId?: Maybe<Scalars["uuid"]>;
  amount?: Maybe<Scalars["numeric"]>;
  categoryId?: Maybe<Scalars["uuid"]>;
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  memo?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "daily_detail" */
export type DailyDetailMinOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "daily_detail" */
export type DailyDetailMutationResponse = {
  __typename?: "DailyDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<DailyDetail>;
};

/** on_conflict condition type for table "daily_detail" */
export type DailyDetailOnConflict = {
  constraint: DailyDetailConstraint;
  updateColumns?: Array<DailyDetailUpdateColumn>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** Ordering options when selecting data from "daily_detail". */
export type DailyDetailOrderBy = {
  account?: InputMaybe<AccountOrderBy>;
  accountId?: InputMaybe<OrderBy>;
  amount?: InputMaybe<OrderBy>;
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  memo?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: daily_detail */
export type DailyDetailPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "daily_detail" */
export enum DailyDetailSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "daily_detail" */
export type DailyDetailSetInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type DailyDetailStddevFields = {
  __typename?: "DailyDetailStddevFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "daily_detail" */
export type DailyDetailStddevOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type DailyDetailStddevPopFields = {
  __typename?: "DailyDetailStddevPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "daily_detail" */
export type DailyDetailStddevPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type DailyDetailStddevSampFields = {
  __typename?: "DailyDetailStddevSampFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "daily_detail" */
export type DailyDetailStddevSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "daily_detail" */
export type DailyDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DailyDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DailyDetailStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  amount?: InputMaybe<Scalars["numeric"]>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  memo?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type DailyDetailSumFields = {
  __typename?: "DailyDetailSumFields";
  amount?: Maybe<Scalars["numeric"]>;
};

/** order by sum() on columns of table "daily_detail" */
export type DailyDetailSumOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** update columns of table "daily_detail" */
export enum DailyDetailUpdateColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  Amount = "amount",
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  Date = "date",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
  /** column name */
  Memo = "memo",
  /** column name */
  UserId = "userId",
}

export type DailyDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<DailyDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<DailyDetailSetInput>;
  /** filter the rows which have to be updated */
  where: DailyDetailBoolExp;
};

/** aggregate varPop on columns */
export type DailyDetailVarPopFields = {
  __typename?: "DailyDetailVarPopFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "daily_detail" */
export type DailyDetailVarPopOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type DailyDetailVarSampFields = {
  __typename?: "DailyDetailVarSampFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "daily_detail" */
export type DailyDetailVarSampOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type DailyDetailVarianceFields = {
  __typename?: "DailyDetailVarianceFields";
  amount?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "daily_detail" */
export type DailyDetailVarianceOrderBy = {
  amount?: InputMaybe<OrderBy>;
};

/** columns and relationships of "daily_total_view" */
export type DailyTotalView = {
  __typename?: "DailyTotalView";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregated selection of "daily_total_view" */
export type DailyTotalViewAggregate = {
  __typename?: "DailyTotalViewAggregate";
  aggregate?: Maybe<DailyTotalViewAggregateFields>;
  nodes: Array<DailyTotalView>;
};

/** aggregate fields of "daily_total_view" */
export type DailyTotalViewAggregateFields = {
  __typename?: "DailyTotalViewAggregateFields";
  avg?: Maybe<DailyTotalViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<DailyTotalViewMaxFields>;
  min?: Maybe<DailyTotalViewMinFields>;
  stddev?: Maybe<DailyTotalViewStddevFields>;
  stddevPop?: Maybe<DailyTotalViewStddevPopFields>;
  stddevSamp?: Maybe<DailyTotalViewStddevSampFields>;
  sum?: Maybe<DailyTotalViewSumFields>;
  varPop?: Maybe<DailyTotalViewVarPopFields>;
  varSamp?: Maybe<DailyTotalViewVarSampFields>;
  variance?: Maybe<DailyTotalViewVarianceFields>;
};

/** aggregate fields of "daily_total_view" */
export type DailyTotalViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type DailyTotalViewAvgFields = {
  __typename?: "DailyTotalViewAvgFields";
  total?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "daily_total_view". All fields are combined with a logical 'AND'. */
export type DailyTotalViewBoolExp = {
  _and?: InputMaybe<Array<DailyTotalViewBoolExp>>;
  _not?: InputMaybe<DailyTotalViewBoolExp>;
  _or?: InputMaybe<Array<DailyTotalViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type DailyTotalViewMaxFields = {
  __typename?: "DailyTotalViewMaxFields";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type DailyTotalViewMinFields = {
  __typename?: "DailyTotalViewMinFields";
  date?: Maybe<Scalars["date"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Ordering options when selecting data from "daily_total_view". */
export type DailyTotalViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "daily_total_view" */
export enum DailyTotalViewSelectColumn {
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
export type DailyTotalViewStddevFields = {
  __typename?: "DailyTotalViewStddevFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type DailyTotalViewStddevPopFields = {
  __typename?: "DailyTotalViewStddevPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type DailyTotalViewStddevSampFields = {
  __typename?: "DailyTotalViewStddevSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "daily_total_view" */
export type DailyTotalViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: DailyTotalViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type DailyTotalViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate sum on columns */
export type DailyTotalViewSumFields = {
  __typename?: "DailyTotalViewSumFields";
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type DailyTotalViewVarPopFields = {
  __typename?: "DailyTotalViewVarPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type DailyTotalViewVarSampFields = {
  __typename?: "DailyTotalViewVarSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type DailyTotalViewVarianceFields = {
  __typename?: "DailyTotalViewVarianceFields";
  total?: Maybe<Scalars["Float"]>;
};

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

/** columns and relationships of "genre" */
export type Genre = {
  __typename?: "Genre";
  /** An array relationship */
  categories: Array<Category>;
  /** An aggregate relationship */
  categoriesAggregate: CategoryAggregate;
  displayOrder: Scalars["Int"];
  genreId: Scalars["uuid"];
  genreName: Scalars["String"];
  genreType: Scalars["genre_type"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  iocomeType: Scalars["iocome_type"];
  validFlag?: Maybe<Scalars["Boolean"]>;
};

/** columns and relationships of "genre" */
export type GenreCategoriesArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** columns and relationships of "genre" */
export type GenreCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** aggregated selection of "genre" */
export type GenreAggregate = {
  __typename?: "GenreAggregate";
  aggregate?: Maybe<GenreAggregateFields>;
  nodes: Array<Genre>;
};

export type GenreAggregateBoolExp = {
  bool_and?: InputMaybe<GenreAggregateBoolExpBool_And>;
  bool_or?: InputMaybe<GenreAggregateBoolExpBool_Or>;
  count?: InputMaybe<GenreAggregateBoolExpCount>;
};

/** aggregate fields of "genre" */
export type GenreAggregateFields = {
  __typename?: "GenreAggregateFields";
  avg?: Maybe<GenreAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<GenreMaxFields>;
  min?: Maybe<GenreMinFields>;
  stddev?: Maybe<GenreStddevFields>;
  stddevPop?: Maybe<GenreStddevPopFields>;
  stddevSamp?: Maybe<GenreStddevSampFields>;
  sum?: Maybe<GenreSumFields>;
  varPop?: Maybe<GenreVarPopFields>;
  varSamp?: Maybe<GenreVarSampFields>;
  variance?: Maybe<GenreVarianceFields>;
};

/** aggregate fields of "genre" */
export type GenreAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "genre" */
export type GenreAggregateOrderBy = {
  avg?: InputMaybe<GenreAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<GenreMaxOrderBy>;
  min?: InputMaybe<GenreMinOrderBy>;
  stddev?: InputMaybe<GenreStddevOrderBy>;
  stddevPop?: InputMaybe<GenreStddevPopOrderBy>;
  stddevSamp?: InputMaybe<GenreStddevSampOrderBy>;
  sum?: InputMaybe<GenreSumOrderBy>;
  varPop?: InputMaybe<GenreVarPopOrderBy>;
  varSamp?: InputMaybe<GenreVarSampOrderBy>;
  variance?: InputMaybe<GenreVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "genre" */
export type GenreArrRelInsertInput = {
  data: Array<GenreInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** aggregate avg on columns */
export type GenreAvgFields = {
  __typename?: "GenreAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "genre" */
export type GenreAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "genre". All fields are combined with a logical 'AND'. */
export type GenreBoolExp = {
  _and?: InputMaybe<Array<GenreBoolExp>>;
  _not?: InputMaybe<GenreBoolExp>;
  _or?: InputMaybe<Array<GenreBoolExp>>;
  categories?: InputMaybe<CategoryBoolExp>;
  categoriesAggregate?: InputMaybe<CategoryAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  genreType?: InputMaybe<GenreTypeComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  validFlag?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "genre" */
export enum GenreConstraint {
  /** unique or primary key constraint on columns "genre_id" */
  GenrePkey = "genre_pkey",
}

/** input type for incrementing numeric columns in table "genre" */
export type GenreIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "genre" */
export type GenreInsertInput = {
  categories?: InputMaybe<CategoryArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<Scalars["genre_type"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate max on columns */
export type GenreMaxFields = {
  __typename?: "GenreMaxFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  genreType?: Maybe<Scalars["genre_type"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
};

/** order by max() on columns of table "genre" */
export type GenreMaxOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GenreMinFields = {
  __typename?: "GenreMinFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  genreType?: Maybe<Scalars["genre_type"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
};

/** order by min() on columns of table "genre" */
export type GenreMinOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "genre" */
export type GenreMutationResponse = {
  __typename?: "GenreMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Genre>;
};

/** input type for inserting object relation for remote table "genre" */
export type GenreObjRelInsertInput = {
  data: GenreInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** on_conflict condition type for table "genre" */
export type GenreOnConflict = {
  constraint: GenreConstraint;
  updateColumns?: Array<GenreUpdateColumn>;
  where?: InputMaybe<GenreBoolExp>;
};

/** Ordering options when selecting data from "genre". */
export type GenreOrderBy = {
  categoriesAggregate?: InputMaybe<CategoryAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  genreType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  validFlag?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: genre */
export type GenrePkColumnsInput = {
  genreId: Scalars["uuid"];
};

/** select columns of table "genre" */
export enum GenreSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  ValidFlag = "validFlag",
}

/** select "genreAggregateBoolExpBool_andArgumentsColumns" columns of table "genre" */
export enum GenreSelectColumnGenreAggregateBoolExpBool_AndArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** select "genreAggregateBoolExpBool_orArgumentsColumns" columns of table "genre" */
export enum GenreSelectColumnGenreAggregateBoolExpBool_OrArgumentsColumns {
  /** column name */
  ValidFlag = "validFlag",
}

/** input type for updating data in table "genre" */
export type GenreSetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<Scalars["genre_type"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate stddev on columns */
export type GenreStddevFields = {
  __typename?: "GenreStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "genre" */
export type GenreStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type GenreStddevPopFields = {
  __typename?: "GenreStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "genre" */
export type GenreStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type GenreStddevSampFields = {
  __typename?: "GenreStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "genre" */
export type GenreStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "genre" */
export type GenreStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GenreStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GenreStreamCursorValueInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  genreType?: InputMaybe<Scalars["genre_type"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  validFlag?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate sum on columns */
export type GenreSumFields = {
  __typename?: "GenreSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "genre" */
export type GenreSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "genre_type". All fields are combined with logical 'AND'. */
export type GenreTypeComparisonExp = {
  _eq?: InputMaybe<Scalars["genre_type"]>;
  _gt?: InputMaybe<Scalars["genre_type"]>;
  _gte?: InputMaybe<Scalars["genre_type"]>;
  _in?: InputMaybe<Array<Scalars["genre_type"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["genre_type"]>;
  _lte?: InputMaybe<Scalars["genre_type"]>;
  _neq?: InputMaybe<Scalars["genre_type"]>;
  _nin?: InputMaybe<Array<Scalars["genre_type"]>>;
};

/** update columns of table "genre" */
export enum GenreUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GenreId = "genreId",
  /** column name */
  GenreName = "genreName",
  /** column name */
  GenreType = "genreType",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  ValidFlag = "validFlag",
}

export type GenreUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<GenreIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GenreSetInput>;
  /** filter the rows which have to be updated */
  where: GenreBoolExp;
};

/** aggregate varPop on columns */
export type GenreVarPopFields = {
  __typename?: "GenreVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "genre" */
export type GenreVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type GenreVarSampFields = {
  __typename?: "GenreVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "genre" */
export type GenreVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type GenreVarianceFields = {
  __typename?: "GenreVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "genre" */
export type GenreVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: "Group";
  /** An array relationship */
  accounts: Array<Account>;
  /** An aggregate relationship */
  accountsAggregate: AccountAggregate;
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: AffiliationAggregate;
  /** An array relationship */
  categories: Array<Category>;
  /** An aggregate relationship */
  categoriesAggregate: CategoryAggregate;
  /** An aggregate relationship */
  creditCardSummariesAggregate: CreditCardSummaryAggregate;
  /** An array relationship */
  credit_card_summaries: Array<CreditCardSummary>;
  /** An aggregate relationship */
  dailyDetailsAggregate: DailyDetailAggregate;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  /** An array relationship */
  genres: Array<Genre>;
  /** An aggregate relationship */
  genresAggregate: GenreAggregate;
  /** An aggregate relationship */
  groupApplicationsAggregate: GroupApplicationAggregate;
  groupId: Scalars["uuid"];
  groupName: Scalars["String"];
  /** An array relationship */
  group_applications: Array<GroupApplication>;
  /** An aggregate relationship */
  importFileHistoriesAggregate: ImportFileHistoryAggregate;
  /** An array relationship */
  import_file_histories: Array<ImportFileHistory>;
  /** An aggregate relationship */
  summaryCategoryByGroupsAggregate: SummaryCategoryByGroupAggregate;
  /** An array relationship */
  summary_category_by_groups: Array<SummaryCategoryByGroup>;
};

/** columns and relationships of "group" */
export type GroupAccountsArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

/** columns and relationships of "group" */
export type GroupAccountsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
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
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCategoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCreditCardSummariesAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupCredit_Card_SummariesArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGenresArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

/** columns and relationships of "group" */
export type GroupGenresAggregateArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
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
export type GroupGroup_ApplicationsArgs = {
  distinctOn?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupApplicationOrderBy>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** columns and relationships of "group" */
export type GroupImportFileHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupImport_File_HistoriesArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** columns and relationships of "group" */
export type GroupSummaryCategoryByGroupsAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** columns and relationships of "group" */
export type GroupSummary_Category_By_GroupsArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
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
  applicationId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  groupApplicationId: Scalars["uuid"];
  groupId: Scalars["uuid"];
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

/** input type for inserting array relation for remote table "group_application" */
export type GroupApplicationArrRelInsertInput = {
  data: Array<GroupApplicationInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<GroupApplicationOnConflict>;
};

/** Boolean expression to filter rows from the table "group_application". All fields are combined with a logical 'AND'. */
export type GroupApplicationBoolExp = {
  _and?: InputMaybe<Array<GroupApplicationBoolExp>>;
  _not?: InputMaybe<GroupApplicationBoolExp>;
  _or?: InputMaybe<Array<GroupApplicationBoolExp>>;
  application?: InputMaybe<ApplicationBoolExp>;
  applicationId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupApplicationId?: InputMaybe<UuidComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "group_application" */
export enum GroupApplicationConstraint {
  /** unique or primary key constraint on columns "group_application_id" */
  GroupApplicationPkey = "group_application_pkey",
}

/** input type for inserting data into table "group_application" */
export type GroupApplicationInsertInput = {
  application?: InputMaybe<ApplicationObjRelInsertInput>;
  applicationId?: InputMaybe<Scalars["uuid"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupApplicationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type GroupApplicationMaxFields = {
  __typename?: "GroupApplicationMaxFields";
  applicationId?: Maybe<Scalars["uuid"]>;
  groupApplicationId?: Maybe<Scalars["uuid"]>;
  groupId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "group_application" */
export type GroupApplicationMaxOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupApplicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type GroupApplicationMinFields = {
  __typename?: "GroupApplicationMinFields";
  applicationId?: Maybe<Scalars["uuid"]>;
  groupApplicationId?: Maybe<Scalars["uuid"]>;
  groupId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "group_application" */
export type GroupApplicationMinOrderBy = {
  applicationId?: InputMaybe<OrderBy>;
  groupApplicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "group_application" */
export type GroupApplicationMutationResponse = {
  __typename?: "GroupApplicationMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<GroupApplication>;
};

/** on_conflict condition type for table "group_application" */
export type GroupApplicationOnConflict = {
  constraint: GroupApplicationConstraint;
  updateColumns?: Array<GroupApplicationUpdateColumn>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

/** Ordering options when selecting data from "group_application". */
export type GroupApplicationOrderBy = {
  application?: InputMaybe<ApplicationOrderBy>;
  applicationId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupApplicationId?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: group_application */
export type GroupApplicationPkColumnsInput = {
  groupApplicationId: Scalars["uuid"];
};

/** select columns of table "group_application" */
export enum GroupApplicationSelectColumn {
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  GroupApplicationId = "groupApplicationId",
  /** column name */
  GroupId = "groupId",
}

/** input type for updating data in table "group_application" */
export type GroupApplicationSetInput = {
  applicationId?: InputMaybe<Scalars["uuid"]>;
  groupApplicationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "group_application" */
export type GroupApplicationStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupApplicationStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupApplicationStreamCursorValueInput = {
  applicationId?: InputMaybe<Scalars["uuid"]>;
  groupApplicationId?: InputMaybe<Scalars["uuid"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "group_application" */
export enum GroupApplicationUpdateColumn {
  /** column name */
  ApplicationId = "applicationId",
  /** column name */
  GroupApplicationId = "groupApplicationId",
  /** column name */
  GroupId = "groupId",
}

export type GroupApplicationUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GroupApplicationSetInput>;
  /** filter the rows which have to be updated */
  where: GroupApplicationBoolExp;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type GroupBoolExp = {
  _and?: InputMaybe<Array<GroupBoolExp>>;
  _not?: InputMaybe<GroupBoolExp>;
  _or?: InputMaybe<Array<GroupBoolExp>>;
  accounts?: InputMaybe<AccountBoolExp>;
  accountsAggregate?: InputMaybe<AccountAggregateBoolExp>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  categories?: InputMaybe<CategoryBoolExp>;
  categoriesAggregate?: InputMaybe<CategoryAggregateBoolExp>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryBoolExp>;
  credit_card_summariesAggregate?: InputMaybe<CreditCardSummaryAggregateBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateBoolExp>;
  genres?: InputMaybe<GenreBoolExp>;
  genresAggregate?: InputMaybe<GenreAggregateBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  groupName?: InputMaybe<StringComparisonExp>;
  group_applications?: InputMaybe<GroupApplicationBoolExp>;
  group_applicationsAggregate?: InputMaybe<GroupApplicationAggregateBoolExp>;
  import_file_histories?: InputMaybe<ImportFileHistoryBoolExp>;
  import_file_historiesAggregate?: InputMaybe<ImportFileHistoryAggregateBoolExp>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  summary_category_by_groupsAggregate?: InputMaybe<SummaryCategoryByGroupAggregateBoolExp>;
};

/** unique or primary key constraints on table "group" */
export enum GroupConstraint {
  /** unique or primary key constraint on columns "group_id" */
  GroupPkey = "group_pkey",
}

/** input type for inserting data into table "group" */
export type GroupInsertInput = {
  accounts?: InputMaybe<AccountArrRelInsertInput>;
  affiliations?: InputMaybe<AffiliationArrRelInsertInput>;
  categories?: InputMaybe<CategoryArrRelInsertInput>;
  credit_card_summaries?: InputMaybe<CreditCardSummaryArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  genres?: InputMaybe<GenreArrRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupName?: InputMaybe<Scalars["String"]>;
  group_applications?: InputMaybe<GroupApplicationArrRelInsertInput>;
  import_file_histories?: InputMaybe<ImportFileHistoryArrRelInsertInput>;
  summary_category_by_groups?: InputMaybe<SummaryCategoryByGroupArrRelInsertInput>;
};

/** aggregate max on columns */
export type GroupMaxFields = {
  __typename?: "GroupMaxFields";
  groupId?: Maybe<Scalars["uuid"]>;
  groupName?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type GroupMinFields = {
  __typename?: "GroupMinFields";
  groupId?: Maybe<Scalars["uuid"]>;
  groupName?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "group" */
export type GroupMutationResponse = {
  __typename?: "GroupMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** input type for inserting object relation for remote table "group" */
export type GroupObjRelInsertInput = {
  data: GroupInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GroupOnConflict>;
};

/** on_conflict condition type for table "group" */
export type GroupOnConflict = {
  constraint: GroupConstraint;
  updateColumns?: Array<GroupUpdateColumn>;
  where?: InputMaybe<GroupBoolExp>;
};

/** Ordering options when selecting data from "group". */
export type GroupOrderBy = {
  accountsAggregate?: InputMaybe<AccountAggregateOrderBy>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  categoriesAggregate?: InputMaybe<CategoryAggregateOrderBy>;
  credit_card_summariesAggregate?: InputMaybe<CreditCardSummaryAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  genresAggregate?: InputMaybe<GenreAggregateOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  groupName?: InputMaybe<OrderBy>;
  group_applicationsAggregate?: InputMaybe<GroupApplicationAggregateOrderBy>;
  import_file_historiesAggregate?: InputMaybe<ImportFileHistoryAggregateOrderBy>;
  summary_category_by_groupsAggregate?: InputMaybe<SummaryCategoryByGroupAggregateOrderBy>;
};

/** primary key columns input for table: group */
export type GroupPkColumnsInput = {
  groupId: Scalars["uuid"];
};

/** columns and relationships of "group_role" */
export type GroupRole = {
  __typename?: "GroupRole";
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: AffiliationAggregate;
  groupRoleId: Scalars["uuid"];
  role: Scalars["String"];
};

/** columns and relationships of "group_role" */
export type GroupRoleAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** columns and relationships of "group_role" */
export type GroupRoleAffiliationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** aggregated selection of "group_role" */
export type GroupRoleAggregate = {
  __typename?: "GroupRoleAggregate";
  aggregate?: Maybe<GroupRoleAggregateFields>;
  nodes: Array<GroupRole>;
};

/** aggregate fields of "group_role" */
export type GroupRoleAggregateFields = {
  __typename?: "GroupRoleAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<GroupRoleMaxFields>;
  min?: Maybe<GroupRoleMinFields>;
};

/** aggregate fields of "group_role" */
export type GroupRoleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<GroupRoleSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "group_role". All fields are combined with a logical 'AND'. */
export type GroupRoleBoolExp = {
  _and?: InputMaybe<Array<GroupRoleBoolExp>>;
  _not?: InputMaybe<GroupRoleBoolExp>;
  _or?: InputMaybe<Array<GroupRoleBoolExp>>;
  affiliations?: InputMaybe<AffiliationBoolExp>;
  affiliationsAggregate?: InputMaybe<AffiliationAggregateBoolExp>;
  groupRoleId?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "group_role" */
export enum GroupRoleConstraint {
  /** unique or primary key constraint on columns "group_role_id" */
  GroupRolePkey = "group_role_pkey",
}

/** input type for inserting data into table "group_role" */
export type GroupRoleInsertInput = {
  affiliations?: InputMaybe<AffiliationArrRelInsertInput>;
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type GroupRoleMaxFields = {
  __typename?: "GroupRoleMaxFields";
  groupRoleId?: Maybe<Scalars["uuid"]>;
  role?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type GroupRoleMinFields = {
  __typename?: "GroupRoleMinFields";
  groupRoleId?: Maybe<Scalars["uuid"]>;
  role?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "group_role" */
export type GroupRoleMutationResponse = {
  __typename?: "GroupRoleMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<GroupRole>;
};

/** input type for inserting object relation for remote table "group_role" */
export type GroupRoleObjRelInsertInput = {
  data: GroupRoleInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<GroupRoleOnConflict>;
};

/** on_conflict condition type for table "group_role" */
export type GroupRoleOnConflict = {
  constraint: GroupRoleConstraint;
  updateColumns?: Array<GroupRoleUpdateColumn>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

/** Ordering options when selecting data from "group_role". */
export type GroupRoleOrderBy = {
  affiliationsAggregate?: InputMaybe<AffiliationAggregateOrderBy>;
  groupRoleId?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: group_role */
export type GroupRolePkColumnsInput = {
  groupRoleId: Scalars["uuid"];
};

/** select columns of table "group_role" */
export enum GroupRoleSelectColumn {
  /** column name */
  GroupRoleId = "groupRoleId",
  /** column name */
  Role = "role",
}

/** input type for updating data in table "group_role" */
export type GroupRoleSetInput = {
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "group_role" */
export type GroupRoleStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupRoleStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupRoleStreamCursorValueInput = {
  groupRoleId?: InputMaybe<Scalars["uuid"]>;
  role?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "group_role" */
export enum GroupRoleUpdateColumn {
  /** column name */
  GroupRoleId = "groupRoleId",
  /** column name */
  Role = "role",
}

export type GroupRoleUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GroupRoleSetInput>;
  /** filter the rows which have to be updated */
  where: GroupRoleBoolExp;
};

/** select columns of table "group" */
export enum GroupSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupName = "groupName",
}

/** input type for updating data in table "group" */
export type GroupSetInput = {
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupName?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "group" */
export type GroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: GroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type GroupStreamCursorValueInput = {
  groupId?: InputMaybe<Scalars["uuid"]>;
  groupName?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "group" */
export enum GroupUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  GroupName = "groupName",
}

export type GroupUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<GroupSetInput>;
  /** filter the rows which have to be updated */
  where: GroupBoolExp;
};

/** 交換品マスタ */
export type HelperKidsExchangeItem = {
  __typename?: "HelperKidsExchangeItem";
  /** ID */
  exchangeItemId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** An array relationship */
  helpPointExchangedAchievements: Array<HelperKidsHelpPointExchangedAchievement>;
  /** An aggregate relationship */
  helpPointExchangedAchievementsAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 品名 */
  name: Scalars["String"];
  /** 交換ポイント */
  point: Scalars["Int"];
};

/** 交換品マスタ */
export type HelperKidsExchangeItemHelpPointExchangedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** 交換品マスタ */
export type HelperKidsExchangeItemHelpPointExchangedAchievementsAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  };

/** aggregated selection of "helper_kids.exchange_item" */
export type HelperKidsExchangeItemAggregate = {
  __typename?: "HelperKidsExchangeItemAggregate";
  aggregate?: Maybe<HelperKidsExchangeItemAggregateFields>;
  nodes: Array<HelperKidsExchangeItem>;
};

/** aggregate fields of "helper_kids.exchange_item" */
export type HelperKidsExchangeItemAggregateFields = {
  __typename?: "HelperKidsExchangeItemAggregateFields";
  avg?: Maybe<HelperKidsExchangeItemAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsExchangeItemMaxFields>;
  min?: Maybe<HelperKidsExchangeItemMinFields>;
  stddev?: Maybe<HelperKidsExchangeItemStddevFields>;
  stddevPop?: Maybe<HelperKidsExchangeItemStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsExchangeItemStddevSampFields>;
  sum?: Maybe<HelperKidsExchangeItemSumFields>;
  varPop?: Maybe<HelperKidsExchangeItemVarPopFields>;
  varSamp?: Maybe<HelperKidsExchangeItemVarSampFields>;
  variance?: Maybe<HelperKidsExchangeItemVarianceFields>;
};

/** aggregate fields of "helper_kids.exchange_item" */
export type HelperKidsExchangeItemAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type HelperKidsExchangeItemAvgFields = {
  __typename?: "HelperKidsExchangeItemAvgFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "helper_kids.exchange_item". All fields are combined with a logical 'AND'. */
export type HelperKidsExchangeItemBoolExp = {
  _and?: InputMaybe<Array<HelperKidsExchangeItemBoolExp>>;
  _not?: InputMaybe<HelperKidsExchangeItemBoolExp>;
  _or?: InputMaybe<Array<HelperKidsExchangeItemBoolExp>>;
  exchangeItemId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExp>;
  memo?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.exchange_item" */
export enum HelperKidsExchangeItemConstraint {
  /** unique or primary key constraint on columns "exchange_item_id" */
  ExchangeItemPkey = "exchange_item_pkey",
}

/** input type for incrementing numeric columns in table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemIncInput = {
  /** 交換ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemInsertInput = {
  /** ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementArrRelInsertInput>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 品名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 交換ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type HelperKidsExchangeItemMaxFields = {
  __typename?: "HelperKidsExchangeItemMaxFields";
  /** ID */
  exchangeItemId?: Maybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 品名 */
  name?: Maybe<Scalars["String"]>;
  /** 交換ポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type HelperKidsExchangeItemMinFields = {
  __typename?: "HelperKidsExchangeItemMinFields";
  /** ID */
  exchangeItemId?: Maybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 品名 */
  name?: Maybe<Scalars["String"]>;
  /** 交換ポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemMutationResponse = {
  __typename?: "HelperKidsExchangeItemMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsExchangeItem>;
};

/** input type for inserting object relation for remote table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemObjRelInsertInput = {
  data: HelperKidsExchangeItemInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsExchangeItemOnConflict>;
};

/** on_conflict condition type for table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemOnConflict = {
  constraint: HelperKidsExchangeItemConstraint;
  updateColumns?: Array<HelperKidsExchangeItemUpdateColumn>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.exchange_item". */
export type HelperKidsExchangeItemOrderBy = {
  exchangeItemId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateOrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: helper_kids.exchange_item */
export type HelperKidsExchangeItemPkColumnsInput = {
  /** ID */
  exchangeItemId: Scalars["uuid"];
};

/** select columns of table "helper_kids.exchange_item" */
export enum HelperKidsExchangeItemSelectColumn {
  /** column name */
  ExchangeItemId = "exchangeItemId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Memo = "memo",
  /** column name */
  Name = "name",
  /** column name */
  Point = "point",
}

/** input type for updating data in table "helper_kids.exchange_item" */
export type HelperKidsExchangeItemSetInput = {
  /** ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 品名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 交換ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type HelperKidsExchangeItemStddevFields = {
  __typename?: "HelperKidsExchangeItemStddevFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HelperKidsExchangeItemStddevPopFields = {
  __typename?: "HelperKidsExchangeItemStddevPopFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsExchangeItemStddevSampFields = {
  __typename?: "HelperKidsExchangeItemStddevSampFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "helper_kids_exchange_item" */
export type HelperKidsExchangeItemStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsExchangeItemStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsExchangeItemStreamCursorValueInput = {
  /** ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 品名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 交換ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type HelperKidsExchangeItemSumFields = {
  __typename?: "HelperKidsExchangeItemSumFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** update columns of table "helper_kids.exchange_item" */
export enum HelperKidsExchangeItemUpdateColumn {
  /** column name */
  ExchangeItemId = "exchangeItemId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Memo = "memo",
  /** column name */
  Name = "name",
  /** column name */
  Point = "point",
}

export type HelperKidsExchangeItemUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HelperKidsExchangeItemIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsExchangeItemSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsExchangeItemBoolExp;
};

/** aggregate varPop on columns */
export type HelperKidsExchangeItemVarPopFields = {
  __typename?: "HelperKidsExchangeItemVarPopFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HelperKidsExchangeItemVarSampFields = {
  __typename?: "HelperKidsExchangeItemVarSampFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HelperKidsExchangeItemVarianceFields = {
  __typename?: "HelperKidsExchangeItemVarianceFields";
  /** 交換ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** お手伝い項目マスタ */
export type HelperKidsHelpItem = {
  __typename?: "HelperKidsHelpItem";
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** ID */
  helpItemId: Scalars["uuid"];
  /** An array relationship */
  helpPointEarnedDetails: Array<HelperKidsHelpPointEarnedDetail>;
  /** An aggregate relationship */
  helpPointEarnedDetailsAggregate: HelperKidsHelpPointEarnedDetailAggregate;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 項目名 */
  name: Scalars["String"];
  /** お手伝いポイント */
  point: Scalars["Int"];
};

/** お手伝い項目マスタ */
export type HelperKidsHelpItemHelpPointEarnedDetailsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** お手伝い項目マスタ */
export type HelperKidsHelpItemHelpPointEarnedDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** aggregated selection of "helper_kids.help_item" */
export type HelperKidsHelpItemAggregate = {
  __typename?: "HelperKidsHelpItemAggregate";
  aggregate?: Maybe<HelperKidsHelpItemAggregateFields>;
  nodes: Array<HelperKidsHelpItem>;
};

/** aggregate fields of "helper_kids.help_item" */
export type HelperKidsHelpItemAggregateFields = {
  __typename?: "HelperKidsHelpItemAggregateFields";
  avg?: Maybe<HelperKidsHelpItemAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelpItemMaxFields>;
  min?: Maybe<HelperKidsHelpItemMinFields>;
  stddev?: Maybe<HelperKidsHelpItemStddevFields>;
  stddevPop?: Maybe<HelperKidsHelpItemStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelpItemStddevSampFields>;
  sum?: Maybe<HelperKidsHelpItemSumFields>;
  varPop?: Maybe<HelperKidsHelpItemVarPopFields>;
  varSamp?: Maybe<HelperKidsHelpItemVarSampFields>;
  variance?: Maybe<HelperKidsHelpItemVarianceFields>;
};

/** aggregate fields of "helper_kids.help_item" */
export type HelperKidsHelpItemAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type HelperKidsHelpItemAvgFields = {
  __typename?: "HelperKidsHelpItemAvgFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_item". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpItemBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpItemBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpItemBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpItemBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpItemId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateBoolExp>;
  memo?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_item" */
export enum HelperKidsHelpItemConstraint {
  /** unique or primary key constraint on columns "help_item_id" */
  HelpItemPkey = "help_item_pkey",
}

/** input type for incrementing numeric columns in table "helper_kids.help_item" */
export type HelperKidsHelpItemIncInput = {
  /** お手伝いポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "helper_kids.help_item" */
export type HelperKidsHelpItemInsertInput = {
  group?: InputMaybe<GroupObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailArrRelInsertInput>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 項目名 */
  name?: InputMaybe<Scalars["String"]>;
  /** お手伝いポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type HelperKidsHelpItemMaxFields = {
  __typename?: "HelperKidsHelpItemMaxFields";
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpItemId?: Maybe<Scalars["uuid"]>;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 項目名 */
  name?: Maybe<Scalars["String"]>;
  /** お手伝いポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type HelperKidsHelpItemMinFields = {
  __typename?: "HelperKidsHelpItemMinFields";
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpItemId?: Maybe<Scalars["uuid"]>;
  /** メモ */
  memo?: Maybe<Scalars["String"]>;
  /** 項目名 */
  name?: Maybe<Scalars["String"]>;
  /** お手伝いポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "helper_kids.help_item" */
export type HelperKidsHelpItemMutationResponse = {
  __typename?: "HelperKidsHelpItemMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpItem>;
};

/** input type for inserting object relation for remote table "helper_kids.help_item" */
export type HelperKidsHelpItemObjRelInsertInput = {
  data: HelperKidsHelpItemInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpItemOnConflict>;
};

/** on_conflict condition type for table "helper_kids.help_item" */
export type HelperKidsHelpItemOnConflict = {
  constraint: HelperKidsHelpItemConstraint;
  updateColumns?: Array<HelperKidsHelpItemUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_item". */
export type HelperKidsHelpItemOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpItemId?: InputMaybe<OrderBy>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateOrderBy>;
  memo?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: helper_kids.help_item */
export type HelperKidsHelpItemPkColumnsInput = {
  /** ID */
  helpItemId: Scalars["uuid"];
};

/** select columns of table "helper_kids.help_item" */
export enum HelperKidsHelpItemSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpItemId = "helpItemId",
  /** column name */
  Memo = "memo",
  /** column name */
  Name = "name",
  /** column name */
  Point = "point",
}

/** input type for updating data in table "helper_kids.help_item" */
export type HelperKidsHelpItemSetInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 項目名 */
  name?: InputMaybe<Scalars["String"]>;
  /** お手伝いポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type HelperKidsHelpItemStddevFields = {
  __typename?: "HelperKidsHelpItemStddevFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelpItemStddevPopFields = {
  __typename?: "HelperKidsHelpItemStddevPopFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelpItemStddevSampFields = {
  __typename?: "HelperKidsHelpItemStddevSampFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "helper_kids_help_item" */
export type HelperKidsHelpItemStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpItemStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpItemStreamCursorValueInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** メモ */
  memo?: InputMaybe<Scalars["String"]>;
  /** 項目名 */
  name?: InputMaybe<Scalars["String"]>;
  /** お手伝いポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelpItemSumFields = {
  __typename?: "HelperKidsHelpItemSumFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** update columns of table "helper_kids.help_item" */
export enum HelperKidsHelpItemUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpItemId = "helpItemId",
  /** column name */
  Memo = "memo",
  /** column name */
  Name = "name",
  /** column name */
  Point = "point",
}

export type HelperKidsHelpItemUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HelperKidsHelpItemIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelpItemSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelpItemBoolExp;
};

/** aggregate varPop on columns */
export type HelperKidsHelpItemVarPopFields = {
  __typename?: "HelperKidsHelpItemVarPopFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelpItemVarSampFields = {
  __typename?: "HelperKidsHelpItemVarSampFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HelperKidsHelpItemVarianceFields = {
  __typename?: "HelperKidsHelpItemVarianceFields";
  /** お手伝いポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** お手伝いポイント獲得実績 */
export type HelperKidsHelpPointEarnedAchievement = {
  __typename?: "HelperKidsHelpPointEarnedAchievement";
  /** 獲得日時 */
  earnedDatetime: Scalars["timestamp"];
  /** 獲得ポイント */
  earnedPoint: Scalars["Int"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** ID */
  helpPointEarnedAchievementId: Scalars["uuid"];
  /** An array relationship */
  helpPointEarnedDetails: Array<HelperKidsHelpPointEarnedDetail>;
  /** An aggregate relationship */
  helpPointEarnedDetailsAggregate: HelperKidsHelpPointEarnedDetailAggregate;
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
};

/** お手伝いポイント獲得実績 */
export type HelperKidsHelpPointEarnedAchievementHelpPointEarnedDetailsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** お手伝いポイント獲得実績 */
export type HelperKidsHelpPointEarnedAchievementHelpPointEarnedDetailsAggregateArgs =
  {
    distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  };

/** aggregated selection of "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregate = {
  __typename?: "HelperKidsHelpPointEarnedAchievementAggregate";
  aggregate?: Maybe<HelperKidsHelpPointEarnedAchievementAggregateFields>;
  nodes: Array<HelperKidsHelpPointEarnedAchievement>;
};

export type HelperKidsHelpPointEarnedAchievementAggregateBoolExp = {
  count?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateBoolExpCount>;
};

/** aggregate fields of "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregateFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementAggregateFields";
  avg?: Maybe<HelperKidsHelpPointEarnedAchievementAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelpPointEarnedAchievementMaxFields>;
  min?: Maybe<HelperKidsHelpPointEarnedAchievementMinFields>;
  stddev?: Maybe<HelperKidsHelpPointEarnedAchievementStddevFields>;
  stddevPop?: Maybe<HelperKidsHelpPointEarnedAchievementStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelpPointEarnedAchievementStddevSampFields>;
  sum?: Maybe<HelperKidsHelpPointEarnedAchievementSumFields>;
  varPop?: Maybe<HelperKidsHelpPointEarnedAchievementVarPopFields>;
  varSamp?: Maybe<HelperKidsHelpPointEarnedAchievementVarSampFields>;
  variance?: Maybe<HelperKidsHelpPointEarnedAchievementVarianceFields>;
};

/** aggregate fields of "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpPointEarnedAchievementAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpPointEarnedAchievementMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpPointEarnedAchievementMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpPointEarnedAchievementStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpPointEarnedAchievementStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpPointEarnedAchievementStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpPointEarnedAchievementSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpPointEarnedAchievementVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpPointEarnedAchievementVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpPointEarnedAchievementVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementArrRelInsertInput = {
  data: Array<HelperKidsHelpPointEarnedAchievementInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** aggregate avg on columns */
export type HelperKidsHelpPointEarnedAchievementAvgFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementAvgFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementAvgOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_point_earned_achievement". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpPointEarnedAchievementBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementBoolExp>>;
  earnedDatetime?: InputMaybe<TimestampComparisonExp>;
  earnedPoint?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedAchievementId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateBoolExp>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_point_earned_achievement" */
export enum HelperKidsHelpPointEarnedAchievementConstraint {
  /** unique or primary key constraint on columns "help_point_earned_achievement_id" */
  HelpPointEarnedAchievementPkey = "help_point_earned_achievement_pkey",
}

/** input type for incrementing numeric columns in table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementIncInput = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementInsertInput = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<Scalars["Int"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  helpPointEarnedDetails?: InputMaybe<HelperKidsHelpPointEarnedDetailArrRelInsertInput>;
  helperKid?: InputMaybe<HelperKidsHelperKidObjRelInsertInput>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type HelperKidsHelpPointEarnedAchievementMaxFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementMaxFields";
  /** 獲得日時 */
  earnedDatetime?: Maybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Int"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementMaxOrderBy = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<OrderBy>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HelperKidsHelpPointEarnedAchievementMinFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementMinFields";
  /** 獲得日時 */
  earnedDatetime?: Maybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Int"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementMinOrderBy = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<OrderBy>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementMutationResponse = {
  __typename?: "HelperKidsHelpPointEarnedAchievementMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpPointEarnedAchievement>;
};

/** input type for inserting object relation for remote table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementObjRelInsertInput = {
  data: HelperKidsHelpPointEarnedAchievementInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** on_conflict condition type for table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementOnConflict = {
  constraint: HelperKidsHelpPointEarnedAchievementConstraint;
  updateColumns?: Array<HelperKidsHelpPointEarnedAchievementUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_point_earned_achievement". */
export type HelperKidsHelpPointEarnedAchievementOrderBy = {
  earnedDatetime?: InputMaybe<OrderBy>;
  earnedPoint?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointEarnedAchievementId?: InputMaybe<OrderBy>;
  helpPointEarnedDetailsAggregate?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateOrderBy>;
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: helper_kids.help_point_earned_achievement */
export type HelperKidsHelpPointEarnedAchievementPkColumnsInput = {
  /** ID */
  helpPointEarnedAchievementId: Scalars["uuid"];
};

/** select columns of table "helper_kids.help_point_earned_achievement" */
export enum HelperKidsHelpPointEarnedAchievementSelectColumn {
  /** column name */
  EarnedDatetime = "earnedDatetime",
  /** column name */
  EarnedPoint = "earnedPoint",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpPointEarnedAchievementId = "helpPointEarnedAchievementId",
  /** column name */
  HelperKidId = "helperKidId",
}

/** input type for updating data in table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementSetInput = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<Scalars["Int"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type HelperKidsHelpPointEarnedAchievementStddevFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementStddevFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStddevOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelpPointEarnedAchievementStddevPopFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementStddevPopFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStddevPopOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelpPointEarnedAchievementStddevSampFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementStddevSampFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStddevSampOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpPointEarnedAchievementStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpPointEarnedAchievementStreamCursorValueInput = {
  /** 獲得日時 */
  earnedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<Scalars["Int"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointEarnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelpPointEarnedAchievementSumFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementSumFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementSumOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** update columns of table "helper_kids.help_point_earned_achievement" */
export enum HelperKidsHelpPointEarnedAchievementUpdateColumn {
  /** column name */
  EarnedDatetime = "earnedDatetime",
  /** column name */
  EarnedPoint = "earnedPoint",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpPointEarnedAchievementId = "helpPointEarnedAchievementId",
  /** column name */
  HelperKidId = "helperKidId",
}

export type HelperKidsHelpPointEarnedAchievementUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HelperKidsHelpPointEarnedAchievementIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelpPointEarnedAchievementSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelpPointEarnedAchievementBoolExp;
};

/** aggregate varPop on columns */
export type HelperKidsHelpPointEarnedAchievementVarPopFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementVarPopFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementVarPopOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelpPointEarnedAchievementVarSampFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementVarSampFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementVarSampOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HelperKidsHelpPointEarnedAchievementVarianceFields = {
  __typename?: "HelperKidsHelpPointEarnedAchievementVarianceFields";
  /** 獲得ポイント */
  earnedPoint?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "helper_kids.help_point_earned_achievement" */
export type HelperKidsHelpPointEarnedAchievementVarianceOrderBy = {
  /** 獲得ポイント */
  earnedPoint?: InputMaybe<OrderBy>;
};

/** お手伝いポイント獲得明細 */
export type HelperKidsHelpPointEarnedDetail = {
  __typename?: "HelperKidsHelpPointEarnedDetail";
  /** 獲得実績ID */
  earnedAchievementId: Scalars["uuid"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** An object relationship */
  helpItem: HelperKidsHelpItem;
  /** お手伝い項目件数 */
  helpItemCount: Scalars["Int"];
  /** お手伝い項目ID */
  helpItemId: Scalars["uuid"];
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint: Scalars["Int"];
  /** An object relationship */
  helpPointEarnedAchievement: HelperKidsHelpPointEarnedAchievement;
  /** ID */
  helpPointEarnedDetailId: Scalars["uuid"];
};

/** aggregated selection of "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAggregate = {
  __typename?: "HelperKidsHelpPointEarnedDetailAggregate";
  aggregate?: Maybe<HelperKidsHelpPointEarnedDetailAggregateFields>;
  nodes: Array<HelperKidsHelpPointEarnedDetail>;
};

export type HelperKidsHelpPointEarnedDetailAggregateBoolExp = {
  count?: InputMaybe<HelperKidsHelpPointEarnedDetailAggregateBoolExpCount>;
};

/** aggregate fields of "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAggregateFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailAggregateFields";
  avg?: Maybe<HelperKidsHelpPointEarnedDetailAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelpPointEarnedDetailMaxFields>;
  min?: Maybe<HelperKidsHelpPointEarnedDetailMinFields>;
  stddev?: Maybe<HelperKidsHelpPointEarnedDetailStddevFields>;
  stddevPop?: Maybe<HelperKidsHelpPointEarnedDetailStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelpPointEarnedDetailStddevSampFields>;
  sum?: Maybe<HelperKidsHelpPointEarnedDetailSumFields>;
  varPop?: Maybe<HelperKidsHelpPointEarnedDetailVarPopFields>;
  varSamp?: Maybe<HelperKidsHelpPointEarnedDetailVarSampFields>;
  variance?: Maybe<HelperKidsHelpPointEarnedDetailVarianceFields>;
};

/** aggregate fields of "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpPointEarnedDetailAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpPointEarnedDetailMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpPointEarnedDetailMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpPointEarnedDetailStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpPointEarnedDetailStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpPointEarnedDetailStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpPointEarnedDetailSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpPointEarnedDetailVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpPointEarnedDetailVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpPointEarnedDetailVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailArrRelInsertInput = {
  data: Array<HelperKidsHelpPointEarnedDetailInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedDetailOnConflict>;
};

/** aggregate avg on columns */
export type HelperKidsHelpPointEarnedDetailAvgFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailAvgFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailAvgOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_point_earned_detail". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpPointEarnedDetailBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailBoolExp>>;
  earnedAchievementId?: InputMaybe<UuidComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpItem?: InputMaybe<HelperKidsHelpItemBoolExp>;
  helpItemCount?: InputMaybe<IntComparisonExp>;
  helpItemId?: InputMaybe<UuidComparisonExp>;
  helpItemTotalPoint?: InputMaybe<IntComparisonExp>;
  helpPointEarnedAchievement?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  helpPointEarnedDetailId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_point_earned_detail" */
export enum HelperKidsHelpPointEarnedDetailConstraint {
  /** unique or primary key constraint on columns "help_point_earned_detail_id" */
  HelpPointEarnedDetailPkey = "help_point_earned_detail_pkey",
}

/** input type for incrementing numeric columns in table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailIncInput = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<Scalars["Int"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailInsertInput = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  helpItem?: InputMaybe<HelperKidsHelpItemObjRelInsertInput>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<Scalars["Int"]>;
  helpPointEarnedAchievement?: InputMaybe<HelperKidsHelpPointEarnedAchievementObjRelInsertInput>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type HelperKidsHelpPointEarnedDetailMaxFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailMaxFields";
  /** 獲得実績ID */
  earnedAchievementId?: Maybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: Maybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Int"]>;
  /** ID */
  helpPointEarnedDetailId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailMaxOrderBy = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HelperKidsHelpPointEarnedDetailMinFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailMinFields";
  /** 獲得実績ID */
  earnedAchievementId?: Maybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: Maybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Int"]>;
  /** ID */
  helpPointEarnedDetailId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailMinOrderBy = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailMutationResponse = {
  __typename?: "HelperKidsHelpPointEarnedDetailMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpPointEarnedDetail>;
};

/** on_conflict condition type for table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailOnConflict = {
  constraint: HelperKidsHelpPointEarnedDetailConstraint;
  updateColumns?: Array<HelperKidsHelpPointEarnedDetailUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_point_earned_detail". */
export type HelperKidsHelpPointEarnedDetailOrderBy = {
  earnedAchievementId?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpItem?: InputMaybe<HelperKidsHelpItemOrderBy>;
  helpItemCount?: InputMaybe<OrderBy>;
  helpItemId?: InputMaybe<OrderBy>;
  helpItemTotalPoint?: InputMaybe<OrderBy>;
  helpPointEarnedAchievement?: InputMaybe<HelperKidsHelpPointEarnedAchievementOrderBy>;
  helpPointEarnedDetailId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: helper_kids.help_point_earned_detail */
export type HelperKidsHelpPointEarnedDetailPkColumnsInput = {
  /** ID */
  helpPointEarnedDetailId: Scalars["uuid"];
};

/** select columns of table "helper_kids.help_point_earned_detail" */
export enum HelperKidsHelpPointEarnedDetailSelectColumn {
  /** column name */
  EarnedAchievementId = "earnedAchievementId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpItemCount = "helpItemCount",
  /** column name */
  HelpItemId = "helpItemId",
  /** column name */
  HelpItemTotalPoint = "helpItemTotalPoint",
  /** column name */
  HelpPointEarnedDetailId = "helpPointEarnedDetailId",
}

/** input type for updating data in table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailSetInput = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type HelperKidsHelpPointEarnedDetailStddevFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailStddevFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStddevOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelpPointEarnedDetailStddevPopFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailStddevPopFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStddevPopOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelpPointEarnedDetailStddevSampFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailStddevSampFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStddevSampOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpPointEarnedDetailStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpPointEarnedDetailStreamCursorValueInput = {
  /** 獲得実績ID */
  earnedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<Scalars["Int"]>;
  /** お手伝い項目ID */
  helpItemId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** ID */
  helpPointEarnedDetailId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelpPointEarnedDetailSumFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailSumFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Int"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailSumOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** update columns of table "helper_kids.help_point_earned_detail" */
export enum HelperKidsHelpPointEarnedDetailUpdateColumn {
  /** column name */
  EarnedAchievementId = "earnedAchievementId",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpItemCount = "helpItemCount",
  /** column name */
  HelpItemId = "helpItemId",
  /** column name */
  HelpItemTotalPoint = "helpItemTotalPoint",
  /** column name */
  HelpPointEarnedDetailId = "helpPointEarnedDetailId",
}

export type HelperKidsHelpPointEarnedDetailUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HelperKidsHelpPointEarnedDetailIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelpPointEarnedDetailSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelpPointEarnedDetailBoolExp;
};

/** aggregate varPop on columns */
export type HelperKidsHelpPointEarnedDetailVarPopFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailVarPopFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailVarPopOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelpPointEarnedDetailVarSampFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailVarSampFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailVarSampOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HelperKidsHelpPointEarnedDetailVarianceFields = {
  __typename?: "HelperKidsHelpPointEarnedDetailVarianceFields";
  /** お手伝い項目件数 */
  helpItemCount?: Maybe<Scalars["Float"]>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "helper_kids.help_point_earned_detail" */
export type HelperKidsHelpPointEarnedDetailVarianceOrderBy = {
  /** お手伝い項目件数 */
  helpItemCount?: InputMaybe<OrderBy>;
  /** お手伝い項目合計ポイント */
  helpItemTotalPoint?: InputMaybe<OrderBy>;
};

/** お手伝いポイント交換実績 */
export type HelperKidsHelpPointExchangedAchievement = {
  __typename?: "HelperKidsHelpPointExchangedAchievement";
  /** 交換件数 */
  exchangeCount: Scalars["Int"];
  /** An object relationship */
  exchangeItem: HelperKidsExchangeItem;
  /** 交換品ID */
  exchangeItemId: Scalars["uuid"];
  /** 交換合計ポイント */
  exchangeTotalPoint: Scalars["Int"];
  /** 交換日時 */
  exchangedDatetime: Scalars["timestamp"];
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** ID */
  helpPointExchangedAchievementId: Scalars["uuid"];
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
};

/** aggregated selection of "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregate = {
  __typename?: "HelperKidsHelpPointExchangedAchievementAggregate";
  aggregate?: Maybe<HelperKidsHelpPointExchangedAchievementAggregateFields>;
  nodes: Array<HelperKidsHelpPointExchangedAchievement>;
};

export type HelperKidsHelpPointExchangedAchievementAggregateBoolExp = {
  count?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExpCount>;
};

/** aggregate fields of "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregateFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementAggregateFields";
  avg?: Maybe<HelperKidsHelpPointExchangedAchievementAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelpPointExchangedAchievementMaxFields>;
  min?: Maybe<HelperKidsHelpPointExchangedAchievementMinFields>;
  stddev?: Maybe<HelperKidsHelpPointExchangedAchievementStddevFields>;
  stddevPop?: Maybe<HelperKidsHelpPointExchangedAchievementStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelpPointExchangedAchievementStddevSampFields>;
  sum?: Maybe<HelperKidsHelpPointExchangedAchievementSumFields>;
  varPop?: Maybe<HelperKidsHelpPointExchangedAchievementVarPopFields>;
  varSamp?: Maybe<HelperKidsHelpPointExchangedAchievementVarSampFields>;
  variance?: Maybe<HelperKidsHelpPointExchangedAchievementVarianceFields>;
};

/** aggregate fields of "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregateFieldsCountArgs = {
  columns?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAggregateOrderBy = {
  avg?: InputMaybe<HelperKidsHelpPointExchangedAchievementAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelpPointExchangedAchievementMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelpPointExchangedAchievementMinOrderBy>;
  stddev?: InputMaybe<HelperKidsHelpPointExchangedAchievementStddevOrderBy>;
  stddevPop?: InputMaybe<HelperKidsHelpPointExchangedAchievementStddevPopOrderBy>;
  stddevSamp?: InputMaybe<HelperKidsHelpPointExchangedAchievementStddevSampOrderBy>;
  sum?: InputMaybe<HelperKidsHelpPointExchangedAchievementSumOrderBy>;
  varPop?: InputMaybe<HelperKidsHelpPointExchangedAchievementVarPopOrderBy>;
  varSamp?: InputMaybe<HelperKidsHelpPointExchangedAchievementVarSampOrderBy>;
  variance?: InputMaybe<HelperKidsHelpPointExchangedAchievementVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementArrRelInsertInput = {
  data: Array<HelperKidsHelpPointExchangedAchievementInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelpPointExchangedAchievementOnConflict>;
};

/** aggregate avg on columns */
export type HelperKidsHelpPointExchangedAchievementAvgFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementAvgFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementAvgOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "helper_kids.help_point_exchanged_achievement". All fields are combined with a logical 'AND'. */
export type HelperKidsHelpPointExchangedAchievementBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementBoolExp>>;
  _not?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementBoolExp>>;
  exchangeCount?: InputMaybe<IntComparisonExp>;
  exchangeItem?: InputMaybe<HelperKidsExchangeItemBoolExp>;
  exchangeItemId?: InputMaybe<UuidComparisonExp>;
  exchangeTotalPoint?: InputMaybe<IntComparisonExp>;
  exchangedDatetime?: InputMaybe<TimestampComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointExchangedAchievementId?: InputMaybe<UuidComparisonExp>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.help_point_exchanged_achievement" */
export enum HelperKidsHelpPointExchangedAchievementConstraint {
  /** unique or primary key constraint on columns "help_point_exchanged_achievement_id" */
  HelpPointExchangedAchievementPkey = "help_point_exchanged_achievement_pkey",
}

/** input type for incrementing numeric columns in table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementIncInput = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<Scalars["Int"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementInsertInput = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<Scalars["Int"]>;
  exchangeItem?: InputMaybe<HelperKidsExchangeItemObjRelInsertInput>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<Scalars["timestamp"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<Scalars["uuid"]>;
  helperKid?: InputMaybe<HelperKidsHelperKidObjRelInsertInput>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type HelperKidsHelpPointExchangedAchievementMaxFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementMaxFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: Maybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: Maybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementMaxOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HelperKidsHelpPointExchangedAchievementMinFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementMinFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: Maybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: Maybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: Maybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementMinOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<OrderBy>;
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<OrderBy>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementMutationResponse = {
  __typename?: "HelperKidsHelpPointExchangedAchievementMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelpPointExchangedAchievement>;
};

/** on_conflict condition type for table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementOnConflict = {
  constraint: HelperKidsHelpPointExchangedAchievementConstraint;
  updateColumns?: Array<HelperKidsHelpPointExchangedAchievementUpdateColumn>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.help_point_exchanged_achievement". */
export type HelperKidsHelpPointExchangedAchievementOrderBy = {
  exchangeCount?: InputMaybe<OrderBy>;
  exchangeItem?: InputMaybe<HelperKidsExchangeItemOrderBy>;
  exchangeItemId?: InputMaybe<OrderBy>;
  exchangeTotalPoint?: InputMaybe<OrderBy>;
  exchangedDatetime?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointExchangedAchievementId?: InputMaybe<OrderBy>;
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: helper_kids.help_point_exchanged_achievement */
export type HelperKidsHelpPointExchangedAchievementPkColumnsInput = {
  /** ID */
  helpPointExchangedAchievementId: Scalars["uuid"];
};

/** select columns of table "helper_kids.help_point_exchanged_achievement" */
export enum HelperKidsHelpPointExchangedAchievementSelectColumn {
  /** column name */
  ExchangeCount = "exchangeCount",
  /** column name */
  ExchangeItemId = "exchangeItemId",
  /** column name */
  ExchangeTotalPoint = "exchangeTotalPoint",
  /** column name */
  ExchangedDatetime = "exchangedDatetime",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpPointExchangedAchievementId = "helpPointExchangedAchievementId",
  /** column name */
  HelperKidId = "helperKidId",
}

/** input type for updating data in table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementSetInput = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type HelperKidsHelpPointExchangedAchievementStddevFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementStddevFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStddevOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelpPointExchangedAchievementStddevPopFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementStddevPopFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStddevPopOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelpPointExchangedAchievementStddevSampFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementStddevSampFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStddevSampOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "helper_kids_help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelpPointExchangedAchievementStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelpPointExchangedAchievementStreamCursorValueInput = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<Scalars["Int"]>;
  /** 交換品ID */
  exchangeItemId?: InputMaybe<Scalars["uuid"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<Scalars["Int"]>;
  /** 交換日時 */
  exchangedDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helpPointExchangedAchievementId?: InputMaybe<Scalars["uuid"]>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelpPointExchangedAchievementSumFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementSumFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Int"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementSumOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** update columns of table "helper_kids.help_point_exchanged_achievement" */
export enum HelperKidsHelpPointExchangedAchievementUpdateColumn {
  /** column name */
  ExchangeCount = "exchangeCount",
  /** column name */
  ExchangeItemId = "exchangeItemId",
  /** column name */
  ExchangeTotalPoint = "exchangeTotalPoint",
  /** column name */
  ExchangedDatetime = "exchangedDatetime",
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelpPointExchangedAchievementId = "helpPointExchangedAchievementId",
  /** column name */
  HelperKidId = "helperKidId",
}

export type HelperKidsHelpPointExchangedAchievementUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HelperKidsHelpPointExchangedAchievementIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelpPointExchangedAchievementSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelpPointExchangedAchievementBoolExp;
};

/** aggregate varPop on columns */
export type HelperKidsHelpPointExchangedAchievementVarPopFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementVarPopFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementVarPopOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelpPointExchangedAchievementVarSampFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementVarSampFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementVarSampOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type HelperKidsHelpPointExchangedAchievementVarianceFields = {
  __typename?: "HelperKidsHelpPointExchangedAchievementVarianceFields";
  /** 交換件数 */
  exchangeCount?: Maybe<Scalars["Float"]>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "helper_kids.help_point_exchanged_achievement" */
export type HelperKidsHelpPointExchangedAchievementVarianceOrderBy = {
  /** 交換件数 */
  exchangeCount?: InputMaybe<OrderBy>;
  /** 交換合計ポイント */
  exchangeTotalPoint?: InputMaybe<OrderBy>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKid = {
  __typename?: "HelperKidsHelperKid";
  /** An object relationship */
  group: Group;
  /** グループID */
  groupId: Scalars["uuid"];
  /** An array relationship */
  helpPointEarnedAchievements: Array<HelperKidsHelpPointEarnedAchievement>;
  /** An aggregate relationship */
  helpPointEarnedAchievementsAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** An array relationship */
  helpPointExchangedAchievements: Array<HelperKidsHelpPointExchangedAchievement>;
  /** An aggregate relationship */
  helpPointExchangedAchievementsAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** ID */
  helperKidId: Scalars["uuid"];
  /** An array relationship */
  helperKidParents: Array<HelperKidsHelperKidParent>;
  /** An aggregate relationship */
  helperKidParentsAggregate: HelperKidsHelperKidParentAggregate;
  /** An object relationship */
  helperKidPoint?: Maybe<HelperKidsHelperKidPoint>;
  /** 氏名 */
  name: Scalars["String"];
  /** 名前 接尾辞 */
  nameSuffix: Scalars["String"];
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointEarnedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointEarnedAchievementsAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointExchangedAchievementsArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelpPointExchangedAchievementsAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelperKidParentsArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

/** お手伝いキッズマスタ */
export type HelperKidsHelperKidHelperKidParentsAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

/** aggregated selection of "helper_kids.helper_kid" */
export type HelperKidsHelperKidAggregate = {
  __typename?: "HelperKidsHelperKidAggregate";
  aggregate?: Maybe<HelperKidsHelperKidAggregateFields>;
  nodes: Array<HelperKidsHelperKid>;
};

/** aggregate fields of "helper_kids.helper_kid" */
export type HelperKidsHelperKidAggregateFields = {
  __typename?: "HelperKidsHelperKidAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelperKidMaxFields>;
  min?: Maybe<HelperKidsHelperKidMinFields>;
};

/** aggregate fields of "helper_kids.helper_kid" */
export type HelperKidsHelperKidAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** Boolean expression to filter rows from the table "helper_kids.helper_kid". All fields are combined with a logical 'AND'. */
export type HelperKidsHelperKidBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelperKidBoolExp>>;
  _not?: InputMaybe<HelperKidsHelperKidBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelperKidBoolExp>>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  helpPointEarnedAchievements?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  helpPointEarnedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateBoolExp>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
  helperKidParents?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
  helperKidParentsAggregate?: InputMaybe<HelperKidsHelperKidParentAggregateBoolExp>;
  helperKidPoint?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
  name?: InputMaybe<StringComparisonExp>;
  nameSuffix?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.helper_kid" */
export enum HelperKidsHelperKidConstraint {
  /** unique or primary key constraint on columns "helper_kid_id" */
  HelperKidPkey = "helper_kid_pkey",
}

/** input type for inserting data into table "helper_kids.helper_kid" */
export type HelperKidsHelperKidInsertInput = {
  group?: InputMaybe<GroupObjRelInsertInput>;
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  helpPointEarnedAchievements?: InputMaybe<HelperKidsHelpPointEarnedAchievementArrRelInsertInput>;
  helpPointExchangedAchievements?: InputMaybe<HelperKidsHelpPointExchangedAchievementArrRelInsertInput>;
  /** ID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  helperKidParents?: InputMaybe<HelperKidsHelperKidParentArrRelInsertInput>;
  helperKidPoint?: InputMaybe<HelperKidsHelperKidPointObjRelInsertInput>;
  /** 氏名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 名前 接尾辞 */
  nameSuffix?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type HelperKidsHelperKidMaxFields = {
  __typename?: "HelperKidsHelperKidMaxFields";
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helperKidId?: Maybe<Scalars["uuid"]>;
  /** 氏名 */
  name?: Maybe<Scalars["String"]>;
  /** 名前 接尾辞 */
  nameSuffix?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type HelperKidsHelperKidMinFields = {
  __typename?: "HelperKidsHelperKidMinFields";
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** ID */
  helperKidId?: Maybe<Scalars["uuid"]>;
  /** 氏名 */
  name?: Maybe<Scalars["String"]>;
  /** 名前 接尾辞 */
  nameSuffix?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "helper_kids.helper_kid" */
export type HelperKidsHelperKidMutationResponse = {
  __typename?: "HelperKidsHelperKidMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelperKid>;
};

/** input type for inserting object relation for remote table "helper_kids.helper_kid" */
export type HelperKidsHelperKidObjRelInsertInput = {
  data: HelperKidsHelperKidInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelperKidOnConflict>;
};

/** on_conflict condition type for table "helper_kids.helper_kid" */
export type HelperKidsHelperKidOnConflict = {
  constraint: HelperKidsHelperKidConstraint;
  updateColumns?: Array<HelperKidsHelperKidUpdateColumn>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.helper_kid". */
export type HelperKidsHelperKidOrderBy = {
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  helpPointEarnedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointEarnedAchievementAggregateOrderBy>;
  helpPointExchangedAchievementsAggregate?: InputMaybe<HelperKidsHelpPointExchangedAchievementAggregateOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentsAggregate?: InputMaybe<HelperKidsHelperKidParentAggregateOrderBy>;
  helperKidPoint?: InputMaybe<HelperKidsHelperKidPointOrderBy>;
  name?: InputMaybe<OrderBy>;
  nameSuffix?: InputMaybe<OrderBy>;
};

/** columns and relationships of "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParent = {
  __typename?: "HelperKidsHelperKidParent";
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  helperKidId: Scalars["uuid"];
  helperKidParentId: Scalars["uuid"];
  parentUserId: Scalars["uuid"];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentAggregate = {
  __typename?: "HelperKidsHelperKidParentAggregate";
  aggregate?: Maybe<HelperKidsHelperKidParentAggregateFields>;
  nodes: Array<HelperKidsHelperKidParent>;
};

export type HelperKidsHelperKidParentAggregateBoolExp = {
  count?: InputMaybe<HelperKidsHelperKidParentAggregateBoolExpCount>;
};

/** aggregate fields of "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentAggregateFields = {
  __typename?: "HelperKidsHelperKidParentAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelperKidParentMaxFields>;
  min?: Maybe<HelperKidsHelperKidParentMinFields>;
};

/** aggregate fields of "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<HelperKidsHelperKidParentMaxOrderBy>;
  min?: InputMaybe<HelperKidsHelperKidParentMinOrderBy>;
};

/** input type for inserting array relation for remote table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentArrRelInsertInput = {
  data: Array<HelperKidsHelperKidParentInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelperKidParentOnConflict>;
};

/** Boolean expression to filter rows from the table "helper_kids.helper_kid_parent". All fields are combined with a logical 'AND'. */
export type HelperKidsHelperKidParentBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelperKidParentBoolExp>>;
  _not?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelperKidParentBoolExp>>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
  helperKidParentId?: InputMaybe<UuidComparisonExp>;
  parentUserId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "helper_kids.helper_kid_parent" */
export enum HelperKidsHelperKidParentConstraint {
  /** unique or primary key constraint on columns "helper_kid_parent_id" */
  HelperKidParentPkey = "helper_kid_parent_pkey",
}

/** input type for inserting data into table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentInsertInput = {
  helperKid?: InputMaybe<HelperKidsHelperKidObjRelInsertInput>;
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  helperKidParentId?: InputMaybe<Scalars["uuid"]>;
  parentUserId?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type HelperKidsHelperKidParentMaxFields = {
  __typename?: "HelperKidsHelperKidParentMaxFields";
  helperKidId?: Maybe<Scalars["uuid"]>;
  helperKidParentId?: Maybe<Scalars["uuid"]>;
  parentUserId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentMaxOrderBy = {
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentId?: InputMaybe<OrderBy>;
  parentUserId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type HelperKidsHelperKidParentMinFields = {
  __typename?: "HelperKidsHelperKidParentMinFields";
  helperKidId?: Maybe<Scalars["uuid"]>;
  helperKidParentId?: Maybe<Scalars["uuid"]>;
  parentUserId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentMinOrderBy = {
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentId?: InputMaybe<OrderBy>;
  parentUserId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentMutationResponse = {
  __typename?: "HelperKidsHelperKidParentMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelperKidParent>;
};

/** on_conflict condition type for table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentOnConflict = {
  constraint: HelperKidsHelperKidParentConstraint;
  updateColumns?: Array<HelperKidsHelperKidParentUpdateColumn>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.helper_kid_parent". */
export type HelperKidsHelperKidParentOrderBy = {
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
  helperKidParentId?: InputMaybe<OrderBy>;
  parentUserId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: helper_kids.helper_kid_parent */
export type HelperKidsHelperKidParentPkColumnsInput = {
  helperKidParentId: Scalars["uuid"];
};

/** select columns of table "helper_kids.helper_kid_parent" */
export enum HelperKidsHelperKidParentSelectColumn {
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  HelperKidParentId = "helperKidParentId",
  /** column name */
  ParentUserId = "parentUserId",
}

/** input type for updating data in table "helper_kids.helper_kid_parent" */
export type HelperKidsHelperKidParentSetInput = {
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  helperKidParentId?: InputMaybe<Scalars["uuid"]>;
  parentUserId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "helper_kids_helper_kid_parent" */
export type HelperKidsHelperKidParentStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelperKidParentStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelperKidParentStreamCursorValueInput = {
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  helperKidParentId?: InputMaybe<Scalars["uuid"]>;
  parentUserId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "helper_kids.helper_kid_parent" */
export enum HelperKidsHelperKidParentUpdateColumn {
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  HelperKidParentId = "helperKidParentId",
  /** column name */
  ParentUserId = "parentUserId",
}

export type HelperKidsHelperKidParentUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelperKidParentSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelperKidParentBoolExp;
};

/** primary key columns input for table: helper_kids.helper_kid */
export type HelperKidsHelperKidPkColumnsInput = {
  /** ID */
  helperKidId: Scalars["uuid"];
};

/** お手伝いキッズポイント */
export type HelperKidsHelperKidPoint = {
  __typename?: "HelperKidsHelperKidPoint";
  /** An object relationship */
  helperKid: HelperKidsHelperKid;
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
  /** 最後のお手伝い日時 */
  lastHelpDatetime: Scalars["timestamp"];
  /** ポイント */
  point: Scalars["Int"];
};

/** aggregated selection of "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointAggregate = {
  __typename?: "HelperKidsHelperKidPointAggregate";
  aggregate?: Maybe<HelperKidsHelperKidPointAggregateFields>;
  nodes: Array<HelperKidsHelperKidPoint>;
};

/** aggregate fields of "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointAggregateFields = {
  __typename?: "HelperKidsHelperKidPointAggregateFields";
  avg?: Maybe<HelperKidsHelperKidPointAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<HelperKidsHelperKidPointMaxFields>;
  min?: Maybe<HelperKidsHelperKidPointMinFields>;
  stddev?: Maybe<HelperKidsHelperKidPointStddevFields>;
  stddevPop?: Maybe<HelperKidsHelperKidPointStddevPopFields>;
  stddevSamp?: Maybe<HelperKidsHelperKidPointStddevSampFields>;
  sum?: Maybe<HelperKidsHelperKidPointSumFields>;
  varPop?: Maybe<HelperKidsHelperKidPointVarPopFields>;
  varSamp?: Maybe<HelperKidsHelperKidPointVarSampFields>;
  variance?: Maybe<HelperKidsHelperKidPointVarianceFields>;
};

/** aggregate fields of "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type HelperKidsHelperKidPointAvgFields = {
  __typename?: "HelperKidsHelperKidPointAvgFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "helper_kids.helper_kid_point". All fields are combined with a logical 'AND'. */
export type HelperKidsHelperKidPointBoolExp = {
  _and?: InputMaybe<Array<HelperKidsHelperKidPointBoolExp>>;
  _not?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
  _or?: InputMaybe<Array<HelperKidsHelperKidPointBoolExp>>;
  helperKid?: InputMaybe<HelperKidsHelperKidBoolExp>;
  helperKidId?: InputMaybe<UuidComparisonExp>;
  lastHelpDatetime?: InputMaybe<TimestampComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "helper_kids.helper_kid_point" */
export enum HelperKidsHelperKidPointConstraint {
  /** unique or primary key constraint on columns "helper_kid_id" */
  HelperKidPointPkey = "helper_kid_point_pkey",
}

/** input type for incrementing numeric columns in table "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointIncInput = {
  /** ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointInsertInput = {
  helperKid?: InputMaybe<HelperKidsHelperKidObjRelInsertInput>;
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 最後のお手伝い日時 */
  lastHelpDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type HelperKidsHelperKidPointMaxFields = {
  __typename?: "HelperKidsHelperKidPointMaxFields";
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
  /** 最後のお手伝い日時 */
  lastHelpDatetime?: Maybe<Scalars["timestamp"]>;
  /** ポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** aggregate min on columns */
export type HelperKidsHelperKidPointMinFields = {
  __typename?: "HelperKidsHelperKidPointMinFields";
  /** お手伝いキッズID */
  helperKidId?: Maybe<Scalars["uuid"]>;
  /** 最後のお手伝い日時 */
  lastHelpDatetime?: Maybe<Scalars["timestamp"]>;
  /** ポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** response of any mutation on the table "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointMutationResponse = {
  __typename?: "HelperKidsHelperKidPointMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<HelperKidsHelperKidPoint>;
};

/** input type for inserting object relation for remote table "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointObjRelInsertInput = {
  data: HelperKidsHelperKidPointInsertInput;
  /** upsert condition */
  onConflict?: InputMaybe<HelperKidsHelperKidPointOnConflict>;
};

/** on_conflict condition type for table "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointOnConflict = {
  constraint: HelperKidsHelperKidPointConstraint;
  updateColumns?: Array<HelperKidsHelperKidPointUpdateColumn>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

/** Ordering options when selecting data from "helper_kids.helper_kid_point". */
export type HelperKidsHelperKidPointOrderBy = {
  helperKid?: InputMaybe<HelperKidsHelperKidOrderBy>;
  helperKidId?: InputMaybe<OrderBy>;
  lastHelpDatetime?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: helper_kids.helper_kid_point */
export type HelperKidsHelperKidPointPkColumnsInput = {
  /** お手伝いキッズID */
  helperKidId: Scalars["uuid"];
};

/** select columns of table "helper_kids.helper_kid_point" */
export enum HelperKidsHelperKidPointSelectColumn {
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  LastHelpDatetime = "lastHelpDatetime",
  /** column name */
  Point = "point",
}

/** input type for updating data in table "helper_kids.helper_kid_point" */
export type HelperKidsHelperKidPointSetInput = {
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 最後のお手伝い日時 */
  lastHelpDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type HelperKidsHelperKidPointStddevFields = {
  __typename?: "HelperKidsHelperKidPointStddevFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type HelperKidsHelperKidPointStddevPopFields = {
  __typename?: "HelperKidsHelperKidPointStddevPopFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type HelperKidsHelperKidPointStddevSampFields = {
  __typename?: "HelperKidsHelperKidPointStddevSampFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "helper_kids_helper_kid_point" */
export type HelperKidsHelperKidPointStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelperKidPointStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelperKidPointStreamCursorValueInput = {
  /** お手伝いキッズID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 最後のお手伝い日時 */
  lastHelpDatetime?: InputMaybe<Scalars["timestamp"]>;
  /** ポイント */
  point?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type HelperKidsHelperKidPointSumFields = {
  __typename?: "HelperKidsHelperKidPointSumFields";
  /** ポイント */
  point?: Maybe<Scalars["Int"]>;
};

/** update columns of table "helper_kids.helper_kid_point" */
export enum HelperKidsHelperKidPointUpdateColumn {
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  LastHelpDatetime = "lastHelpDatetime",
  /** column name */
  Point = "point",
}

export type HelperKidsHelperKidPointUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<HelperKidsHelperKidPointIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelperKidPointSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelperKidPointBoolExp;
};

/** aggregate varPop on columns */
export type HelperKidsHelperKidPointVarPopFields = {
  __typename?: "HelperKidsHelperKidPointVarPopFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type HelperKidsHelperKidPointVarSampFields = {
  __typename?: "HelperKidsHelperKidPointVarSampFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type HelperKidsHelperKidPointVarianceFields = {
  __typename?: "HelperKidsHelperKidPointVarianceFields";
  /** ポイント */
  point?: Maybe<Scalars["Float"]>;
};

/** select columns of table "helper_kids.helper_kid" */
export enum HelperKidsHelperKidSelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  Name = "name",
  /** column name */
  NameSuffix = "nameSuffix",
}

/** input type for updating data in table "helper_kids.helper_kid" */
export type HelperKidsHelperKidSetInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 氏名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 名前 接尾辞 */
  nameSuffix?: InputMaybe<Scalars["String"]>;
};

/** Streaming cursor of the table "helper_kids_helper_kid" */
export type HelperKidsHelperKidStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: HelperKidsHelperKidStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type HelperKidsHelperKidStreamCursorValueInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** ID */
  helperKidId?: InputMaybe<Scalars["uuid"]>;
  /** 氏名 */
  name?: InputMaybe<Scalars["String"]>;
  /** 名前 接尾辞 */
  nameSuffix?: InputMaybe<Scalars["String"]>;
};

/** update columns of table "helper_kids.helper_kid" */
export enum HelperKidsHelperKidUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  HelperKidId = "helperKidId",
  /** column name */
  Name = "name",
  /** column name */
  NameSuffix = "nameSuffix",
}

export type HelperKidsHelperKidUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<HelperKidsHelperKidSetInput>;
  /** filter the rows which have to be updated */
  where: HelperKidsHelperKidBoolExp;
};

/** columns and relationships of "import_file_history" */
export type ImportFileHistory = {
  __typename?: "ImportFileHistory";
  /** An object relationship */
  credit_card_summary?: Maybe<CreditCardSummary>;
  fileName: Scalars["String"];
  fileType: Scalars["String"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
  importDatetime: Scalars["timestamp"];
  importUserId: Scalars["uuid"];
  /** An object relationship */
  user: User;
};

/** aggregated selection of "import_file_history" */
export type ImportFileHistoryAggregate = {
  __typename?: "ImportFileHistoryAggregate";
  aggregate?: Maybe<ImportFileHistoryAggregateFields>;
  nodes: Array<ImportFileHistory>;
};

export type ImportFileHistoryAggregateBoolExp = {
  count?: InputMaybe<ImportFileHistoryAggregateBoolExpCount>;
};

/** aggregate fields of "import_file_history" */
export type ImportFileHistoryAggregateFields = {
  __typename?: "ImportFileHistoryAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<ImportFileHistoryMaxFields>;
  min?: Maybe<ImportFileHistoryMinFields>;
};

/** aggregate fields of "import_file_history" */
export type ImportFileHistoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "import_file_history" */
export type ImportFileHistoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ImportFileHistoryMaxOrderBy>;
  min?: InputMaybe<ImportFileHistoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "import_file_history" */
export type ImportFileHistoryArrRelInsertInput = {
  data: Array<ImportFileHistoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** Boolean expression to filter rows from the table "import_file_history". All fields are combined with a logical 'AND'. */
export type ImportFileHistoryBoolExp = {
  _and?: InputMaybe<Array<ImportFileHistoryBoolExp>>;
  _not?: InputMaybe<ImportFileHistoryBoolExp>;
  _or?: InputMaybe<Array<ImportFileHistoryBoolExp>>;
  credit_card_summary?: InputMaybe<CreditCardSummaryBoolExp>;
  fileName?: InputMaybe<StringComparisonExp>;
  fileType?: InputMaybe<StringComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  importDatetime?: InputMaybe<TimestampComparisonExp>;
  importUserId?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
};

/** unique or primary key constraints on table "import_file_history" */
export enum ImportFileHistoryConstraint {
  /** unique or primary key constraint on columns "id" */
  ImportFileHistoryPkey = "import_file_history_pkey",
}

/** input type for inserting data into table "import_file_history" */
export type ImportFileHistoryInsertInput = {
  credit_card_summary?: InputMaybe<CreditCardSummaryObjRelInsertInput>;
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
};

/** aggregate max on columns */
export type ImportFileHistoryMaxFields = {
  __typename?: "ImportFileHistoryMaxFields";
  fileName?: Maybe<Scalars["String"]>;
  fileType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  importDatetime?: Maybe<Scalars["timestamp"]>;
  importUserId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "import_file_history" */
export type ImportFileHistoryMaxOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ImportFileHistoryMinFields = {
  __typename?: "ImportFileHistoryMinFields";
  fileName?: Maybe<Scalars["String"]>;
  fileType?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
  importDatetime?: Maybe<Scalars["timestamp"]>;
  importUserId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "import_file_history" */
export type ImportFileHistoryMinOrderBy = {
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "import_file_history" */
export type ImportFileHistoryMutationResponse = {
  __typename?: "ImportFileHistoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<ImportFileHistory>;
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
  credit_card_summary?: InputMaybe<CreditCardSummaryOrderBy>;
  fileName?: InputMaybe<OrderBy>;
  fileType?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  importDatetime?: InputMaybe<OrderBy>;
  importUserId?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
};

/** primary key columns input for table: import_file_history */
export type ImportFileHistoryPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "import_file_history" */
export enum ImportFileHistorySelectColumn {
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

/** input type for updating data in table "import_file_history" */
export type ImportFileHistorySetInput = {
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["uuid"]>;
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
  fileName?: InputMaybe<Scalars["String"]>;
  fileType?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  importDatetime?: InputMaybe<Scalars["timestamp"]>;
  importUserId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "import_file_history" */
export enum ImportFileHistoryUpdateColumn {
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

export type ImportFileHistoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ImportFileHistorySetInput>;
  /** filter the rows which have to be updated */
  where: ImportFileHistoryBoolExp;
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

/** Boolean expression to compare columns of type "iocome_type". All fields are combined with logical 'AND'. */
export type IocomeTypeComparisonExp = {
  _eq?: InputMaybe<Scalars["iocome_type"]>;
  _gt?: InputMaybe<Scalars["iocome_type"]>;
  _gte?: InputMaybe<Scalars["iocome_type"]>;
  _in?: InputMaybe<Array<Scalars["iocome_type"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["iocome_type"]>;
  _lte?: InputMaybe<Scalars["iocome_type"]>;
  _neq?: InputMaybe<Scalars["iocome_type"]>;
  _nin?: InputMaybe<Array<Scalars["iocome_type"]>>;
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

/** columns and relationships of "summary_category_by_group" */
export type SummaryCategoryByGroup = {
  __typename?: "SummaryCategoryByGroup";
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  displayOrder: Scalars["Int"];
  /** An object relationship */
  group: Group;
  groupId: Scalars["uuid"];
  id: Scalars["uuid"];
};

/** aggregated selection of "summary_category_by_group" */
export type SummaryCategoryByGroupAggregate = {
  __typename?: "SummaryCategoryByGroupAggregate";
  aggregate?: Maybe<SummaryCategoryByGroupAggregateFields>;
  nodes: Array<SummaryCategoryByGroup>;
};

export type SummaryCategoryByGroupAggregateBoolExp = {
  count?: InputMaybe<SummaryCategoryByGroupAggregateBoolExpCount>;
};

/** aggregate fields of "summary_category_by_group" */
export type SummaryCategoryByGroupAggregateFields = {
  __typename?: "SummaryCategoryByGroupAggregateFields";
  avg?: Maybe<SummaryCategoryByGroupAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<SummaryCategoryByGroupMaxFields>;
  min?: Maybe<SummaryCategoryByGroupMinFields>;
  stddev?: Maybe<SummaryCategoryByGroupStddevFields>;
  stddevPop?: Maybe<SummaryCategoryByGroupStddevPopFields>;
  stddevSamp?: Maybe<SummaryCategoryByGroupStddevSampFields>;
  sum?: Maybe<SummaryCategoryByGroupSumFields>;
  varPop?: Maybe<SummaryCategoryByGroupVarPopFields>;
  varSamp?: Maybe<SummaryCategoryByGroupVarSampFields>;
  variance?: Maybe<SummaryCategoryByGroupVarianceFields>;
};

/** aggregate fields of "summary_category_by_group" */
export type SummaryCategoryByGroupAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "summary_category_by_group" */
export type SummaryCategoryByGroupAggregateOrderBy = {
  avg?: InputMaybe<SummaryCategoryByGroupAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SummaryCategoryByGroupMaxOrderBy>;
  min?: InputMaybe<SummaryCategoryByGroupMinOrderBy>;
  stddev?: InputMaybe<SummaryCategoryByGroupStddevOrderBy>;
  stddevPop?: InputMaybe<SummaryCategoryByGroupStddevPopOrderBy>;
  stddevSamp?: InputMaybe<SummaryCategoryByGroupStddevSampOrderBy>;
  sum?: InputMaybe<SummaryCategoryByGroupSumOrderBy>;
  varPop?: InputMaybe<SummaryCategoryByGroupVarPopOrderBy>;
  varSamp?: InputMaybe<SummaryCategoryByGroupVarSampOrderBy>;
  variance?: InputMaybe<SummaryCategoryByGroupVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "summary_category_by_group" */
export type SummaryCategoryByGroupArrRelInsertInput = {
  data: Array<SummaryCategoryByGroupInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SummaryCategoryByGroupOnConflict>;
};

/** aggregate avg on columns */
export type SummaryCategoryByGroupAvgFields = {
  __typename?: "SummaryCategoryByGroupAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "summary_category_by_group". All fields are combined with a logical 'AND'. */
export type SummaryCategoryByGroupBoolExp = {
  _and?: InputMaybe<Array<SummaryCategoryByGroupBoolExp>>;
  _not?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  _or?: InputMaybe<Array<SummaryCategoryByGroupBoolExp>>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  group?: InputMaybe<GroupBoolExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "summary_category_by_group" */
export enum SummaryCategoryByGroupConstraint {
  /** unique or primary key constraint on columns "id" */
  SummaryCategoryByGroupPkey = "summary_category_by_group_pkey",
}

/** input type for incrementing numeric columns in table "summary_category_by_group" */
export type SummaryCategoryByGroupIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "summary_category_by_group" */
export type SummaryCategoryByGroupInsertInput = {
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  group?: InputMaybe<GroupObjRelInsertInput>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type SummaryCategoryByGroupMaxFields = {
  __typename?: "SummaryCategoryByGroupMaxFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SummaryCategoryByGroupMinFields = {
  __typename?: "SummaryCategoryByGroupMinFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  id?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "summary_category_by_group" */
export type SummaryCategoryByGroupMutationResponse = {
  __typename?: "SummaryCategoryByGroupMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<SummaryCategoryByGroup>;
};

/** on_conflict condition type for table "summary_category_by_group" */
export type SummaryCategoryByGroupOnConflict = {
  constraint: SummaryCategoryByGroupConstraint;
  updateColumns?: Array<SummaryCategoryByGroupUpdateColumn>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

/** Ordering options when selecting data from "summary_category_by_group". */
export type SummaryCategoryByGroupOrderBy = {
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  group?: InputMaybe<GroupOrderBy>;
  groupId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: summary_category_by_group */
export type SummaryCategoryByGroupPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "summary_category_by_group" */
export enum SummaryCategoryByGroupSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

/** input type for updating data in table "summary_category_by_group" */
export type SummaryCategoryByGroupSetInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type SummaryCategoryByGroupStddevFields = {
  __typename?: "SummaryCategoryByGroupStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type SummaryCategoryByGroupStddevPopFields = {
  __typename?: "SummaryCategoryByGroupStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type SummaryCategoryByGroupStddevSampFields = {
  __typename?: "SummaryCategoryByGroupStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "summary_category_by_group" */
export type SummaryCategoryByGroupStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SummaryCategoryByGroupStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SummaryCategoryByGroupStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  id?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type SummaryCategoryByGroupSumFields = {
  __typename?: "SummaryCategoryByGroupSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "summary_category_by_group" */
export enum SummaryCategoryByGroupUpdateColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  Id = "id",
}

export type SummaryCategoryByGroupUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SummaryCategoryByGroupIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SummaryCategoryByGroupSetInput>;
  /** filter the rows which have to be updated */
  where: SummaryCategoryByGroupBoolExp;
};

/** aggregate varPop on columns */
export type SummaryCategoryByGroupVarPopFields = {
  __typename?: "SummaryCategoryByGroupVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type SummaryCategoryByGroupVarSampFields = {
  __typename?: "SummaryCategoryByGroupVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type SummaryCategoryByGroupVarianceFields = {
  __typename?: "SummaryCategoryByGroupVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "summary_category_by_group" */
export type SummaryCategoryByGroupVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** columns and relationships of "summary_category_by_user" */
export type SummaryCategoryByUser = {
  __typename?: "SummaryCategoryByUser";
  /** An object relationship */
  category: Category;
  categoryId: Scalars["uuid"];
  displayOrder: Scalars["Int"];
  id: Scalars["uuid"];
  /** An object relationship */
  user: User;
  userId: Scalars["uuid"];
};

/** aggregated selection of "summary_category_by_user" */
export type SummaryCategoryByUserAggregate = {
  __typename?: "SummaryCategoryByUserAggregate";
  aggregate?: Maybe<SummaryCategoryByUserAggregateFields>;
  nodes: Array<SummaryCategoryByUser>;
};

export type SummaryCategoryByUserAggregateBoolExp = {
  count?: InputMaybe<SummaryCategoryByUserAggregateBoolExpCount>;
};

/** aggregate fields of "summary_category_by_user" */
export type SummaryCategoryByUserAggregateFields = {
  __typename?: "SummaryCategoryByUserAggregateFields";
  avg?: Maybe<SummaryCategoryByUserAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<SummaryCategoryByUserMaxFields>;
  min?: Maybe<SummaryCategoryByUserMinFields>;
  stddev?: Maybe<SummaryCategoryByUserStddevFields>;
  stddevPop?: Maybe<SummaryCategoryByUserStddevPopFields>;
  stddevSamp?: Maybe<SummaryCategoryByUserStddevSampFields>;
  sum?: Maybe<SummaryCategoryByUserSumFields>;
  varPop?: Maybe<SummaryCategoryByUserVarPopFields>;
  varSamp?: Maybe<SummaryCategoryByUserVarSampFields>;
  variance?: Maybe<SummaryCategoryByUserVarianceFields>;
};

/** aggregate fields of "summary_category_by_user" */
export type SummaryCategoryByUserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "summary_category_by_user" */
export type SummaryCategoryByUserAggregateOrderBy = {
  avg?: InputMaybe<SummaryCategoryByUserAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<SummaryCategoryByUserMaxOrderBy>;
  min?: InputMaybe<SummaryCategoryByUserMinOrderBy>;
  stddev?: InputMaybe<SummaryCategoryByUserStddevOrderBy>;
  stddevPop?: InputMaybe<SummaryCategoryByUserStddevPopOrderBy>;
  stddevSamp?: InputMaybe<SummaryCategoryByUserStddevSampOrderBy>;
  sum?: InputMaybe<SummaryCategoryByUserSumOrderBy>;
  varPop?: InputMaybe<SummaryCategoryByUserVarPopOrderBy>;
  varSamp?: InputMaybe<SummaryCategoryByUserVarSampOrderBy>;
  variance?: InputMaybe<SummaryCategoryByUserVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "summary_category_by_user" */
export type SummaryCategoryByUserArrRelInsertInput = {
  data: Array<SummaryCategoryByUserInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<SummaryCategoryByUserOnConflict>;
};

/** aggregate avg on columns */
export type SummaryCategoryByUserAvgFields = {
  __typename?: "SummaryCategoryByUserAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserAvgOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "summary_category_by_user". All fields are combined with a logical 'AND'. */
export type SummaryCategoryByUserBoolExp = {
  _and?: InputMaybe<Array<SummaryCategoryByUserBoolExp>>;
  _not?: InputMaybe<SummaryCategoryByUserBoolExp>;
  _or?: InputMaybe<Array<SummaryCategoryByUserBoolExp>>;
  category?: InputMaybe<CategoryBoolExp>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "summary_category_by_user" */
export enum SummaryCategoryByUserConstraint {
  /** unique or primary key constraint on columns "id" */
  SummaryCategoryByUserPkey = "summary_category_by_user_pkey",
}

/** input type for incrementing numeric columns in table "summary_category_by_user" */
export type SummaryCategoryByUserIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "summary_category_by_user" */
export type SummaryCategoryByUserInsertInput = {
  category?: InputMaybe<CategoryObjRelInsertInput>;
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  user?: InputMaybe<UserObjRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type SummaryCategoryByUserMaxFields = {
  __typename?: "SummaryCategoryByUserMaxFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserMaxOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type SummaryCategoryByUserMinFields = {
  __typename?: "SummaryCategoryByUserMinFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["uuid"]>;
  userId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserMinOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "summary_category_by_user" */
export type SummaryCategoryByUserMutationResponse = {
  __typename?: "SummaryCategoryByUserMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<SummaryCategoryByUser>;
};

/** on_conflict condition type for table "summary_category_by_user" */
export type SummaryCategoryByUserOnConflict = {
  constraint: SummaryCategoryByUserConstraint;
  updateColumns?: Array<SummaryCategoryByUserUpdateColumn>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

/** Ordering options when selecting data from "summary_category_by_user". */
export type SummaryCategoryByUserOrderBy = {
  category?: InputMaybe<CategoryOrderBy>;
  categoryId?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: summary_category_by_user */
export type SummaryCategoryByUserPkColumnsInput = {
  id: Scalars["uuid"];
};

/** select columns of table "summary_category_by_user" */
export enum SummaryCategoryByUserSelectColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

/** input type for updating data in table "summary_category_by_user" */
export type SummaryCategoryByUserSetInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate stddev on columns */
export type SummaryCategoryByUserStddevFields = {
  __typename?: "SummaryCategoryByUserStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserStddevOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevPop on columns */
export type SummaryCategoryByUserStddevPopFields = {
  __typename?: "SummaryCategoryByUserStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevPop() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserStddevPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate stddevSamp on columns */
export type SummaryCategoryByUserStddevSampFields = {
  __typename?: "SummaryCategoryByUserStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by stddevSamp() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserStddevSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "summary_category_by_user" */
export type SummaryCategoryByUserStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: SummaryCategoryByUserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type SummaryCategoryByUserStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  id?: InputMaybe<Scalars["uuid"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate sum on columns */
export type SummaryCategoryByUserSumFields = {
  __typename?: "SummaryCategoryByUserSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserSumOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** update columns of table "summary_category_by_user" */
export enum SummaryCategoryByUserUpdateColumn {
  /** column name */
  CategoryId = "categoryId",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Id = "id",
  /** column name */
  UserId = "userId",
}

export type SummaryCategoryByUserUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<SummaryCategoryByUserIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<SummaryCategoryByUserSetInput>;
  /** filter the rows which have to be updated */
  where: SummaryCategoryByUserBoolExp;
};

/** aggregate varPop on columns */
export type SummaryCategoryByUserVarPopFields = {
  __typename?: "SummaryCategoryByUserVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varPop() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserVarPopOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate varSamp on columns */
export type SummaryCategoryByUserVarSampFields = {
  __typename?: "SummaryCategoryByUserVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by varSamp() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserVarSampOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type SummaryCategoryByUserVarianceFields = {
  __typename?: "SummaryCategoryByUserVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "summary_category_by_user" */
export type SummaryCategoryByUserVarianceOrderBy = {
  displayOrder?: InputMaybe<OrderBy>;
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

/** columns and relationships of "total_by_account_view" */
export type TotalByAccountView = {
  __typename?: "TotalByAccountView";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

export type TotalByAccountViewAggregate = {
  __typename?: "TotalByAccountViewAggregate";
  aggregate?: Maybe<TotalByAccountViewAggregateFields>;
  nodes: Array<TotalByAccountView>;
};

/** aggregate fields of "total_by_account_view" */
export type TotalByAccountViewAggregateFields = {
  __typename?: "TotalByAccountViewAggregateFields";
  avg?: Maybe<TotalByAccountViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<TotalByAccountViewMaxFields>;
  min?: Maybe<TotalByAccountViewMinFields>;
  stddev?: Maybe<TotalByAccountViewStddevFields>;
  stddevPop?: Maybe<TotalByAccountViewStddevPopFields>;
  stddevSamp?: Maybe<TotalByAccountViewStddevSampFields>;
  sum?: Maybe<TotalByAccountViewSumFields>;
  varPop?: Maybe<TotalByAccountViewVarPopFields>;
  varSamp?: Maybe<TotalByAccountViewVarSampFields>;
  variance?: Maybe<TotalByAccountViewVarianceFields>;
};

/** aggregate fields of "total_by_account_view" */
export type TotalByAccountViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type TotalByAccountViewAvgFields = {
  __typename?: "TotalByAccountViewAvgFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "total_by_account_view". All fields are combined with a logical 'AND'. */
export type TotalByAccountViewBoolExp = {
  _and?: InputMaybe<Array<TotalByAccountViewBoolExp>>;
  _not?: InputMaybe<TotalByAccountViewBoolExp>;
  _or?: InputMaybe<Array<TotalByAccountViewBoolExp>>;
  accountId?: InputMaybe<UuidComparisonExp>;
  accountName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type TotalByAccountViewMaxFields = {
  __typename?: "TotalByAccountViewMaxFields";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type TotalByAccountViewMinFields = {
  __typename?: "TotalByAccountViewMinFields";
  accountId?: Maybe<Scalars["uuid"]>;
  accountName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  displayOrder?: Maybe<Scalars["Int"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Ordering options when selecting data from "total_by_account_view". */
export type TotalByAccountViewOrderBy = {
  accountId?: InputMaybe<OrderBy>;
  accountName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "total_by_account_view" */
export enum TotalByAccountViewSelectColumn {
  /** column name */
  AccountId = "accountId",
  /** column name */
  AccountName = "accountName",
  /** column name */
  Date = "date",
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  GroupId = "groupId",
  /** column name */
  IocomeType = "iocomeType",
  /** column name */
  Total = "total",
}

/** aggregate stddev on columns */
export type TotalByAccountViewStddevFields = {
  __typename?: "TotalByAccountViewStddevFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type TotalByAccountViewStddevPopFields = {
  __typename?: "TotalByAccountViewStddevPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type TotalByAccountViewStddevSampFields = {
  __typename?: "TotalByAccountViewStddevSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "total_by_account_view" */
export type TotalByAccountViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TotalByAccountViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TotalByAccountViewStreamCursorValueInput = {
  accountId?: InputMaybe<Scalars["uuid"]>;
  accountName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate sum on columns */
export type TotalByAccountViewSumFields = {
  __typename?: "TotalByAccountViewSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type TotalByAccountViewVarPopFields = {
  __typename?: "TotalByAccountViewVarPopFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type TotalByAccountViewVarSampFields = {
  __typename?: "TotalByAccountViewVarSampFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type TotalByAccountViewVarianceFields = {
  __typename?: "TotalByAccountViewVarianceFields";
  displayOrder?: Maybe<Scalars["Float"]>;
  total?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "total_by_category_view" */
export type TotalByCategoryView = {
  __typename?: "TotalByCategoryView";
  categoryId?: Maybe<Scalars["uuid"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

export type TotalByCategoryViewAggregate = {
  __typename?: "TotalByCategoryViewAggregate";
  aggregate?: Maybe<TotalByCategoryViewAggregateFields>;
  nodes: Array<TotalByCategoryView>;
};

/** aggregate fields of "total_by_category_view" */
export type TotalByCategoryViewAggregateFields = {
  __typename?: "TotalByCategoryViewAggregateFields";
  avg?: Maybe<TotalByCategoryViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<TotalByCategoryViewMaxFields>;
  min?: Maybe<TotalByCategoryViewMinFields>;
  stddev?: Maybe<TotalByCategoryViewStddevFields>;
  stddevPop?: Maybe<TotalByCategoryViewStddevPopFields>;
  stddevSamp?: Maybe<TotalByCategoryViewStddevSampFields>;
  sum?: Maybe<TotalByCategoryViewSumFields>;
  varPop?: Maybe<TotalByCategoryViewVarPopFields>;
  varSamp?: Maybe<TotalByCategoryViewVarSampFields>;
  variance?: Maybe<TotalByCategoryViewVarianceFields>;
};

/** aggregate fields of "total_by_category_view" */
export type TotalByCategoryViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type TotalByCategoryViewAvgFields = {
  __typename?: "TotalByCategoryViewAvgFields";
  total?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "total_by_category_view". All fields are combined with a logical 'AND'. */
export type TotalByCategoryViewBoolExp = {
  _and?: InputMaybe<Array<TotalByCategoryViewBoolExp>>;
  _not?: InputMaybe<TotalByCategoryViewBoolExp>;
  _or?: InputMaybe<Array<TotalByCategoryViewBoolExp>>;
  categoryId?: InputMaybe<UuidComparisonExp>;
  categoryName?: InputMaybe<StringComparisonExp>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type TotalByCategoryViewMaxFields = {
  __typename?: "TotalByCategoryViewMaxFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type TotalByCategoryViewMinFields = {
  __typename?: "TotalByCategoryViewMinFields";
  categoryId?: Maybe<Scalars["uuid"]>;
  categoryName?: Maybe<Scalars["String"]>;
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Ordering options when selecting data from "total_by_category_view". */
export type TotalByCategoryViewOrderBy = {
  categoryId?: InputMaybe<OrderBy>;
  categoryName?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "total_by_category_view" */
export enum TotalByCategoryViewSelectColumn {
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
export type TotalByCategoryViewStddevFields = {
  __typename?: "TotalByCategoryViewStddevFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type TotalByCategoryViewStddevPopFields = {
  __typename?: "TotalByCategoryViewStddevPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type TotalByCategoryViewStddevSampFields = {
  __typename?: "TotalByCategoryViewStddevSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "total_by_category_view" */
export type TotalByCategoryViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TotalByCategoryViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TotalByCategoryViewStreamCursorValueInput = {
  categoryId?: InputMaybe<Scalars["uuid"]>;
  categoryName?: InputMaybe<Scalars["String"]>;
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate sum on columns */
export type TotalByCategoryViewSumFields = {
  __typename?: "TotalByCategoryViewSumFields";
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type TotalByCategoryViewVarPopFields = {
  __typename?: "TotalByCategoryViewVarPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type TotalByCategoryViewVarSampFields = {
  __typename?: "TotalByCategoryViewVarSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type TotalByCategoryViewVarianceFields = {
  __typename?: "TotalByCategoryViewVarianceFields";
  total?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "total_by_genre_view" */
export type TotalByGenreView = {
  __typename?: "TotalByGenreView";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

export type TotalByGenreViewAggregate = {
  __typename?: "TotalByGenreViewAggregate";
  aggregate?: Maybe<TotalByGenreViewAggregateFields>;
  nodes: Array<TotalByGenreView>;
};

/** aggregate fields of "total_by_genre_view" */
export type TotalByGenreViewAggregateFields = {
  __typename?: "TotalByGenreViewAggregateFields";
  avg?: Maybe<TotalByGenreViewAvgFields>;
  count: Scalars["Int"];
  max?: Maybe<TotalByGenreViewMaxFields>;
  min?: Maybe<TotalByGenreViewMinFields>;
  stddev?: Maybe<TotalByGenreViewStddevFields>;
  stddevPop?: Maybe<TotalByGenreViewStddevPopFields>;
  stddevSamp?: Maybe<TotalByGenreViewStddevSampFields>;
  sum?: Maybe<TotalByGenreViewSumFields>;
  varPop?: Maybe<TotalByGenreViewVarPopFields>;
  varSamp?: Maybe<TotalByGenreViewVarSampFields>;
  variance?: Maybe<TotalByGenreViewVarianceFields>;
};

/** aggregate fields of "total_by_genre_view" */
export type TotalByGenreViewAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type TotalByGenreViewAvgFields = {
  __typename?: "TotalByGenreViewAvgFields";
  total?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "total_by_genre_view". All fields are combined with a logical 'AND'. */
export type TotalByGenreViewBoolExp = {
  _and?: InputMaybe<Array<TotalByGenreViewBoolExp>>;
  _not?: InputMaybe<TotalByGenreViewBoolExp>;
  _or?: InputMaybe<Array<TotalByGenreViewBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  genreId?: InputMaybe<UuidComparisonExp>;
  genreName?: InputMaybe<StringComparisonExp>;
  groupId?: InputMaybe<UuidComparisonExp>;
  iocomeType?: InputMaybe<IocomeTypeComparisonExp>;
  total?: InputMaybe<NumericComparisonExp>;
};

/** aggregate max on columns */
export type TotalByGenreViewMaxFields = {
  __typename?: "TotalByGenreViewMaxFields";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate min on columns */
export type TotalByGenreViewMinFields = {
  __typename?: "TotalByGenreViewMinFields";
  date?: Maybe<Scalars["date"]>;
  genreId?: Maybe<Scalars["uuid"]>;
  genreName?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["uuid"]>;
  iocomeType?: Maybe<Scalars["iocome_type"]>;
  total?: Maybe<Scalars["numeric"]>;
};

/** Ordering options when selecting data from "total_by_genre_view". */
export type TotalByGenreViewOrderBy = {
  date?: InputMaybe<OrderBy>;
  genreId?: InputMaybe<OrderBy>;
  genreName?: InputMaybe<OrderBy>;
  groupId?: InputMaybe<OrderBy>;
  iocomeType?: InputMaybe<OrderBy>;
  total?: InputMaybe<OrderBy>;
};

/** select columns of table "total_by_genre_view" */
export enum TotalByGenreViewSelectColumn {
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
export type TotalByGenreViewStddevFields = {
  __typename?: "TotalByGenreViewStddevFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevPop on columns */
export type TotalByGenreViewStddevPopFields = {
  __typename?: "TotalByGenreViewStddevPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate stddevSamp on columns */
export type TotalByGenreViewStddevSampFields = {
  __typename?: "TotalByGenreViewStddevSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** Streaming cursor of the table "total_by_genre_view" */
export type TotalByGenreViewStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TotalByGenreViewStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TotalByGenreViewStreamCursorValueInput = {
  date?: InputMaybe<Scalars["date"]>;
  genreId?: InputMaybe<Scalars["uuid"]>;
  genreName?: InputMaybe<Scalars["String"]>;
  groupId?: InputMaybe<Scalars["uuid"]>;
  iocomeType?: InputMaybe<Scalars["iocome_type"]>;
  total?: InputMaybe<Scalars["numeric"]>;
};

/** aggregate sum on columns */
export type TotalByGenreViewSumFields = {
  __typename?: "TotalByGenreViewSumFields";
  total?: Maybe<Scalars["numeric"]>;
};

/** aggregate varPop on columns */
export type TotalByGenreViewVarPopFields = {
  __typename?: "TotalByGenreViewVarPopFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate varSamp on columns */
export type TotalByGenreViewVarSampFields = {
  __typename?: "TotalByGenreViewVarSampFields";
  total?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type TotalByGenreViewVarianceFields = {
  __typename?: "TotalByGenreViewVarianceFields";
  total?: Maybe<Scalars["Float"]>;
};

/** 振替カテゴリ */
export type TransferCategory = {
  __typename?: "TransferCategory";
  /** グループID */
  groupId: Scalars["uuid"];
  /** 収入カテゴリID */
  incomeCategoryId: Scalars["uuid"];
  /** 支出カテゴリID */
  outcomeCategoryId: Scalars["uuid"];
};

/** aggregated selection of "transfer_category" */
export type TransferCategoryAggregate = {
  __typename?: "TransferCategoryAggregate";
  aggregate?: Maybe<TransferCategoryAggregateFields>;
  nodes: Array<TransferCategory>;
};

export type TransferCategoryAggregateBoolExp = {
  count?: InputMaybe<TransferCategoryAggregateBoolExpCount>;
};

/** aggregate fields of "transfer_category" */
export type TransferCategoryAggregateFields = {
  __typename?: "TransferCategoryAggregateFields";
  count: Scalars["Int"];
  max?: Maybe<TransferCategoryMaxFields>;
  min?: Maybe<TransferCategoryMinFields>;
};

/** aggregate fields of "transfer_category" */
export type TransferCategoryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "transfer_category" */
export type TransferCategoryAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TransferCategoryMaxOrderBy>;
  min?: InputMaybe<TransferCategoryMinOrderBy>;
};

/** input type for inserting array relation for remote table "transfer_category" */
export type TransferCategoryArrRelInsertInput = {
  data: Array<TransferCategoryInsertInput>;
  /** upsert condition */
  onConflict?: InputMaybe<TransferCategoryOnConflict>;
};

/** Boolean expression to filter rows from the table "transfer_category". All fields are combined with a logical 'AND'. */
export type TransferCategoryBoolExp = {
  _and?: InputMaybe<Array<TransferCategoryBoolExp>>;
  _not?: InputMaybe<TransferCategoryBoolExp>;
  _or?: InputMaybe<Array<TransferCategoryBoolExp>>;
  groupId?: InputMaybe<UuidComparisonExp>;
  incomeCategoryId?: InputMaybe<UuidComparisonExp>;
  outcomeCategoryId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "transfer_category" */
export enum TransferCategoryConstraint {
  /** unique or primary key constraint on columns "group_id" */
  TransferCategoryPkey = "transfer_category_pkey",
}

/** input type for inserting data into table "transfer_category" */
export type TransferCategoryInsertInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<Scalars["uuid"]>;
};

/** aggregate max on columns */
export type TransferCategoryMaxFields = {
  __typename?: "TransferCategoryMaxFields";
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: Maybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: Maybe<Scalars["uuid"]>;
};

/** order by max() on columns of table "transfer_category" */
export type TransferCategoryMaxOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<OrderBy>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TransferCategoryMinFields = {
  __typename?: "TransferCategoryMinFields";
  /** グループID */
  groupId?: Maybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: Maybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: Maybe<Scalars["uuid"]>;
};

/** order by min() on columns of table "transfer_category" */
export type TransferCategoryMinOrderBy = {
  /** グループID */
  groupId?: InputMaybe<OrderBy>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<OrderBy>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "transfer_category" */
export type TransferCategoryMutationResponse = {
  __typename?: "TransferCategoryMutationResponse";
  /** number of rows affected by the mutation */
  affectedRows: Scalars["Int"];
  /** data from the rows affected by the mutation */
  returning: Array<TransferCategory>;
};

/** on_conflict condition type for table "transfer_category" */
export type TransferCategoryOnConflict = {
  constraint: TransferCategoryConstraint;
  updateColumns?: Array<TransferCategoryUpdateColumn>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

/** Ordering options when selecting data from "transfer_category". */
export type TransferCategoryOrderBy = {
  groupId?: InputMaybe<OrderBy>;
  incomeCategoryId?: InputMaybe<OrderBy>;
  outcomeCategoryId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: transfer_category */
export type TransferCategoryPkColumnsInput = {
  /** グループID */
  groupId: Scalars["uuid"];
};

/** select columns of table "transfer_category" */
export enum TransferCategorySelectColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  IncomeCategoryId = "incomeCategoryId",
  /** column name */
  OutcomeCategoryId = "outcomeCategoryId",
}

/** input type for updating data in table "transfer_category" */
export type TransferCategorySetInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<Scalars["uuid"]>;
};

/** Streaming cursor of the table "transfer_category" */
export type TransferCategoryStreamCursorInput = {
  /** Stream column input with initial value */
  initialValue: TransferCategoryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type TransferCategoryStreamCursorValueInput = {
  /** グループID */
  groupId?: InputMaybe<Scalars["uuid"]>;
  /** 収入カテゴリID */
  incomeCategoryId?: InputMaybe<Scalars["uuid"]>;
  /** 支出カテゴリID */
  outcomeCategoryId?: InputMaybe<Scalars["uuid"]>;
};

/** update columns of table "transfer_category" */
export enum TransferCategoryUpdateColumn {
  /** column name */
  GroupId = "groupId",
  /** column name */
  IncomeCategoryId = "incomeCategoryId",
  /** column name */
  OutcomeCategoryId = "outcomeCategoryId",
}

export type TransferCategoryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<TransferCategorySetInput>;
  /** filter the rows which have to be updated */
  where: TransferCategoryBoolExp;
};

/** ユーザ */
export type User = {
  __typename?: "User";
  /** An array relationship */
  affiliations: Array<Affiliation>;
  /** An aggregate relationship */
  affiliationsAggregate: AffiliationAggregate;
  /** An aggregate relationship */
  creditCardDetailsAggregate: CreditCardDetailAggregate;
  /** An array relationship */
  credit_card_details: Array<CreditCardDetail>;
  /** An aggregate relationship */
  dailyDetailsAggregate: DailyDetailAggregate;
  /** An array relationship */
  daily_details: Array<DailyDetail>;
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  /** An aggregate relationship */
  importFileHistoriesAggregate: ImportFileHistoryAggregate;
  /** An array relationship */
  import_file_histories: Array<ImportFileHistory>;
  /** An aggregate relationship */
  summaryCategoryByUsersAggregate: SummaryCategoryByUserAggregate;
  /** An array relationship */
  summary_category_by_users: Array<SummaryCategoryByUser>;
  userId: Scalars["uuid"];
  userName?: Maybe<Scalars["String"]>;
};

/** ユーザ */
export type UserAffiliationsArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** ユーザ */
export type UserAffiliationsAggregateArgs = {
  distinctOn?: InputMaybe<Array<AffiliationSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AffiliationOrderBy>>;
  where?: InputMaybe<AffiliationBoolExp>;
};

/** ユーザ */
export type UserCreditCardDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** ユーザ */
export type UserCredit_Card_DetailsArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

/** ユーザ */
export type UserDailyDetailsAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** ユーザ */
export type UserDaily_DetailsArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

/** ユーザ */
export type UserImportFileHistoriesAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** ユーザ */
export type UserImport_File_HistoriesArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

/** ユーザ */
export type UserSummaryCategoryByUsersAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

/** ユーザ */
export type UserSummary_Category_By_UsersArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
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
  credit_card_details?: InputMaybe<CreditCardDetailBoolExp>;
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateBoolExp>;
  daily_details?: InputMaybe<DailyDetailBoolExp>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateBoolExp>;
  displayOrder?: InputMaybe<IntComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  import_file_histories?: InputMaybe<ImportFileHistoryBoolExp>;
  import_file_historiesAggregate?: InputMaybe<ImportFileHistoryAggregateBoolExp>;
  summary_category_by_users?: InputMaybe<SummaryCategoryByUserBoolExp>;
  summary_category_by_usersAggregate?: InputMaybe<SummaryCategoryByUserAggregateBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
  userName?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = "user_email_key",
  /** unique or primary key constraint on columns "user_id" */
  UserPkey = "user_pkey",
}

/** input type for incrementing numeric columns in table "user" */
export type UserIncInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  affiliations?: InputMaybe<AffiliationArrRelInsertInput>;
  credit_card_details?: InputMaybe<CreditCardDetailArrRelInsertInput>;
  daily_details?: InputMaybe<DailyDetailArrRelInsertInput>;
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  import_file_histories?: InputMaybe<ImportFileHistoryArrRelInsertInput>;
  summary_category_by_users?: InputMaybe<SummaryCategoryByUserArrRelInsertInput>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: "UserMaxFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
  userName?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: "UserMinFields";
  displayOrder?: Maybe<Scalars["Int"]>;
  email?: Maybe<Scalars["String"]>;
  userId?: Maybe<Scalars["uuid"]>;
  userName?: Maybe<Scalars["String"]>;
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
  credit_card_detailsAggregate?: InputMaybe<CreditCardDetailAggregateOrderBy>;
  daily_detailsAggregate?: InputMaybe<DailyDetailAggregateOrderBy>;
  displayOrder?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  import_file_historiesAggregate?: InputMaybe<ImportFileHistoryAggregateOrderBy>;
  summary_category_by_usersAggregate?: InputMaybe<SummaryCategoryByUserAggregateOrderBy>;
  userId?: InputMaybe<OrderBy>;
  userName?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  userId: Scalars["uuid"];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Email = "email",
  /** column name */
  UserId = "userId",
  /** column name */
  UserName = "userName",
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  displayOrder?: InputMaybe<Scalars["Int"]>;
  email?: InputMaybe<Scalars["String"]>;
  userId?: InputMaybe<Scalars["uuid"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

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
  userId?: InputMaybe<Scalars["uuid"]>;
  userName?: InputMaybe<Scalars["String"]>;
};

/** aggregate sum on columns */
export type UserSumFields = {
  __typename?: "UserSumFields";
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  DisplayOrder = "displayOrder",
  /** column name */
  Email = "email",
  /** column name */
  UserId = "userId",
  /** column name */
  UserName = "userName",
}

export type UserUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  /** filter the rows which have to be updated */
  where: UserBoolExp;
};

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

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars["uuid"]>;
  _gt?: InputMaybe<Scalars["uuid"]>;
  _gte?: InputMaybe<Scalars["uuid"]>;
  _in?: InputMaybe<Array<Scalars["uuid"]>>;
  _isNull?: InputMaybe<Scalars["Boolean"]>;
  _lt?: InputMaybe<Scalars["uuid"]>;
  _lte?: InputMaybe<Scalars["uuid"]>;
  _neq?: InputMaybe<Scalars["uuid"]>;
  _nin?: InputMaybe<Array<Scalars["uuid"]>>;
};

export type AccountAggregateBoolExpBool_And = {
  arguments: AccountSelectColumnAccountAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<AccountBoolExp>;
  predicate: BooleanComparisonExp;
};

export type AccountAggregateBoolExpBool_Or = {
  arguments: AccountSelectColumnAccountAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<AccountBoolExp>;
  predicate: BooleanComparisonExp;
};

export type AccountAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AccountSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<AccountBoolExp>;
  predicate: IntComparisonExp;
};

export type AccountTotalArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type AffiliationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AffiliationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<AffiliationBoolExp>;
  predicate: IntComparisonExp;
};

export type CategoryAggregateBoolExpBool_And = {
  arguments: CategorySelectColumnCategoryAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<CategoryBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CategoryAggregateBoolExpBool_Or = {
  arguments: CategorySelectColumnCategoryAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<CategoryBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<CategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type CategoryTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type CreditCardDetailAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<CreditCardDetailBoolExp>;
  predicate: IntComparisonExp;
};

export type CreditCardSummaryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<CreditCardSummaryBoolExp>;
  predicate: IntComparisonExp;
};

export type DailyDetailAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<DailyDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<DailyDetailBoolExp>;
  predicate: IntComparisonExp;
};

export type DailyDetailByDateArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GenreAggregateBoolExpBool_And = {
  arguments: GenreSelectColumnGenreAggregateBoolExpBool_AndArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<GenreBoolExp>;
  predicate: BooleanComparisonExp;
};

export type GenreAggregateBoolExpBool_Or = {
  arguments: GenreSelectColumnGenreAggregateBoolExpBool_OrArgumentsColumns;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<GenreBoolExp>;
  predicate: BooleanComparisonExp;
};

export type GenreAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GenreSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<GenreBoolExp>;
  predicate: IntComparisonExp;
};

export type GenreTotalByMonthArgs = {
  from_date?: InputMaybe<Scalars["date"]>;
  group_id?: InputMaybe<Scalars["uuid"]>;
  to_date?: InputMaybe<Scalars["date"]>;
};

export type GroupApplicationAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<GroupApplicationSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<GroupApplicationBoolExp>;
  predicate: IntComparisonExp;
};

export type HelperKidsHelpPointEarnedAchievementAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  predicate: IntComparisonExp;
};

export type HelperKidsHelpPointEarnedDetailAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
  predicate: IntComparisonExp;
};

export type HelperKidsHelpPointExchangedAchievementAggregateBoolExpCount = {
  arguments?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  predicate: IntComparisonExp;
};

export type HelperKidsHelperKidParentAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
  predicate: IntComparisonExp;
};

export type ImportFileHistoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<ImportFileHistoryBoolExp>;
  predicate: IntComparisonExp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: "mutation_root";
  /** delete data from the table: "account" */
  deleteAccount?: Maybe<AccountMutationResponse>;
  /** delete single row from the table: "account" */
  deleteAccountByPk?: Maybe<Account>;
  /** delete data from the table: "affiliation" */
  deleteAffiliation?: Maybe<AffiliationMutationResponse>;
  /** delete single row from the table: "affiliation" */
  deleteAffiliationByPk?: Maybe<Affiliation>;
  /** delete data from the table: "application" */
  deleteApplication?: Maybe<ApplicationMutationResponse>;
  /** delete single row from the table: "application" */
  deleteApplicationByPk?: Maybe<Application>;
  /** delete data from the table: "category" */
  deleteCategory?: Maybe<CategoryMutationResponse>;
  /** delete single row from the table: "category" */
  deleteCategoryByPk?: Maybe<Category>;
  /** delete data from the table: "credit_card_detail" */
  deleteCreditCardDetail?: Maybe<CreditCardDetailMutationResponse>;
  /** delete single row from the table: "credit_card_detail" */
  deleteCreditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** delete data from the table: "credit_card_summary" */
  deleteCreditCardSummary?: Maybe<CreditCardSummaryMutationResponse>;
  /** delete single row from the table: "credit_card_summary" */
  deleteCreditCardSummaryByPk?: Maybe<CreditCardSummary>;
  /** delete data from the table: "daily_detail" */
  deleteDailyDetail?: Maybe<DailyDetailMutationResponse>;
  /** delete single row from the table: "daily_detail" */
  deleteDailyDetailByPk?: Maybe<DailyDetail>;
  /** delete data from the table: "genre" */
  deleteGenre?: Maybe<GenreMutationResponse>;
  /** delete single row from the table: "genre" */
  deleteGenreByPk?: Maybe<Genre>;
  /** delete data from the table: "group" */
  deleteGroup?: Maybe<GroupMutationResponse>;
  /** delete data from the table: "group_application" */
  deleteGroupApplication?: Maybe<GroupApplicationMutationResponse>;
  /** delete single row from the table: "group_application" */
  deleteGroupApplicationByPk?: Maybe<GroupApplication>;
  /** delete single row from the table: "group" */
  deleteGroupByPk?: Maybe<Group>;
  /** delete data from the table: "group_role" */
  deleteGroupRole?: Maybe<GroupRoleMutationResponse>;
  /** delete single row from the table: "group_role" */
  deleteGroupRoleByPk?: Maybe<GroupRole>;
  /** delete data from the table: "helper_kids.exchange_item" */
  deleteHelperKidsExchangeItem?: Maybe<HelperKidsExchangeItemMutationResponse>;
  /** delete single row from the table: "helper_kids.exchange_item" */
  deleteHelperKidsExchangeItemByPk?: Maybe<HelperKidsExchangeItem>;
  /** delete data from the table: "helper_kids.help_item" */
  deleteHelperKidsHelpItem?: Maybe<HelperKidsHelpItemMutationResponse>;
  /** delete single row from the table: "helper_kids.help_item" */
  deleteHelperKidsHelpItemByPk?: Maybe<HelperKidsHelpItem>;
  /** delete data from the table: "helper_kids.help_point_earned_achievement" */
  deleteHelperKidsHelpPointEarnedAchievement?: Maybe<HelperKidsHelpPointEarnedAchievementMutationResponse>;
  /** delete single row from the table: "helper_kids.help_point_earned_achievement" */
  deleteHelperKidsHelpPointEarnedAchievementByPk?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** delete data from the table: "helper_kids.help_point_earned_detail" */
  deleteHelperKidsHelpPointEarnedDetail?: Maybe<HelperKidsHelpPointEarnedDetailMutationResponse>;
  /** delete single row from the table: "helper_kids.help_point_earned_detail" */
  deleteHelperKidsHelpPointEarnedDetailByPk?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** delete data from the table: "helper_kids.help_point_exchanged_achievement" */
  deleteHelperKidsHelpPointExchangedAchievement?: Maybe<HelperKidsHelpPointExchangedAchievementMutationResponse>;
  /** delete single row from the table: "helper_kids.help_point_exchanged_achievement" */
  deleteHelperKidsHelpPointExchangedAchievementByPk?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** delete data from the table: "helper_kids.helper_kid" */
  deleteHelperKidsHelperKid?: Maybe<HelperKidsHelperKidMutationResponse>;
  /** delete single row from the table: "helper_kids.helper_kid" */
  deleteHelperKidsHelperKidByPk?: Maybe<HelperKidsHelperKid>;
  /** delete data from the table: "helper_kids.helper_kid_parent" */
  deleteHelperKidsHelperKidParent?: Maybe<HelperKidsHelperKidParentMutationResponse>;
  /** delete single row from the table: "helper_kids.helper_kid_parent" */
  deleteHelperKidsHelperKidParentByPk?: Maybe<HelperKidsHelperKidParent>;
  /** delete data from the table: "helper_kids.helper_kid_point" */
  deleteHelperKidsHelperKidPoint?: Maybe<HelperKidsHelperKidPointMutationResponse>;
  /** delete single row from the table: "helper_kids.helper_kid_point" */
  deleteHelperKidsHelperKidPointByPk?: Maybe<HelperKidsHelperKidPoint>;
  /** delete data from the table: "import_file_history" */
  deleteImportFileHistory?: Maybe<ImportFileHistoryMutationResponse>;
  /** delete single row from the table: "import_file_history" */
  deleteImportFileHistoryByPk?: Maybe<ImportFileHistory>;
  /** delete data from the table: "summary_category_by_group" */
  deleteSummaryCategoryByGroup?: Maybe<SummaryCategoryByGroupMutationResponse>;
  /** delete single row from the table: "summary_category_by_group" */
  deleteSummaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** delete data from the table: "summary_category_by_user" */
  deleteSummaryCategoryByUser?: Maybe<SummaryCategoryByUserMutationResponse>;
  /** delete single row from the table: "summary_category_by_user" */
  deleteSummaryCategoryByUserByPk?: Maybe<SummaryCategoryByUser>;
  /** delete data from the table: "transfer_category" */
  deleteTransferCategory?: Maybe<TransferCategoryMutationResponse>;
  /** delete single row from the table: "transfer_category" */
  deleteTransferCategoryByPk?: Maybe<TransferCategory>;
  /** delete data from the table: "user" */
  deleteUser?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  deleteUserByPk?: Maybe<User>;
  /** insert data into the table: "account" */
  insertAccount?: Maybe<AccountMutationResponse>;
  /** insert a single row into the table: "account" */
  insertAccountOne?: Maybe<Account>;
  /** insert data into the table: "affiliation" */
  insertAffiliation?: Maybe<AffiliationMutationResponse>;
  /** insert a single row into the table: "affiliation" */
  insertAffiliationOne?: Maybe<Affiliation>;
  /** insert data into the table: "application" */
  insertApplication?: Maybe<ApplicationMutationResponse>;
  /** insert a single row into the table: "application" */
  insertApplicationOne?: Maybe<Application>;
  /** insert data into the table: "category" */
  insertCategory?: Maybe<CategoryMutationResponse>;
  /** insert a single row into the table: "category" */
  insertCategoryOne?: Maybe<Category>;
  /** insert data into the table: "credit_card_detail" */
  insertCreditCardDetail?: Maybe<CreditCardDetailMutationResponse>;
  /** insert a single row into the table: "credit_card_detail" */
  insertCreditCardDetailOne?: Maybe<CreditCardDetail>;
  /** insert data into the table: "credit_card_summary" */
  insertCreditCardSummary?: Maybe<CreditCardSummaryMutationResponse>;
  /** insert a single row into the table: "credit_card_summary" */
  insertCreditCardSummaryOne?: Maybe<CreditCardSummary>;
  /** insert data into the table: "daily_detail" */
  insertDailyDetail?: Maybe<DailyDetailMutationResponse>;
  /** insert a single row into the table: "daily_detail" */
  insertDailyDetailOne?: Maybe<DailyDetail>;
  /** insert data into the table: "genre" */
  insertGenre?: Maybe<GenreMutationResponse>;
  /** insert a single row into the table: "genre" */
  insertGenreOne?: Maybe<Genre>;
  /** insert data into the table: "group" */
  insertGroup?: Maybe<GroupMutationResponse>;
  /** insert data into the table: "group_application" */
  insertGroupApplication?: Maybe<GroupApplicationMutationResponse>;
  /** insert a single row into the table: "group_application" */
  insertGroupApplicationOne?: Maybe<GroupApplication>;
  /** insert a single row into the table: "group" */
  insertGroupOne?: Maybe<Group>;
  /** insert data into the table: "group_role" */
  insertGroupRole?: Maybe<GroupRoleMutationResponse>;
  /** insert a single row into the table: "group_role" */
  insertGroupRoleOne?: Maybe<GroupRole>;
  /** insert data into the table: "helper_kids.exchange_item" */
  insertHelperKidsExchangeItem?: Maybe<HelperKidsExchangeItemMutationResponse>;
  /** insert a single row into the table: "helper_kids.exchange_item" */
  insertHelperKidsExchangeItemOne?: Maybe<HelperKidsExchangeItem>;
  /** insert data into the table: "helper_kids.help_item" */
  insertHelperKidsHelpItem?: Maybe<HelperKidsHelpItemMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_item" */
  insertHelperKidsHelpItemOne?: Maybe<HelperKidsHelpItem>;
  /** insert data into the table: "helper_kids.help_point_earned_achievement" */
  insertHelperKidsHelpPointEarnedAchievement?: Maybe<HelperKidsHelpPointEarnedAchievementMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_point_earned_achievement" */
  insertHelperKidsHelpPointEarnedAchievementOne?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** insert data into the table: "helper_kids.help_point_earned_detail" */
  insertHelperKidsHelpPointEarnedDetail?: Maybe<HelperKidsHelpPointEarnedDetailMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_point_earned_detail" */
  insertHelperKidsHelpPointEarnedDetailOne?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** insert data into the table: "helper_kids.help_point_exchanged_achievement" */
  insertHelperKidsHelpPointExchangedAchievement?: Maybe<HelperKidsHelpPointExchangedAchievementMutationResponse>;
  /** insert a single row into the table: "helper_kids.help_point_exchanged_achievement" */
  insertHelperKidsHelpPointExchangedAchievementOne?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** insert data into the table: "helper_kids.helper_kid" */
  insertHelperKidsHelperKid?: Maybe<HelperKidsHelperKidMutationResponse>;
  /** insert a single row into the table: "helper_kids.helper_kid" */
  insertHelperKidsHelperKidOne?: Maybe<HelperKidsHelperKid>;
  /** insert data into the table: "helper_kids.helper_kid_parent" */
  insertHelperKidsHelperKidParent?: Maybe<HelperKidsHelperKidParentMutationResponse>;
  /** insert a single row into the table: "helper_kids.helper_kid_parent" */
  insertHelperKidsHelperKidParentOne?: Maybe<HelperKidsHelperKidParent>;
  /** insert data into the table: "helper_kids.helper_kid_point" */
  insertHelperKidsHelperKidPoint?: Maybe<HelperKidsHelperKidPointMutationResponse>;
  /** insert a single row into the table: "helper_kids.helper_kid_point" */
  insertHelperKidsHelperKidPointOne?: Maybe<HelperKidsHelperKidPoint>;
  /** insert data into the table: "import_file_history" */
  insertImportFileHistory?: Maybe<ImportFileHistoryMutationResponse>;
  /** insert a single row into the table: "import_file_history" */
  insertImportFileHistoryOne?: Maybe<ImportFileHistory>;
  /** insert data into the table: "summary_category_by_group" */
  insertSummaryCategoryByGroup?: Maybe<SummaryCategoryByGroupMutationResponse>;
  /** insert a single row into the table: "summary_category_by_group" */
  insertSummaryCategoryByGroupOne?: Maybe<SummaryCategoryByGroup>;
  /** insert data into the table: "summary_category_by_user" */
  insertSummaryCategoryByUser?: Maybe<SummaryCategoryByUserMutationResponse>;
  /** insert a single row into the table: "summary_category_by_user" */
  insertSummaryCategoryByUserOne?: Maybe<SummaryCategoryByUser>;
  /** insert data into the table: "transfer_category" */
  insertTransferCategory?: Maybe<TransferCategoryMutationResponse>;
  /** insert a single row into the table: "transfer_category" */
  insertTransferCategoryOne?: Maybe<TransferCategory>;
  /** insert data into the table: "user" */
  insertUser?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insertUserOne?: Maybe<User>;
  /** update data of the table: "account" */
  updateAccount?: Maybe<AccountMutationResponse>;
  /** update single row of the table: "account" */
  updateAccountByPk?: Maybe<Account>;
  /** update multiples rows of table: "account" */
  updateAccountMany?: Maybe<Array<Maybe<AccountMutationResponse>>>;
  /** update data of the table: "affiliation" */
  updateAffiliation?: Maybe<AffiliationMutationResponse>;
  /** update single row of the table: "affiliation" */
  updateAffiliationByPk?: Maybe<Affiliation>;
  /** update multiples rows of table: "affiliation" */
  updateAffiliationMany?: Maybe<Array<Maybe<AffiliationMutationResponse>>>;
  /** update data of the table: "application" */
  updateApplication?: Maybe<ApplicationMutationResponse>;
  /** update single row of the table: "application" */
  updateApplicationByPk?: Maybe<Application>;
  /** update multiples rows of table: "application" */
  updateApplicationMany?: Maybe<Array<Maybe<ApplicationMutationResponse>>>;
  /** update data of the table: "category" */
  updateCategory?: Maybe<CategoryMutationResponse>;
  /** update single row of the table: "category" */
  updateCategoryByPk?: Maybe<Category>;
  /** update multiples rows of table: "category" */
  updateCategoryMany?: Maybe<Array<Maybe<CategoryMutationResponse>>>;
  /** update data of the table: "credit_card_detail" */
  updateCreditCardDetail?: Maybe<CreditCardDetailMutationResponse>;
  /** update single row of the table: "credit_card_detail" */
  updateCreditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** update multiples rows of table: "credit_card_detail" */
  updateCreditCardDetailMany?: Maybe<
    Array<Maybe<CreditCardDetailMutationResponse>>
  >;
  /** update data of the table: "credit_card_summary" */
  updateCreditCardSummary?: Maybe<CreditCardSummaryMutationResponse>;
  /** update single row of the table: "credit_card_summary" */
  updateCreditCardSummaryByPk?: Maybe<CreditCardSummary>;
  /** update multiples rows of table: "credit_card_summary" */
  updateCreditCardSummaryMany?: Maybe<
    Array<Maybe<CreditCardSummaryMutationResponse>>
  >;
  /** update data of the table: "daily_detail" */
  updateDailyDetail?: Maybe<DailyDetailMutationResponse>;
  /** update single row of the table: "daily_detail" */
  updateDailyDetailByPk?: Maybe<DailyDetail>;
  /** update multiples rows of table: "daily_detail" */
  updateDailyDetailMany?: Maybe<Array<Maybe<DailyDetailMutationResponse>>>;
  /** update data of the table: "genre" */
  updateGenre?: Maybe<GenreMutationResponse>;
  /** update single row of the table: "genre" */
  updateGenreByPk?: Maybe<Genre>;
  /** update multiples rows of table: "genre" */
  updateGenreMany?: Maybe<Array<Maybe<GenreMutationResponse>>>;
  /** update data of the table: "group" */
  updateGroup?: Maybe<GroupMutationResponse>;
  /** update data of the table: "group_application" */
  updateGroupApplication?: Maybe<GroupApplicationMutationResponse>;
  /** update single row of the table: "group_application" */
  updateGroupApplicationByPk?: Maybe<GroupApplication>;
  /** update multiples rows of table: "group_application" */
  updateGroupApplicationMany?: Maybe<
    Array<Maybe<GroupApplicationMutationResponse>>
  >;
  /** update single row of the table: "group" */
  updateGroupByPk?: Maybe<Group>;
  /** update multiples rows of table: "group" */
  updateGroupMany?: Maybe<Array<Maybe<GroupMutationResponse>>>;
  /** update data of the table: "group_role" */
  updateGroupRole?: Maybe<GroupRoleMutationResponse>;
  /** update single row of the table: "group_role" */
  updateGroupRoleByPk?: Maybe<GroupRole>;
  /** update multiples rows of table: "group_role" */
  updateGroupRoleMany?: Maybe<Array<Maybe<GroupRoleMutationResponse>>>;
  /** update data of the table: "helper_kids.exchange_item" */
  updateHelperKidsExchangeItem?: Maybe<HelperKidsExchangeItemMutationResponse>;
  /** update single row of the table: "helper_kids.exchange_item" */
  updateHelperKidsExchangeItemByPk?: Maybe<HelperKidsExchangeItem>;
  /** update multiples rows of table: "helper_kids.exchange_item" */
  updateHelperKidsExchangeItemMany?: Maybe<
    Array<Maybe<HelperKidsExchangeItemMutationResponse>>
  >;
  /** update data of the table: "helper_kids.help_item" */
  updateHelperKidsHelpItem?: Maybe<HelperKidsHelpItemMutationResponse>;
  /** update single row of the table: "helper_kids.help_item" */
  updateHelperKidsHelpItemByPk?: Maybe<HelperKidsHelpItem>;
  /** update multiples rows of table: "helper_kids.help_item" */
  updateHelperKidsHelpItemMany?: Maybe<
    Array<Maybe<HelperKidsHelpItemMutationResponse>>
  >;
  /** update data of the table: "helper_kids.help_point_earned_achievement" */
  updateHelperKidsHelpPointEarnedAchievement?: Maybe<HelperKidsHelpPointEarnedAchievementMutationResponse>;
  /** update single row of the table: "helper_kids.help_point_earned_achievement" */
  updateHelperKidsHelpPointEarnedAchievementByPk?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** update multiples rows of table: "helper_kids.help_point_earned_achievement" */
  updateHelperKidsHelpPointEarnedAchievementMany?: Maybe<
    Array<Maybe<HelperKidsHelpPointEarnedAchievementMutationResponse>>
  >;
  /** update data of the table: "helper_kids.help_point_earned_detail" */
  updateHelperKidsHelpPointEarnedDetail?: Maybe<HelperKidsHelpPointEarnedDetailMutationResponse>;
  /** update single row of the table: "helper_kids.help_point_earned_detail" */
  updateHelperKidsHelpPointEarnedDetailByPk?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** update multiples rows of table: "helper_kids.help_point_earned_detail" */
  updateHelperKidsHelpPointEarnedDetailMany?: Maybe<
    Array<Maybe<HelperKidsHelpPointEarnedDetailMutationResponse>>
  >;
  /** update data of the table: "helper_kids.help_point_exchanged_achievement" */
  updateHelperKidsHelpPointExchangedAchievement?: Maybe<HelperKidsHelpPointExchangedAchievementMutationResponse>;
  /** update single row of the table: "helper_kids.help_point_exchanged_achievement" */
  updateHelperKidsHelpPointExchangedAchievementByPk?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** update multiples rows of table: "helper_kids.help_point_exchanged_achievement" */
  updateHelperKidsHelpPointExchangedAchievementMany?: Maybe<
    Array<Maybe<HelperKidsHelpPointExchangedAchievementMutationResponse>>
  >;
  /** update data of the table: "helper_kids.helper_kid" */
  updateHelperKidsHelperKid?: Maybe<HelperKidsHelperKidMutationResponse>;
  /** update single row of the table: "helper_kids.helper_kid" */
  updateHelperKidsHelperKidByPk?: Maybe<HelperKidsHelperKid>;
  /** update multiples rows of table: "helper_kids.helper_kid" */
  updateHelperKidsHelperKidMany?: Maybe<
    Array<Maybe<HelperKidsHelperKidMutationResponse>>
  >;
  /** update data of the table: "helper_kids.helper_kid_parent" */
  updateHelperKidsHelperKidParent?: Maybe<HelperKidsHelperKidParentMutationResponse>;
  /** update single row of the table: "helper_kids.helper_kid_parent" */
  updateHelperKidsHelperKidParentByPk?: Maybe<HelperKidsHelperKidParent>;
  /** update multiples rows of table: "helper_kids.helper_kid_parent" */
  updateHelperKidsHelperKidParentMany?: Maybe<
    Array<Maybe<HelperKidsHelperKidParentMutationResponse>>
  >;
  /** update data of the table: "helper_kids.helper_kid_point" */
  updateHelperKidsHelperKidPoint?: Maybe<HelperKidsHelperKidPointMutationResponse>;
  /** update single row of the table: "helper_kids.helper_kid_point" */
  updateHelperKidsHelperKidPointByPk?: Maybe<HelperKidsHelperKidPoint>;
  /** update multiples rows of table: "helper_kids.helper_kid_point" */
  updateHelperKidsHelperKidPointMany?: Maybe<
    Array<Maybe<HelperKidsHelperKidPointMutationResponse>>
  >;
  /** update data of the table: "import_file_history" */
  updateImportFileHistory?: Maybe<ImportFileHistoryMutationResponse>;
  /** update single row of the table: "import_file_history" */
  updateImportFileHistoryByPk?: Maybe<ImportFileHistory>;
  /** update multiples rows of table: "import_file_history" */
  updateImportFileHistoryMany?: Maybe<
    Array<Maybe<ImportFileHistoryMutationResponse>>
  >;
  /** update data of the table: "summary_category_by_group" */
  updateSummaryCategoryByGroup?: Maybe<SummaryCategoryByGroupMutationResponse>;
  /** update single row of the table: "summary_category_by_group" */
  updateSummaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** update multiples rows of table: "summary_category_by_group" */
  updateSummaryCategoryByGroupMany?: Maybe<
    Array<Maybe<SummaryCategoryByGroupMutationResponse>>
  >;
  /** update data of the table: "summary_category_by_user" */
  updateSummaryCategoryByUser?: Maybe<SummaryCategoryByUserMutationResponse>;
  /** update single row of the table: "summary_category_by_user" */
  updateSummaryCategoryByUserByPk?: Maybe<SummaryCategoryByUser>;
  /** update multiples rows of table: "summary_category_by_user" */
  updateSummaryCategoryByUserMany?: Maybe<
    Array<Maybe<SummaryCategoryByUserMutationResponse>>
  >;
  /** update data of the table: "transfer_category" */
  updateTransferCategory?: Maybe<TransferCategoryMutationResponse>;
  /** update single row of the table: "transfer_category" */
  updateTransferCategoryByPk?: Maybe<TransferCategory>;
  /** update multiples rows of table: "transfer_category" */
  updateTransferCategoryMany?: Maybe<
    Array<Maybe<TransferCategoryMutationResponse>>
  >;
  /** update data of the table: "user" */
  updateUser?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  updateUserByPk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  updateUserMany?: Maybe<Array<Maybe<UserMutationResponse>>>;
};

/** mutation root */
export type Mutation_RootDeleteAccountArgs = {
  where: AccountBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteAccountByPkArgs = {
  accountId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteAffiliationArgs = {
  where: AffiliationBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteAffiliationByPkArgs = {
  affiliationId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteApplicationArgs = {
  where: ApplicationBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteApplicationByPkArgs = {
  applicationId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteCategoryArgs = {
  where: CategoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteCategoryByPkArgs = {
  categoryId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteCreditCardDetailArgs = {
  where: CreditCardDetailBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteCreditCardDetailByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteCreditCardSummaryArgs = {
  where: CreditCardSummaryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteCreditCardSummaryByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteDailyDetailArgs = {
  where: DailyDetailBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteDailyDetailByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteGenreArgs = {
  where: GenreBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGenreByPkArgs = {
  genreId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteGroupArgs = {
  where: GroupBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGroupApplicationArgs = {
  where: GroupApplicationBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGroupApplicationByPkArgs = {
  groupApplicationId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteGroupByPkArgs = {
  groupId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteGroupRoleArgs = {
  where: GroupRoleBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteGroupRoleByPkArgs = {
  groupRoleId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsExchangeItemArgs = {
  where: HelperKidsExchangeItemBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsExchangeItemByPkArgs = {
  exchangeItemId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpItemArgs = {
  where: HelperKidsHelpItemBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpItemByPkArgs = {
  helpItemId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpPointEarnedAchievementArgs = {
  where: HelperKidsHelpPointEarnedAchievementBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpPointEarnedAchievementByPkArgs = {
  helpPointEarnedAchievementId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpPointEarnedDetailArgs = {
  where: HelperKidsHelpPointEarnedDetailBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpPointEarnedDetailByPkArgs = {
  helpPointEarnedDetailId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpPointExchangedAchievementArgs = {
  where: HelperKidsHelpPointExchangedAchievementBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelpPointExchangedAchievementByPkArgs =
  {
    helpPointExchangedAchievementId: Scalars["uuid"];
  };

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelperKidArgs = {
  where: HelperKidsHelperKidBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelperKidByPkArgs = {
  helperKidId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelperKidParentArgs = {
  where: HelperKidsHelperKidParentBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelperKidParentByPkArgs = {
  helperKidParentId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelperKidPointArgs = {
  where: HelperKidsHelperKidPointBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteHelperKidsHelperKidPointByPkArgs = {
  helperKidId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteImportFileHistoryArgs = {
  where: ImportFileHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteImportFileHistoryByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteSummaryCategoryByGroupArgs = {
  where: SummaryCategoryByGroupBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteSummaryCategoryByGroupByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteSummaryCategoryByUserArgs = {
  where: SummaryCategoryByUserBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteSummaryCategoryByUserByPkArgs = {
  id: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteTransferCategoryArgs = {
  where: TransferCategoryBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteTransferCategoryByPkArgs = {
  groupId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  where: UserBoolExp;
};

/** mutation root */
export type Mutation_RootDeleteUserByPkArgs = {
  userId: Scalars["uuid"];
};

/** mutation root */
export type Mutation_RootInsertAccountArgs = {
  objects: Array<AccountInsertInput>;
  onConflict?: InputMaybe<AccountOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertAccountOneArgs = {
  object: AccountInsertInput;
  onConflict?: InputMaybe<AccountOnConflict>;
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
export type Mutation_RootInsertApplicationArgs = {
  objects: Array<ApplicationInsertInput>;
  onConflict?: InputMaybe<ApplicationOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertApplicationOneArgs = {
  object: ApplicationInsertInput;
  onConflict?: InputMaybe<ApplicationOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoryArgs = {
  objects: Array<CategoryInsertInput>;
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCategoryOneArgs = {
  object: CategoryInsertInput;
  onConflict?: InputMaybe<CategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardDetailArgs = {
  objects: Array<CreditCardDetailInsertInput>;
  onConflict?: InputMaybe<CreditCardDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardDetailOneArgs = {
  object: CreditCardDetailInsertInput;
  onConflict?: InputMaybe<CreditCardDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardSummaryArgs = {
  objects: Array<CreditCardSummaryInsertInput>;
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertCreditCardSummaryOneArgs = {
  object: CreditCardSummaryInsertInput;
  onConflict?: InputMaybe<CreditCardSummaryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDailyDetailArgs = {
  objects: Array<DailyDetailInsertInput>;
  onConflict?: InputMaybe<DailyDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertDailyDetailOneArgs = {
  object: DailyDetailInsertInput;
  onConflict?: InputMaybe<DailyDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGenreArgs = {
  objects: Array<GenreInsertInput>;
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGenreOneArgs = {
  object: GenreInsertInput;
  onConflict?: InputMaybe<GenreOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupArgs = {
  objects: Array<GroupInsertInput>;
  onConflict?: InputMaybe<GroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupApplicationArgs = {
  objects: Array<GroupApplicationInsertInput>;
  onConflict?: InputMaybe<GroupApplicationOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupApplicationOneArgs = {
  object: GroupApplicationInsertInput;
  onConflict?: InputMaybe<GroupApplicationOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupOneArgs = {
  object: GroupInsertInput;
  onConflict?: InputMaybe<GroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupRoleArgs = {
  objects: Array<GroupRoleInsertInput>;
  onConflict?: InputMaybe<GroupRoleOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertGroupRoleOneArgs = {
  object: GroupRoleInsertInput;
  onConflict?: InputMaybe<GroupRoleOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsExchangeItemArgs = {
  objects: Array<HelperKidsExchangeItemInsertInput>;
  onConflict?: InputMaybe<HelperKidsExchangeItemOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsExchangeItemOneArgs = {
  object: HelperKidsExchangeItemInsertInput;
  onConflict?: InputMaybe<HelperKidsExchangeItemOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpItemArgs = {
  objects: Array<HelperKidsHelpItemInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpItemOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpItemOneArgs = {
  object: HelperKidsHelpItemInsertInput;
  onConflict?: InputMaybe<HelperKidsHelpItemOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedAchievementArgs = {
  objects: Array<HelperKidsHelpPointEarnedAchievementInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedAchievementOneArgs = {
  object: HelperKidsHelpPointEarnedAchievementInsertInput;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedAchievementOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedDetailArgs = {
  objects: Array<HelperKidsHelpPointEarnedDetailInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointEarnedDetailOneArgs = {
  object: HelperKidsHelpPointEarnedDetailInsertInput;
  onConflict?: InputMaybe<HelperKidsHelpPointEarnedDetailOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointExchangedAchievementArgs = {
  objects: Array<HelperKidsHelpPointExchangedAchievementInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelpPointExchangedAchievementOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelpPointExchangedAchievementOneArgs =
  {
    object: HelperKidsHelpPointExchangedAchievementInsertInput;
    onConflict?: InputMaybe<HelperKidsHelpPointExchangedAchievementOnConflict>;
  };

/** mutation root */
export type Mutation_RootInsertHelperKidsHelperKidArgs = {
  objects: Array<HelperKidsHelperKidInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelperKidOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelperKidOneArgs = {
  object: HelperKidsHelperKidInsertInput;
  onConflict?: InputMaybe<HelperKidsHelperKidOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelperKidParentArgs = {
  objects: Array<HelperKidsHelperKidParentInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelperKidParentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelperKidParentOneArgs = {
  object: HelperKidsHelperKidParentInsertInput;
  onConflict?: InputMaybe<HelperKidsHelperKidParentOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelperKidPointArgs = {
  objects: Array<HelperKidsHelperKidPointInsertInput>;
  onConflict?: InputMaybe<HelperKidsHelperKidPointOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertHelperKidsHelperKidPointOneArgs = {
  object: HelperKidsHelperKidPointInsertInput;
  onConflict?: InputMaybe<HelperKidsHelperKidPointOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertImportFileHistoryArgs = {
  objects: Array<ImportFileHistoryInsertInput>;
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertImportFileHistoryOneArgs = {
  object: ImportFileHistoryInsertInput;
  onConflict?: InputMaybe<ImportFileHistoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSummaryCategoryByGroupArgs = {
  objects: Array<SummaryCategoryByGroupInsertInput>;
  onConflict?: InputMaybe<SummaryCategoryByGroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSummaryCategoryByGroupOneArgs = {
  object: SummaryCategoryByGroupInsertInput;
  onConflict?: InputMaybe<SummaryCategoryByGroupOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSummaryCategoryByUserArgs = {
  objects: Array<SummaryCategoryByUserInsertInput>;
  onConflict?: InputMaybe<SummaryCategoryByUserOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertSummaryCategoryByUserOneArgs = {
  object: SummaryCategoryByUserInsertInput;
  onConflict?: InputMaybe<SummaryCategoryByUserOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTransferCategoryArgs = {
  objects: Array<TransferCategoryInsertInput>;
  onConflict?: InputMaybe<TransferCategoryOnConflict>;
};

/** mutation root */
export type Mutation_RootInsertTransferCategoryOneArgs = {
  object: TransferCategoryInsertInput;
  onConflict?: InputMaybe<TransferCategoryOnConflict>;
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
export type Mutation_RootUpdateAccountArgs = {
  _inc?: InputMaybe<AccountIncInput>;
  _set?: InputMaybe<AccountSetInput>;
  where: AccountBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateAccountByPkArgs = {
  _inc?: InputMaybe<AccountIncInput>;
  _set?: InputMaybe<AccountSetInput>;
  pkColumns: AccountPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAccountManyArgs = {
  updates: Array<AccountUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateAffiliationArgs = {
  _set?: InputMaybe<AffiliationSetInput>;
  where: AffiliationBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateAffiliationByPkArgs = {
  _set?: InputMaybe<AffiliationSetInput>;
  pkColumns: AffiliationPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateAffiliationManyArgs = {
  updates: Array<AffiliationUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateApplicationArgs = {
  _set?: InputMaybe<ApplicationSetInput>;
  where: ApplicationBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateApplicationByPkArgs = {
  _set?: InputMaybe<ApplicationSetInput>;
  pkColumns: ApplicationPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateApplicationManyArgs = {
  updates: Array<ApplicationUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCategoryArgs = {
  _inc?: InputMaybe<CategoryIncInput>;
  _set?: InputMaybe<CategorySetInput>;
  where: CategoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCategoryByPkArgs = {
  _inc?: InputMaybe<CategoryIncInput>;
  _set?: InputMaybe<CategorySetInput>;
  pkColumns: CategoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCategoryManyArgs = {
  updates: Array<CategoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardDetailArgs = {
  _inc?: InputMaybe<CreditCardDetailIncInput>;
  _set?: InputMaybe<CreditCardDetailSetInput>;
  where: CreditCardDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardDetailByPkArgs = {
  _inc?: InputMaybe<CreditCardDetailIncInput>;
  _set?: InputMaybe<CreditCardDetailSetInput>;
  pkColumns: CreditCardDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardDetailManyArgs = {
  updates: Array<CreditCardDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardSummaryArgs = {
  _inc?: InputMaybe<CreditCardSummaryIncInput>;
  _set?: InputMaybe<CreditCardSummarySetInput>;
  where: CreditCardSummaryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardSummaryByPkArgs = {
  _inc?: InputMaybe<CreditCardSummaryIncInput>;
  _set?: InputMaybe<CreditCardSummarySetInput>;
  pkColumns: CreditCardSummaryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateCreditCardSummaryManyArgs = {
  updates: Array<CreditCardSummaryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateDailyDetailArgs = {
  _inc?: InputMaybe<DailyDetailIncInput>;
  _set?: InputMaybe<DailyDetailSetInput>;
  where: DailyDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateDailyDetailByPkArgs = {
  _inc?: InputMaybe<DailyDetailIncInput>;
  _set?: InputMaybe<DailyDetailSetInput>;
  pkColumns: DailyDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateDailyDetailManyArgs = {
  updates: Array<DailyDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGenreArgs = {
  _inc?: InputMaybe<GenreIncInput>;
  _set?: InputMaybe<GenreSetInput>;
  where: GenreBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGenreByPkArgs = {
  _inc?: InputMaybe<GenreIncInput>;
  _set?: InputMaybe<GenreSetInput>;
  pkColumns: GenrePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGenreManyArgs = {
  updates: Array<GenreUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGroupArgs = {
  _set?: InputMaybe<GroupSetInput>;
  where: GroupBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGroupApplicationArgs = {
  _set?: InputMaybe<GroupApplicationSetInput>;
  where: GroupApplicationBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGroupApplicationByPkArgs = {
  _set?: InputMaybe<GroupApplicationSetInput>;
  pkColumns: GroupApplicationPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGroupApplicationManyArgs = {
  updates: Array<GroupApplicationUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGroupByPkArgs = {
  _set?: InputMaybe<GroupSetInput>;
  pkColumns: GroupPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGroupManyArgs = {
  updates: Array<GroupUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateGroupRoleArgs = {
  _set?: InputMaybe<GroupRoleSetInput>;
  where: GroupRoleBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateGroupRoleByPkArgs = {
  _set?: InputMaybe<GroupRoleSetInput>;
  pkColumns: GroupRolePkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateGroupRoleManyArgs = {
  updates: Array<GroupRoleUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsExchangeItemArgs = {
  _inc?: InputMaybe<HelperKidsExchangeItemIncInput>;
  _set?: InputMaybe<HelperKidsExchangeItemSetInput>;
  where: HelperKidsExchangeItemBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsExchangeItemByPkArgs = {
  _inc?: InputMaybe<HelperKidsExchangeItemIncInput>;
  _set?: InputMaybe<HelperKidsExchangeItemSetInput>;
  pkColumns: HelperKidsExchangeItemPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsExchangeItemManyArgs = {
  updates: Array<HelperKidsExchangeItemUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpItemArgs = {
  _inc?: InputMaybe<HelperKidsHelpItemIncInput>;
  _set?: InputMaybe<HelperKidsHelpItemSetInput>;
  where: HelperKidsHelpItemBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpItemByPkArgs = {
  _inc?: InputMaybe<HelperKidsHelpItemIncInput>;
  _set?: InputMaybe<HelperKidsHelpItemSetInput>;
  pkColumns: HelperKidsHelpItemPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpItemManyArgs = {
  updates: Array<HelperKidsHelpItemUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointEarnedAchievementArgs = {
  _inc?: InputMaybe<HelperKidsHelpPointEarnedAchievementIncInput>;
  _set?: InputMaybe<HelperKidsHelpPointEarnedAchievementSetInput>;
  where: HelperKidsHelpPointEarnedAchievementBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointEarnedAchievementByPkArgs = {
  _inc?: InputMaybe<HelperKidsHelpPointEarnedAchievementIncInput>;
  _set?: InputMaybe<HelperKidsHelpPointEarnedAchievementSetInput>;
  pkColumns: HelperKidsHelpPointEarnedAchievementPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointEarnedAchievementManyArgs = {
  updates: Array<HelperKidsHelpPointEarnedAchievementUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointEarnedDetailArgs = {
  _inc?: InputMaybe<HelperKidsHelpPointEarnedDetailIncInput>;
  _set?: InputMaybe<HelperKidsHelpPointEarnedDetailSetInput>;
  where: HelperKidsHelpPointEarnedDetailBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointEarnedDetailByPkArgs = {
  _inc?: InputMaybe<HelperKidsHelpPointEarnedDetailIncInput>;
  _set?: InputMaybe<HelperKidsHelpPointEarnedDetailSetInput>;
  pkColumns: HelperKidsHelpPointEarnedDetailPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointEarnedDetailManyArgs = {
  updates: Array<HelperKidsHelpPointEarnedDetailUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointExchangedAchievementArgs = {
  _inc?: InputMaybe<HelperKidsHelpPointExchangedAchievementIncInput>;
  _set?: InputMaybe<HelperKidsHelpPointExchangedAchievementSetInput>;
  where: HelperKidsHelpPointExchangedAchievementBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointExchangedAchievementByPkArgs =
  {
    _inc?: InputMaybe<HelperKidsHelpPointExchangedAchievementIncInput>;
    _set?: InputMaybe<HelperKidsHelpPointExchangedAchievementSetInput>;
    pkColumns: HelperKidsHelpPointExchangedAchievementPkColumnsInput;
  };

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelpPointExchangedAchievementManyArgs =
  {
    updates: Array<HelperKidsHelpPointExchangedAchievementUpdates>;
  };

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidArgs = {
  _set?: InputMaybe<HelperKidsHelperKidSetInput>;
  where: HelperKidsHelperKidBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidByPkArgs = {
  _set?: InputMaybe<HelperKidsHelperKidSetInput>;
  pkColumns: HelperKidsHelperKidPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidManyArgs = {
  updates: Array<HelperKidsHelperKidUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidParentArgs = {
  _set?: InputMaybe<HelperKidsHelperKidParentSetInput>;
  where: HelperKidsHelperKidParentBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidParentByPkArgs = {
  _set?: InputMaybe<HelperKidsHelperKidParentSetInput>;
  pkColumns: HelperKidsHelperKidParentPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidParentManyArgs = {
  updates: Array<HelperKidsHelperKidParentUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidPointArgs = {
  _inc?: InputMaybe<HelperKidsHelperKidPointIncInput>;
  _set?: InputMaybe<HelperKidsHelperKidPointSetInput>;
  where: HelperKidsHelperKidPointBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidPointByPkArgs = {
  _inc?: InputMaybe<HelperKidsHelperKidPointIncInput>;
  _set?: InputMaybe<HelperKidsHelperKidPointSetInput>;
  pkColumns: HelperKidsHelperKidPointPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateHelperKidsHelperKidPointManyArgs = {
  updates: Array<HelperKidsHelperKidPointUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateImportFileHistoryArgs = {
  _set?: InputMaybe<ImportFileHistorySetInput>;
  where: ImportFileHistoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateImportFileHistoryByPkArgs = {
  _set?: InputMaybe<ImportFileHistorySetInput>;
  pkColumns: ImportFileHistoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateImportFileHistoryManyArgs = {
  updates: Array<ImportFileHistoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateSummaryCategoryByGroupArgs = {
  _inc?: InputMaybe<SummaryCategoryByGroupIncInput>;
  _set?: InputMaybe<SummaryCategoryByGroupSetInput>;
  where: SummaryCategoryByGroupBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateSummaryCategoryByGroupByPkArgs = {
  _inc?: InputMaybe<SummaryCategoryByGroupIncInput>;
  _set?: InputMaybe<SummaryCategoryByGroupSetInput>;
  pkColumns: SummaryCategoryByGroupPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateSummaryCategoryByGroupManyArgs = {
  updates: Array<SummaryCategoryByGroupUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateSummaryCategoryByUserArgs = {
  _inc?: InputMaybe<SummaryCategoryByUserIncInput>;
  _set?: InputMaybe<SummaryCategoryByUserSetInput>;
  where: SummaryCategoryByUserBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateSummaryCategoryByUserByPkArgs = {
  _inc?: InputMaybe<SummaryCategoryByUserIncInput>;
  _set?: InputMaybe<SummaryCategoryByUserSetInput>;
  pkColumns: SummaryCategoryByUserPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateSummaryCategoryByUserManyArgs = {
  updates: Array<SummaryCategoryByUserUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateTransferCategoryArgs = {
  _set?: InputMaybe<TransferCategorySetInput>;
  where: TransferCategoryBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateTransferCategoryByPkArgs = {
  _set?: InputMaybe<TransferCategorySetInput>;
  pkColumns: TransferCategoryPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateTransferCategoryManyArgs = {
  updates: Array<TransferCategoryUpdates>;
};

/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};

/** mutation root */
export type Mutation_RootUpdateUserByPkArgs = {
  _inc?: InputMaybe<UserIncInput>;
  _set?: InputMaybe<UserSetInput>;
  pkColumns: UserPkColumnsInput;
};

/** mutation root */
export type Mutation_RootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};

export type Query_Root = {
  __typename?: "query_root";
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  accountAggregate: AccountAggregate;
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>;
  /** execute function "account_total" which returns "total_by_account_view" */
  accountTotal: Array<TotalByAccountView>;
  /** execute function "account_total" and query aggregates on result of table type "total_by_account_view" */
  accountTotalAggregate: TotalByAccountViewAggregate;
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
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  categoryAggregate: CategoryAggregate;
  /** fetch data from the table: "category" using primary key columns */
  categoryByPk?: Maybe<Category>;
  /** execute function "category_total_by_month" which returns "total_by_category_view" */
  categoryTotalByMonth: Array<TotalByCategoryView>;
  /** execute function "category_total_by_month" and query aggregates on result of table type "total_by_category_view" */
  categoryTotalByMonthAggregate: TotalByCategoryViewAggregate;
  /** fetch data from the table: "credit_card_detail" */
  creditCardDetail: Array<CreditCardDetail>;
  /** fetch aggregated fields from the table: "credit_card_detail" */
  creditCardDetailAggregate: CreditCardDetailAggregate;
  /** fetch data from the table: "credit_card_detail" using primary key columns */
  creditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** fetch data from the table: "credit_card_summary" */
  creditCardSummary: Array<CreditCardSummary>;
  /** fetch aggregated fields from the table: "credit_card_summary" */
  creditCardSummaryAggregate: CreditCardSummaryAggregate;
  /** fetch data from the table: "credit_card_summary" using primary key columns */
  creditCardSummaryByPk?: Maybe<CreditCardSummary>;
  /** fetch data from the table: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountView: Array<CreditCardSummaryTotalByAccountView>;
  /** fetch aggregated fields from the table: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountViewAggregate: CreditCardSummaryTotalByAccountViewAggregate;
  /** fetch data from the table: "daily_detail" */
  dailyDetail: Array<DailyDetail>;
  /** fetch aggregated fields from the table: "daily_detail" */
  dailyDetailAggregate: DailyDetailAggregate;
  /** execute function "daily_detail_by_date" which returns "daily_detail" */
  dailyDetailByDate: Array<DailyDetail>;
  /** execute function "daily_detail_by_date" and query aggregates on result of table type "daily_detail" */
  dailyDetailByDateAggregate: DailyDetailAggregate;
  /** fetch data from the table: "daily_detail" using primary key columns */
  dailyDetailByPk?: Maybe<DailyDetail>;
  /** fetch data from the table: "daily_total_view" */
  dailyTotalView: Array<DailyTotalView>;
  /** fetch aggregated fields from the table: "daily_total_view" */
  dailyTotalViewAggregate: DailyTotalViewAggregate;
  /** fetch data from the table: "genre" */
  genre: Array<Genre>;
  /** fetch aggregated fields from the table: "genre" */
  genreAggregate: GenreAggregate;
  /** fetch data from the table: "genre" using primary key columns */
  genreByPk?: Maybe<Genre>;
  /** execute function "genre_total_by_month" which returns "total_by_genre_view" */
  genreTotalByMonth: Array<TotalByGenreView>;
  /** execute function "genre_total_by_month" and query aggregates on result of table type "total_by_genre_view" */
  genreTotalByMonthAggregate: TotalByGenreViewAggregate;
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
  /** fetch data from the table: "group_role" */
  groupRole: Array<GroupRole>;
  /** fetch aggregated fields from the table: "group_role" */
  groupRoleAggregate: GroupRoleAggregate;
  /** fetch data from the table: "group_role" using primary key columns */
  groupRoleByPk?: Maybe<GroupRole>;
  /** fetch data from the table: "helper_kids.exchange_item" */
  helperKidsExchangeItem: Array<HelperKidsExchangeItem>;
  /** fetch aggregated fields from the table: "helper_kids.exchange_item" */
  helperKidsExchangeItemAggregate: HelperKidsExchangeItemAggregate;
  /** fetch data from the table: "helper_kids.exchange_item" using primary key columns */
  helperKidsExchangeItemByPk?: Maybe<HelperKidsExchangeItem>;
  /** fetch data from the table: "helper_kids.help_item" */
  helperKidsHelpItem: Array<HelperKidsHelpItem>;
  /** fetch aggregated fields from the table: "helper_kids.help_item" */
  helperKidsHelpItemAggregate: HelperKidsHelpItemAggregate;
  /** fetch data from the table: "helper_kids.help_item" using primary key columns */
  helperKidsHelpItemByPk?: Maybe<HelperKidsHelpItem>;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievement: Array<HelperKidsHelpPointEarnedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievementAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" using primary key columns */
  helperKidsHelpPointEarnedAchievementByPk?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetail: Array<HelperKidsHelpPointEarnedDetail>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetailAggregate: HelperKidsHelpPointEarnedDetailAggregate;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" using primary key columns */
  helperKidsHelpPointEarnedDetailByPk?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievement: Array<HelperKidsHelpPointExchangedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievementAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" using primary key columns */
  helperKidsHelpPointExchangedAchievementByPk?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** fetch data from the table: "helper_kids.helper_kid" */
  helperKidsHelperKid: Array<HelperKidsHelperKid>;
  /** fetch aggregated fields from the table: "helper_kids.helper_kid" */
  helperKidsHelperKidAggregate: HelperKidsHelperKidAggregate;
  /** fetch data from the table: "helper_kids.helper_kid" using primary key columns */
  helperKidsHelperKidByPk?: Maybe<HelperKidsHelperKid>;
  /** fetch data from the table: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParent: Array<HelperKidsHelperKidParent>;
  /** fetch aggregated fields from the table: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParentAggregate: HelperKidsHelperKidParentAggregate;
  /** fetch data from the table: "helper_kids.helper_kid_parent" using primary key columns */
  helperKidsHelperKidParentByPk?: Maybe<HelperKidsHelperKidParent>;
  /** fetch data from the table: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPoint: Array<HelperKidsHelperKidPoint>;
  /** fetch aggregated fields from the table: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPointAggregate: HelperKidsHelperKidPointAggregate;
  /** fetch data from the table: "helper_kids.helper_kid_point" using primary key columns */
  helperKidsHelperKidPointByPk?: Maybe<HelperKidsHelperKidPoint>;
  /** fetch data from the table: "import_file_history" */
  importFileHistory: Array<ImportFileHistory>;
  /** fetch aggregated fields from the table: "import_file_history" */
  importFileHistoryAggregate: ImportFileHistoryAggregate;
  /** fetch data from the table: "import_file_history" using primary key columns */
  importFileHistoryByPk?: Maybe<ImportFileHistory>;
  /** fetch data from the table: "summary_category_by_group" */
  summaryCategoryByGroup: Array<SummaryCategoryByGroup>;
  /** fetch aggregated fields from the table: "summary_category_by_group" */
  summaryCategoryByGroupAggregate: SummaryCategoryByGroupAggregate;
  /** fetch data from the table: "summary_category_by_group" using primary key columns */
  summaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** fetch data from the table: "summary_category_by_user" */
  summaryCategoryByUser: Array<SummaryCategoryByUser>;
  /** fetch aggregated fields from the table: "summary_category_by_user" */
  summaryCategoryByUserAggregate: SummaryCategoryByUserAggregate;
  /** fetch data from the table: "summary_category_by_user" using primary key columns */
  summaryCategoryByUserByPk?: Maybe<SummaryCategoryByUser>;
  /** fetch data from the table: "total_by_account_view" */
  totalByAccountView: Array<TotalByAccountView>;
  /** fetch aggregated fields from the table: "total_by_account_view" */
  totalByAccountViewAggregate: TotalByAccountViewAggregate;
  /** fetch data from the table: "total_by_category_view" */
  totalByCategoryView: Array<TotalByCategoryView>;
  /** fetch aggregated fields from the table: "total_by_category_view" */
  totalByCategoryViewAggregate: TotalByCategoryViewAggregate;
  /** fetch data from the table: "total_by_genre_view" */
  totalByGenreView: Array<TotalByGenreView>;
  /** fetch aggregated fields from the table: "total_by_genre_view" */
  totalByGenreViewAggregate: TotalByGenreViewAggregate;
  /** fetch data from the table: "transfer_category" */
  transferCategory: Array<TransferCategory>;
  /** fetch aggregated fields from the table: "transfer_category" */
  transferCategoryAggregate: TransferCategoryAggregate;
  /** fetch data from the table: "transfer_category" using primary key columns */
  transferCategoryByPk?: Maybe<TransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
};

export type Query_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Query_RootAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Query_RootAccountByPkArgs = {
  accountId: Scalars["uuid"];
};

export type Query_RootAccountTotalArgs = {
  args: AccountTotalArgs;
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Query_RootAccountTotalAggregateArgs = {
  args: AccountTotalArgs;
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
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
  affiliationId: Scalars["uuid"];
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
  applicationId: Scalars["uuid"];
};

export type Query_RootCategoryArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Query_RootCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Query_RootCategoryByPkArgs = {
  categoryId: Scalars["uuid"];
};

export type Query_RootCategoryTotalByMonthArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Query_RootCategoryTotalByMonthAggregateArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Query_RootCreditCardDetailArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Query_RootCreditCardDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Query_RootCreditCardDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootCreditCardSummaryArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Query_RootCreditCardSummaryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Query_RootCreditCardSummaryByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootCreditCardSummaryTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<
    Array<CreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewOrderBy>>;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Query_RootCreditCardSummaryTotalByAccountViewAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<CreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewOrderBy>>;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Query_RootDailyDetailArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Query_RootDailyDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Query_RootDailyDetailByDateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Query_RootDailyDetailByDateAggregateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Query_RootDailyDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootDailyTotalViewArgs = {
  distinctOn?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewOrderBy>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Query_RootDailyTotalViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewOrderBy>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Query_RootGenreArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Query_RootGenreAggregateArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Query_RootGenreByPkArgs = {
  genreId: Scalars["uuid"];
};

export type Query_RootGenreTotalByMonthArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Query_RootGenreTotalByMonthAggregateArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
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
  groupApplicationId: Scalars["uuid"];
};

export type Query_RootGroupByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Query_RootGroupRoleArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupRoleOrderBy>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Query_RootGroupRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupRoleOrderBy>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Query_RootGroupRoleByPkArgs = {
  groupRoleId: Scalars["uuid"];
};

export type Query_RootHelperKidsExchangeItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Query_RootHelperKidsExchangeItemAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Query_RootHelperKidsExchangeItemByPkArgs = {
  exchangeItemId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Query_RootHelperKidsHelpItemAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Query_RootHelperKidsHelpItemByPkArgs = {
  helpItemId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpPointEarnedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedAchievementAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedAchievementByPkArgs = {
  helpPointEarnedAchievementId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpPointEarnedDetailArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Query_RootHelperKidsHelpPointEarnedDetailByPkArgs = {
  helpPointEarnedDetailId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelpPointExchangedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointExchangedAchievementAggregateArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

export type Query_RootHelperKidsHelpPointExchangedAchievementByPkArgs = {
  helpPointExchangedAchievementId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelperKidArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Query_RootHelperKidsHelperKidAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Query_RootHelperKidsHelperKidByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelperKidParentArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Query_RootHelperKidsHelperKidParentAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Query_RootHelperKidsHelperKidParentByPkArgs = {
  helperKidParentId: Scalars["uuid"];
};

export type Query_RootHelperKidsHelperKidPointArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidPointOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Query_RootHelperKidsHelperKidPointAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidPointOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Query_RootHelperKidsHelperKidPointByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Query_RootImportFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Query_RootImportFileHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Query_RootImportFileHistoryByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSummaryCategoryByGroupArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Query_RootSummaryCategoryByGroupAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Query_RootSummaryCategoryByGroupByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootSummaryCategoryByUserArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

export type Query_RootSummaryCategoryByUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

export type Query_RootSummaryCategoryByUserByPkArgs = {
  id: Scalars["uuid"];
};

export type Query_RootTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Query_RootTotalByAccountViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Query_RootTotalByCategoryViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Query_RootTotalByCategoryViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Query_RootTotalByGenreViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Query_RootTotalByGenreViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Query_RootTransferCategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Query_RootTransferCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Query_RootTransferCategoryByPkArgs = {
  groupId: Scalars["uuid"];
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
  userId: Scalars["uuid"];
};

export type Subscription_Root = {
  __typename?: "subscription_root";
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  accountAggregate: AccountAggregate;
  /** fetch data from the table: "account" using primary key columns */
  accountByPk?: Maybe<Account>;
  /** fetch data from the table in a streaming manner: "account" */
  accountStream: Array<Account>;
  /** execute function "account_total" which returns "total_by_account_view" */
  accountTotal: Array<TotalByAccountView>;
  /** execute function "account_total" and query aggregates on result of table type "total_by_account_view" */
  accountTotalAggregate: TotalByAccountViewAggregate;
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
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch aggregated fields from the table: "category" */
  categoryAggregate: CategoryAggregate;
  /** fetch data from the table: "category" using primary key columns */
  categoryByPk?: Maybe<Category>;
  /** fetch data from the table in a streaming manner: "category" */
  categoryStream: Array<Category>;
  /** execute function "category_total_by_month" which returns "total_by_category_view" */
  categoryTotalByMonth: Array<TotalByCategoryView>;
  /** execute function "category_total_by_month" and query aggregates on result of table type "total_by_category_view" */
  categoryTotalByMonthAggregate: TotalByCategoryViewAggregate;
  /** fetch data from the table: "credit_card_detail" */
  creditCardDetail: Array<CreditCardDetail>;
  /** fetch aggregated fields from the table: "credit_card_detail" */
  creditCardDetailAggregate: CreditCardDetailAggregate;
  /** fetch data from the table: "credit_card_detail" using primary key columns */
  creditCardDetailByPk?: Maybe<CreditCardDetail>;
  /** fetch data from the table in a streaming manner: "credit_card_detail" */
  creditCardDetailStream: Array<CreditCardDetail>;
  /** fetch data from the table: "credit_card_summary" */
  creditCardSummary: Array<CreditCardSummary>;
  /** fetch aggregated fields from the table: "credit_card_summary" */
  creditCardSummaryAggregate: CreditCardSummaryAggregate;
  /** fetch data from the table: "credit_card_summary" using primary key columns */
  creditCardSummaryByPk?: Maybe<CreditCardSummary>;
  /** fetch data from the table in a streaming manner: "credit_card_summary" */
  creditCardSummaryStream: Array<CreditCardSummary>;
  /** fetch data from the table: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountView: Array<CreditCardSummaryTotalByAccountView>;
  /** fetch aggregated fields from the table: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountViewAggregate: CreditCardSummaryTotalByAccountViewAggregate;
  /** fetch data from the table in a streaming manner: "credit_card_summary_total_by_account_view" */
  creditCardSummaryTotalByAccountViewStream: Array<CreditCardSummaryTotalByAccountView>;
  /** fetch data from the table: "daily_detail" */
  dailyDetail: Array<DailyDetail>;
  /** fetch aggregated fields from the table: "daily_detail" */
  dailyDetailAggregate: DailyDetailAggregate;
  /** execute function "daily_detail_by_date" which returns "daily_detail" */
  dailyDetailByDate: Array<DailyDetail>;
  /** execute function "daily_detail_by_date" and query aggregates on result of table type "daily_detail" */
  dailyDetailByDateAggregate: DailyDetailAggregate;
  /** fetch data from the table: "daily_detail" using primary key columns */
  dailyDetailByPk?: Maybe<DailyDetail>;
  /** fetch data from the table in a streaming manner: "daily_detail" */
  dailyDetailStream: Array<DailyDetail>;
  /** fetch data from the table: "daily_total_view" */
  dailyTotalView: Array<DailyTotalView>;
  /** fetch aggregated fields from the table: "daily_total_view" */
  dailyTotalViewAggregate: DailyTotalViewAggregate;
  /** fetch data from the table in a streaming manner: "daily_total_view" */
  dailyTotalViewStream: Array<DailyTotalView>;
  /** fetch data from the table: "genre" */
  genre: Array<Genre>;
  /** fetch aggregated fields from the table: "genre" */
  genreAggregate: GenreAggregate;
  /** fetch data from the table: "genre" using primary key columns */
  genreByPk?: Maybe<Genre>;
  /** fetch data from the table in a streaming manner: "genre" */
  genreStream: Array<Genre>;
  /** execute function "genre_total_by_month" which returns "total_by_genre_view" */
  genreTotalByMonth: Array<TotalByGenreView>;
  /** execute function "genre_total_by_month" and query aggregates on result of table type "total_by_genre_view" */
  genreTotalByMonthAggregate: TotalByGenreViewAggregate;
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
  /** fetch data from the table: "group_role" */
  groupRole: Array<GroupRole>;
  /** fetch aggregated fields from the table: "group_role" */
  groupRoleAggregate: GroupRoleAggregate;
  /** fetch data from the table: "group_role" using primary key columns */
  groupRoleByPk?: Maybe<GroupRole>;
  /** fetch data from the table in a streaming manner: "group_role" */
  groupRoleStream: Array<GroupRole>;
  /** fetch data from the table in a streaming manner: "group" */
  groupStream: Array<Group>;
  /** fetch data from the table: "helper_kids.exchange_item" */
  helperKidsExchangeItem: Array<HelperKidsExchangeItem>;
  /** fetch aggregated fields from the table: "helper_kids.exchange_item" */
  helperKidsExchangeItemAggregate: HelperKidsExchangeItemAggregate;
  /** fetch data from the table: "helper_kids.exchange_item" using primary key columns */
  helperKidsExchangeItemByPk?: Maybe<HelperKidsExchangeItem>;
  /** fetch data from the table in a streaming manner: "helper_kids.exchange_item" */
  helperKidsExchangeItemStream: Array<HelperKidsExchangeItem>;
  /** fetch data from the table: "helper_kids.help_item" */
  helperKidsHelpItem: Array<HelperKidsHelpItem>;
  /** fetch aggregated fields from the table: "helper_kids.help_item" */
  helperKidsHelpItemAggregate: HelperKidsHelpItemAggregate;
  /** fetch data from the table: "helper_kids.help_item" using primary key columns */
  helperKidsHelpItemByPk?: Maybe<HelperKidsHelpItem>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_item" */
  helperKidsHelpItemStream: Array<HelperKidsHelpItem>;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievement: Array<HelperKidsHelpPointEarnedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievementAggregate: HelperKidsHelpPointEarnedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_earned_achievement" using primary key columns */
  helperKidsHelpPointEarnedAchievementByPk?: Maybe<HelperKidsHelpPointEarnedAchievement>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_point_earned_achievement" */
  helperKidsHelpPointEarnedAchievementStream: Array<HelperKidsHelpPointEarnedAchievement>;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetail: Array<HelperKidsHelpPointEarnedDetail>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetailAggregate: HelperKidsHelpPointEarnedDetailAggregate;
  /** fetch data from the table: "helper_kids.help_point_earned_detail" using primary key columns */
  helperKidsHelpPointEarnedDetailByPk?: Maybe<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_point_earned_detail" */
  helperKidsHelpPointEarnedDetailStream: Array<HelperKidsHelpPointEarnedDetail>;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievement: Array<HelperKidsHelpPointExchangedAchievement>;
  /** fetch aggregated fields from the table: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievementAggregate: HelperKidsHelpPointExchangedAchievementAggregate;
  /** fetch data from the table: "helper_kids.help_point_exchanged_achievement" using primary key columns */
  helperKidsHelpPointExchangedAchievementByPk?: Maybe<HelperKidsHelpPointExchangedAchievement>;
  /** fetch data from the table in a streaming manner: "helper_kids.help_point_exchanged_achievement" */
  helperKidsHelpPointExchangedAchievementStream: Array<HelperKidsHelpPointExchangedAchievement>;
  /** fetch data from the table: "helper_kids.helper_kid" */
  helperKidsHelperKid: Array<HelperKidsHelperKid>;
  /** fetch aggregated fields from the table: "helper_kids.helper_kid" */
  helperKidsHelperKidAggregate: HelperKidsHelperKidAggregate;
  /** fetch data from the table: "helper_kids.helper_kid" using primary key columns */
  helperKidsHelperKidByPk?: Maybe<HelperKidsHelperKid>;
  /** fetch data from the table: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParent: Array<HelperKidsHelperKidParent>;
  /** fetch aggregated fields from the table: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParentAggregate: HelperKidsHelperKidParentAggregate;
  /** fetch data from the table: "helper_kids.helper_kid_parent" using primary key columns */
  helperKidsHelperKidParentByPk?: Maybe<HelperKidsHelperKidParent>;
  /** fetch data from the table in a streaming manner: "helper_kids.helper_kid_parent" */
  helperKidsHelperKidParentStream: Array<HelperKidsHelperKidParent>;
  /** fetch data from the table: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPoint: Array<HelperKidsHelperKidPoint>;
  /** fetch aggregated fields from the table: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPointAggregate: HelperKidsHelperKidPointAggregate;
  /** fetch data from the table: "helper_kids.helper_kid_point" using primary key columns */
  helperKidsHelperKidPointByPk?: Maybe<HelperKidsHelperKidPoint>;
  /** fetch data from the table in a streaming manner: "helper_kids.helper_kid_point" */
  helperKidsHelperKidPointStream: Array<HelperKidsHelperKidPoint>;
  /** fetch data from the table in a streaming manner: "helper_kids.helper_kid" */
  helperKidsHelperKidStream: Array<HelperKidsHelperKid>;
  /** fetch data from the table: "import_file_history" */
  importFileHistory: Array<ImportFileHistory>;
  /** fetch aggregated fields from the table: "import_file_history" */
  importFileHistoryAggregate: ImportFileHistoryAggregate;
  /** fetch data from the table: "import_file_history" using primary key columns */
  importFileHistoryByPk?: Maybe<ImportFileHistory>;
  /** fetch data from the table in a streaming manner: "import_file_history" */
  importFileHistoryStream: Array<ImportFileHistory>;
  /** fetch data from the table: "summary_category_by_group" */
  summaryCategoryByGroup: Array<SummaryCategoryByGroup>;
  /** fetch aggregated fields from the table: "summary_category_by_group" */
  summaryCategoryByGroupAggregate: SummaryCategoryByGroupAggregate;
  /** fetch data from the table: "summary_category_by_group" using primary key columns */
  summaryCategoryByGroupByPk?: Maybe<SummaryCategoryByGroup>;
  /** fetch data from the table in a streaming manner: "summary_category_by_group" */
  summaryCategoryByGroupStream: Array<SummaryCategoryByGroup>;
  /** fetch data from the table: "summary_category_by_user" */
  summaryCategoryByUser: Array<SummaryCategoryByUser>;
  /** fetch aggregated fields from the table: "summary_category_by_user" */
  summaryCategoryByUserAggregate: SummaryCategoryByUserAggregate;
  /** fetch data from the table: "summary_category_by_user" using primary key columns */
  summaryCategoryByUserByPk?: Maybe<SummaryCategoryByUser>;
  /** fetch data from the table in a streaming manner: "summary_category_by_user" */
  summaryCategoryByUserStream: Array<SummaryCategoryByUser>;
  /** fetch data from the table: "total_by_account_view" */
  totalByAccountView: Array<TotalByAccountView>;
  /** fetch aggregated fields from the table: "total_by_account_view" */
  totalByAccountViewAggregate: TotalByAccountViewAggregate;
  /** fetch data from the table in a streaming manner: "total_by_account_view" */
  totalByAccountViewStream: Array<TotalByAccountView>;
  /** fetch data from the table: "total_by_category_view" */
  totalByCategoryView: Array<TotalByCategoryView>;
  /** fetch aggregated fields from the table: "total_by_category_view" */
  totalByCategoryViewAggregate: TotalByCategoryViewAggregate;
  /** fetch data from the table in a streaming manner: "total_by_category_view" */
  totalByCategoryViewStream: Array<TotalByCategoryView>;
  /** fetch data from the table: "total_by_genre_view" */
  totalByGenreView: Array<TotalByGenreView>;
  /** fetch aggregated fields from the table: "total_by_genre_view" */
  totalByGenreViewAggregate: TotalByGenreViewAggregate;
  /** fetch data from the table in a streaming manner: "total_by_genre_view" */
  totalByGenreViewStream: Array<TotalByGenreView>;
  /** fetch data from the table: "transfer_category" */
  transferCategory: Array<TransferCategory>;
  /** fetch aggregated fields from the table: "transfer_category" */
  transferCategoryAggregate: TransferCategoryAggregate;
  /** fetch data from the table: "transfer_category" using primary key columns */
  transferCategoryByPk?: Maybe<TransferCategory>;
  /** fetch data from the table in a streaming manner: "transfer_category" */
  transferCategoryStream: Array<TransferCategory>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  userAggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  userByPk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  userStream: Array<User>;
};

export type Subscription_RootAccountArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Subscription_RootAccountAggregateArgs = {
  distinctOn?: InputMaybe<Array<AccountSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<AccountOrderBy>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Subscription_RootAccountByPkArgs = {
  accountId: Scalars["uuid"];
};

export type Subscription_RootAccountStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<AccountStreamCursorInput>>;
  where?: InputMaybe<AccountBoolExp>;
};

export type Subscription_RootAccountTotalArgs = {
  args: AccountTotalArgs;
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootAccountTotalAggregateArgs = {
  args: AccountTotalArgs;
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
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
  affiliationId: Scalars["uuid"];
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
  applicationId: Scalars["uuid"];
};

export type Subscription_RootApplicationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<ApplicationStreamCursorInput>>;
  where?: InputMaybe<ApplicationBoolExp>;
};

export type Subscription_RootCategoryArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Subscription_RootCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CategoryOrderBy>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Subscription_RootCategoryByPkArgs = {
  categoryId: Scalars["uuid"];
};

export type Subscription_RootCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<CategoryStreamCursorInput>>;
  where?: InputMaybe<CategoryBoolExp>;
};

export type Subscription_RootCategoryTotalByMonthArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootCategoryTotalByMonthAggregateArgs = {
  args: CategoryTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootCreditCardDetailArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Subscription_RootCreditCardDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardDetailOrderBy>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Subscription_RootCreditCardDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootCreditCardDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<CreditCardDetailStreamCursorInput>>;
  where?: InputMaybe<CreditCardDetailBoolExp>;
};

export type Subscription_RootCreditCardSummaryArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Subscription_RootCreditCardSummaryAggregateArgs = {
  distinctOn?: InputMaybe<Array<CreditCardSummarySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryOrderBy>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Subscription_RootCreditCardSummaryByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootCreditCardSummaryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<CreditCardSummaryStreamCursorInput>>;
  where?: InputMaybe<CreditCardSummaryBoolExp>;
};

export type Subscription_RootCreditCardSummaryTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<
    Array<CreditCardSummaryTotalByAccountViewSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewOrderBy>>;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Subscription_RootCreditCardSummaryTotalByAccountViewAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<CreditCardSummaryTotalByAccountViewSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<CreditCardSummaryTotalByAccountViewOrderBy>>;
    where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
  };

export type Subscription_RootCreditCardSummaryTotalByAccountViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<
    InputMaybe<CreditCardSummaryTotalByAccountViewStreamCursorInput>
  >;
  where?: InputMaybe<CreditCardSummaryTotalByAccountViewBoolExp>;
};

export type Subscription_RootDailyDetailArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailByDateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailByDateAggregateArgs = {
  args: DailyDetailByDateArgs;
  distinctOn?: InputMaybe<Array<DailyDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyDetailOrderBy>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyDetailByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootDailyDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<DailyDetailStreamCursorInput>>;
  where?: InputMaybe<DailyDetailBoolExp>;
};

export type Subscription_RootDailyTotalViewArgs = {
  distinctOn?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewOrderBy>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Subscription_RootDailyTotalViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<DailyTotalViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<DailyTotalViewOrderBy>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Subscription_RootDailyTotalViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<DailyTotalViewStreamCursorInput>>;
  where?: InputMaybe<DailyTotalViewBoolExp>;
};

export type Subscription_RootGenreArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Subscription_RootGenreAggregateArgs = {
  distinctOn?: InputMaybe<Array<GenreSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GenreOrderBy>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Subscription_RootGenreByPkArgs = {
  genreId: Scalars["uuid"];
};

export type Subscription_RootGenreStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GenreStreamCursorInput>>;
  where?: InputMaybe<GenreBoolExp>;
};

export type Subscription_RootGenreTotalByMonthArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootGenreTotalByMonthAggregateArgs = {
  args: GenreTotalByMonthArgs;
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
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
  groupApplicationId: Scalars["uuid"];
};

export type Subscription_RootGroupApplicationStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupApplicationStreamCursorInput>>;
  where?: InputMaybe<GroupApplicationBoolExp>;
};

export type Subscription_RootGroupByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Subscription_RootGroupRoleArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupRoleOrderBy>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Subscription_RootGroupRoleAggregateArgs = {
  distinctOn?: InputMaybe<Array<GroupRoleSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<GroupRoleOrderBy>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Subscription_RootGroupRoleByPkArgs = {
  groupRoleId: Scalars["uuid"];
};

export type Subscription_RootGroupRoleStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupRoleStreamCursorInput>>;
  where?: InputMaybe<GroupRoleBoolExp>;
};

export type Subscription_RootGroupStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<GroupStreamCursorInput>>;
  where?: InputMaybe<GroupBoolExp>;
};

export type Subscription_RootHelperKidsExchangeItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Subscription_RootHelperKidsExchangeItemAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsExchangeItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsExchangeItemOrderBy>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Subscription_RootHelperKidsExchangeItemByPkArgs = {
  exchangeItemId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsExchangeItemStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsExchangeItemStreamCursorInput>>;
  where?: InputMaybe<HelperKidsExchangeItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpItemArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpItemAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpItemSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpItemOrderBy>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpItemByPkArgs = {
  helpItemId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpItemStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelpItemStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelpItemBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedAchievementAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HelperKidsHelpPointEarnedAchievementSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedAchievementOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
  };

export type Subscription_RootHelperKidsHelpPointEarnedAchievementByPkArgs = {
  helpPointEarnedAchievementId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpPointEarnedAchievementStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<
    InputMaybe<HelperKidsHelpPointEarnedAchievementStreamCursorInput>
  >;
  where?: InputMaybe<HelperKidsHelpPointEarnedAchievementBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointEarnedDetailOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailByPkArgs = {
  helpPointEarnedDetailId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpPointEarnedDetailStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelpPointEarnedDetailStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelpPointEarnedDetailBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointExchangedAchievementArgs = {
  distinctOn?: InputMaybe<
    Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
  >;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
  where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
};

export type Subscription_RootHelperKidsHelpPointExchangedAchievementAggregateArgs =
  {
    distinctOn?: InputMaybe<
      Array<HelperKidsHelpPointExchangedAchievementSelectColumn>
    >;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    orderBy?: InputMaybe<Array<HelperKidsHelpPointExchangedAchievementOrderBy>>;
    where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  };

export type Subscription_RootHelperKidsHelpPointExchangedAchievementByPkArgs = {
  helpPointExchangedAchievementId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelpPointExchangedAchievementStreamArgs =
  {
    batchSize: Scalars["Int"];
    cursor: Array<
      InputMaybe<HelperKidsHelpPointExchangedAchievementStreamCursorInput>
    >;
    where?: InputMaybe<HelperKidsHelpPointExchangedAchievementBoolExp>;
  };

export type Subscription_RootHelperKidsHelperKidArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelperKidParentArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidParentAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidParentSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidParentOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidParentByPkArgs = {
  helperKidParentId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelperKidParentStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelperKidParentStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelperKidParentBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidPointArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidPointOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidPointAggregateArgs = {
  distinctOn?: InputMaybe<Array<HelperKidsHelperKidPointSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<HelperKidsHelperKidPointOrderBy>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidPointByPkArgs = {
  helperKidId: Scalars["uuid"];
};

export type Subscription_RootHelperKidsHelperKidPointStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelperKidPointStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelperKidPointBoolExp>;
};

export type Subscription_RootHelperKidsHelperKidStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<HelperKidsHelperKidStreamCursorInput>>;
  where?: InputMaybe<HelperKidsHelperKidBoolExp>;
};

export type Subscription_RootImportFileHistoryArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Subscription_RootImportFileHistoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<ImportFileHistorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<ImportFileHistoryOrderBy>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Subscription_RootImportFileHistoryByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootImportFileHistoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<ImportFileHistoryStreamCursorInput>>;
  where?: InputMaybe<ImportFileHistoryBoolExp>;
};

export type Subscription_RootSummaryCategoryByGroupArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Subscription_RootSummaryCategoryByGroupAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByGroupOrderBy>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Subscription_RootSummaryCategoryByGroupByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSummaryCategoryByGroupStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<SummaryCategoryByGroupStreamCursorInput>>;
  where?: InputMaybe<SummaryCategoryByGroupBoolExp>;
};

export type Subscription_RootSummaryCategoryByUserArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

export type Subscription_RootSummaryCategoryByUserAggregateArgs = {
  distinctOn?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<SummaryCategoryByUserOrderBy>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

export type Subscription_RootSummaryCategoryByUserByPkArgs = {
  id: Scalars["uuid"];
};

export type Subscription_RootSummaryCategoryByUserStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<SummaryCategoryByUserStreamCursorInput>>;
  where?: InputMaybe<SummaryCategoryByUserBoolExp>;
};

export type Subscription_RootTotalByAccountViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootTotalByAccountViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<TotalByAccountViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByAccountViewOrderBy>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootTotalByAccountViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TotalByAccountViewStreamCursorInput>>;
  where?: InputMaybe<TotalByAccountViewBoolExp>;
};

export type Subscription_RootTotalByCategoryViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootTotalByCategoryViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<TotalByCategoryViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByCategoryViewOrderBy>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootTotalByCategoryViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TotalByCategoryViewStreamCursorInput>>;
  where?: InputMaybe<TotalByCategoryViewBoolExp>;
};

export type Subscription_RootTotalByGenreViewArgs = {
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootTotalByGenreViewAggregateArgs = {
  distinctOn?: InputMaybe<Array<TotalByGenreViewSelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TotalByGenreViewOrderBy>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootTotalByGenreViewStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TotalByGenreViewStreamCursorInput>>;
  where?: InputMaybe<TotalByGenreViewBoolExp>;
};

export type Subscription_RootTransferCategoryArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Subscription_RootTransferCategoryAggregateArgs = {
  distinctOn?: InputMaybe<Array<TransferCategorySelectColumn>>;
  limit?: InputMaybe<Scalars["Int"]>;
  offset?: InputMaybe<Scalars["Int"]>;
  orderBy?: InputMaybe<Array<TransferCategoryOrderBy>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
};

export type Subscription_RootTransferCategoryByPkArgs = {
  groupId: Scalars["uuid"];
};

export type Subscription_RootTransferCategoryStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<TransferCategoryStreamCursorInput>>;
  where?: InputMaybe<TransferCategoryBoolExp>;
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
  userId: Scalars["uuid"];
};

export type Subscription_RootUserStreamArgs = {
  batchSize: Scalars["Int"];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

export type SummaryCategoryByGroupAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SummaryCategoryByGroupSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<SummaryCategoryByGroupBoolExp>;
  predicate: IntComparisonExp;
};

export type SummaryCategoryByUserAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<SummaryCategoryByUserSelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<SummaryCategoryByUserBoolExp>;
  predicate: IntComparisonExp;
};

export type TransferCategoryAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<TransferCategorySelectColumn>>;
  distinct?: InputMaybe<Scalars["Boolean"]>;
  filter?: InputMaybe<TransferCategoryBoolExp>;
  predicate: IntComparisonExp;
};

export type InsertExchangedAchievementMutationVariables = Exact<{
  helpPointExchangedAchievementId: Scalars["uuid"];
  helperKidId: Scalars["uuid"];
  exchangeItemId: Scalars["uuid"];
  exchangeCount: Scalars["Int"];
  exchangeTotalPoint: Scalars["Int"];
  exchangedDatetime: Scalars["timestamp"];
  groupId: Scalars["uuid"];
}>;

export type InsertExchangedAchievementMutation = {
  __typename?: "mutation_root";
  insertHelperKidsHelpPointExchangedAchievementOne?: {
    __typename?: "HelperKidsHelpPointExchangedAchievement";
    id: any;
  } | null;
};

export type RegisterHelpPointEarnedAchievementMutationVariables = Exact<{
  helpPointEarnedAchievementId: Scalars["uuid"];
  helperKidId: Scalars["uuid"];
  earnedPoint: Scalars["Int"];
  earnedDatetime: Scalars["timestamp"];
  groupId: Scalars["uuid"];
}>;

export type RegisterHelpPointEarnedAchievementMutation = {
  __typename?: "mutation_root";
  insertHelperKidsHelpPointEarnedAchievementOne?: {
    __typename?: "HelperKidsHelpPointEarnedAchievement";
    id: any;
  } | null;
};

export type RegisterHelpPointEarnedDetailMutationVariables = Exact<{
  helpPointEarnedDetailId: Scalars["uuid"];
  earnedAchievementId: Scalars["uuid"];
  helpItemId: Scalars["uuid"];
  helpItemTotalPoint: Scalars["Int"];
  helpItemCount: Scalars["Int"];
  groupId: Scalars["uuid"];
}>;

export type RegisterHelpPointEarnedDetailMutation = {
  __typename?: "mutation_root";
  insertHelperKidsHelpPointEarnedDetail?: {
    __typename?: "HelperKidsHelpPointEarnedDetailMutationResponse";
    returning: Array<{
      __typename?: "HelperKidsHelpPointEarnedDetail";
      id: any;
    }>;
  } | null;
};

export type GetEarnedDetailByHelperKidIdQueryVariables = Exact<{
  helperKidId: Scalars["uuid"];
}>;

export type GetEarnedDetailByHelperKidIdQuery = {
  __typename?: "query_root";
  earnedAchievements: Array<{
    __typename?: "HelperKidsHelpPointEarnedAchievement";
    id: any;
    total: number;
    datetime: any;
    details: Array<{
      __typename?: "HelperKidsHelpPointEarnedDetail";
      id: any;
      count: number;
      point: number;
      helpItem: { __typename?: "HelperKidsHelpItem"; name: string; id: any };
    }>;
  }>;
};

export type GetExchangeItemsQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetExchangeItemsQuery = {
  __typename?: "query_root";
  exchangeItems: Array<{
    __typename?: "HelperKidsExchangeItem";
    name: string;
    point: number;
    memo?: string | null;
    id: any;
  }>;
};

export type GetExchangedAchievementsByHelperKidIdQueryVariables = Exact<{
  helperKidId: Scalars["uuid"];
}>;

export type GetExchangedAchievementsByHelperKidIdQuery = {
  __typename?: "query_root";
  exchangedAchievements: Array<{
    __typename?: "HelperKidsHelpPointExchangedAchievement";
    id: any;
    point: number;
    count: number;
    datetime: any;
    exchangeItem: {
      __typename?: "HelperKidsExchangeItem";
      name: string;
      memo?: string | null;
      id: any;
    };
  }>;
};

export type GetHelpItemsQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetHelpItemsQuery = {
  __typename?: "query_root";
  helpItems: Array<{
    __typename?: "HelperKidsHelpItem";
    name: string;
    point: number;
    memo?: string | null;
    id: any;
  }>;
};

export type GetHelperKidByIdQueryVariables = Exact<{
  helperKidId: Scalars["uuid"];
}>;

export type GetHelperKidByIdQuery = {
  __typename?: "query_root";
  helperKid?: {
    __typename?: "HelperKidsHelperKid";
    name: string;
    nameSuffix: string;
    id: any;
  } | null;
  earnedAgg: {
    __typename?: "HelperKidsHelpPointEarnedAchievementAggregate";
    helperKids: Array<{
      __typename?: "HelperKidsHelpPointEarnedAchievement";
      earnedDatetime: any;
      earnedPoint: number;
      id: any;
    }>;
    aggregate?: {
      __typename?: "HelperKidsHelpPointEarnedAchievementAggregateFields";
      sum?: {
        __typename?: "HelperKidsHelpPointEarnedAchievementSumFields";
        earnedPoint?: number | null;
      } | null;
      max?: {
        __typename?: "HelperKidsHelpPointEarnedAchievementMaxFields";
        earnedDatetime?: any | null;
      } | null;
    } | null;
  };
  exchangedAgg: {
    __typename?: "HelperKidsHelpPointExchangedAchievementAggregate";
    helperKids: Array<{
      __typename?: "HelperKidsHelpPointExchangedAchievement";
      exchangedDatetime: any;
      exchangeTotalPoint: number;
      id: any;
    }>;
    aggregate?: {
      __typename?: "HelperKidsHelpPointExchangedAchievementAggregateFields";
      sum?: {
        __typename?: "HelperKidsHelpPointExchangedAchievementSumFields";
        exchangeTotalPoint?: number | null;
      } | null;
      max?: {
        __typename?: "HelperKidsHelpPointExchangedAchievementMaxFields";
        exchangedDatetime?: any | null;
      } | null;
    } | null;
  };
};

export type GetHelperKidsQueryVariables = Exact<{
  groupId: Scalars["uuid"];
}>;

export type GetHelperKidsQuery = {
  __typename?: "query_root";
  helperKid: Array<{
    __typename?: "HelperKidsHelperKid";
    name: string;
    nameSuffix: string;
    id: any;
    point?: {
      __typename?: "HelperKidsHelperKidPoint";
      lastHelpDatetime: any;
      value: number;
    } | null;
  }>;
};

export const InsertExchangedAchievementDocument = gql`
  mutation InsertExchangedAchievement(
    $helpPointExchangedAchievementId: uuid!
    $helperKidId: uuid!
    $exchangeItemId: uuid!
    $exchangeCount: Int!
    $exchangeTotalPoint: Int!
    $exchangedDatetime: timestamp!
    $groupId: uuid!
  ) {
    insertHelperKidsHelpPointExchangedAchievementOne(
      object: {
        helpPointExchangedAchievementId: $helpPointExchangedAchievementId
        helperKidId: $helperKidId
        exchangeItemId: $exchangeItemId
        exchangeCount: $exchangeCount
        exchangeTotalPoint: $exchangeTotalPoint
        exchangedDatetime: $exchangedDatetime
        groupId: $groupId
      }
    ) {
      id: helpPointExchangedAchievementId
    }
  }
`;

export function useInsertExchangedAchievementMutation() {
  return Urql.useMutation<
    InsertExchangedAchievementMutation,
    InsertExchangedAchievementMutationVariables
  >(InsertExchangedAchievementDocument);
}
export const RegisterHelpPointEarnedAchievementDocument = gql`
  mutation RegisterHelpPointEarnedAchievement(
    $helpPointEarnedAchievementId: uuid!
    $helperKidId: uuid!
    $earnedPoint: Int!
    $earnedDatetime: timestamp!
    $groupId: uuid!
  ) {
    insertHelperKidsHelpPointEarnedAchievementOne(
      object: {
        helpPointEarnedAchievementId: $helpPointEarnedAchievementId
        helperKidId: $helperKidId
        earnedPoint: $earnedPoint
        groupId: $groupId
        earnedDatetime: $earnedDatetime
      }
    ) {
      id: helpPointEarnedAchievementId
    }
  }
`;

export function useRegisterHelpPointEarnedAchievementMutation() {
  return Urql.useMutation<
    RegisterHelpPointEarnedAchievementMutation,
    RegisterHelpPointEarnedAchievementMutationVariables
  >(RegisterHelpPointEarnedAchievementDocument);
}
export const RegisterHelpPointEarnedDetailDocument = gql`
  mutation RegisterHelpPointEarnedDetail(
    $helpPointEarnedDetailId: uuid!
    $earnedAchievementId: uuid!
    $helpItemId: uuid!
    $helpItemTotalPoint: Int!
    $helpItemCount: Int!
    $groupId: uuid!
  ) {
    insertHelperKidsHelpPointEarnedDetail(
      objects: {
        helpPointEarnedDetailId: $helpPointEarnedDetailId
        earnedAchievementId: $earnedAchievementId
        helpItemId: $helpItemId
        helpItemTotalPoint: $helpItemTotalPoint
        helpItemCount: $helpItemCount
        groupId: $groupId
      }
    ) {
      returning {
        id: helpPointEarnedDetailId
      }
    }
  }
`;

export function useRegisterHelpPointEarnedDetailMutation() {
  return Urql.useMutation<
    RegisterHelpPointEarnedDetailMutation,
    RegisterHelpPointEarnedDetailMutationVariables
  >(RegisterHelpPointEarnedDetailDocument);
}
export const GetEarnedDetailByHelperKidIdDocument = gql`
  query getEarnedDetailByHelperKidId($helperKidId: uuid!) {
    earnedAchievements: helperKidsHelpPointEarnedAchievement(
      where: { helperKidId: { _eq: $helperKidId } }
      orderBy: { earnedDatetime: DESC }
    ) {
      id: helpPointEarnedAchievementId
      total: earnedPoint
      datetime: earnedDatetime
      details: helpPointEarnedDetails {
        id: helpPointEarnedDetailId
        count: helpItemCount
        point: helpItemTotalPoint
        helpItem {
          id: helpItemId
          name
        }
      }
    }
  }
`;

export function useGetEarnedDetailByHelperKidIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetEarnedDetailByHelperKidIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetEarnedDetailByHelperKidIdQuery,
    GetEarnedDetailByHelperKidIdQueryVariables
  >({ query: GetEarnedDetailByHelperKidIdDocument, ...options });
}
export const GetExchangeItemsDocument = gql`
  query getExchangeItems($groupId: uuid!) {
    exchangeItems: helperKidsExchangeItem(
      where: { groupId: { _eq: $groupId } }
    ) {
      id: exchangeItemId
      name
      point
      memo
    }
  }
`;

export function useGetExchangeItemsQuery(
  options: Omit<Urql.UseQueryArgs<GetExchangeItemsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetExchangeItemsQuery, GetExchangeItemsQueryVariables>({
    query: GetExchangeItemsDocument,
    ...options,
  });
}

export const GetExchangedAchievementsByHelperKidIdDocument = gql`
  query getExchangedAchievementsByHelperKidId($helperKidId: uuid!) {
    exchangedAchievements: helperKidsHelpPointExchangedAchievement(
      where: { helperKidId: { _eq: $helperKidId } }
      orderBy: { exchangedDatetime: DESC }
    ) {
      id: helpPointExchangedAchievementId
      point: exchangeTotalPoint
      count: exchangeCount
      datetime: exchangedDatetime
      exchangeItem {
        id: exchangeItemId
        name
        memo
      }
    }
  }
`;

export function useGetExchangedAchievementsByHelperKidIdQuery(
  options: Omit<
    Urql.UseQueryArgs<GetExchangedAchievementsByHelperKidIdQueryVariables>,
    "query"
  >,
) {
  return Urql.useQuery<
    GetExchangedAchievementsByHelperKidIdQuery,
    GetExchangedAchievementsByHelperKidIdQueryVariables
  >({ query: GetExchangedAchievementsByHelperKidIdDocument, ...options });
}
export const GetHelpItemsDocument = gql`
  query getHelpItems($groupId: uuid!) {
    helpItems: helperKidsHelpItem(where: { groupId: { _eq: $groupId } }) {
      id: helpItemId
      name
      point
      memo
    }
  }
`;

export function useGetHelpItemsQuery(
  options: Omit<Urql.UseQueryArgs<GetHelpItemsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetHelpItemsQuery, GetHelpItemsQueryVariables>({
    query: GetHelpItemsDocument,
    ...options,
  });
}
export const GetHelperKidByIdDocument = gql`
  query getHelperKidById($helperKidId: uuid!) {
    helperKid: helperKidsHelperKidByPk(helperKidId: $helperKidId) {
      id: helperKidId
      name
      nameSuffix
    }
    earnedAgg: helperKidsHelpPointEarnedAchievementAggregate(
      where: { helperKidId: { _eq: $helperKidId } }
    ) {
      helperKids: nodes {
        id: helperKidId
        earnedDatetime
        earnedPoint
      }
      aggregate {
        sum {
          earnedPoint
        }
        max {
          earnedDatetime
        }
      }
    }
    exchangedAgg: helperKidsHelpPointExchangedAchievementAggregate(
      where: { helperKidId: { _eq: $helperKidId } }
    ) {
      helperKids: nodes {
        id: helperKidId
        exchangedDatetime
        exchangeTotalPoint
      }
      aggregate {
        sum {
          exchangeTotalPoint
        }
        max {
          exchangedDatetime
        }
      }
    }
  }
`;

export function useGetHelperKidByIdQuery(
  options: Omit<Urql.UseQueryArgs<GetHelperKidByIdQueryVariables>, "query">,
) {
  return Urql.useQuery<GetHelperKidByIdQuery, GetHelperKidByIdQueryVariables>({
    query: GetHelperKidByIdDocument,
    ...options,
  });
}
export const GetHelperKidsDocument = gql`
  query getHelperKids($groupId: uuid!) {
    helperKid: helperKidsHelperKid(where: { groupId: { _eq: $groupId } }) {
      id: helperKidId
      name
      nameSuffix
      point: helperKidPoint {
        value: point
        lastHelpDatetime
      }
    }
  }
`;

export function useGetHelperKidsQuery(
  options: Omit<Urql.UseQueryArgs<GetHelperKidsQueryVariables>, "query">,
) {
  return Urql.useQuery<GetHelperKidsQuery, GetHelperKidsQueryVariables>({
    query: GetHelperKidsDocument,
    ...options,
  });
}
