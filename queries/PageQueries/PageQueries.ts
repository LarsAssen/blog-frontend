import { gql } from "@apollo/client";

const GET_HOME_PAGE = gql`
  query GetHomePage {
    homePage {
      data {
        attributes {
          title
          description
          image {
            url
          }
        }
      }
    }
  }
`;

export { GET_HOME_PAGE };
