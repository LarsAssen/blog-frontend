import Post from "Models/PostModel";

export type Category = {
  name: string;
  articles: Post[];
  slug: string;
};

export default Category;
