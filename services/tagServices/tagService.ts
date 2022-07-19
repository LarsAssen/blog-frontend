import { mapToPostTagList } from "services/mappers/TagMapper";
import { GET_TAGS } from "queries/TagQueries/TagQuery";
import client from "services/apiServices/GraphQlService";

const getTags = async () => {
  const response = await client.query({
    query: GET_TAGS,
  });
  const tags = mapToPostTagList(response.data.tags.data);
  return tags;
};

export { getTags };
