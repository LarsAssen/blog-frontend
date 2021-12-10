export type Post = {
    title: string,
    slug: string,
    image: ImageType,
    description: string,
    category: any,
    tags: any[]
  }

  type ImageType ={
    alternativeText: string,
    name: string,
}