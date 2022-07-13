import { gql } from "@apollo/client";

const GET_HOME_PAGE = gql`
  query GetHomePage {
    homepage {
      data {
        attributes {
          Title
          HeroSection
          MetaTitle
          MetaDescription
        }
      }
    }
  }
`;

export { GET_HOME_PAGE };
