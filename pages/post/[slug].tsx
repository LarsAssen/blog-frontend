import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import Link from 'next/link';
import qs from 'qs';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useEffect, useState } from "react";
import handleTimeToRead from "services/TimeToReadService";
import TimeRead from "@/components/TimeRead/TimeRead";
import SinglePostHeader from "@/components/Post/SinglePost/SinglePostHeader";

const Post: React.FC<{post: any}> = ({post}) => {
    const [timeToRead, setTimeToRead] = useState(0);


    useEffect(() => {
      const time =  handleTimeToRead(post.attributes.Content)
      setTimeToRead(time)
    }, [post.attributes.Content]);

    const imageUrl = post.attributes.Image.data.attributes.url
    return (
      <div className="container w-full px-4 md:px-6  md:max-w-3xl mx-auto pt-20">
        <SinglePostHeader title={post.attributes.Title} publishedAt={post.attributes.publishedAt} imageUrl={post.attributes.Image.data.attributes.url} timeToRead={timeToRead} />
        <div className="pt-6">
          <ReactMarkdown>{post.attributes.Content}</ReactMarkdown>
          <div>
            <p>By Lars Assen</p>
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
