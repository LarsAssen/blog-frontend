import client from "services/apiServices/GraphQlService";
import {
  GET_POSTS,
  GET_POSTS_PER_PAGE,
  GET_TOTAL_POSTS_COUNT,
} from "queries/PostQueries/PostQuery";
import { mapToPostList } from "services/mappers/PostMapper";
import { GET_POSTS_BY_CATEGORY } from "queries/CategoryQueries/CategoryQuery";

const getPosts = async () => {
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = mapToPostList(response.data.posts.data);
  return posts;
};

const getPostsPerPage = async (
  page: number,
  perPage: number,
  category: string | undefined
) => {
  const response = await client.query({
    query: GET_POSTS_PER_PAGE,
    variables: { page, perPage },
  });
  const posts = mapToPostList(response.data.posts.data);
  if (category) {
    return posts.filter((post) => post.category.name === category);
  }
  return posts;
};

const getPostsPerCategory = async (categoryName: string) => {
  const response = await client.query({
    query: GET_POSTS_BY_CATEGORY,
    variables: { categoryName },
  });
  const posts = mapToPostList(
    response.data.categories.data[0].attributes.posts.data
  );
  return posts;
};

const getTotalPostsCount = async () => {
  const response = await client.query({
    query: GET_TOTAL_POSTS_COUNT,
  });
  const totalPostsCount: number = response.data.posts.meta.pagination.total;
  const pageCount: number = response.data.posts.meta.pagination.pageCount;
  return { totalPostsCount, pageCount };
};

export { getPosts, getPostsPerPage, getTotalPostsCount, getPostsPerCategory };
