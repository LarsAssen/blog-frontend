import { PostTag } from "./PostTag"

export type Post = {
    title: string,
    slug: string,
    image: ImageType,
    description: string,
    category: any,
    tags: PostTag[]
  }

  type ImageType ={
    alternativeText: string,
    name: string,
}