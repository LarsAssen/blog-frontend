import { gql } from "@apollo/client";

const GET_CATEGORIES = gql`
  query {
    categories {
      data {
        id
        attributes {
          CategoryName
          CategoryDescription
        }
      }
    }
  }
`;

const GET_POSTS_BY_CATEGORY = gql`
  query ($categoryName: String!) {
    categories(filters: { CategoryName: { containsi: $categoryName } }) {
      data {
        id
        attributes {
          CategoryName
          CategoryDescription
          posts(sort: "publishedAt:desc", pagination: { limit: 300 }) {
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
          }
        }
      }
    }
  }
`;

const GET_POST_COUNT_BY_CATEGORY = gql`
  query ($categoryName: String!) {
    categories(filters: { CategoryName: { containsi: $categoryName } }) {
      data {
        attributes {
          posts(pagination: { limit: 300 }) {
            data {
              id
            }
          }
        }
      }
    }
  }
`;

export { GET_CATEGORIES, GET_POSTS_BY_CATEGORY, GET_POST_COUNT_BY_CATEGORY };
