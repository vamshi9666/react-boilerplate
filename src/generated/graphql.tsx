import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  timestamptz: any;
  timetz: any;
  uuid: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "customers" */
export type Customers = {
  __typename?: 'customers';
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  phone_number?: Maybe<Scalars['bigint']>;
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "customers" */
export type CustomersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** columns and relationships of "customers" */
export type CustomersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "customers" */
export type Customers_Aggregate = {
  __typename?: 'customers_aggregate';
  aggregate?: Maybe<Customers_Aggregate_Fields>;
  nodes: Array<Customers>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_Fields = {
  __typename?: 'customers_aggregate_fields';
  avg?: Maybe<Customers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Customers_Max_Fields>;
  min?: Maybe<Customers_Min_Fields>;
  stddev?: Maybe<Customers_Stddev_Fields>;
  stddev_pop?: Maybe<Customers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Customers_Stddev_Samp_Fields>;
  sum?: Maybe<Customers_Sum_Fields>;
  var_pop?: Maybe<Customers_Var_Pop_Fields>;
  var_samp?: Maybe<Customers_Var_Samp_Fields>;
  variance?: Maybe<Customers_Variance_Fields>;
};

/** aggregate fields of "customers" */
export type Customers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Customers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "customers" */
export type Customers_Aggregate_Order_By = {
  avg?: Maybe<Customers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Customers_Max_Order_By>;
  min?: Maybe<Customers_Min_Order_By>;
  stddev?: Maybe<Customers_Stddev_Order_By>;
  stddev_pop?: Maybe<Customers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Customers_Stddev_Samp_Order_By>;
  sum?: Maybe<Customers_Sum_Order_By>;
  var_pop?: Maybe<Customers_Var_Pop_Order_By>;
  var_samp?: Maybe<Customers_Var_Samp_Order_By>;
  variance?: Maybe<Customers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "customers" */
export type Customers_Arr_Rel_Insert_Input = {
  data: Array<Customers_Insert_Input>;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** aggregate avg on columns */
export type Customers_Avg_Fields = {
  __typename?: 'customers_avg_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "customers" */
export type Customers_Avg_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "customers". All fields are combined with a logical 'AND'. */
export type Customers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Customers_Bool_Exp>>>;
  _not?: Maybe<Customers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Customers_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  phone_number?: Maybe<Bigint_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "customers" */
export enum Customers_Constraint {
  /** unique or primary key constraint */
  CustomersPkey = 'customers_pkey',
}

/** input type for incrementing integer column in table "customers" */
export type Customers_Inc_Input = {
  phone_number?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "customers" */
export type Customers_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  phone_number?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Customers_Max_Fields = {
  __typename?: 'customers_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "customers" */
export type Customers_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Customers_Min_Fields = {
  __typename?: 'customers_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "customers" */
export type Customers_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "customers" */
export type Customers_Mutation_Response = {
  __typename?: 'customers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Customers>;
};

/** input type for inserting object relation for remote table "customers" */
export type Customers_Obj_Rel_Insert_Input = {
  data: Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** on conflict condition type for table "customers" */
export type Customers_On_Conflict = {
  constraint: Customers_Constraint;
  update_columns: Array<Customers_Update_Column>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** ordering options when selecting data from "customers" */
export type Customers_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  phone_number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "customers" */
export type Customers_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "customers" */
export enum Customers_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "customers" */
export type Customers_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Customers_Stddev_Fields = {
  __typename?: 'customers_stddev_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "customers" */
export type Customers_Stddev_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Customers_Stddev_Pop_Fields = {
  __typename?: 'customers_stddev_pop_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "customers" */
export type Customers_Stddev_Pop_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Customers_Stddev_Samp_Fields = {
  __typename?: 'customers_stddev_samp_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "customers" */
export type Customers_Stddev_Samp_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Customers_Sum_Fields = {
  __typename?: 'customers_sum_fields';
  phone_number?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "customers" */
export type Customers_Sum_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** update columns of table "customers" */
export enum Customers_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Customers_Var_Pop_Fields = {
  __typename?: 'customers_var_pop_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "customers" */
export type Customers_Var_Pop_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Customers_Var_Samp_Fields = {
  __typename?: 'customers_var_samp_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "customers" */
export type Customers_Var_Samp_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Customers_Variance_Fields = {
  __typename?: 'customers_variance_fields';
  phone_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "customers" */
export type Customers_Variance_Order_By = {
  phone_number?: Maybe<Order_By>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "dish_images" */
export type Dish_Images = {
  __typename?: 'dish_images';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dish: Dishes;
  dish_id: Scalars['uuid'];
  id: Scalars['uuid'];
  path: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "dish_images" */
export type Dish_Images_Aggregate = {
  __typename?: 'dish_images_aggregate';
  aggregate?: Maybe<Dish_Images_Aggregate_Fields>;
  nodes: Array<Dish_Images>;
};

/** aggregate fields of "dish_images" */
export type Dish_Images_Aggregate_Fields = {
  __typename?: 'dish_images_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dish_Images_Max_Fields>;
  min?: Maybe<Dish_Images_Min_Fields>;
};

/** aggregate fields of "dish_images" */
export type Dish_Images_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dish_Images_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dish_images" */
export type Dish_Images_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dish_Images_Max_Order_By>;
  min?: Maybe<Dish_Images_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dish_images" */
export type Dish_Images_Arr_Rel_Insert_Input = {
  data: Array<Dish_Images_Insert_Input>;
  on_conflict?: Maybe<Dish_Images_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dish_images". All fields are combined with a logical 'AND'. */
export type Dish_Images_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dish_Images_Bool_Exp>>>;
  _not?: Maybe<Dish_Images_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dish_Images_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dish?: Maybe<Dishes_Bool_Exp>;
  dish_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  path?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "dish_images" */
export enum Dish_Images_Constraint {
  /** unique or primary key constraint */
  DishImagesPkey = 'dish_images_pkey',
}

/** input type for inserting data into table "dish_images" */
export type Dish_Images_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish?: Maybe<Dishes_Obj_Rel_Insert_Input>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  path?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Dish_Images_Max_Fields = {
  __typename?: 'dish_images_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  path?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "dish_images" */
export type Dish_Images_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dish_Images_Min_Fields = {
  __typename?: 'dish_images_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  path?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "dish_images" */
export type Dish_Images_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "dish_images" */
export type Dish_Images_Mutation_Response = {
  __typename?: 'dish_images_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dish_Images>;
};

/** input type for inserting object relation for remote table "dish_images" */
export type Dish_Images_Obj_Rel_Insert_Input = {
  data: Dish_Images_Insert_Input;
  on_conflict?: Maybe<Dish_Images_On_Conflict>;
};

/** on conflict condition type for table "dish_images" */
export type Dish_Images_On_Conflict = {
  constraint: Dish_Images_Constraint;
  update_columns: Array<Dish_Images_Update_Column>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** ordering options when selecting data from "dish_images" */
export type Dish_Images_Order_By = {
  created_at?: Maybe<Order_By>;
  dish?: Maybe<Dishes_Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  path?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "dish_images" */
export type Dish_Images_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "dish_images" */
export enum Dish_Images_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_id',
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "dish_images" */
export type Dish_Images_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  path?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "dish_images" */
export enum Dish_Images_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_id',
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "dish_orders" */
export type Dish_Orders = {
  __typename?: 'dish_orders';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dish: Dishes;
  dish_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  variants: Array<Order_Variants>;
  /** An aggregated array relationship */
  variants_aggregate: Order_Variants_Aggregate;
};

/** columns and relationships of "dish_orders" */
export type Dish_OrdersVariantsArgs = {
  distinct_on?: Maybe<Array<Order_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Variants_Order_By>>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** columns and relationships of "dish_orders" */
export type Dish_OrdersVariants_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Variants_Order_By>>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** aggregated selection of "dish_orders" */
export type Dish_Orders_Aggregate = {
  __typename?: 'dish_orders_aggregate';
  aggregate?: Maybe<Dish_Orders_Aggregate_Fields>;
  nodes: Array<Dish_Orders>;
};

/** aggregate fields of "dish_orders" */
export type Dish_Orders_Aggregate_Fields = {
  __typename?: 'dish_orders_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dish_Orders_Max_Fields>;
  min?: Maybe<Dish_Orders_Min_Fields>;
};

/** aggregate fields of "dish_orders" */
export type Dish_Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dish_Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dish_orders" */
export type Dish_Orders_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dish_Orders_Max_Order_By>;
  min?: Maybe<Dish_Orders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dish_orders" */
export type Dish_Orders_Arr_Rel_Insert_Input = {
  data: Array<Dish_Orders_Insert_Input>;
  on_conflict?: Maybe<Dish_Orders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dish_orders". All fields are combined with a logical 'AND'. */
export type Dish_Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dish_Orders_Bool_Exp>>>;
  _not?: Maybe<Dish_Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dish_Orders_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dish?: Maybe<Dishes_Bool_Exp>;
  dish_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order?: Maybe<Orders_Bool_Exp>;
  order_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variants?: Maybe<Order_Variants_Bool_Exp>;
};

/** unique or primary key constraints on table "dish_orders" */
export enum Dish_Orders_Constraint {
  /** unique or primary key constraint */
  DishOrdersPkey = 'dish_orders_pkey',
}

/** input type for inserting data into table "dish_orders" */
export type Dish_Orders_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish?: Maybe<Dishes_Obj_Rel_Insert_Input>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order?: Maybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variants?: Maybe<Order_Variants_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Dish_Orders_Max_Fields = {
  __typename?: 'dish_orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "dish_orders" */
export type Dish_Orders_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dish_Orders_Min_Fields = {
  __typename?: 'dish_orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "dish_orders" */
export type Dish_Orders_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "dish_orders" */
export type Dish_Orders_Mutation_Response = {
  __typename?: 'dish_orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dish_Orders>;
};

/** input type for inserting object relation for remote table "dish_orders" */
export type Dish_Orders_Obj_Rel_Insert_Input = {
  data: Dish_Orders_Insert_Input;
  on_conflict?: Maybe<Dish_Orders_On_Conflict>;
};

/** on conflict condition type for table "dish_orders" */
export type Dish_Orders_On_Conflict = {
  constraint: Dish_Orders_Constraint;
  update_columns: Array<Dish_Orders_Update_Column>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** ordering options when selecting data from "dish_orders" */
export type Dish_Orders_Order_By = {
  created_at?: Maybe<Order_By>;
  dish?: Maybe<Dishes_Order_By>;
  dish_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order?: Maybe<Orders_Order_By>;
  order_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variants_aggregate?: Maybe<Order_Variants_Aggregate_Order_By>;
};

/** primary key columns input for table: "dish_orders" */
export type Dish_Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "dish_orders" */
export enum Dish_Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "dish_orders" */
export type Dish_Orders_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  order_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "dish_orders" */
export enum Dish_Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_id',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "dish_variants" */
export type Dish_Variants = {
  __typename?: 'dish_variants';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dish: Dishes;
  dish_Id: Scalars['uuid'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  price: Scalars['Int'];
  servings_count: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "dish_variants" */
export type Dish_Variants_Aggregate = {
  __typename?: 'dish_variants_aggregate';
  aggregate?: Maybe<Dish_Variants_Aggregate_Fields>;
  nodes: Array<Dish_Variants>;
};

/** aggregate fields of "dish_variants" */
export type Dish_Variants_Aggregate_Fields = {
  __typename?: 'dish_variants_aggregate_fields';
  avg?: Maybe<Dish_Variants_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dish_Variants_Max_Fields>;
  min?: Maybe<Dish_Variants_Min_Fields>;
  stddev?: Maybe<Dish_Variants_Stddev_Fields>;
  stddev_pop?: Maybe<Dish_Variants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Dish_Variants_Stddev_Samp_Fields>;
  sum?: Maybe<Dish_Variants_Sum_Fields>;
  var_pop?: Maybe<Dish_Variants_Var_Pop_Fields>;
  var_samp?: Maybe<Dish_Variants_Var_Samp_Fields>;
  variance?: Maybe<Dish_Variants_Variance_Fields>;
};

/** aggregate fields of "dish_variants" */
export type Dish_Variants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dish_Variants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dish_variants" */
export type Dish_Variants_Aggregate_Order_By = {
  avg?: Maybe<Dish_Variants_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Dish_Variants_Max_Order_By>;
  min?: Maybe<Dish_Variants_Min_Order_By>;
  stddev?: Maybe<Dish_Variants_Stddev_Order_By>;
  stddev_pop?: Maybe<Dish_Variants_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Dish_Variants_Stddev_Samp_Order_By>;
  sum?: Maybe<Dish_Variants_Sum_Order_By>;
  var_pop?: Maybe<Dish_Variants_Var_Pop_Order_By>;
  var_samp?: Maybe<Dish_Variants_Var_Samp_Order_By>;
  variance?: Maybe<Dish_Variants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "dish_variants" */
export type Dish_Variants_Arr_Rel_Insert_Input = {
  data: Array<Dish_Variants_Insert_Input>;
  on_conflict?: Maybe<Dish_Variants_On_Conflict>;
};

/** aggregate avg on columns */
export type Dish_Variants_Avg_Fields = {
  __typename?: 'dish_variants_avg_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "dish_variants" */
export type Dish_Variants_Avg_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "dish_variants". All fields are combined with a logical 'AND'. */
export type Dish_Variants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dish_Variants_Bool_Exp>>>;
  _not?: Maybe<Dish_Variants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dish_Variants_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dish?: Maybe<Dishes_Bool_Exp>;
  dish_Id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  price?: Maybe<Int_Comparison_Exp>;
  servings_count?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "dish_variants" */
export enum Dish_Variants_Constraint {
  /** unique or primary key constraint */
  DishVariantsPkey = 'dish_variants_pkey',
}

/** input type for incrementing integer column in table "dish_variants" */
export type Dish_Variants_Inc_Input = {
  price?: Maybe<Scalars['Int']>;
  servings_count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "dish_variants" */
export type Dish_Variants_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish?: Maybe<Dishes_Obj_Rel_Insert_Input>;
  dish_Id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  servings_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Dish_Variants_Max_Fields = {
  __typename?: 'dish_variants_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_Id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  servings_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "dish_variants" */
export type Dish_Variants_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_Id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dish_Variants_Min_Fields = {
  __typename?: 'dish_variants_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_Id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  servings_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "dish_variants" */
export type Dish_Variants_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  dish_Id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "dish_variants" */
export type Dish_Variants_Mutation_Response = {
  __typename?: 'dish_variants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dish_Variants>;
};

/** input type for inserting object relation for remote table "dish_variants" */
export type Dish_Variants_Obj_Rel_Insert_Input = {
  data: Dish_Variants_Insert_Input;
  on_conflict?: Maybe<Dish_Variants_On_Conflict>;
};

/** on conflict condition type for table "dish_variants" */
export type Dish_Variants_On_Conflict = {
  constraint: Dish_Variants_Constraint;
  update_columns: Array<Dish_Variants_Update_Column>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** ordering options when selecting data from "dish_variants" */
export type Dish_Variants_Order_By = {
  created_at?: Maybe<Order_By>;
  dish?: Maybe<Dishes_Order_By>;
  dish_Id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "dish_variants" */
export type Dish_Variants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "dish_variants" */
export enum Dish_Variants_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_Id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  ServingsCount = 'servings_count',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "dish_variants" */
export type Dish_Variants_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  dish_Id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  servings_count?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Dish_Variants_Stddev_Fields = {
  __typename?: 'dish_variants_stddev_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "dish_variants" */
export type Dish_Variants_Stddev_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Dish_Variants_Stddev_Pop_Fields = {
  __typename?: 'dish_variants_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "dish_variants" */
export type Dish_Variants_Stddev_Pop_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Dish_Variants_Stddev_Samp_Fields = {
  __typename?: 'dish_variants_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "dish_variants" */
export type Dish_Variants_Stddev_Samp_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Dish_Variants_Sum_Fields = {
  __typename?: 'dish_variants_sum_fields';
  price?: Maybe<Scalars['Int']>;
  servings_count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "dish_variants" */
export type Dish_Variants_Sum_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** update columns of table "dish_variants" */
export enum Dish_Variants_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DishId = 'dish_Id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  ServingsCount = 'servings_count',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Dish_Variants_Var_Pop_Fields = {
  __typename?: 'dish_variants_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "dish_variants" */
export type Dish_Variants_Var_Pop_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Dish_Variants_Var_Samp_Fields = {
  __typename?: 'dish_variants_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "dish_variants" */
export type Dish_Variants_Var_Samp_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Dish_Variants_Variance_Fields = {
  __typename?: 'dish_variants_variance_fields';
  price?: Maybe<Scalars['Float']>;
  servings_count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "dish_variants" */
export type Dish_Variants_Variance_Order_By = {
  price?: Maybe<Order_By>;
  servings_count?: Maybe<Order_By>;
};

/** columns and relationships of "dishes" */
export type Dishes = {
  __typename?: 'dishes';
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  /** An object relationship */
  chef: Users;
  chef_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  cuisine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  image?: Maybe<Scalars['String']>;
  /** An array relationship */
  images: Array<Dish_Images>;
  /** An aggregated array relationship */
  images_aggregate: Dish_Images_Aggregate;
  ingredients?: Maybe<Scalars['String']>;
  isVegetarian: Scalars['Boolean'];
  is_live: Scalars['Boolean'];
  name: Scalars['String'];
  serving_unit?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  variants: Array<Dish_Variants>;
  /** An aggregated array relationship */
  variants_aggregate: Dish_Variants_Aggregate;
};

/** columns and relationships of "dishes" */
export type DishesImagesArgs = {
  distinct_on?: Maybe<Array<Dish_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Images_Order_By>>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** columns and relationships of "dishes" */
export type DishesImages_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Images_Order_By>>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** columns and relationships of "dishes" */
export type DishesVariantsArgs = {
  distinct_on?: Maybe<Array<Dish_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Variants_Order_By>>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** columns and relationships of "dishes" */
export type DishesVariants_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Variants_Order_By>>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** aggregated selection of "dishes" */
export type Dishes_Aggregate = {
  __typename?: 'dishes_aggregate';
  aggregate?: Maybe<Dishes_Aggregate_Fields>;
  nodes: Array<Dishes>;
};

/** aggregate fields of "dishes" */
export type Dishes_Aggregate_Fields = {
  __typename?: 'dishes_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Dishes_Max_Fields>;
  min?: Maybe<Dishes_Min_Fields>;
};

/** aggregate fields of "dishes" */
export type Dishes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Dishes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "dishes" */
export type Dishes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Dishes_Max_Order_By>;
  min?: Maybe<Dishes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "dishes" */
export type Dishes_Arr_Rel_Insert_Input = {
  data: Array<Dishes_Insert_Input>;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "dishes". All fields are combined with a logical 'AND'. */
export type Dishes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Dishes_Bool_Exp>>>;
  _not?: Maybe<Dishes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Dishes_Bool_Exp>>>;
  calories?: Maybe<String_Comparison_Exp>;
  category?: Maybe<String_Comparison_Exp>;
  chef?: Maybe<Users_Bool_Exp>;
  chef_id?: Maybe<Uuid_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  cuisine?: Maybe<String_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  image?: Maybe<String_Comparison_Exp>;
  images?: Maybe<Dish_Images_Bool_Exp>;
  ingredients?: Maybe<String_Comparison_Exp>;
  isVegetarian?: Maybe<Boolean_Comparison_Exp>;
  is_live?: Maybe<Boolean_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  serving_unit?: Maybe<String_Comparison_Exp>;
  type?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variants?: Maybe<Dish_Variants_Bool_Exp>;
};

/** unique or primary key constraints on table "dishes" */
export enum Dishes_Constraint {
  /** unique or primary key constraint */
  DishesPkey = 'dishes_pkey',
}

/** input type for inserting data into table "dishes" */
export type Dishes_Insert_Input = {
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  chef?: Maybe<Users_Obj_Rel_Insert_Input>;
  chef_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cuisine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  images?: Maybe<Dish_Images_Arr_Rel_Insert_Input>;
  ingredients?: Maybe<Scalars['String']>;
  isVegetarian?: Maybe<Scalars['Boolean']>;
  is_live?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  serving_unit?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variants?: Maybe<Dish_Variants_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Dishes_Max_Fields = {
  __typename?: 'dishes_max_fields';
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  chef_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cuisine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serving_unit?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "dishes" */
export type Dishes_Max_Order_By = {
  calories?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  chef_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  cuisine?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  ingredients?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  serving_unit?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Dishes_Min_Fields = {
  __typename?: 'dishes_min_fields';
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  chef_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cuisine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  serving_unit?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "dishes" */
export type Dishes_Min_Order_By = {
  calories?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  chef_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  cuisine?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  ingredients?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  serving_unit?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "dishes" */
export type Dishes_Mutation_Response = {
  __typename?: 'dishes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Dishes>;
};

/** input type for inserting object relation for remote table "dishes" */
export type Dishes_Obj_Rel_Insert_Input = {
  data: Dishes_Insert_Input;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};

/** on conflict condition type for table "dishes" */
export type Dishes_On_Conflict = {
  constraint: Dishes_Constraint;
  update_columns: Array<Dishes_Update_Column>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** ordering options when selecting data from "dishes" */
export type Dishes_Order_By = {
  calories?: Maybe<Order_By>;
  category?: Maybe<Order_By>;
  chef?: Maybe<Users_Order_By>;
  chef_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  cuisine?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  image?: Maybe<Order_By>;
  images_aggregate?: Maybe<Dish_Images_Aggregate_Order_By>;
  ingredients?: Maybe<Order_By>;
  isVegetarian?: Maybe<Order_By>;
  is_live?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  serving_unit?: Maybe<Order_By>;
  type?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variants_aggregate?: Maybe<Dish_Variants_Aggregate_Order_By>;
};

/** primary key columns input for table: "dishes" */
export type Dishes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "dishes" */
export enum Dishes_Select_Column {
  /** column name */
  Calories = 'calories',
  /** column name */
  Category = 'category',
  /** column name */
  ChefId = 'chef_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuisine = 'cuisine',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  IsVegetarian = 'isVegetarian',
  /** column name */
  IsLive = 'is_live',
  /** column name */
  Name = 'name',
  /** column name */
  ServingUnit = 'serving_unit',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "dishes" */
export type Dishes_Set_Input = {
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  chef_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cuisine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  isVegetarian?: Maybe<Scalars['Boolean']>;
  is_live?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  serving_unit?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "dishes" */
export enum Dishes_Update_Column {
  /** column name */
  Calories = 'calories',
  /** column name */
  Category = 'category',
  /** column name */
  ChefId = 'chef_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cuisine = 'cuisine',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Ingredients = 'ingredients',
  /** column name */
  IsVegetarian = 'isVegetarian',
  /** column name */
  IsLive = 'is_live',
  /** column name */
  Name = 'name',
  /** column name */
  ServingUnit = 'serving_unit',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type LoginOutput = {
  __typename?: 'loginOutput';
  token: Scalars['String'];
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "customers" */
  delete_customers?: Maybe<Customers_Mutation_Response>;
  /** delete single row from the table: "customers" */
  delete_customers_by_pk?: Maybe<Customers>;
  /** delete data from the table: "dish_images" */
  delete_dish_images?: Maybe<Dish_Images_Mutation_Response>;
  /** delete single row from the table: "dish_images" */
  delete_dish_images_by_pk?: Maybe<Dish_Images>;
  /** delete data from the table: "dish_orders" */
  delete_dish_orders?: Maybe<Dish_Orders_Mutation_Response>;
  /** delete single row from the table: "dish_orders" */
  delete_dish_orders_by_pk?: Maybe<Dish_Orders>;
  /** delete data from the table: "dish_variants" */
  delete_dish_variants?: Maybe<Dish_Variants_Mutation_Response>;
  /** delete single row from the table: "dish_variants" */
  delete_dish_variants_by_pk?: Maybe<Dish_Variants>;
  /** delete data from the table: "dishes" */
  delete_dishes?: Maybe<Dishes_Mutation_Response>;
  /** delete single row from the table: "dishes" */
  delete_dishes_by_pk?: Maybe<Dishes>;
  /** delete data from the table: "order_variants" */
  delete_order_variants?: Maybe<Order_Variants_Mutation_Response>;
  /** delete single row from the table: "order_variants" */
  delete_order_variants_by_pk?: Maybe<Order_Variants>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "customers" */
  insert_customers?: Maybe<Customers_Mutation_Response>;
  /** insert a single row into the table: "customers" */
  insert_customers_one?: Maybe<Customers>;
  /** insert data into the table: "dish_images" */
  insert_dish_images?: Maybe<Dish_Images_Mutation_Response>;
  /** insert a single row into the table: "dish_images" */
  insert_dish_images_one?: Maybe<Dish_Images>;
  /** insert data into the table: "dish_orders" */
  insert_dish_orders?: Maybe<Dish_Orders_Mutation_Response>;
  /** insert a single row into the table: "dish_orders" */
  insert_dish_orders_one?: Maybe<Dish_Orders>;
  /** insert data into the table: "dish_variants" */
  insert_dish_variants?: Maybe<Dish_Variants_Mutation_Response>;
  /** insert a single row into the table: "dish_variants" */
  insert_dish_variants_one?: Maybe<Dish_Variants>;
  /** insert data into the table: "dishes" */
  insert_dishes?: Maybe<Dishes_Mutation_Response>;
  /** insert a single row into the table: "dishes" */
  insert_dishes_one?: Maybe<Dishes>;
  /** insert data into the table: "order_variants" */
  insert_order_variants?: Maybe<Order_Variants_Mutation_Response>;
  /** insert a single row into the table: "order_variants" */
  insert_order_variants_one?: Maybe<Order_Variants>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "customers" */
  update_customers?: Maybe<Customers_Mutation_Response>;
  /** update single row of the table: "customers" */
  update_customers_by_pk?: Maybe<Customers>;
  /** update data of the table: "dish_images" */
  update_dish_images?: Maybe<Dish_Images_Mutation_Response>;
  /** update single row of the table: "dish_images" */
  update_dish_images_by_pk?: Maybe<Dish_Images>;
  /** update data of the table: "dish_orders" */
  update_dish_orders?: Maybe<Dish_Orders_Mutation_Response>;
  /** update single row of the table: "dish_orders" */
  update_dish_orders_by_pk?: Maybe<Dish_Orders>;
  /** update data of the table: "dish_variants" */
  update_dish_variants?: Maybe<Dish_Variants_Mutation_Response>;
  /** update single row of the table: "dish_variants" */
  update_dish_variants_by_pk?: Maybe<Dish_Variants>;
  /** update data of the table: "dishes" */
  update_dishes?: Maybe<Dishes_Mutation_Response>;
  /** update single row of the table: "dishes" */
  update_dishes_by_pk?: Maybe<Dishes>;
  /** update data of the table: "order_variants" */
  update_order_variants?: Maybe<Order_Variants_Mutation_Response>;
  /** update single row of the table: "order_variants" */
  update_order_variants_by_pk?: Maybe<Order_Variants>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};

/** mutation root */
export type Mutation_RootDelete_CustomersArgs = {
  where: Customers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Customers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Dish_ImagesArgs = {
  where: Dish_Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Dish_Images_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Dish_OrdersArgs = {
  where: Dish_Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Dish_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Dish_VariantsArgs = {
  where: Dish_Variants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Dish_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_DishesArgs = {
  where: Dishes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Dishes_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_Order_VariantsArgs = {
  where: Order_Variants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};

/** mutation root */
export type Mutation_RootInsert_CustomersArgs = {
  objects: Array<Customers_Insert_Input>;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customers_OneArgs = {
  object: Customers_Insert_Input;
  on_conflict?: Maybe<Customers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dish_ImagesArgs = {
  objects: Array<Dish_Images_Insert_Input>;
  on_conflict?: Maybe<Dish_Images_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dish_Images_OneArgs = {
  object: Dish_Images_Insert_Input;
  on_conflict?: Maybe<Dish_Images_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dish_OrdersArgs = {
  objects: Array<Dish_Orders_Insert_Input>;
  on_conflict?: Maybe<Dish_Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dish_Orders_OneArgs = {
  object: Dish_Orders_Insert_Input;
  on_conflict?: Maybe<Dish_Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dish_VariantsArgs = {
  objects: Array<Dish_Variants_Insert_Input>;
  on_conflict?: Maybe<Dish_Variants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dish_Variants_OneArgs = {
  object: Dish_Variants_Insert_Input;
  on_conflict?: Maybe<Dish_Variants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_DishesArgs = {
  objects: Array<Dishes_Insert_Input>;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Dishes_OneArgs = {
  object: Dishes_Insert_Input;
  on_conflict?: Maybe<Dishes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_VariantsArgs = {
  objects: Array<Order_Variants_Insert_Input>;
  on_conflict?: Maybe<Order_Variants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_Variants_OneArgs = {
  object: Order_Variants_Insert_Input;
  on_conflict?: Maybe<Order_Variants_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_CustomersArgs = {
  _inc?: Maybe<Customers_Inc_Input>;
  _set?: Maybe<Customers_Set_Input>;
  where: Customers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Customers_By_PkArgs = {
  _inc?: Maybe<Customers_Inc_Input>;
  _set?: Maybe<Customers_Set_Input>;
  pk_columns: Customers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Dish_ImagesArgs = {
  _set?: Maybe<Dish_Images_Set_Input>;
  where: Dish_Images_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Dish_Images_By_PkArgs = {
  _set?: Maybe<Dish_Images_Set_Input>;
  pk_columns: Dish_Images_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Dish_OrdersArgs = {
  _set?: Maybe<Dish_Orders_Set_Input>;
  where: Dish_Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Dish_Orders_By_PkArgs = {
  _set?: Maybe<Dish_Orders_Set_Input>;
  pk_columns: Dish_Orders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Dish_VariantsArgs = {
  _inc?: Maybe<Dish_Variants_Inc_Input>;
  _set?: Maybe<Dish_Variants_Set_Input>;
  where: Dish_Variants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Dish_Variants_By_PkArgs = {
  _inc?: Maybe<Dish_Variants_Inc_Input>;
  _set?: Maybe<Dish_Variants_Set_Input>;
  pk_columns: Dish_Variants_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_DishesArgs = {
  _set?: Maybe<Dishes_Set_Input>;
  where: Dishes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Dishes_By_PkArgs = {
  _set?: Maybe<Dishes_Set_Input>;
  pk_columns: Dishes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Order_VariantsArgs = {
  _inc?: Maybe<Order_Variants_Inc_Input>;
  _set?: Maybe<Order_Variants_Set_Input>;
  where: Order_Variants_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_Variants_By_PkArgs = {
  _inc?: Maybe<Order_Variants_Inc_Input>;
  _set?: Maybe<Order_Variants_Set_Input>;
  pk_columns: Order_Variants_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _inc?: Maybe<Orders_Inc_Input>;
  _set?: Maybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "order_variants" */
export type Order_Variants = {
  __typename?: 'order_variants';
  count: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  dish: Dish_Orders;
  id: Scalars['uuid'];
  order_dish_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  variant: Dish_Variants;
  variant_id: Scalars['uuid'];
};

/** aggregated selection of "order_variants" */
export type Order_Variants_Aggregate = {
  __typename?: 'order_variants_aggregate';
  aggregate?: Maybe<Order_Variants_Aggregate_Fields>;
  nodes: Array<Order_Variants>;
};

/** aggregate fields of "order_variants" */
export type Order_Variants_Aggregate_Fields = {
  __typename?: 'order_variants_aggregate_fields';
  avg?: Maybe<Order_Variants_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Order_Variants_Max_Fields>;
  min?: Maybe<Order_Variants_Min_Fields>;
  stddev?: Maybe<Order_Variants_Stddev_Fields>;
  stddev_pop?: Maybe<Order_Variants_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Order_Variants_Stddev_Samp_Fields>;
  sum?: Maybe<Order_Variants_Sum_Fields>;
  var_pop?: Maybe<Order_Variants_Var_Pop_Fields>;
  var_samp?: Maybe<Order_Variants_Var_Samp_Fields>;
  variance?: Maybe<Order_Variants_Variance_Fields>;
};

/** aggregate fields of "order_variants" */
export type Order_Variants_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Order_Variants_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "order_variants" */
export type Order_Variants_Aggregate_Order_By = {
  avg?: Maybe<Order_Variants_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Order_Variants_Max_Order_By>;
  min?: Maybe<Order_Variants_Min_Order_By>;
  stddev?: Maybe<Order_Variants_Stddev_Order_By>;
  stddev_pop?: Maybe<Order_Variants_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Order_Variants_Stddev_Samp_Order_By>;
  sum?: Maybe<Order_Variants_Sum_Order_By>;
  var_pop?: Maybe<Order_Variants_Var_Pop_Order_By>;
  var_samp?: Maybe<Order_Variants_Var_Samp_Order_By>;
  variance?: Maybe<Order_Variants_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "order_variants" */
export type Order_Variants_Arr_Rel_Insert_Input = {
  data: Array<Order_Variants_Insert_Input>;
  on_conflict?: Maybe<Order_Variants_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Variants_Avg_Fields = {
  __typename?: 'order_variants_avg_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "order_variants" */
export type Order_Variants_Avg_Order_By = {
  count?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "order_variants". All fields are combined with a logical 'AND'. */
export type Order_Variants_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Order_Variants_Bool_Exp>>>;
  _not?: Maybe<Order_Variants_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Order_Variants_Bool_Exp>>>;
  count?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  dish?: Maybe<Dish_Orders_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  order_dish_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  variant?: Maybe<Dish_Variants_Bool_Exp>;
  variant_id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "order_variants" */
export enum Order_Variants_Constraint {
  /** unique or primary key constraint */
  OrderVariantsPkey = 'order_variants_pkey',
}

/** input type for incrementing integer column in table "order_variants" */
export type Order_Variants_Inc_Input = {
  count?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "order_variants" */
export type Order_Variants_Insert_Input = {
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  dish?: Maybe<Dish_Orders_Obj_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  order_dish_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant?: Maybe<Dish_Variants_Obj_Rel_Insert_Input>;
  variant_id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Order_Variants_Max_Fields = {
  __typename?: 'order_variants_max_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_dish_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "order_variants" */
export type Order_Variants_Max_Order_By = {
  count?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_dish_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Variants_Min_Fields = {
  __typename?: 'order_variants_min_fields';
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_dish_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "order_variants" */
export type Order_Variants_Min_Order_By = {
  count?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  order_dish_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "order_variants" */
export type Order_Variants_Mutation_Response = {
  __typename?: 'order_variants_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Order_Variants>;
};

/** input type for inserting object relation for remote table "order_variants" */
export type Order_Variants_Obj_Rel_Insert_Input = {
  data: Order_Variants_Insert_Input;
  on_conflict?: Maybe<Order_Variants_On_Conflict>;
};

/** on conflict condition type for table "order_variants" */
export type Order_Variants_On_Conflict = {
  constraint: Order_Variants_Constraint;
  update_columns: Array<Order_Variants_Update_Column>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** ordering options when selecting data from "order_variants" */
export type Order_Variants_Order_By = {
  count?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  dish?: Maybe<Dish_Orders_Order_By>;
  id?: Maybe<Order_By>;
  order_dish_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  variant?: Maybe<Dish_Variants_Order_By>;
  variant_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "order_variants" */
export type Order_Variants_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "order_variants" */
export enum Order_Variants_Select_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDishId = 'order_dish_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantId = 'variant_id',
}

/** input type for updating data in table "order_variants" */
export type Order_Variants_Set_Input = {
  count?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  order_dish_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  variant_id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Order_Variants_Stddev_Fields = {
  __typename?: 'order_variants_stddev_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "order_variants" */
export type Order_Variants_Stddev_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Variants_Stddev_Pop_Fields = {
  __typename?: 'order_variants_stddev_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "order_variants" */
export type Order_Variants_Stddev_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Variants_Stddev_Samp_Fields = {
  __typename?: 'order_variants_stddev_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "order_variants" */
export type Order_Variants_Stddev_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Variants_Sum_Fields = {
  __typename?: 'order_variants_sum_fields';
  count?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "order_variants" */
export type Order_Variants_Sum_Order_By = {
  count?: Maybe<Order_By>;
};

/** update columns of table "order_variants" */
export enum Order_Variants_Update_Column {
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderDishId = 'order_dish_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VariantId = 'variant_id',
}

/** aggregate var_pop on columns */
export type Order_Variants_Var_Pop_Fields = {
  __typename?: 'order_variants_var_pop_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "order_variants" */
export type Order_Variants_Var_Pop_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Variants_Var_Samp_Fields = {
  __typename?: 'order_variants_var_samp_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "order_variants" */
export type Order_Variants_Var_Samp_Order_By = {
  count?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variants_Variance_Fields = {
  __typename?: 'order_variants_variance_fields';
  count?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "order_variants" */
export type Order_Variants_Variance_Order_By = {
  count?: Maybe<Order_By>;
};

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  /** An object relationship */
  chef: Users;
  chef_id: Scalars['uuid'];
  chef_notes?: Maybe<Scalars['String']>;
  confirmed_time?: Maybe<Scalars['timetz']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  customer: Customers;
  customer_id: Scalars['uuid'];
  delivery_fee?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
  /** An array relationship */
  dishes: Array<Dish_Orders>;
  /** An aggregated array relationship */
  dishes_aggregate: Dish_Orders_Aggregate;
  id: Scalars['uuid'];
  is_delivery_enabled: Scalars['Boolean'];
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** columns and relationships of "orders" */
export type OrdersDishesArgs = {
  distinct_on?: Maybe<Array<Dish_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Orders_Order_By>>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** columns and relationships of "orders" */
export type OrdersDishes_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Orders_Order_By>>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Orders_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "orders" */
export type Orders_Aggregate_Order_By = {
  avg?: Maybe<Orders_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Orders_Max_Order_By>;
  min?: Maybe<Orders_Min_Order_By>;
  stddev?: Maybe<Orders_Stddev_Order_By>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Order_By>;
  sum?: Maybe<Orders_Sum_Order_By>;
  var_pop?: Maybe<Orders_Var_Pop_Order_By>;
  var_samp?: Maybe<Orders_Var_Samp_Order_By>;
  variance?: Maybe<Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders" */
export type Orders_Arr_Rel_Insert_Input = {
  data: Array<Orders_Insert_Input>;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "orders" */
export type Orders_Avg_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  _not?: Maybe<Orders_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Orders_Bool_Exp>>>;
  chef?: Maybe<Users_Bool_Exp>;
  chef_id?: Maybe<Uuid_Comparison_Exp>;
  chef_notes?: Maybe<String_Comparison_Exp>;
  confirmed_time?: Maybe<Timetz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  customer?: Maybe<Customers_Bool_Exp>;
  customer_id?: Maybe<Uuid_Comparison_Exp>;
  delivery_fee?: Maybe<Int_Comparison_Exp>;
  destination?: Maybe<String_Comparison_Exp>;
  dishes?: Maybe<Dish_Orders_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_delivery_enabled?: Maybe<Boolean_Comparison_Exp>;
  status?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint */
  OrdersPkey = 'orders_pkey',
}

/** input type for incrementing integer column in table "orders" */
export type Orders_Inc_Input = {
  delivery_fee?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  chef?: Maybe<Users_Obj_Rel_Insert_Input>;
  chef_id?: Maybe<Scalars['uuid']>;
  chef_notes?: Maybe<Scalars['String']>;
  confirmed_time?: Maybe<Scalars['timetz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer?: Maybe<Customers_Obj_Rel_Insert_Input>;
  customer_id?: Maybe<Scalars['uuid']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
  dishes?: Maybe<Dish_Orders_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  is_delivery_enabled?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  chef_id?: Maybe<Scalars['uuid']>;
  chef_notes?: Maybe<Scalars['String']>;
  confirmed_time?: Maybe<Scalars['timetz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "orders" */
export type Orders_Max_Order_By = {
  chef_id?: Maybe<Order_By>;
  chef_notes?: Maybe<Order_By>;
  confirmed_time?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  destination?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  chef_id?: Maybe<Scalars['uuid']>;
  chef_notes?: Maybe<Scalars['String']>;
  confirmed_time?: Maybe<Scalars['timetz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "orders" */
export type Orders_Min_Order_By = {
  chef_id?: Maybe<Order_By>;
  chef_notes?: Maybe<Order_By>;
  confirmed_time?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer_id?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  destination?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  on_conflict?: Maybe<Orders_On_Conflict>;
};

/** on conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns: Array<Orders_Update_Column>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** ordering options when selecting data from "orders" */
export type Orders_Order_By = {
  chef?: Maybe<Users_Order_By>;
  chef_id?: Maybe<Order_By>;
  chef_notes?: Maybe<Order_By>;
  confirmed_time?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  customer?: Maybe<Customers_Order_By>;
  customer_id?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  destination?: Maybe<Order_By>;
  dishes_aggregate?: Maybe<Dish_Orders_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  is_delivery_enabled?: Maybe<Order_By>;
  status?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: "orders" */
export type Orders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  ChefId = 'chef_id',
  /** column name */
  ChefNotes = 'chef_notes',
  /** column name */
  ConfirmedTime = 'confirmed_time',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  Destination = 'destination',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeliveryEnabled = 'is_delivery_enabled',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  chef_id?: Maybe<Scalars['uuid']>;
  chef_notes?: Maybe<Scalars['String']>;
  confirmed_time?: Maybe<Scalars['timetz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  customer_id?: Maybe<Scalars['uuid']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  destination?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_delivery_enabled?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "orders" */
export type Orders_Stddev_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "orders" */
export type Orders_Stddev_Pop_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "orders" */
export type Orders_Stddev_Samp_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  delivery_fee?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "orders" */
export type Orders_Sum_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  ChefId = 'chef_id',
  /** column name */
  ChefNotes = 'chef_notes',
  /** column name */
  ConfirmedTime = 'confirmed_time',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CustomerId = 'customer_id',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  Destination = 'destination',
  /** column name */
  Id = 'id',
  /** column name */
  IsDeliveryEnabled = 'is_delivery_enabled',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "orders" */
export type Orders_Var_Pop_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "orders" */
export type Orders_Var_Samp_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "orders" */
export type Orders_Variance_Order_By = {
  delivery_fee?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "dish_images" */
  dish_images: Array<Dish_Images>;
  /** fetch aggregated fields from the table: "dish_images" */
  dish_images_aggregate: Dish_Images_Aggregate;
  /** fetch data from the table: "dish_images" using primary key columns */
  dish_images_by_pk?: Maybe<Dish_Images>;
  /** fetch data from the table: "dish_orders" */
  dish_orders: Array<Dish_Orders>;
  /** fetch aggregated fields from the table: "dish_orders" */
  dish_orders_aggregate: Dish_Orders_Aggregate;
  /** fetch data from the table: "dish_orders" using primary key columns */
  dish_orders_by_pk?: Maybe<Dish_Orders>;
  /** fetch data from the table: "dish_variants" */
  dish_variants: Array<Dish_Variants>;
  /** fetch aggregated fields from the table: "dish_variants" */
  dish_variants_aggregate: Dish_Variants_Aggregate;
  /** fetch data from the table: "dish_variants" using primary key columns */
  dish_variants_by_pk?: Maybe<Dish_Variants>;
  /** fetch data from the table: "dishes" */
  dishes: Array<Dishes>;
  /** fetch aggregated fields from the table: "dishes" */
  dishes_aggregate: Dishes_Aggregate;
  /** fetch data from the table: "dishes" using primary key columns */
  dishes_by_pk?: Maybe<Dishes>;
  /** fetch data from the table: "order_variants" */
  order_variants: Array<Order_Variants>;
  /** fetch aggregated fields from the table: "order_variants" */
  order_variants_aggregate: Order_Variants_Aggregate;
  /** fetch data from the table: "order_variants" using primary key columns */
  order_variants_by_pk?: Maybe<Order_Variants>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** query root */
export type Query_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** query root */
export type Query_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootDish_ImagesArgs = {
  distinct_on?: Maybe<Array<Dish_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Images_Order_By>>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** query root */
export type Query_RootDish_Images_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Images_Order_By>>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** query root */
export type Query_RootDish_Images_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootDish_OrdersArgs = {
  distinct_on?: Maybe<Array<Dish_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Orders_Order_By>>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** query root */
export type Query_RootDish_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Orders_Order_By>>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** query root */
export type Query_RootDish_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootDish_VariantsArgs = {
  distinct_on?: Maybe<Array<Dish_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Variants_Order_By>>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** query root */
export type Query_RootDish_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Variants_Order_By>>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** query root */
export type Query_RootDish_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootDishesArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** query root */
export type Query_RootDishes_AggregateArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** query root */
export type Query_RootDishes_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootOrder_VariantsArgs = {
  distinct_on?: Maybe<Array<Order_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Variants_Order_By>>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** query root */
export type Query_RootOrder_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Variants_Order_By>>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** query root */
export type Query_RootOrder_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** query root */
export type Query_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** query root */
export type Query_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

export type SignupOutput = {
  __typename?: 'signupOutput';
  first_name: Scalars['String'];
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "customers" */
  customers: Array<Customers>;
  /** fetch aggregated fields from the table: "customers" */
  customers_aggregate: Customers_Aggregate;
  /** fetch data from the table: "customers" using primary key columns */
  customers_by_pk?: Maybe<Customers>;
  /** fetch data from the table: "dish_images" */
  dish_images: Array<Dish_Images>;
  /** fetch aggregated fields from the table: "dish_images" */
  dish_images_aggregate: Dish_Images_Aggregate;
  /** fetch data from the table: "dish_images" using primary key columns */
  dish_images_by_pk?: Maybe<Dish_Images>;
  /** fetch data from the table: "dish_orders" */
  dish_orders: Array<Dish_Orders>;
  /** fetch aggregated fields from the table: "dish_orders" */
  dish_orders_aggregate: Dish_Orders_Aggregate;
  /** fetch data from the table: "dish_orders" using primary key columns */
  dish_orders_by_pk?: Maybe<Dish_Orders>;
  /** fetch data from the table: "dish_variants" */
  dish_variants: Array<Dish_Variants>;
  /** fetch aggregated fields from the table: "dish_variants" */
  dish_variants_aggregate: Dish_Variants_Aggregate;
  /** fetch data from the table: "dish_variants" using primary key columns */
  dish_variants_by_pk?: Maybe<Dish_Variants>;
  /** fetch data from the table: "dishes" */
  dishes: Array<Dishes>;
  /** fetch aggregated fields from the table: "dishes" */
  dishes_aggregate: Dishes_Aggregate;
  /** fetch data from the table: "dishes" using primary key columns */
  dishes_by_pk?: Maybe<Dishes>;
  /** fetch data from the table: "order_variants" */
  order_variants: Array<Order_Variants>;
  /** fetch aggregated fields from the table: "order_variants" */
  order_variants_aggregate: Order_Variants_Aggregate;
  /** fetch data from the table: "order_variants" using primary key columns */
  order_variants_by_pk?: Maybe<Order_Variants>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};

/** subscription root */
export type Subscription_RootCustomersArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_AggregateArgs = {
  distinct_on?: Maybe<Array<Customers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Customers_Order_By>>;
  where?: Maybe<Customers_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootCustomers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootDish_ImagesArgs = {
  distinct_on?: Maybe<Array<Dish_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Images_Order_By>>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDish_Images_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Images_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Images_Order_By>>;
  where?: Maybe<Dish_Images_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDish_Images_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootDish_OrdersArgs = {
  distinct_on?: Maybe<Array<Dish_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Orders_Order_By>>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDish_Orders_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Orders_Order_By>>;
  where?: Maybe<Dish_Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDish_Orders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootDish_VariantsArgs = {
  distinct_on?: Maybe<Array<Dish_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Variants_Order_By>>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDish_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Dish_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dish_Variants_Order_By>>;
  where?: Maybe<Dish_Variants_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDish_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootDishesArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDishes_AggregateArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootDishes_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootOrder_VariantsArgs = {
  distinct_on?: Maybe<Array<Order_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Variants_Order_By>>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrder_Variants_AggregateArgs = {
  distinct_on?: Maybe<Array<Order_Variants_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Order_Variants_Order_By>>;
  where?: Maybe<Order_Variants_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrder_Variants_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>;
  _gt?: Maybe<Scalars['timetz']>;
  _gte?: Maybe<Scalars['timetz']>;
  _in?: Maybe<Array<Scalars['timetz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timetz']>;
  _lte?: Maybe<Scalars['timetz']>;
  _neq?: Maybe<Scalars['timetz']>;
  _nin?: Maybe<Array<Scalars['timetz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  address_line_one?: Maybe<Scalars['String']>;
  address_line_two?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  degree_from?: Maybe<Scalars['String']>;
  degree_status?: Maybe<Scalars['String']>;
  degree_type?: Maybe<Scalars['String']>;
  delivery_fee: Scalars['Int'];
  delivery_region?: Maybe<Scalars['String']>;
  /** An array relationship */
  dishes: Array<Dishes>;
  /** An aggregated array relationship */
  dishes_aggregate: Dishes_Aggregate;
  dob?: Maybe<Scalars['date']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  is_chef: Scalars['Boolean'];
  is_delivery_available: Scalars['Boolean'];
  is_email_verified: Scalars['Boolean'];
  is_kitchen_opened: Scalars['Boolean'];
  is_phone_verified: Scalars['Boolean'];
  last_name?: Maybe<Scalars['String']>;
  location_area?: Maybe<Scalars['String']>;
  /** An array relationship */
  orders: Array<Orders>;
  /** An aggregated array relationship */
  orders_aggregate: Orders_Aggregate;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  profile_picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  zip_code?: Maybe<Scalars['Int']>;
};

/** columns and relationships of "users" */
export type UsersDishesArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersDishes_AggregateArgs = {
  distinct_on?: Maybe<Array<Dishes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Dishes_Order_By>>;
  where?: Maybe<Dishes_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersOrdersArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** columns and relationships of "users" */
export type UsersOrders_AggregateArgs = {
  distinct_on?: Maybe<Array<Orders_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Orders_Order_By>>;
  where?: Maybe<Orders_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  address_line_one?: Maybe<String_Comparison_Exp>;
  address_line_two?: Maybe<String_Comparison_Exp>;
  bio?: Maybe<String_Comparison_Exp>;
  city?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  degree_from?: Maybe<String_Comparison_Exp>;
  degree_status?: Maybe<String_Comparison_Exp>;
  degree_type?: Maybe<String_Comparison_Exp>;
  delivery_fee?: Maybe<Int_Comparison_Exp>;
  delivery_region?: Maybe<String_Comparison_Exp>;
  dishes?: Maybe<Dishes_Bool_Exp>;
  dob?: Maybe<Date_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  first_name?: Maybe<String_Comparison_Exp>;
  gender?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  is_chef?: Maybe<Boolean_Comparison_Exp>;
  is_delivery_available?: Maybe<Boolean_Comparison_Exp>;
  is_email_verified?: Maybe<Boolean_Comparison_Exp>;
  is_kitchen_opened?: Maybe<Boolean_Comparison_Exp>;
  is_phone_verified?: Maybe<Boolean_Comparison_Exp>;
  last_name?: Maybe<String_Comparison_Exp>;
  location_area?: Maybe<String_Comparison_Exp>;
  orders?: Maybe<Orders_Bool_Exp>;
  password?: Maybe<String_Comparison_Exp>;
  phone_number?: Maybe<Bigint_Comparison_Exp>;
  profile_picture?: Maybe<String_Comparison_Exp>;
  role?: Maybe<String_Comparison_Exp>;
  state?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  zip_code?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  delivery_fee?: Maybe<Scalars['Int']>;
  phone_number?: Maybe<Scalars['bigint']>;
  zip_code?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  address_line_one?: Maybe<Scalars['String']>;
  address_line_two?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  degree_from?: Maybe<Scalars['String']>;
  degree_status?: Maybe<Scalars['String']>;
  degree_type?: Maybe<Scalars['String']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  delivery_region?: Maybe<Scalars['String']>;
  dishes?: Maybe<Dishes_Arr_Rel_Insert_Input>;
  dob?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_chef?: Maybe<Scalars['Boolean']>;
  is_delivery_available?: Maybe<Scalars['Boolean']>;
  is_email_verified?: Maybe<Scalars['Boolean']>;
  is_kitchen_opened?: Maybe<Scalars['Boolean']>;
  is_phone_verified?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  location_area?: Maybe<Scalars['String']>;
  orders?: Maybe<Orders_Arr_Rel_Insert_Input>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  profile_picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zip_code?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  address_line_one?: Maybe<Scalars['String']>;
  address_line_two?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  degree_from?: Maybe<Scalars['String']>;
  degree_status?: Maybe<Scalars['String']>;
  degree_type?: Maybe<Scalars['String']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  delivery_region?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  location_area?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  profile_picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zip_code?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  address_line_one?: Maybe<Order_By>;
  address_line_two?: Maybe<Order_By>;
  bio?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  degree_from?: Maybe<Order_By>;
  degree_status?: Maybe<Order_By>;
  degree_type?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_region?: Maybe<Order_By>;
  dob?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  location_area?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  address_line_one?: Maybe<Scalars['String']>;
  address_line_two?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  degree_from?: Maybe<Scalars['String']>;
  degree_status?: Maybe<Scalars['String']>;
  degree_type?: Maybe<Scalars['String']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  delivery_region?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  location_area?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  profile_picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zip_code?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  address_line_one?: Maybe<Order_By>;
  address_line_two?: Maybe<Order_By>;
  bio?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  degree_from?: Maybe<Order_By>;
  degree_status?: Maybe<Order_By>;
  degree_type?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_region?: Maybe<Order_By>;
  dob?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  location_area?: Maybe<Order_By>;
  password?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  address_line_one?: Maybe<Order_By>;
  address_line_two?: Maybe<Order_By>;
  bio?: Maybe<Order_By>;
  city?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  degree_from?: Maybe<Order_By>;
  degree_status?: Maybe<Order_By>;
  degree_type?: Maybe<Order_By>;
  delivery_fee?: Maybe<Order_By>;
  delivery_region?: Maybe<Order_By>;
  dishes_aggregate?: Maybe<Dishes_Aggregate_Order_By>;
  dob?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  first_name?: Maybe<Order_By>;
  gender?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  is_chef?: Maybe<Order_By>;
  is_delivery_available?: Maybe<Order_By>;
  is_email_verified?: Maybe<Order_By>;
  is_kitchen_opened?: Maybe<Order_By>;
  is_phone_verified?: Maybe<Order_By>;
  last_name?: Maybe<Order_By>;
  location_area?: Maybe<Order_By>;
  orders_aggregate?: Maybe<Orders_Aggregate_Order_By>;
  password?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  profile_picture?: Maybe<Order_By>;
  role?: Maybe<Order_By>;
  state?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AddressLineOne = 'address_line_one',
  /** column name */
  AddressLineTwo = 'address_line_two',
  /** column name */
  Bio = 'bio',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DegreeFrom = 'degree_from',
  /** column name */
  DegreeStatus = 'degree_status',
  /** column name */
  DegreeType = 'degree_type',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  DeliveryRegion = 'delivery_region',
  /** column name */
  Dob = 'dob',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IsChef = 'is_chef',
  /** column name */
  IsDeliveryAvailable = 'is_delivery_available',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  IsKitchenOpened = 'is_kitchen_opened',
  /** column name */
  IsPhoneVerified = 'is_phone_verified',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LocationArea = 'location_area',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  Role = 'role',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  address_line_one?: Maybe<Scalars['String']>;
  address_line_two?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  degree_from?: Maybe<Scalars['String']>;
  degree_status?: Maybe<Scalars['String']>;
  degree_type?: Maybe<Scalars['String']>;
  delivery_fee?: Maybe<Scalars['Int']>;
  delivery_region?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['date']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  is_chef?: Maybe<Scalars['Boolean']>;
  is_delivery_available?: Maybe<Scalars['Boolean']>;
  is_email_verified?: Maybe<Scalars['Boolean']>;
  is_kitchen_opened?: Maybe<Scalars['Boolean']>;
  is_phone_verified?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  location_area?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['bigint']>;
  profile_picture?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  zip_code?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  delivery_fee?: Maybe<Scalars['Int']>;
  phone_number?: Maybe<Scalars['bigint']>;
  zip_code?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AddressLineOne = 'address_line_one',
  /** column name */
  AddressLineTwo = 'address_line_two',
  /** column name */
  Bio = 'bio',
  /** column name */
  City = 'city',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DegreeFrom = 'degree_from',
  /** column name */
  DegreeStatus = 'degree_status',
  /** column name */
  DegreeType = 'degree_type',
  /** column name */
  DeliveryFee = 'delivery_fee',
  /** column name */
  DeliveryRegion = 'delivery_region',
  /** column name */
  Dob = 'dob',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  Id = 'id',
  /** column name */
  IsChef = 'is_chef',
  /** column name */
  IsDeliveryAvailable = 'is_delivery_available',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  IsKitchenOpened = 'is_kitchen_opened',
  /** column name */
  IsPhoneVerified = 'is_phone_verified',
  /** column name */
  LastName = 'last_name',
  /** column name */
  LocationArea = 'location_area',
  /** column name */
  Password = 'password',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ProfilePicture = 'profile_picture',
  /** column name */
  Role = 'role',
  /** column name */
  State = 'state',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  delivery_fee?: Maybe<Scalars['Float']>;
  phone_number?: Maybe<Scalars['Float']>;
  zip_code?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  delivery_fee?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  zip_code?: Maybe<Order_By>;
};

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddNewDishMutationMutationVariables = Exact<{
  name: Scalars['String'];
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  cuisine?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  variants: Array<Dish_Variants_Insert_Input>;
  isVegetarian?: Maybe<Scalars['Boolean']>;
  images: Array<Dish_Images_Insert_Input>;
  ingredients?: Maybe<Scalars['String']>;
  serving_unit?: Maybe<Scalars['String']>;
}>;

export type AddNewDishMutationMutation = { __typename?: 'mutation_root' } & {
  insert_dishes_one?: Maybe<
    { __typename?: 'dishes' } & Pick<Dishes, 'id'> & {
        variants: Array<
          { __typename?: 'dish_variants' } & Pick<
            Dish_Variants,
            'name' | 'price' | 'servings_count'
          >
        >;
      }
  >;
};

export type ToggleKitchenMutationVariables = Exact<{
  to: Scalars['Boolean'];
}>;

export type ToggleKitchenMutation = { __typename?: 'mutation_root' } & {
  update_users?: Maybe<
    { __typename?: 'users_mutation_response' } & {
      returning: Array<
        { __typename?: 'users' } & Pick<Users, 'is_kitchen_opened'>
      >;
    }
  >;
};

export type EditChefInfoMutationVariables = Exact<{
  chefId: Scalars['uuid'];
  input?: Maybe<Users_Set_Input>;
}>;

export type EditChefInfoMutation = { __typename?: 'mutation_root' } & {
  update_users_by_pk?: Maybe<{ __typename?: 'users' } & Pick<Users, 'id'>>;
};

export type ToggleDishLiveMutationVariables = Exact<{
  targetBoolean?: Maybe<Scalars['Boolean']>;
  dishId?: Maybe<Scalars['uuid']>;
}>;

export type ToggleDishLiveMutation = { __typename?: 'mutation_root' } & {
  update_dishes?: Maybe<
    { __typename?: 'dishes_mutation_response' } & {
      returning: Array<
        { __typename?: 'dishes' } & Pick<Dishes, 'name' | 'is_live'>
      >;
    }
  >;
};

export type UpdateFoodItemMutationVariables = Exact<{
  dishId: Scalars['uuid'];
  name?: Maybe<Scalars['String']>;
  calories?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isVegetarian?: Maybe<Scalars['Boolean']>;
  cuisine?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  serving_unit?: Maybe<Scalars['String']>;
}>;

export type UpdateFoodItemMutation = { __typename?: 'mutation_root' } & {
  update_dishes?: Maybe<
    { __typename?: 'dishes_mutation_response' } & {
      returning: Array<
        { __typename?: 'dishes' } & Pick<
          Dishes,
          | 'name'
          | 'cuisine'
          | 'type'
          | 'calories'
          | 'category'
          | 'image'
          | 'isVegetarian'
        > & {
            variants: Array<
              { __typename?: 'dish_variants' } & Pick<
                Dish_Variants,
                'name' | 'price' | 'servings_count'
              >
            >;
          }
      >;
    }
  >;
};

export type DeleteDishVariantsMutationVariables = Exact<{
  dishId: Scalars['uuid'];
}>;

export type DeleteDishVariantsMutation = { __typename?: 'mutation_root' } & {
  delete_dish_variants?: Maybe<
    { __typename?: 'dish_variants_mutation_response' } & {
      returning: Array<
        { __typename?: 'dish_variants' } & Pick<Dish_Variants, 'id'>
      >;
    }
  >;
};

export type AddImagesMutationVariables = Exact<{
  data: Array<Dish_Images_Insert_Input>;
}>;

export type AddImagesMutation = { __typename?: 'mutation_root' } & {
  insert_dish_images?: Maybe<
    { __typename?: 'dish_images_mutation_response' } & {
      returning: Array<
        { __typename?: 'dish_images' } & Pick<Dish_Images, 'id'> & {
            dish: { __typename?: 'dishes' } & Pick<Dishes, 'id' | 'name'>;
          }
      >;
    }
  >;
};

export type DeleteImagesMutationVariables = Exact<{
  dish_id: Scalars['uuid'];
}>;

export type DeleteImagesMutation = { __typename?: 'mutation_root' } & {
  delete_dish_images?: Maybe<
    { __typename?: 'dish_images_mutation_response' } & {
      returning: Array<
        { __typename?: 'dish_images' } & Pick<Dish_Images, 'id'>
      >;
    }
  >;
};

export type AddVariantsMutationVariables = Exact<{
  data: Array<Dish_Variants_Insert_Input>;
}>;

export type AddVariantsMutation = { __typename?: 'mutation_root' } & {
  insert_dish_variants?: Maybe<
    { __typename?: 'dish_variants_mutation_response' } & {
      returning: Array<
        { __typename?: 'dish_variants' } & Pick<Dish_Variants, 'id'>
      >;
    }
  >;
};

export type DeleteDishMutationVariables = Exact<{
  dishId?: Maybe<Scalars['uuid']>;
}>;

export type DeleteDishMutation = { __typename?: 'mutation_root' } & {
  delete_dishes?: Maybe<
    { __typename?: 'dishes_mutation_response' } & {
      returning: Array<
        { __typename?: 'dishes' } & Pick<Dishes, 'id' | 'name' | 'description'>
      >;
    }
  >;
};

export type CreateOrderMutationVariables = Exact<{
  input: Orders_Insert_Input;
}>;

export type CreateOrderMutation = { __typename?: 'mutation_root' } & {
  insert_orders_one?: Maybe<{ __typename?: 'orders' } & Pick<Orders, 'id'>>;
};

export type UpdateOrderStatusMutationVariables = Exact<{
  orderId: Scalars['uuid'];
  newStatus: Scalars['String'];
  confirmedTime?: Maybe<Scalars['timetz']>;
}>;

export type UpdateOrderStatusMutation = { __typename?: 'mutation_root' } & {
  update_orders_by_pk?: Maybe<
    { __typename?: 'orders' } & Pick<Orders, 'id' | 'status'>
  >;
};

export type DishInfoFragment = { __typename?: 'dishes' } & Pick<
  Dishes,
  | 'name'
  | 'id'
  | 'is_live'
  | 'description'
  | 'ingredients'
  | 'calories'
  | 'category'
  | 'cuisine'
  | 'isVegetarian'
  | 'type'
> & {
    images: Array<
      { __typename?: 'dish_images' } & Pick<Dish_Images, 'path' | 'id'>
    >;
    variants: Array<
      { __typename?: 'dish_variants' } & Pick<Dish_Variants, 'price' | 'name'>
    >;
  };

export type ChefInfoFragment = { __typename?: 'users' } & Pick<
  Users,
  | 'last_name'
  | 'first_name'
  | 'profile_picture'
  | 'email'
  | 'address_line_one'
  | 'address_line_two'
  | 'city'
  | 'state'
  | 'id'
  | 'role'
  | 'gender'
  | 'dob'
  | 'bio'
  | 'phone_number'
  | 'is_delivery_available'
  | 'delivery_fee'
  | 'delivery_region'
  | 'zip_code'
  | 'degree_from'
  | 'degree_type'
  | 'degree_status'
  | 'location_area'
  | 'created_at'
  | 'is_kitchen_opened'
>;

export type SearchChefsQueryVariables = Exact<{
  input: Scalars['String'];
}>;

export type SearchChefsQuery = { __typename?: 'query_root' } & {
  users: Array<
    { __typename?: 'users' } & {
      dishes: Array<{ __typename?: 'dishes' } & DishInfoFragment>;
    } & ChefInfoFragment
  >;
};

export type ChefWithEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type ChefWithEmailQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'id'>>;
};

export type GetChefWithIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;

export type GetChefWithIdQuery = { __typename?: 'query_root' } & {
  users_by_pk?: Maybe<{ __typename?: 'users' } & ChefInfoFragment>;
};

export type DishDetailsFragment = { __typename?: 'dishes' } & Pick<
  Dishes,
  | 'cuisine'
  | 'id'
  | 'is_live'
  | 'description'
  | 'isVegetarian'
  | 'serving_unit'
  | 'ingredients'
  | 'calories'
  | 'name'
  | 'type'
  | 'category'
>;

export type DishImagesFragment = { __typename?: 'dishes' } & {
  images: Array<
    { __typename?: 'dish_images' } & Pick<Dish_Images, 'id' | 'path'>
  >;
};

export type ChefDetailsFragment = { __typename?: 'users' } & Pick<
  Users,
  | 'id'
  | 'degree_from'
  | 'delivery_region'
  | 'delivery_fee'
  | 'profile_picture'
  | 'degree_status'
  | 'first_name'
  | 'bio'
  | 'email'
  | 'degree_type'
  | 'phone_number'
>;

export type AllFoodItemsQueryVariables = Exact<{
  chefId?: Maybe<Scalars['uuid']>;
}>;

export type AllFoodItemsQuery = { __typename?: 'query_root' } & {
  dishes: Array<
    { __typename?: 'dishes' } & {
      chef: { __typename?: 'users' } & Pick<Users, 'id'>;
      variants: Array<
        { __typename?: 'dish_variants' } & Pick<
          Dish_Variants,
          'id' | 'name' | 'price' | 'servings_count'
        >
      >;
    } & DishDetailsFragment &
      DishImagesFragment
  >;
};

export type AllLiveFoodItemsQueryVariables = Exact<{
  chefId?: Maybe<Scalars['uuid']>;
}>;

export type AllLiveFoodItemsQuery = { __typename?: 'query_root' } & {
  dishes: Array<
    { __typename?: 'dishes' } & {
      chef: { __typename?: 'users' } & Pick<Users, 'id'>;
      variants: Array<
        { __typename?: 'dish_variants' } & Pick<
          Dish_Variants,
          'id' | 'name' | 'price' | 'servings_count'
        >
      >;
    } & DishImagesFragment &
      DishDetailsFragment
  >;
};

export type SearchDishesQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  cat?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
}>;

export type SearchDishesQuery = { __typename?: 'query_root' } & {
  dishes: Array<
    { __typename?: 'dishes' } & {
      chef: { __typename?: 'users' } & ChefDetailsFragment;
    } & DishDetailsFragment &
      DishImagesFragment
  >;
};

export type AllMyDishesQueryVariables = Exact<{ [key: string]: never }>;

export type AllMyDishesQuery = { __typename?: 'query_root' } & {
  dishes: Array<
    { __typename?: 'dishes' } & Pick<
      Dishes,
      | 'is_live'
      | 'name'
      | 'type'
      | 'calories'
      | 'category'
      | 'cuisine'
      | 'serving_unit'
      | 'description'
      | 'ingredients'
      | 'id'
      | 'isVegetarian'
    > & {
        images: Array<
          { __typename?: 'dish_images' } & Pick<
            Dish_Images,
            'id' | 'path' | 'created_at' | 'updated_at'
          >
        >;
        variants: Array<
          { __typename?: 'dish_variants' } & Pick<
            Dish_Variants,
            'name' | 'price' | 'servings_count'
          >
        >;
      }
  >;
};

export type AllNewDishesQueryVariables = Exact<{ [key: string]: never }>;

export type AllNewDishesQuery = { __typename?: 'query_root' } & {
  dishes: Array<{ __typename?: 'dishes' } & Pick<Dishes, 'name' | 'id'>>;
};

export type OrdersQueryVariables = Exact<{
  email: Scalars['String'];
}>;

export type OrdersQuery = { __typename?: 'query_root' } & {
  orders: Array<
    { __typename?: 'orders' } & Pick<
      Orders,
      | 'id'
      | 'status'
      | 'is_delivery_enabled'
      | 'delivery_fee'
      | 'confirmed_time'
    > & {
        chef: { __typename?: 'users' } & Pick<
          Users,
          'last_name' | 'first_name' | 'profile_picture' | 'id'
        >;
        dishes: Array<
          { __typename?: 'dish_orders' } & {
            dish: { __typename?: 'dishes' } & Pick<Dishes, 'id' | 'name'> & {
                images: Array<
                  { __typename?: 'dish_images' } & Pick<
                    Dish_Images,
                    'path' | 'id'
                  >
                >;
              };
            variants: Array<
              { __typename?: 'order_variants' } & Pick<
                Order_Variants,
                'count' | 'variant_id'
              > & {
                  variant: { __typename?: 'dish_variants' } & Pick<
                    Dish_Variants,
                    'price' | 'name'
                  >;
                }
            >;
          }
        >;
      }
  >;
};

export type ChefOrdersQueryVariables = Exact<{ [key: string]: never }>;

export type ChefOrdersQuery = { __typename?: 'query_root' } & {
  orders: Array<
    { __typename?: 'orders' } & Pick<
      Orders,
      | 'id'
      | 'status'
      | 'is_delivery_enabled'
      | 'delivery_fee'
      | 'chef_notes'
      | 'confirmed_time'
      | 'created_at'
      | 'updated_at'
    > & {
        customer: { __typename?: 'customers' } & Pick<
          Customers,
          'id' | 'phone_number' | 'email' | 'name'
        >;
        chef: { __typename?: 'users' } & Pick<
          Users,
          'last_name' | 'first_name' | 'profile_picture' | 'id'
        >;
        dishes: Array<
          { __typename?: 'dish_orders' } & {
            dish: { __typename?: 'dishes' } & Pick<Dishes, 'id' | 'name'> & {
                images: Array<
                  { __typename?: 'dish_images' } & Pick<
                    Dish_Images,
                    'path' | 'id'
                  >
                >;
              };
            variants: Array<
              { __typename?: 'order_variants' } & Pick<
                Order_Variants,
                'count' | 'variant_id'
              > & {
                  variant: { __typename?: 'dish_variants' } & Pick<
                    Dish_Variants,
                    'price'
                  >;
                }
            >;
          }
        >;
      }
  >;
};

export type OneOrderQueryVariables = Exact<{
  orderId: Scalars['uuid'];
}>;

export type OneOrderQuery = { __typename?: 'query_root' } & {
  orders_by_pk?: Maybe<
    { __typename?: 'orders' } & Pick<
      Orders,
      | 'id'
      | 'status'
      | 'is_delivery_enabled'
      | 'delivery_fee'
      | 'chef_notes'
      | 'confirmed_time'
    > & {
        customer: { __typename?: 'customers' } & Pick<
          Customers,
          'email' | 'name'
        >;
        dishes: Array<
          { __typename?: 'dish_orders' } & {
            variants: Array<
              { __typename?: 'order_variants' } & Pick<
                Order_Variants,
                'id' | 'count'
              > & {
                  variant: { __typename?: 'dish_variants' } & Pick<
                    Dish_Variants,
                    'price' | 'name'
                  >;
                }
            >;
            dish: { __typename?: 'dishes' } & Pick<
              Dishes,
              'id' | 'cuisine' | 'type' | 'category' | 'name' | 'isVegetarian'
            > & {
                images: Array<
                  { __typename?: 'dish_images' } & Pick<
                    Dish_Images,
                    'id' | 'path'
                  >
                >;
              };
          }
        >;
      }
  >;
};

export const DishInfoFragmentDoc = gql`
  fragment dishInfo on dishes {
    name
    id
    name
    is_live
    images {
      path
      id
    }
    description
    ingredients
    calories
    category
    cuisine
    isVegetarian
    variants {
      price
      name
      name
    }
    type
  }
`;
export const ChefInfoFragmentDoc = gql`
  fragment chefInfo on users {
    last_name
    first_name
    profile_picture
    email
    address_line_one
    address_line_two
    city
    state
    id
    role
    gender
    dob
    bio
    phone_number
    address_line_two
    is_delivery_available
    delivery_fee
    delivery_region
    zip_code
    degree_from
    degree_type
    degree_status
    location_area
    created_at
    is_kitchen_opened
  }
`;
export const DishDetailsFragmentDoc = gql`
  fragment DishDetails on dishes {
    cuisine
    id
    is_live
    description
    isVegetarian
    serving_unit
    ingredients
    calories
    name
    type
    category
  }
`;
export const DishImagesFragmentDoc = gql`
  fragment DishImages on dishes {
    images {
      id
      path
    }
  }
`;
export const ChefDetailsFragmentDoc = gql`
  fragment ChefDetails on users {
    id
    degree_from
    delivery_region
    delivery_fee
    profile_picture
    degree_status
    first_name
    bio
    email
    degree_type
    phone_number
  }
`;
export const AddNewDishMutationDocument = gql`
  mutation addNewDishMutation(
    $name: String!
    $calories: String
    $category: String
    $type: String
    $cuisine: String
    $description: String
    $variants: [dish_variants_insert_input!]!
    $isVegetarian: Boolean
    $images: [dish_images_insert_input!]!
    $ingredients: String
    $serving_unit: String
  ) {
    insert_dishes_one(
      object: {
        name: $name
        ingredients: $ingredients
        calories: $calories
        category: $category
        type: $type
        cuisine: $cuisine
        serving_unit: $serving_unit
        description: $description
        isVegetarian: $isVegetarian
        images: { data: $images }
        variants: { data: $variants }
      }
    ) {
      id
      variants {
        name
        price
        servings_count
      }
    }
  }
`;
export type AddNewDishMutationMutationFn = Apollo.MutationFunction<
  AddNewDishMutationMutation,
  AddNewDishMutationMutationVariables
>;

/**
 * __useAddNewDishMutationMutation__
 *
 * To run a mutation, you first call `useAddNewDishMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddNewDishMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addNewDishMutationMutation, { data, loading, error }] = useAddNewDishMutationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      calories: // value for 'calories'
 *      category: // value for 'category'
 *      type: // value for 'type'
 *      cuisine: // value for 'cuisine'
 *      description: // value for 'description'
 *      variants: // value for 'variants'
 *      isVegetarian: // value for 'isVegetarian'
 *      images: // value for 'images'
 *      ingredients: // value for 'ingredients'
 *      serving_unit: // value for 'serving_unit'
 *   },
 * });
 */
export function useAddNewDishMutationMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddNewDishMutationMutation,
    AddNewDishMutationMutationVariables
  >,
) {
  return Apollo.useMutation<
    AddNewDishMutationMutation,
    AddNewDishMutationMutationVariables
  >(AddNewDishMutationDocument, baseOptions);
}
export type AddNewDishMutationMutationHookResult = ReturnType<
  typeof useAddNewDishMutationMutation
>;
export type AddNewDishMutationMutationResult = Apollo.MutationResult<
  AddNewDishMutationMutation
>;
export type AddNewDishMutationMutationOptions = Apollo.BaseMutationOptions<
  AddNewDishMutationMutation,
  AddNewDishMutationMutationVariables
>;
export const ToggleKitchenDocument = gql`
  mutation toggleKitchen($to: Boolean!) {
    update_users(_set: { is_kitchen_opened: $to }, where: {}) {
      returning {
        is_kitchen_opened
      }
    }
  }
`;
export type ToggleKitchenMutationFn = Apollo.MutationFunction<
  ToggleKitchenMutation,
  ToggleKitchenMutationVariables
>;

/**
 * __useToggleKitchenMutation__
 *
 * To run a mutation, you first call `useToggleKitchenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleKitchenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleKitchenMutation, { data, loading, error }] = useToggleKitchenMutation({
 *   variables: {
 *      to: // value for 'to'
 *   },
 * });
 */
export function useToggleKitchenMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleKitchenMutation,
    ToggleKitchenMutationVariables
  >,
) {
  return Apollo.useMutation<
    ToggleKitchenMutation,
    ToggleKitchenMutationVariables
  >(ToggleKitchenDocument, baseOptions);
}
export type ToggleKitchenMutationHookResult = ReturnType<
  typeof useToggleKitchenMutation
>;
export type ToggleKitchenMutationResult = Apollo.MutationResult<
  ToggleKitchenMutation
>;
export type ToggleKitchenMutationOptions = Apollo.BaseMutationOptions<
  ToggleKitchenMutation,
  ToggleKitchenMutationVariables
>;
export const EditChefInfoDocument = gql`
  mutation editChefInfo($chefId: uuid!, $input: users_set_input) {
    update_users_by_pk(pk_columns: { id: $chefId }, _set: $input) {
      id
    }
  }
`;
export type EditChefInfoMutationFn = Apollo.MutationFunction<
  EditChefInfoMutation,
  EditChefInfoMutationVariables
>;

/**
 * __useEditChefInfoMutation__
 *
 * To run a mutation, you first call `useEditChefInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditChefInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editChefInfoMutation, { data, loading, error }] = useEditChefInfoMutation({
 *   variables: {
 *      chefId: // value for 'chefId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useEditChefInfoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    EditChefInfoMutation,
    EditChefInfoMutationVariables
  >,
) {
  return Apollo.useMutation<
    EditChefInfoMutation,
    EditChefInfoMutationVariables
  >(EditChefInfoDocument, baseOptions);
}
export type EditChefInfoMutationHookResult = ReturnType<
  typeof useEditChefInfoMutation
>;
export type EditChefInfoMutationResult = Apollo.MutationResult<
  EditChefInfoMutation
>;
export type EditChefInfoMutationOptions = Apollo.BaseMutationOptions<
  EditChefInfoMutation,
  EditChefInfoMutationVariables
>;
export const ToggleDishLiveDocument = gql`
  mutation toggleDishLive($targetBoolean: Boolean, $dishId: uuid) {
    update_dishes(
      where: { id: { _eq: $dishId } }
      _set: { is_live: $targetBoolean }
    ) {
      returning {
        name
        is_live
      }
    }
  }
`;
export type ToggleDishLiveMutationFn = Apollo.MutationFunction<
  ToggleDishLiveMutation,
  ToggleDishLiveMutationVariables
>;

/**
 * __useToggleDishLiveMutation__
 *
 * To run a mutation, you first call `useToggleDishLiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleDishLiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleDishLiveMutation, { data, loading, error }] = useToggleDishLiveMutation({
 *   variables: {
 *      targetBoolean: // value for 'targetBoolean'
 *      dishId: // value for 'dishId'
 *   },
 * });
 */
export function useToggleDishLiveMutation(
  baseOptions?: Apollo.MutationHookOptions<
    ToggleDishLiveMutation,
    ToggleDishLiveMutationVariables
  >,
) {
  return Apollo.useMutation<
    ToggleDishLiveMutation,
    ToggleDishLiveMutationVariables
  >(ToggleDishLiveDocument, baseOptions);
}
export type ToggleDishLiveMutationHookResult = ReturnType<
  typeof useToggleDishLiveMutation
>;
export type ToggleDishLiveMutationResult = Apollo.MutationResult<
  ToggleDishLiveMutation
>;
export type ToggleDishLiveMutationOptions = Apollo.BaseMutationOptions<
  ToggleDishLiveMutation,
  ToggleDishLiveMutationVariables
>;
export const UpdateFoodItemDocument = gql`
  mutation updateFoodItem(
    $dishId: uuid!
    $name: String
    $calories: String
    $category: String
    $ingredients: String
    $description: String
    $isVegetarian: Boolean
    $cuisine: String
    $type: String
    $serving_unit: String
  ) {
    update_dishes(
      where: { id: { _eq: $dishId } }
      _set: {
        name: $name
        calories: $calories
        category: $category
        description: $description
        cuisine: $cuisine
        type: $type
        serving_unit: $serving_unit
        isVegetarian: $isVegetarian
        ingredients: $ingredients
      }
    ) {
      returning {
        name
        cuisine
        type
        calories
        category
        image
        isVegetarian
        variants {
          name
          price
          servings_count
        }
      }
    }
  }
`;
export type UpdateFoodItemMutationFn = Apollo.MutationFunction<
  UpdateFoodItemMutation,
  UpdateFoodItemMutationVariables
>;

/**
 * __useUpdateFoodItemMutation__
 *
 * To run a mutation, you first call `useUpdateFoodItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFoodItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFoodItemMutation, { data, loading, error }] = useUpdateFoodItemMutation({
 *   variables: {
 *      dishId: // value for 'dishId'
 *      name: // value for 'name'
 *      calories: // value for 'calories'
 *      category: // value for 'category'
 *      ingredients: // value for 'ingredients'
 *      description: // value for 'description'
 *      isVegetarian: // value for 'isVegetarian'
 *      cuisine: // value for 'cuisine'
 *      type: // value for 'type'
 *      serving_unit: // value for 'serving_unit'
 *   },
 * });
 */
export function useUpdateFoodItemMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateFoodItemMutation,
    UpdateFoodItemMutationVariables
  >,
) {
  return Apollo.useMutation<
    UpdateFoodItemMutation,
    UpdateFoodItemMutationVariables
  >(UpdateFoodItemDocument, baseOptions);
}
export type UpdateFoodItemMutationHookResult = ReturnType<
  typeof useUpdateFoodItemMutation
>;
export type UpdateFoodItemMutationResult = Apollo.MutationResult<
  UpdateFoodItemMutation
>;
export type UpdateFoodItemMutationOptions = Apollo.BaseMutationOptions<
  UpdateFoodItemMutation,
  UpdateFoodItemMutationVariables
>;
export const DeleteDishVariantsDocument = gql`
  mutation deleteDishVariants($dishId: uuid!) {
    delete_dish_variants(where: { dish_Id: { _eq: $dishId } }) {
      returning {
        id
      }
    }
  }
`;
export type DeleteDishVariantsMutationFn = Apollo.MutationFunction<
  DeleteDishVariantsMutation,
  DeleteDishVariantsMutationVariables
>;

/**
 * __useDeleteDishVariantsMutation__
 *
 * To run a mutation, you first call `useDeleteDishVariantsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDishVariantsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDishVariantsMutation, { data, loading, error }] = useDeleteDishVariantsMutation({
 *   variables: {
 *      dishId: // value for 'dishId'
 *   },
 * });
 */
export function useDeleteDishVariantsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDishVariantsMutation,
    DeleteDishVariantsMutationVariables
  >,
) {
  return Apollo.useMutation<
    DeleteDishVariantsMutation,
    DeleteDishVariantsMutationVariables
  >(DeleteDishVariantsDocument, baseOptions);
}
export type DeleteDishVariantsMutationHookResult = ReturnType<
  typeof useDeleteDishVariantsMutation
>;
export type DeleteDishVariantsMutationResult = Apollo.MutationResult<
  DeleteDishVariantsMutation
>;
export type DeleteDishVariantsMutationOptions = Apollo.BaseMutationOptions<
  DeleteDishVariantsMutation,
  DeleteDishVariantsMutationVariables
>;
export const AddImagesDocument = gql`
  mutation addImages($data: [dish_images_insert_input!]!) {
    insert_dish_images(objects: $data) {
      returning {
        id
        dish {
          id
          name
        }
      }
    }
  }
`;
export type AddImagesMutationFn = Apollo.MutationFunction<
  AddImagesMutation,
  AddImagesMutationVariables
>;

/**
 * __useAddImagesMutation__
 *
 * To run a mutation, you first call `useAddImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addImagesMutation, { data, loading, error }] = useAddImagesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddImagesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddImagesMutation,
    AddImagesMutationVariables
  >,
) {
  return Apollo.useMutation<AddImagesMutation, AddImagesMutationVariables>(
    AddImagesDocument,
    baseOptions,
  );
}
export type AddImagesMutationHookResult = ReturnType<
  typeof useAddImagesMutation
>;
export type AddImagesMutationResult = Apollo.MutationResult<AddImagesMutation>;
export type AddImagesMutationOptions = Apollo.BaseMutationOptions<
  AddImagesMutation,
  AddImagesMutationVariables
>;
export const DeleteImagesDocument = gql`
  mutation deleteImages($dish_id: uuid!) {
    delete_dish_images(where: { dish_id: { _eq: $dish_id } }) {
      returning {
        id
      }
    }
  }
`;
export type DeleteImagesMutationFn = Apollo.MutationFunction<
  DeleteImagesMutation,
  DeleteImagesMutationVariables
>;

/**
 * __useDeleteImagesMutation__
 *
 * To run a mutation, you first call `useDeleteImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImagesMutation, { data, loading, error }] = useDeleteImagesMutation({
 *   variables: {
 *      dish_id: // value for 'dish_id'
 *   },
 * });
 */
export function useDeleteImagesMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteImagesMutation,
    DeleteImagesMutationVariables
  >,
) {
  return Apollo.useMutation<
    DeleteImagesMutation,
    DeleteImagesMutationVariables
  >(DeleteImagesDocument, baseOptions);
}
export type DeleteImagesMutationHookResult = ReturnType<
  typeof useDeleteImagesMutation
>;
export type DeleteImagesMutationResult = Apollo.MutationResult<
  DeleteImagesMutation
>;
export type DeleteImagesMutationOptions = Apollo.BaseMutationOptions<
  DeleteImagesMutation,
  DeleteImagesMutationVariables
>;
export const AddVariantsDocument = gql`
  mutation addVariants($data: [dish_variants_insert_input!]!) {
    insert_dish_variants(objects: $data) {
      returning {
        id
      }
    }
  }
`;
export type AddVariantsMutationFn = Apollo.MutationFunction<
  AddVariantsMutation,
  AddVariantsMutationVariables
>;

/**
 * __useAddVariantsMutation__
 *
 * To run a mutation, you first call `useAddVariantsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddVariantsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addVariantsMutation, { data, loading, error }] = useAddVariantsMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddVariantsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AddVariantsMutation,
    AddVariantsMutationVariables
  >,
) {
  return Apollo.useMutation<AddVariantsMutation, AddVariantsMutationVariables>(
    AddVariantsDocument,
    baseOptions,
  );
}
export type AddVariantsMutationHookResult = ReturnType<
  typeof useAddVariantsMutation
>;
export type AddVariantsMutationResult = Apollo.MutationResult<
  AddVariantsMutation
>;
export type AddVariantsMutationOptions = Apollo.BaseMutationOptions<
  AddVariantsMutation,
  AddVariantsMutationVariables
>;
export const DeleteDishDocument = gql`
  mutation deleteDish($dishId: uuid) {
    delete_dishes(where: { id: { _eq: $dishId } }) {
      returning {
        id
        name
        description
      }
    }
  }
`;
export type DeleteDishMutationFn = Apollo.MutationFunction<
  DeleteDishMutation,
  DeleteDishMutationVariables
>;

/**
 * __useDeleteDishMutation__
 *
 * To run a mutation, you first call `useDeleteDishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDishMutation, { data, loading, error }] = useDeleteDishMutation({
 *   variables: {
 *      dishId: // value for 'dishId'
 *   },
 * });
 */
export function useDeleteDishMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteDishMutation,
    DeleteDishMutationVariables
  >,
) {
  return Apollo.useMutation<DeleteDishMutation, DeleteDishMutationVariables>(
    DeleteDishDocument,
    baseOptions,
  );
}
export type DeleteDishMutationHookResult = ReturnType<
  typeof useDeleteDishMutation
>;
export type DeleteDishMutationResult = Apollo.MutationResult<
  DeleteDishMutation
>;
export type DeleteDishMutationOptions = Apollo.BaseMutationOptions<
  DeleteDishMutation,
  DeleteDishMutationVariables
>;
export const CreateOrderDocument = gql`
  mutation createOrder($input: orders_insert_input!) {
    insert_orders_one(object: $input) {
      id
    }
  }
`;
export type CreateOrderMutationFn = Apollo.MutationFunction<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOrderMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOrderMutation,
    CreateOrderMutationVariables
  >,
) {
  return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(
    CreateOrderDocument,
    baseOptions,
  );
}
export type CreateOrderMutationHookResult = ReturnType<
  typeof useCreateOrderMutation
>;
export type CreateOrderMutationResult = Apollo.MutationResult<
  CreateOrderMutation
>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const UpdateOrderStatusDocument = gql`
  mutation updateOrderStatus(
    $orderId: uuid!
    $newStatus: String!
    $confirmedTime: timetz
  ) {
    update_orders_by_pk(
      pk_columns: { id: $orderId }
      _set: { status: $newStatus, confirmed_time: $confirmedTime }
    ) {
      id
      status
    }
  }
`;
export type UpdateOrderStatusMutationFn = Apollo.MutationFunction<
  UpdateOrderStatusMutation,
  UpdateOrderStatusMutationVariables
>;

/**
 * __useUpdateOrderStatusMutation__
 *
 * To run a mutation, you first call `useUpdateOrderStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderStatusMutation, { data, loading, error }] = useUpdateOrderStatusMutation({
 *   variables: {
 *      orderId: // value for 'orderId'
 *      newStatus: // value for 'newStatus'
 *      confirmedTime: // value for 'confirmedTime'
 *   },
 * });
 */
export function useUpdateOrderStatusMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOrderStatusMutation,
    UpdateOrderStatusMutationVariables
  >,
) {
  return Apollo.useMutation<
    UpdateOrderStatusMutation,
    UpdateOrderStatusMutationVariables
  >(UpdateOrderStatusDocument, baseOptions);
}
export type UpdateOrderStatusMutationHookResult = ReturnType<
  typeof useUpdateOrderStatusMutation
>;
export type UpdateOrderStatusMutationResult = Apollo.MutationResult<
  UpdateOrderStatusMutation
>;
export type UpdateOrderStatusMutationOptions = Apollo.BaseMutationOptions<
  UpdateOrderStatusMutation,
  UpdateOrderStatusMutationVariables
>;
export const SearchChefsDocument = gql`
  query searchChefs($input: String!) {
    users(
      where: {
        _or: [
          { first_name: { _like: $input } }
          { last_name: { _ilike: $input } }
          { city: { _ilike: $input } }
          { dishes: { name: { _ilike: $input } } }
        ]
      }
    ) {
      ...chefInfo
      dishes {
        ...dishInfo
      }
    }
  }
  ${ChefInfoFragmentDoc}
  ${DishInfoFragmentDoc}
`;

/**
 * __useSearchChefsQuery__
 *
 * To run a query within a React component, call `useSearchChefsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchChefsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchChefsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSearchChefsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchChefsQuery,
    SearchChefsQueryVariables
  >,
) {
  return Apollo.useQuery<SearchChefsQuery, SearchChefsQueryVariables>(
    SearchChefsDocument,
    baseOptions,
  );
}
export function useSearchChefsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchChefsQuery,
    SearchChefsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<SearchChefsQuery, SearchChefsQueryVariables>(
    SearchChefsDocument,
    baseOptions,
  );
}
export type SearchChefsQueryHookResult = ReturnType<typeof useSearchChefsQuery>;
export type SearchChefsLazyQueryHookResult = ReturnType<
  typeof useSearchChefsLazyQuery
>;
export type SearchChefsQueryResult = Apollo.QueryResult<
  SearchChefsQuery,
  SearchChefsQueryVariables
>;
export const ChefWithEmailDocument = gql`
  query chefWithEmail($email: String!) {
    users(where: { email: { _eq: $email } }) {
      id
    }
  }
`;

/**
 * __useChefWithEmailQuery__
 *
 * To run a query within a React component, call `useChefWithEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useChefWithEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChefWithEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useChefWithEmailQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ChefWithEmailQuery,
    ChefWithEmailQueryVariables
  >,
) {
  return Apollo.useQuery<ChefWithEmailQuery, ChefWithEmailQueryVariables>(
    ChefWithEmailDocument,
    baseOptions,
  );
}
export function useChefWithEmailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ChefWithEmailQuery,
    ChefWithEmailQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ChefWithEmailQuery, ChefWithEmailQueryVariables>(
    ChefWithEmailDocument,
    baseOptions,
  );
}
export type ChefWithEmailQueryHookResult = ReturnType<
  typeof useChefWithEmailQuery
>;
export type ChefWithEmailLazyQueryHookResult = ReturnType<
  typeof useChefWithEmailLazyQuery
>;
export type ChefWithEmailQueryResult = Apollo.QueryResult<
  ChefWithEmailQuery,
  ChefWithEmailQueryVariables
>;
export const GetChefWithIdDocument = gql`
  query getChefWithId($id: uuid!) {
    users_by_pk(id: $id) {
      ...chefInfo
    }
  }
  ${ChefInfoFragmentDoc}
`;

/**
 * __useGetChefWithIdQuery__
 *
 * To run a query within a React component, call `useGetChefWithIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChefWithIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChefWithIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChefWithIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetChefWithIdQuery,
    GetChefWithIdQueryVariables
  >,
) {
  return Apollo.useQuery<GetChefWithIdQuery, GetChefWithIdQueryVariables>(
    GetChefWithIdDocument,
    baseOptions,
  );
}
export function useGetChefWithIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetChefWithIdQuery,
    GetChefWithIdQueryVariables
  >,
) {
  return Apollo.useLazyQuery<GetChefWithIdQuery, GetChefWithIdQueryVariables>(
    GetChefWithIdDocument,
    baseOptions,
  );
}
export type GetChefWithIdQueryHookResult = ReturnType<
  typeof useGetChefWithIdQuery
>;
export type GetChefWithIdLazyQueryHookResult = ReturnType<
  typeof useGetChefWithIdLazyQuery
>;
export type GetChefWithIdQueryResult = Apollo.QueryResult<
  GetChefWithIdQuery,
  GetChefWithIdQueryVariables
>;
export const AllFoodItemsDocument = gql`
  query allFoodItems($chefId: uuid) {
    dishes(where: { chef: { id: { _eq: $chefId } } }) {
      ...DishDetails
      ...DishImages
      chef {
        id
      }
      variants {
        id
        name
        price
        servings_count
      }
    }
  }
  ${DishDetailsFragmentDoc}
  ${DishImagesFragmentDoc}
`;

/**
 * __useAllFoodItemsQuery__
 *
 * To run a query within a React component, call `useAllFoodItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllFoodItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllFoodItemsQuery({
 *   variables: {
 *      chefId: // value for 'chefId'
 *   },
 * });
 */
export function useAllFoodItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllFoodItemsQuery,
    AllFoodItemsQueryVariables
  >,
) {
  return Apollo.useQuery<AllFoodItemsQuery, AllFoodItemsQueryVariables>(
    AllFoodItemsDocument,
    baseOptions,
  );
}
export function useAllFoodItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllFoodItemsQuery,
    AllFoodItemsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllFoodItemsQuery, AllFoodItemsQueryVariables>(
    AllFoodItemsDocument,
    baseOptions,
  );
}
export type AllFoodItemsQueryHookResult = ReturnType<
  typeof useAllFoodItemsQuery
>;
export type AllFoodItemsLazyQueryHookResult = ReturnType<
  typeof useAllFoodItemsLazyQuery
>;
export type AllFoodItemsQueryResult = Apollo.QueryResult<
  AllFoodItemsQuery,
  AllFoodItemsQueryVariables
>;
export const AllLiveFoodItemsDocument = gql`
  query allLiveFoodItems($chefId: uuid) {
    dishes(where: { is_live: { _eq: true }, chef: { id: { _eq: $chefId } } }) {
      ...DishImages
      ...DishDetails
      chef {
        id
      }
      variants {
        id
        name
        price
        servings_count
      }
    }
  }
  ${DishImagesFragmentDoc}
  ${DishDetailsFragmentDoc}
`;

/**
 * __useAllLiveFoodItemsQuery__
 *
 * To run a query within a React component, call `useAllLiveFoodItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllLiveFoodItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllLiveFoodItemsQuery({
 *   variables: {
 *      chefId: // value for 'chefId'
 *   },
 * });
 */
export function useAllLiveFoodItemsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllLiveFoodItemsQuery,
    AllLiveFoodItemsQueryVariables
  >,
) {
  return Apollo.useQuery<AllLiveFoodItemsQuery, AllLiveFoodItemsQueryVariables>(
    AllLiveFoodItemsDocument,
    baseOptions,
  );
}
export function useAllLiveFoodItemsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllLiveFoodItemsQuery,
    AllLiveFoodItemsQueryVariables
  >,
) {
  return Apollo.useLazyQuery<
    AllLiveFoodItemsQuery,
    AllLiveFoodItemsQueryVariables
  >(AllLiveFoodItemsDocument, baseOptions);
}
export type AllLiveFoodItemsQueryHookResult = ReturnType<
  typeof useAllLiveFoodItemsQuery
>;
export type AllLiveFoodItemsLazyQueryHookResult = ReturnType<
  typeof useAllLiveFoodItemsLazyQuery
>;
export type AllLiveFoodItemsQueryResult = Apollo.QueryResult<
  AllLiveFoodItemsQuery,
  AllLiveFoodItemsQueryVariables
>;
export const SearchDishesDocument = gql`
  query searchDishes(
    $name: String
    $type: String
    $cat: String
    $firstName: String
    $lastName: String
  ) {
    dishes(
      where: {
        _or: [
          {
            name: { _ilike: $name }
            type: { _ilike: $type }
            category: { _ilike: $cat }
            chef: {
              _or: [
                { first_name: { _ilike: $firstName } }
                { last_name: { _ilike: $lastName } }
              ]
            }
          }
        ]
      }
    ) {
      ...DishDetails
      ...DishImages
      chef {
        ...ChefDetails
      }
    }
  }
  ${DishDetailsFragmentDoc}
  ${DishImagesFragmentDoc}
  ${ChefDetailsFragmentDoc}
`;

/**
 * __useSearchDishesQuery__
 *
 * To run a query within a React component, call `useSearchDishesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchDishesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchDishesQuery({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      cat: // value for 'cat'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useSearchDishesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchDishesQuery,
    SearchDishesQueryVariables
  >,
) {
  return Apollo.useQuery<SearchDishesQuery, SearchDishesQueryVariables>(
    SearchDishesDocument,
    baseOptions,
  );
}
export function useSearchDishesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchDishesQuery,
    SearchDishesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<SearchDishesQuery, SearchDishesQueryVariables>(
    SearchDishesDocument,
    baseOptions,
  );
}
export type SearchDishesQueryHookResult = ReturnType<
  typeof useSearchDishesQuery
>;
export type SearchDishesLazyQueryHookResult = ReturnType<
  typeof useSearchDishesLazyQuery
>;
export type SearchDishesQueryResult = Apollo.QueryResult<
  SearchDishesQuery,
  SearchDishesQueryVariables
>;
export const AllMyDishesDocument = gql`
  query allMyDishes {
    dishes(order_by: { created_at: asc }) {
      is_live
      name
      type
      calories
      category
      cuisine
      serving_unit
      description
      ingredients
      id
      images {
        id
        path
        created_at
        updated_at
      }
      isVegetarian
      variants {
        name
        price
        servings_count
      }
    }
  }
`;

/**
 * __useAllMyDishesQuery__
 *
 * To run a query within a React component, call `useAllMyDishesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllMyDishesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllMyDishesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllMyDishesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllMyDishesQuery,
    AllMyDishesQueryVariables
  >,
) {
  return Apollo.useQuery<AllMyDishesQuery, AllMyDishesQueryVariables>(
    AllMyDishesDocument,
    baseOptions,
  );
}
export function useAllMyDishesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllMyDishesQuery,
    AllMyDishesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllMyDishesQuery, AllMyDishesQueryVariables>(
    AllMyDishesDocument,
    baseOptions,
  );
}
export type AllMyDishesQueryHookResult = ReturnType<typeof useAllMyDishesQuery>;
export type AllMyDishesLazyQueryHookResult = ReturnType<
  typeof useAllMyDishesLazyQuery
>;
export type AllMyDishesQueryResult = Apollo.QueryResult<
  AllMyDishesQuery,
  AllMyDishesQueryVariables
>;
export const AllNewDishesDocument = gql`
  query allNewDishes {
    dishes {
      name
      id
    }
  }
`;

/**
 * __useAllNewDishesQuery__
 *
 * To run a query within a React component, call `useAllNewDishesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllNewDishesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllNewDishesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllNewDishesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllNewDishesQuery,
    AllNewDishesQueryVariables
  >,
) {
  return Apollo.useQuery<AllNewDishesQuery, AllNewDishesQueryVariables>(
    AllNewDishesDocument,
    baseOptions,
  );
}
export function useAllNewDishesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllNewDishesQuery,
    AllNewDishesQueryVariables
  >,
) {
  return Apollo.useLazyQuery<AllNewDishesQuery, AllNewDishesQueryVariables>(
    AllNewDishesDocument,
    baseOptions,
  );
}
export type AllNewDishesQueryHookResult = ReturnType<
  typeof useAllNewDishesQuery
>;
export type AllNewDishesLazyQueryHookResult = ReturnType<
  typeof useAllNewDishesLazyQuery
>;
export type AllNewDishesQueryResult = Apollo.QueryResult<
  AllNewDishesQuery,
  AllNewDishesQueryVariables
>;
export const OrdersDocument = gql`
  query orders($email: String!) {
    orders(where: { customer: { email: { _eq: $email } } }) {
      id
      status
      is_delivery_enabled
      delivery_fee
      confirmed_time
      chef {
        last_name
        first_name
        profile_picture
        id
      }
      dishes {
        dish {
          id
          name
          images {
            path
            id
          }
        }
        variants {
          count
          variant_id
          variant {
            price
            name
          }
        }
      }
    }
  }
`;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>,
) {
  return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(
    OrdersDocument,
    baseOptions,
  );
}
export function useOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>,
) {
  return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(
    OrdersDocument,
    baseOptions,
  );
}
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersQueryResult = Apollo.QueryResult<
  OrdersQuery,
  OrdersQueryVariables
>;
export const ChefOrdersDocument = gql`
  query chefOrders {
    orders(order_by: { updated_at: desc }) {
      id
      status
      is_delivery_enabled
      delivery_fee
      chef_notes
      confirmed_time
      customer {
        id
        phone_number
        email
        name
      }
      created_at
      updated_at
      chef {
        last_name
        first_name
        profile_picture
        id
      }
      dishes {
        dish {
          id
          name
          images {
            path
            id
          }
        }
        variants {
          count
          variant_id
          variant {
            price
          }
        }
      }
    }
  }
`;

/**
 * __useChefOrdersQuery__
 *
 * To run a query within a React component, call `useChefOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useChefOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChefOrdersQuery({
 *   variables: {
 *   },
 * });
 */
export function useChefOrdersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    ChefOrdersQuery,
    ChefOrdersQueryVariables
  >,
) {
  return Apollo.useQuery<ChefOrdersQuery, ChefOrdersQueryVariables>(
    ChefOrdersDocument,
    baseOptions,
  );
}
export function useChefOrdersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ChefOrdersQuery,
    ChefOrdersQueryVariables
  >,
) {
  return Apollo.useLazyQuery<ChefOrdersQuery, ChefOrdersQueryVariables>(
    ChefOrdersDocument,
    baseOptions,
  );
}
export type ChefOrdersQueryHookResult = ReturnType<typeof useChefOrdersQuery>;
export type ChefOrdersLazyQueryHookResult = ReturnType<
  typeof useChefOrdersLazyQuery
>;
export type ChefOrdersQueryResult = Apollo.QueryResult<
  ChefOrdersQuery,
  ChefOrdersQueryVariables
>;
export const OneOrderDocument = gql`
  query oneOrder($orderId: uuid!) {
    orders_by_pk(id: $orderId) {
      id
      status
      is_delivery_enabled
      delivery_fee
      chef_notes
      confirmed_time
      customer {
        email
        name
      }
      dishes {
        variants {
          id
          count
          variant {
            price
            name
          }
        }
        dish {
          id
          cuisine
          type
          category
          images {
            id
            path
          }
          name
          isVegetarian
        }
      }
    }
  }
`;

/**
 * __useOneOrderQuery__
 *
 * To run a query within a React component, call `useOneOrderQuery` and pass it any options that fit your needs.
 * When your component renders, `useOneOrderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOneOrderQuery({
 *   variables: {
 *      orderId: // value for 'orderId'
 *   },
 * });
 */
export function useOneOrderQuery(
  baseOptions?: Apollo.QueryHookOptions<OneOrderQuery, OneOrderQueryVariables>,
) {
  return Apollo.useQuery<OneOrderQuery, OneOrderQueryVariables>(
    OneOrderDocument,
    baseOptions,
  );
}
export function useOneOrderLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    OneOrderQuery,
    OneOrderQueryVariables
  >,
) {
  return Apollo.useLazyQuery<OneOrderQuery, OneOrderQueryVariables>(
    OneOrderDocument,
    baseOptions,
  );
}
export type OneOrderQueryHookResult = ReturnType<typeof useOneOrderQuery>;
export type OneOrderLazyQueryHookResult = ReturnType<
  typeof useOneOrderLazyQuery
>;
export type OneOrderQueryResult = Apollo.QueryResult<
  OneOrderQuery,
  OneOrderQueryVariables
>;
