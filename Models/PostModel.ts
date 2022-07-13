import PostTag from "Models/PostTag";
import { Category } from "./CategoryModel";
import ImageType from "./ImageTypeModel";

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  image: ImageType;
  description: string;
  category: Category;
  tags: PostTag[];
  published_at: any;
}

export default Post;
