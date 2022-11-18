import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api";
import { useEffect, useState } from "react";
import handleTimeToRead from "services/TimeToReadService";
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
        <SinglePostHeader title={post.attributes.Title} publishedAt={post.attributes.publishedAt} imageUrl={post.attributes.Image.data.attributes.url} timeToRead={timeToRead} rating={5} />
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
