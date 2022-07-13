import client from "services/apiServices/GraphQlService";
import { GET_POSTS } from "queries/PostQueries/PostQuery";
import { mapToPostList } from "services/mappers/PostMapper";

const getPosts = async () => {
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = mapToPostList(response.data.posts.data);
  return posts;
};

export { getPosts };
