import { fetchAPI } from 'lib/api';
import Header from '../components/Header/Header';
import Layout from '../components/Layout/Layout';
type Post = {
  title: string,
  slug: string
}

export async function getStaticProps(){
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])
  return {
    props: {articles, categories, homepage},
    revalidate: 1,
  };
}

const Home:React.FC<{articles:any, categories:any, homepage:any}> = ({articles, categories, homepage}) => {
  
  return (
    <div>
      <Layout categories={categories}>
      <h1 className="text-2xl">Welcome</h1>
      </Layout>
    </div>
  )
}

export default Home
