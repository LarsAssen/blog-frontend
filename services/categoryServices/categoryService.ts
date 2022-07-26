import { GET_CATEGORIES } from "queries/CategoryQueries/CategoryQuery";
import client from "services/apiServices/GraphQlService";
import { mapToCategoryList } from "services/mappers/CategoryMapper";

const GetCategories = async () => {
  const response = await client.query({
    query: GET_CATEGORIES,
  });
  const categories = mapToCategoryList(response.data.categories.data);
  return categories;
};

export { GetCategories };
