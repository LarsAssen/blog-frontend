import { fetchAPI } from "lib/api";
import { Post } from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";
import qs from "qs";

export async function getStaticProps() {
  const [postsData, homepage] = await Promise.all([
    fetchAPI(`/posts`),
    fetchAPI("/homepage"),
  ]);
  var posts = postsData.data as any[];
  return {
    
    props: { posts, homepage },
    revalidate: 10,
  };
}

const Home: React.FC<{ posts: any; homepage: any }> = ({
  posts,
  homepage,
}) => {
  var latestPosts = posts.slice(0, 3);
  return (
    <div>
      <div className="p-2">
        <LatestPosts posts={latestPosts} />
      </div>
    </div>
  );
};

export default Home;
