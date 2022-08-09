import Post from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";
import Header from "@/components/Header/Header";
import SubscribeBox from "@/components/EmailSubscription/SubscribeBox";
import { getHomePage } from "services/pageServices/pageServices";
import { getPosts } from "services/postServices/postService";
import Login from "@/components/Auth/Login"

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

const Home: React.FC<{ posts: Post[]; homepage: any}> = ({
  posts,
  homepage,
}) => {
  var latestPosts = posts.slice(0, 3);
  return (
    <div>
      <Header />
      <Login />
      <div className="p-2">
        <LatestPosts posts={latestPosts} />
        <div className="text-center justify-center">
          <h1>Subscribe to the newsletter</h1>
          <p>Stay up to date with all the new content and learn all about ultra running, wisdom, and life.</p>
          <SubscribeBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
