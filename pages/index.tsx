import PostList from "@/components/Post/PostList";
import { fetchAPI } from "lib/api";
import Header from "../components/Header/Header";
import SubscribeBox from "../components/EmailSubscription/SubscribeBox";
import { Post } from "Models/PostModel";

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
  return (
    <div>
      <div className="container p-10">
        <h2 className="text-3xl text-blue-500">Latest posts</h2>
        <PostList posts={articles} />
        <SubscribeBox />
      </div>
    </div>
  );
};

export default Home;
