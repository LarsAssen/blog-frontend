import { fetchAPI } from "lib/api";
import SubscribeBox from "../components/EmailSubscription/SubscribeBox";
import { Post } from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";

export async function getStaticProps() {
  const [postsData, homepage] = await Promise.all([
    fetchAPI("/posts"),
    fetchAPI("/homepage"),
  ]);
  var posts = postsData.data as Post[];
  return {
    
    props: { posts, homepage },
    revalidate: 10,
  };
}

const Home: React.FC<{ posts: any; homepage: any }> = ({
  posts,
  homepage,
}) => {

  console.log(posts[0].attributes.category);
  //var latestPosts = posts.slice(0, 3);
  return (
    <div>
      <div className="p-2">
        {/* <LatestPosts posts={posts} /> */}
      </div>
    </div>
  );
};

export default Home;
