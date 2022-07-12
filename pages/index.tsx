import { fetchAPI } from "lib/api";
import Post from "Models/PostModel";
import LatestPosts from "@/components/Post/LatestPosts/LatestPosts";
import Header from "@/components/Header/Header";
import SubscribeBox from "@/components/EmailSubscription/SubscribeBox";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

  const client = new ApolloClient({
    uri: "https://my-app-q3mnh.ondigitalocean.app/graphql",
    cache: new InMemoryCache(),
  });

  const posts = client.query({
    query: gql`
      query {
        posts {
          data{
            attributes{
              Description
            }
          }
        }
      }
    `,
  }).then((res) => {
    console.log(res.data.posts.data);
    return res.data.posts.data;
  })




export async function getStaticProps() {
  const [postsData, homepage] = await Promise.all([
    fetchAPI(`/posts`),
    fetchAPI("/homepage"),
  ]);
  var posts = postsData.data as Post[];
  
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
