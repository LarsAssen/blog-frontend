import PostTag from "Models/PostTag";

const mapToPostTag = (postTagData: any): PostTag => {
  return {
    id: postTagData.id,
    name: postTagData.attributes.name,
    created_at: postTagData.attributes.createdAt,
  } as PostTag;
};

const mapToPostTagList = (postTagListData: any): PostTag[] => {
  const postTagList: PostTag[] = [];
  postTagListData.map((postTagData: any) => {
    postTagList.push(mapToPostTag(postTagData));
  });
  return postTagList;
};

export { mapToPostTag, mapToPostTagList };
