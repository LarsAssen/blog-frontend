import Post from "Models/PostModel";

const mapToPost = (postData: any): Post => {
  return {
    id: postData.id,
    title: postData.title,
    slug: postData.slug,
    image: postData.image,
    description: postData.description,
    category: postData.category,
    tags: postData.tags,
    published_at: postData.published_at,
  } as Post;
};

const mapToPostList = (postListData: any): Post[] => {
  const postList: Post[] = [];
  postListData.map((postData: any) => {
    postList.push(mapToPost(postData));
  });
  return postList;
};

export { mapToPost, mapToPostList };
