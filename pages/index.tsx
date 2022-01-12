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

  const posts = articles.slice(0, 3);
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="text-3xl ml-8 text-blue-500">Latest posts</h2>
        <PostList posts={posts} />
        <SubscribeBox />
      </div>
    </div>
  );
};

export default Home;
