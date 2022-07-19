import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      name
    }
  }
`;

export { GET_CATEGORIES };
