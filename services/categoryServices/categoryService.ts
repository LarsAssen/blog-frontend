import {
  GET_CATEGORIES,
  GET_POST_COUNT_BY_CATEGORY,
} from "queries/CategoryQueries/CategoryQuery";
import client from "services/apiServices/GraphQlService";
import { mapToCategoryList } from "services/mappers/CategoryMapper";

const GetCategories = async () => {
  const response = await client.query({
    query: GET_CATEGORIES,
  });
  const categories = mapToCategoryList(response.data.categories.data);
  return categories;
};

const getNumberOfPostsPerCategory = async (categoryName: string) => {
  const response = await client.query({
    query: GET_POST_COUNT_BY_CATEGORY,
    variables: { categoryName },
  });
  const numberOfPostsPerCategory =
    response.data.categories.data[0].attributes.posts.data.length;
  return numberOfPostsPerCategory;
};

export { GetCategories, getNumberOfPostsPerCategory };
