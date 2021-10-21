import PostList from "../../components/Post/PostList";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout/Layout";

type Category ={
    name:string,
    articles:any
}

const Category:React.FC<{category:Category, categories:any}> = ({ category, categories}) =>{

    return(
        <Layout categories={categories}>
            <div>
                <div>
                    <h1>{category.name}</h1>
                    <PostList posts={category.articles} />
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticProps({ params }:any) {
    const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
    const categories = await fetchAPI("/categories");
  
    return {
      props: { category, categories },
      revalidate: 1,
    };
  }