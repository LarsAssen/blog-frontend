import { Post } from "./PostModel";

export type Category ={
    name:string,
    articles:Post[],
    slug: string
}