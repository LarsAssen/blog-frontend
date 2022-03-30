import { PostTag } from "./PostTag"

export type Post = {
    title: string,
    slug: string,
    image: ImageType,
    description: string,
    category: any,
    tags: PostTag[],
    published_at: any
  }

  type ImageType ={
    alternativeText: string,
    name: string,
}