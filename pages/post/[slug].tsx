import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import { useEffect, useState } from "react";
import handleTimeToRead from "services/TimeToReadService";
import SinglePostHeader from "@/components/Post/SinglePost/SinglePostHeader";
import Post from "Models/PostModel";

const Post: React.FC<{post: Post}> = ({post}) => {
    const [timeToRead, setTimeToRead] = useState(0);


    useEffect(() => {
      const time =  handleTimeToRead(post.content)
      setTimeToRead(time)
    }, [post.content]);

    const imageUrl = post.image.url;
    return (
      <div className="container w-full px-4 md:px-6  md:max-w-3xl mx-auto pt-20">
        <SinglePostHeader title={post.title} publishedAt={post.published_at} imageUrl={imageUrl} timeToRead={timeToRead} rating={post.rating} />
        <div className="pt-6">
          <ReactMarkdown>{post.content}</ReactMarkdown>
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
