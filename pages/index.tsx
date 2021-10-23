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
  image: ImageType
}

export async function getStaticProps(){
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])
  return {
    props: {articles, categories, homepage},
    revalidate: 1,
  };
}

const Home:React.FC<{articles:Post[], categories:any, homepage:any}> = ({articles, categories, homepage}) => {
  return (
    <div>
      <Layout categories={categories}>
        <Header />
        <PostList posts={articles}/>
      </Layout>
    </div>
  )
}

export default Home
