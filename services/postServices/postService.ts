import client from "services/apiServices/GraphQlService";
import { GET_POSTS, GET_POSTS_PER_PAGE } from "queries/PostQueries/PostQuery";
import { mapToPostList } from "services/mappers/PostMapper";

const getPosts = async () => {
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = mapToPostList(response.data.posts.data);
  return posts;
};

const getPostsPerPage = async (page: number, perPage: number) => {
  const response = await client.query({
    query: GET_POSTS_PER_PAGE,
    variables: { page, perPage },
  });
  const posts = mapToPostList(response.data.posts.data);
  return posts;
};

export { getPosts, getPostsPerPage };
