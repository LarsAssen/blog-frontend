import { fetchAPI } from "lib/api";
import SubscribeBox from "../components/EmailSubscription/SubscribeBox";
import { Post } from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";

export async function getStaticProps() {
  const [data, categories, homepage] = await Promise.all([
    fetchAPI("/posts?_sort=published_at:DESC"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  var posts = data.data["attributes"];
  return {
    props: { posts, categories, homepage },
    revalidate: 10,
  };
}

const Home: React.FC<{ posts: any[]; categories: any; homepage: any }> = ({
  posts,
  categories,
  homepage,
}) => {

  console.log(posts)
  //var latestPosts = posts.slice(0, 3);
  return (
    <div>
      <div className="p-2">
        {/* <LatestPosts posts={latestPosts} /> */}
      </div>
    </div>
  );
};

export default Home;
