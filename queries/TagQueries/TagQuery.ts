import { gql } from "@apollo/client";

const GET_TAGS = gql`
  query GetTags {
    tags {
      data {
        id
        name
        createdAt
      }
    }
  }
`;

export { GET_TAGS };
