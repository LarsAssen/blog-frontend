import { gql } from "@apollo/client";

const GET_POSTS = gql`
  query {
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
          Rating {
            ... on ComponentRatingRating {
              Rating
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

const GET_TOTAL_POSTS_COUNT = gql`
  query {
    posts {
      meta {
        pagination {
          total
          pageCount
        }
      }
    }
  }
`;

const GET_POSTS_BY_CATEGORY = gql`
  query ($categoryName: String!) {
    posts {
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

const GET_POSTS_PER_PAGE = gql`
  query ($page: Int!, $perPage: Int!) {
    posts(
      pagination: { page: $page, pageSize: $perPage }
      sort: "publishedAt:desc"
    ) {
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
`;

export {
  GET_POSTS,
  GET_POSTS_PER_PAGE,
  GET_TOTAL_POSTS_COUNT,
  GET_POSTS_BY_CATEGORY,
};
