import { fetchAPI } from "lib/api";
import Post from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";
import Header from "@/components/Header/Header";
import SubscribeBox from "@/components/EmailSubscription/SubscribeBox";
import { getHomePage } from "services/pageServices/pageServices";
import { getPosts } from "services/postServices/postService";

export async function getStaticProps() {
  const [posts, homepage] = await Promise.all([
    getPosts(),
    getHomePage(),
  ]);

  return {
    props: { posts, homepage },
    revalidate: 10,
  };
}

const Home: React.FC<{ posts: Post[]; homepage: any }> = ({
  posts,
  homepage,
}) => {
  var latestPosts = posts.slice(0, 3);
  return (
    <div>
      <Header />
      <div className="p-2">
        <LatestPosts posts={latestPosts} />
        <SubscribeBox />
      </div>
    </div>
  );
};

export default Home;
