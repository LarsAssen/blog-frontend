import { PostTag } from "./PostTag";
import { Category } from "./CategoryModel";

export type Post = {
  id: number;
  title: string;
  slug: string;
  image: ImageType;
  description: string;
  category: Category;
  tags: PostTag[];
  published_at: any;
};

type ImageType = {
  alternativeText: string;
  name: string;
  url: string;
};
