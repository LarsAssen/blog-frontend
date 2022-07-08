import PostTag from "Models/PostTag";
import { Category } from "./CategoryModel";

interface Post {
  id: number;
  title: string;
  slug: string;
  image: ImageType;
  description: string;
  category: Category;
  tags: PostTag[];
  published_at: any;
}

interface ImageType {
  alternativeText: string;
  name: string;
  url: string;
}

export default Post;
