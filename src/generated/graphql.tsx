import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FbPostMission = {
  __typename?: 'FBPostMission';
  cashReward: Scalars['Float'];
  date: Scalars['String'];
  image: Image;
  title: Scalars['String'];
};

export type GetFeedInput = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};

export type GetFeedResponse = {
  __typename?: 'GetFeedResponse';
  hasNextPage: Scalars['Boolean'];
  items: Array<Mission>;
};

export type IgStoryMission = {
  __typename?: 'IGStoryMission';
  cashReward: Scalars['Float'];
  date: Scalars['String'];
  title: Scalars['String'];
  video: Video;
};

export type Image = {
  __typename?: 'Image';
  alt?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  src2x: Scalars['String'];
};

export type Mission = FbPostMission | IgStoryMission;

export type Query = {
  __typename?: 'Query';
  getFeed: GetFeedResponse;
};


export type QueryGetFeedArgs = {
  input: GetFeedInput;
};

export type Video = {
  __typename?: 'Video';
  alt?: Maybe<Scalars['String']>;
  src: Scalars['String'];
};

export type GetMissionsQueryVariables = Exact<{
  feedInput: GetFeedInput;
}>;


export type GetMissionsQuery = { __typename?: 'Query', getFeed: { __typename?: 'GetFeedResponse', hasNextPage: boolean, items: Array<{ __typename?: 'FBPostMission', date: string, title: string, cashReward: number, image: { __typename?: 'Image', alt?: string | null | undefined, src: string, src2x: string } } | { __typename?: 'IGStoryMission', date: string, title: string, cashReward: number, video: { __typename?: 'Video', alt?: string | null | undefined, src: string } }> } };


export const GetMissionsDocument = gql`
    query getMissions($feedInput: GetFeedInput!) {
  getFeed(input: $feedInput) {
    items {
      ... on IGStoryMission {
        date
        title
        cashReward
        video {
          alt
          src
        }
      }
      ... on FBPostMission {
        date
        title
        cashReward
        image {
          alt
          src
          src2x
        }
      }
    }
    hasNextPage
  }
}
    `;

/**
 * __useGetMissionsQuery__
 *
 * To run a query within a React component, call `useGetMissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMissionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMissionsQuery({
 *   variables: {
 *      feedInput: // value for 'feedInput'
 *   },
 * });
 */
export function useGetMissionsQuery(baseOptions: Apollo.QueryHookOptions<GetMissionsQuery, GetMissionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMissionsQuery, GetMissionsQueryVariables>(GetMissionsDocument, options);
      }
export function useGetMissionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMissionsQuery, GetMissionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMissionsQuery, GetMissionsQueryVariables>(GetMissionsDocument, options);
        }
export type GetMissionsQueryHookResult = ReturnType<typeof useGetMissionsQuery>;
export type GetMissionsLazyQueryHookResult = ReturnType<typeof useGetMissionsLazyQuery>;
export type GetMissionsQueryResult = Apollo.QueryResult<GetMissionsQuery, GetMissionsQueryVariables>;