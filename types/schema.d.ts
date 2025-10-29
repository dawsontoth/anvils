import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Any: { input: { [key: string]: any }; output: { [key: string]: any }; }
  BigInt: { input: number; output: number; }
  Blob: { input: object; output: object; }
  Bytes: { input: number[]; output: number[]; }
  Date: { input: Date; output: Date; }
  Long: { input: number; output: number; }
};

export type Product = {
  __typename?: 'Product';
  desiredSaleQuantity: Scalars['Long']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['Blob']['output'];
  metadata: Scalars['Any']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  quantity: Scalars['Int']['output'];
  readyForMarket: Scalars['Boolean']['output'];
  realTaxRate: Scalars['BigInt']['output'];
  released: Scalars['Date']['output'];
  reviews: Array<Maybe<Review>>;
  taxRate: Scalars['Float']['output'];
  thumbnail: Scalars['Bytes']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type Review = {
  __typename?: 'Review';
  comments: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product?: Maybe<Product>;
  productId: Scalars['ID']['output'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = Record<PropertyKey, never>, TParent = Record<PropertyKey, never>, TContext = Record<PropertyKey, never>, TArgs = Record<PropertyKey, never>> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;





/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Any: ResolverTypeWrapper<Scalars['Any']['output']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  Blob: ResolverTypeWrapper<Scalars['Blob']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Bytes: ResolverTypeWrapper<Scalars['Bytes']['output']>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  Product: ResolverTypeWrapper<Product>;
  Review: ResolverTypeWrapper<Review>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Any: Scalars['Any']['output'];
  BigInt: Scalars['BigInt']['output'];
  Blob: Scalars['Blob']['output'];
  Boolean: Scalars['Boolean']['output'];
  Bytes: Scalars['Bytes']['output'];
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Long: Scalars['Long']['output'];
  Product: Product;
  Review: Review;
  String: Scalars['String']['output'];
}>;

export type ComputedDirectiveArgs = {
  from?: Maybe<Scalars['String']['input']>;
  version?: Maybe<Scalars['Int']['input']>;
};

export type ComputedDirectiveResolver<Result, Parent, ContextType = any, Args = ComputedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreatedTimeDirectiveArgs = { };

export type CreatedTimeDirectiveResolver<Result, Parent, ContextType = any, Args = CreatedTimeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type ExportDirectiveArgs = {
  name?: Maybe<Scalars['String']['input']>;
};

export type ExportDirectiveResolver<Result, Parent, ContextType = any, Args = ExportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type IndexedDirectiveArgs = {
  M?: Maybe<Scalars['Int']['input']>;
  distance?: Maybe<Scalars['String']['input']>;
  efConstruction?: Maybe<Scalars['Int']['input']>;
  efSearchConstruction?: Maybe<Scalars['Int']['input']>;
  mL?: Maybe<Scalars['Int']['input']>;
  optimizeRouting?: Maybe<Scalars['Int']['input']>;
  type?: Maybe<Scalars['String']['input']>;
};

export type IndexedDirectiveResolver<Result, Parent, ContextType = any, Args = IndexedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type PrimaryKeyDirectiveArgs = { };

export type PrimaryKeyDirectiveResolver<Result, Parent, ContextType = any, Args = PrimaryKeyDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type RelationshipDirectiveArgs = {
  from?: Maybe<Array<Maybe<Scalars['ID']['input']>>>;
  to?: Maybe<Scalars['ID']['input']>;
};

export type RelationshipDirectiveResolver<Result, Parent, ContextType = any, Args = RelationshipDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type SealedDirectiveArgs = { };

export type SealedDirectiveResolver<Result, Parent, ContextType = any, Args = SealedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type TableDirectiveArgs = {
  audit?: Maybe<Scalars['Boolean']['input']>;
  database?: Maybe<Scalars['String']['input']>;
  expiration?: Maybe<Scalars['Int']['input']>;
  table?: Maybe<Scalars['String']['input']>;
};

export type TableDirectiveResolver<Result, Parent, ContextType = any, Args = TableDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type UpdatedTimeDirectiveArgs = { };

export type UpdatedTimeDirectiveResolver<Result, Parent, ContextType = any, Args = UpdatedTimeDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export interface AnyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Any'], any> {
  name: 'Any';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface BlobScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Blob'], any> {
  name: 'Blob';
}

export interface BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Bytes'], any> {
  name: 'Bytes';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  desiredSaleQuantity?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['Blob'], ParentType, ContextType>;
  metadata?: Resolver<ResolversTypes['Any'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  readyForMarket?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  realTaxRate?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  released?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['Bytes'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
}>;

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = ResolversObject<{
  comments?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Any?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  Blob?: GraphQLScalarType;
  Bytes?: GraphQLScalarType;
  Date?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Product?: ProductResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = any> = ResolversObject<{
  computed?: ComputedDirectiveResolver<any, any, ContextType>;
  createdTime?: CreatedTimeDirectiveResolver<any, any, ContextType>;
  export?: ExportDirectiveResolver<any, any, ContextType>;
  indexed?: IndexedDirectiveResolver<any, any, ContextType>;
  primaryKey?: PrimaryKeyDirectiveResolver<any, any, ContextType>;
  relationship?: RelationshipDirectiveResolver<any, any, ContextType>;
  sealed?: SealedDirectiveResolver<any, any, ContextType>;
  table?: TableDirectiveResolver<any, any, ContextType>;
  updatedTime?: UpdatedTimeDirectiveResolver<any, any, ContextType>;
}>;
