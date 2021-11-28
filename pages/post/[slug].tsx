import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Link from 'next/link';

  type Post = {
      title: string
      content: any
      slug: string
      image: string
      published_at: any
  }

const Post: React.FC<{post: Post}> = ({post}) => {
  const imageUrl = getStrapiMedia(post.image)

    return (
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div data-src={imageUrl} data-src-set={imageUrl} data-uk-img>
        <p className="text-base md:text-sm text-green-500 font-bold">&lt; <Link href="/"><a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Back to blog</a></Link></p>
          <h1 className="pt-4 pb-4">{post.title}</h1>
          <p className="text-sm md:text-base font-normal text-gray-600">Published <Moment format="MMM Do YYYY">{post.published_at}</Moment></p>
          <img src={imageUrl} alt="" />
        </div>
        <div>
          <div className="pt-6">
            <ReactMarkdown>{post.content}</ReactMarkdown>
            <div>
              <div>
                <p>By Lars Assen</p>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    )
}

export async function getStaticPaths() {
  const posts = await fetchAPI("/articles");

  return {
    paths: posts.map((post:Post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }:any) {
  const posts = await fetchAPI(
    `/articles?slug=${params.slug}`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { post: posts[0], categories },
    revalidate: 10,
  };
}

export default Post;
