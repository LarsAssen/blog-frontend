import PostTag from "Models/PostTag";

const mapToPostTag = (postTagData: any): PostTag => {
  return {
    name: postTagData.attributes.TagName,
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
