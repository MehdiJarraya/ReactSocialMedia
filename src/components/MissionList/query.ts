import { gql } from '@apollo/client';

export const getMissions = gql`
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