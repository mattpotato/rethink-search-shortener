import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `MockDatum`. */
  allMockData?: Maybe<MockDataConnection>;
  /** Reads and enables pagination through a set of `Person`. */
  allPeople?: Maybe<PeopleConnection>;
  /** Reads and enables pagination through a set of `Url`. */
  allUrls?: Maybe<UrlsConnection>;
  urlByShortId?: Maybe<Url>;
  /** Reads and enables pagination through a set of `Person`. */
  search?: Maybe<PeopleConnection>;
  /** Reads a single `Url` using its globally unique `ID`. */
  url?: Maybe<Url>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllMockDataArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<MockDataOrderBy>>;
  condition?: Maybe<MockDatumCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPeopleArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<PeopleOrderBy>>;
  condition?: Maybe<PersonCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUrlsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<Array<UrlsOrderBy>>;
  condition?: Maybe<UrlCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUrlByShortIdArgs = {
  shortId: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUrlArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};


/** Methods to use when ordering `MockDatum`. */
export enum MockDataOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  IpAddressAsc = 'IP_ADDRESS_ASC',
  IpAddressDesc = 'IP_ADDRESS_DESC',
  DocumentAsc = 'DOCUMENT_ASC',
  DocumentDesc = 'DOCUMENT_DESC',
  DocumentWithIdxAsc = 'DOCUMENT_WITH_IDX_ASC',
  DocumentWithIdxDesc = 'DOCUMENT_WITH_IDX_DESC',
  DocumentWithIdx2Asc = 'DOCUMENT_WITH_IDX2_ASC',
  DocumentWithIdx2Desc = 'DOCUMENT_WITH_IDX2_DESC'
}

/** A condition to be used against `MockDatum` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MockDatumCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `gender` field. */
  gender?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `ipAddress` field. */
  ipAddress?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `document` field. */
  document?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentWithIdx` field. */
  documentWithIdx?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentWithIdx2` field. */
  documentWithIdx2?: Maybe<Scalars['String']>;
};

