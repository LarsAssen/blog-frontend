import PostList from '@/components/Post/PostList';
import { fetchAPI } from 'lib/api';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';

type ImageType ={
  alternativeText: string,
  name: string,
}

type Post = {
  title: string,
  slug: string,
  image: ImageType,
  description: string
}

export async function getStaticProps(){
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])
  return {
    props: {articles, categories, homepage},
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles")

  // Get the paths we want to pre-render based on posts
  const paths = articles.map((article:any) => ({
    params: { id: article.id },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: 'blocking' }
}

const Home:React.FC<{articles:Post[], categories:any, homepage:any}> = ({articles, categories, homepage}) => {
  return (
    <div>
      <Header />
      <h2 className="text-3xl text-indigo-500">Latest posts</h2>
      <PostList posts={articles}/>
    </div>
  )
}



export default Home
