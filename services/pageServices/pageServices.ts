import client from "services/apiServices/GraphQlService";
import { GET_HOME_PAGE } from "queries/PageQueries/PageQueries";

const getHomePage = async () => {
  const response = await client.query({
    query: GET_HOME_PAGE,
  });
  return response.data.homepage.data.attributes;
};

export { getHomePage };
