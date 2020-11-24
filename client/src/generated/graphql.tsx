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
  /** Reads and enables pagination through a set of `Person`. */
  search?: Maybe<PeopleConnection>;
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
export type QuerySearchArgs = {
  query?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
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

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `MockDatum`. */
  createMockDatum?: Maybe<CreateMockDatumPayload>;
  /** Creates a single `Person`. */
  createPerson?: Maybe<CreatePersonPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMockDatumArgs = {
  input: CreateMockDatumInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
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