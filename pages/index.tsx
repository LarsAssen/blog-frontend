import { fetchAPI } from "lib/api";
import SubscribeBox from "../components/EmailSubscription/SubscribeBox";
import { Post } from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";

export async function getStaticProps() {
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?_sort=published_at:DESC"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);
  return {
    props: { articles, categories, homepage },
    revalidate: 10,
  };
}

const Home: React.FC<{ articles: Post[]; categories: any; homepage: any }> = ({
  articles,
  categories,
  homepage,
}) => {

  var latestPosts = articles.slice(0, 3);
  return (
    <div>
      <div className="container p-10">
        <h2 className="text-3xl mb-7 text-blue-500">Latest posts</h2>
        <LatestPosts posts={latestPosts} />
        <SubscribeBox />
      </div>
    </div>
  );
};

export default Home;
