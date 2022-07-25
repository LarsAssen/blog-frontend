import Post from "Models/PostModel";
import { mapToCategory } from "./CategoryMapper";
import mapToImage from "./ImageMapper";
import { mapToPostTagList } from "./TagMapper";

const mapToPost = (postData: any): Post => {
  return {
    id: postData.id,
    title: postData.attributes.Title,
    slug: postData.attributes.Slug,
    content: postData.attributes.Content,
    image: mapToImage(postData.attributes.Image),
    description: postData.attributes.Description,
    category: mapToCategory(postData.attributes.category.data),
    tags: mapToPostTagList(postData.attributes.tags.data),
    published_at: postData.attributes.publishedAt,
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
