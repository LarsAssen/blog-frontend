import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Link from 'next/link';
import qs from 'qs';
import { AiOutlineArrowLeft } from "react-icons/ai";

const Post: React.FC<{post: any}> = ({post}) => {
    const imageUrl = post.attributes.Image.data.attributes.url
    return (
      <div className="container w-full md:max-w-3xl mx-auto pt-20">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <div data-src={imageUrl} data-src-set={imageUrl} data-uk-img>
        <p><Link href="/"><a className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"><AiOutlineArrowLeft />Back to blog</a></Link></p>
          <h1 className="pt-4 pb-4">{post.attributes.Title}</h1>
          <p className="text-sm md:text-base font-normal text-gray-600">Published <Moment format="MMM Do YYYY">{post.attributes.publishedAt}</Moment></p>
          <img src={post.attributes.Image.data.attributes.url} alt={post.attributes.Image.data.attributes.alternativeText} />
        </div>
        <div>
          <div className="pt-6">
            <ReactMarkdown>{post.attributes.Content}</ReactMarkdown>
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
  const postsData = await fetchAPI("/posts");
  const posts = postsData.data;

  return {
    paths: posts.map((post:any) => ({
      params: {
        slug: post.attributes.Slug,
      },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }:any) {

  const postsData = await fetchAPI(
    `/posts`,
  );
  const posts = postsData.data.filter((post:any) => post.attributes.Slug === params.slug);

  const categories = await fetchAPI("/categories");

  return {
    props: { post: posts[0], categories },
    revalidate: 10,
  };
}

export default Post;
