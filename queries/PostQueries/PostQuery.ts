import { gql } from "@apollo/client";

const GET_POSTS = gql`
    posts {
          data{
            attributes{

              category{
                data{
                  attributes{
                    CategoryDescription
                }
              }
            }
          }
        }
    }
`;

const GET_POST = gql``;

const GET_LATEST_POSTS = gql`
    posts {
        data{
            attributes{
                category{
                    data{
                        attributes{
                            CategoryDescription
                        }
                    }
                }
            }
        }
    }
`;

export { GET_POSTS, GET_POST };