/** A connection to a list of `MockDatum` values. */
export type MockDataConnection = {
  __typename?: 'MockDataConnection';
  /** A list of `MockDatum` objects. */
  nodes: Array<Maybe<MockDatum>>;
  /** A list of edges which contains the `MockDatum` and cursor to aid in pagination. */
  edges: Array<MockDataEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `MockDatum` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type MockDatum = {
  __typename?: 'MockDatum';
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  documentWithIdx?: Maybe<Scalars['String']>;
  documentWithIdx2?: Maybe<Scalars['String']>;
};

/** A `MockDatum` edge in the connection. */
export type MockDataEdge = {
  __typename?: 'MockDataEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `MockDatum` at the end of the edge. */
  node?: Maybe<MockDatum>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** Methods to use when ordering `Person`. */
export enum PeopleOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  FirstNameAsc = 'FIRST_NAME_ASC',
  FirstNameDesc = 'FIRST_NAME_DESC',
  LastNameAsc = 'LAST_NAME_ASC',
  LastNameDesc = 'LAST_NAME_DESC',
  JobTitleAsc = 'JOB_TITLE_ASC',
  JobTitleDesc = 'JOB_TITLE_DESC',
  CountryAsc = 'COUNTRY_ASC',
  CountryDesc = 'COUNTRY_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  DocumentWithIdxAsc = 'DOCUMENT_WITH_IDX_ASC',
  DocumentWithIdxDesc = 'DOCUMENT_WITH_IDX_DESC'
}

/** A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PersonCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: Maybe<Scalars['Int']>;
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `jobTitle` field. */
  jobTitle?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `country` field. */
  country?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `email` field. */
  email?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentWithIdx` field. */
  documentWithIdx?: Maybe<Scalars['String']>;
};

/** A connection to a list of `Person` values. */
export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  /** A list of `Person` objects. */
  nodes: Array<Maybe<Person>>;
  /** A list of edges which contains the `Person` and cursor to aid in pagination. */
  edges: Array<PeopleEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Person` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Person = {
  __typename?: 'Person';
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  documentWithIdx?: Maybe<Scalars['String']>;
};

/** A `Person` edge in the connection. */
export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Person` at the end of the edge. */
  node?: Maybe<Person>;
};

/** Methods to use when ordering `Url`. */
export enum UrlsOrderBy {
  Natural = 'NATURAL',
  ShortIdAsc = 'SHORT_ID_ASC',
  ShortIdDesc = 'SHORT_ID_DESC',
  LongUrlAsc = 'LONG_URL_ASC',
  LongUrlDesc = 'LONG_URL_DESC',
  CreatedAtAsc = 'CREATED_AT_ASC',
  CreatedAtDesc = 'CREATED_AT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Url` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UrlCondition = {
  /** Checks for equality with the object’s `shortId` field. */
  shortId?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `longUrl` field. */
  longUrl?: Maybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdAt` field. */
  createdAt?: Maybe<Scalars['Datetime']>;
};


/** A connection to a list of `Url` values. */
export type UrlsConnection = {
  __typename?: 'UrlsConnection';
  /** A list of `Url` objects. */
  nodes: Array<Maybe<Url>>;
  /** A list of edges which contains the `Url` and cursor to aid in pagination. */
  edges: Array<UrlsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Url` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Url = Node & {
  __typename?: 'Url';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  shortId: Scalars['String'];
  longUrl: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** A `Url` edge in the connection. */
export type UrlsEdge = {
  __typename?: 'UrlsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Url` at the end of the edge. */
  node?: Maybe<Url>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `MockDatum`. */
  createMockDatum?: Maybe<CreateMockDatumPayload>;
  /** Creates a single `Person`. */
  createPerson?: Maybe<CreatePersonPayload>;
  /** Creates a single `Url`. */
  createUrl?: Maybe<CreateUrlPayload>;
  /** Updates a single `Url` using its globally unique id and a patch. */
  updateUrl?: Maybe<UpdateUrlPayload>;
  /** Updates a single `Url` using a unique key and a patch. */
  updateUrlByShortId?: Maybe<UpdateUrlPayload>;
  /** Deletes a single `Url` using its globally unique id. */
  deleteUrl?: Maybe<DeleteUrlPayload>;
  /** Deletes a single `Url` using a unique key. */
  deleteUrlByShortId?: Maybe<DeleteUrlPayload>;
  shorten?: Maybe<ShortenPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMockDatumArgs = {
  input: CreateMockDatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUrlArgs = {
  input: CreateUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUrlArgs = {
  input: UpdateUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUrlByShortIdArgs = {
  input: UpdateUrlByShortIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUrlArgs = {
  input: DeleteUrlInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUrlByShortIdArgs = {
  input: DeleteUrlByShortIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationShortenArgs = {
  input: ShortenInput;
};

/** All input for the create `MockDatum` mutation. */
export type CreateMockDatumInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MockDatum` to be created by this mutation. */
  mockDatum: MockDatumInput;
};

/** An input for mutations affecting `MockDatum` */
export type MockDatumInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['String']>;
  document?: Maybe<Scalars['String']>;
  documentWithIdx?: Maybe<Scalars['String']>;
  documentWithIdx2?: Maybe<Scalars['String']>;
};

/** The output of our create `MockDatum` mutation. */
export type CreateMockDatumPayload = {
  __typename?: 'CreateMockDatumPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `MockDatum` that was created by this mutation. */
  mockDatum?: Maybe<MockDatum>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `MockDatum`. May be used by Relay 1. */
  mockDatumEdge?: Maybe<MockDataEdge>;
};


/** The output of our create `MockDatum` mutation. */
export type CreateMockDatumPayloadMockDatumEdgeArgs = {
  orderBy?: Maybe<Array<MockDataOrderBy>>;
};

/** All input for the create `Person` mutation. */
export type CreatePersonInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Person` to be created by this mutation. */
  person: PersonInput;
};

/** An input for mutations affecting `Person` */
export type PersonInput = {
  id?: Maybe<Scalars['Int']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  documentWithIdx?: Maybe<Scalars['String']>;
};

/** The output of our create `Person` mutation. */
export type CreatePersonPayload = {
  __typename?: 'CreatePersonPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Person` that was created by this mutation. */
  person?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
};


/** The output of our create `Person` mutation. */
export type CreatePersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<Array<PeopleOrderBy>>;
};

/** All input for the create `Url` mutation. */
export type CreateUrlInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Url` to be created by this mutation. */
  url: UrlInput;
};

/** An input for mutations affecting `Url` */
export type UrlInput = {
  shortId: Scalars['String'];
  longUrl: Scalars['String'];
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our create `Url` mutation. */
export type CreateUrlPayload = {
  __typename?: 'CreateUrlPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Url` that was created by this mutation. */
  url?: Maybe<Url>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Url`. May be used by Relay 1. */
  urlEdge?: Maybe<UrlsEdge>;
};


/** The output of our create `Url` mutation. */
export type CreateUrlPayloadUrlEdgeArgs = {
  orderBy?: Maybe<Array<UrlsOrderBy>>;
};

/** All input for the `updateUrl` mutation. */
export type UpdateUrlInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Url` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Url` being updated. */
  urlPatch: UrlPatch;
};

/** Represents an update to a `Url`. Fields that are set will be updated. */
export type UrlPatch = {
  shortId?: Maybe<Scalars['String']>;
  longUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our update `Url` mutation. */
export type UpdateUrlPayload = {
  __typename?: 'UpdateUrlPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Url` that was updated by this mutation. */
  url?: Maybe<Url>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Url`. May be used by Relay 1. */
  urlEdge?: Maybe<UrlsEdge>;
};


/** The output of our update `Url` mutation. */
export type UpdateUrlPayloadUrlEdgeArgs = {
  orderBy?: Maybe<Array<UrlsOrderBy>>;
};

/** All input for the `updateUrlByShortId` mutation. */
export type UpdateUrlByShortIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Url` being updated. */
  urlPatch: UrlPatch;
  shortId: Scalars['String'];
};

/** All input for the `deleteUrl` mutation. */
export type DeleteUrlInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Url` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Url` mutation. */
export type DeleteUrlPayload = {
  __typename?: 'DeleteUrlPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Url` that was deleted by this mutation. */
  url?: Maybe<Url>;
  deletedUrlId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Url`. May be used by Relay 1. */
  urlEdge?: Maybe<UrlsEdge>;
};


/** The output of our delete `Url` mutation. */
export type DeleteUrlPayloadUrlEdgeArgs = {
  orderBy?: Maybe<Array<UrlsOrderBy>>;
};

/** All input for the `deleteUrlByShortId` mutation. */
export type DeleteUrlByShortIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  shortId: Scalars['String'];
};

/** All input for the `shorten` mutation. */
export type ShortenInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  clientMutationId?: Maybe<Scalars['String']>;
  longUrl?: Maybe<Scalars['String']>;
  shortId?: Maybe<Scalars['String']>;
};

/** The output of our `shorten` mutation. */
export type ShortenPayload = {
  __typename?: 'ShortenPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  clientMutationId?: Maybe<Scalars['String']>;
  url?: Maybe<Url>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Url`. May be used by Relay 1. */
  urlEdge?: Maybe<UrlsEdge>;
};


/** The output of our `shorten` mutation. */
export type ShortenPayloadUrlEdgeArgs = {
  orderBy?: Maybe<Array<UrlsOrderBy>>;
};

export type ShortenMutationVariables = Exact<{
  shortId: Scalars['String'];
  longUrl: Scalars['String'];
}>;


export type ShortenMutation = (
  { __typename?: 'Mutation' }
  & { shorten?: Maybe<(
    { __typename?: 'ShortenPayload' }
    & { url?: Maybe<(
      { __typename?: 'Url' }
      & Pick<Url, 'shortId' | 'longUrl'>
    )> }
  )> }
);

export type AllUrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUrlsQuery = (
  { __typename?: 'Query' }
  & { allUrls?: Maybe<(
    { __typename?: 'UrlsConnection' }
    & { nodes: Array<Maybe<(
      { __typename?: 'Url' }
      & Pick<Url, 'shortId' | 'longUrl'>
    )>> }
  )> }
);

export type SearchQueryVariables = Exact<{
  query: Scalars['String'];
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['Cursor']>;
}>;


export type SearchQuery = (
  { __typename?: 'Query' }
  & { search?: Maybe<(
    { __typename?: 'PeopleConnection' }
    & Pick<PeopleConnection, 'totalCount'>
    & { nodes: Array<Maybe<(
      { __typename?: 'Person' }
      & Pick<Person, 'firstName' | 'lastName' | 'jobTitle' | 'country' | 'email'>
    )>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  )> }
);


export const ShortenDocument = gql`
    mutation Shorten($shortId: String!, $longUrl: String!) {
  shorten(input: {shortId: $shortId, longUrl: $longUrl}) {
    url {
      shortId
      longUrl
    }
  }
}
    `;
export type ShortenMutationFn = Apollo.MutationFunction<ShortenMutation, ShortenMutationVariables>;

/**
 * __useShortenMutation__
 *
 * To run a mutation, you first call `useShortenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useShortenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [shortenMutation, { data, loading, error }] = useShortenMutation({
 *   variables: {
 *      shortId: // value for 'shortId'
 *      longUrl: // value for 'longUrl'
 *   },
 * });
 */
export function useShortenMutation(baseOptions?: Apollo.MutationHookOptions<ShortenMutation, ShortenMutationVariables>) {
        return Apollo.useMutation<ShortenMutation, ShortenMutationVariables>(ShortenDocument, baseOptions);
      }
export type ShortenMutationHookResult = ReturnType<typeof useShortenMutation>;
export type ShortenMutationResult = Apollo.MutationResult<ShortenMutation>;
export type ShortenMutationOptions = Apollo.BaseMutationOptions<ShortenMutation, ShortenMutationVariables>;
export const AllUrlsDocument = gql`
    query AllUrls {
  allUrls(orderBy: CREATED_AT_DESC) {
    nodes {
      shortId
      longUrl
    }
  }
}
    `;

/**
 * __useAllUrlsQuery__
 *
 * To run a query within a React component, call `useAllUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUrlsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUrlsQuery(baseOptions?: Apollo.QueryHookOptions<AllUrlsQuery, AllUrlsQueryVariables>) {
        return Apollo.useQuery<AllUrlsQuery, AllUrlsQueryVariables>(AllUrlsDocument, baseOptions);
      }
export function useAllUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUrlsQuery, AllUrlsQueryVariables>) {
          return Apollo.useLazyQuery<AllUrlsQuery, AllUrlsQueryVariables>(AllUrlsDocument, baseOptions);
        }
export type AllUrlsQueryHookResult = ReturnType<typeof useAllUrlsQuery>;
export type AllUrlsLazyQueryHookResult = ReturnType<typeof useAllUrlsLazyQuery>;
export type AllUrlsQueryResult = Apollo.QueryResult<AllUrlsQuery, AllUrlsQueryVariables>;
export const SearchDocument = gql`
    query Search($query: String!, $first: Int, $after: Cursor) {
  search(query: $query, first: $first, after: $after) {
    nodes {
      firstName
      lastName
      jobTitle
      country
      country
      email
    }
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      query: // value for 'query'
 *      first: // value for 'first'
 *      after: // value for 'after'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, baseOptions);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;