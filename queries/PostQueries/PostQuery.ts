import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
    posts(sort: "publishedAt:desc") {
      data {
        id
        attributes {
          Title
          Description
          publishedAt
          Content
          Slug
          Image {
            data {
              attributes {
                url
                alternativeText
                name
              }
            }
          }
          category {
            data {
              id
              attributes {
                CategoryName
                CategoryDescription
              }
            }
          }
          tags {
            data {
              attributes {
                TagDescription
                TagName
              }
            }
          }
        }
      }
      meta {
        pagination {
          pageCount
        }
      }
    }
  }
`;

export { GET_POSTS };
