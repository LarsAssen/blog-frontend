import { Category } from "Models/CategoryModel";
import { Post } from "Models/PostModel";
import PostList from "../../components/Post/PostList";
import { fetchAPI } from "../../lib/api";


const CategoryPage:React.FC<{category:Category}> = ({ category }) =>{

    return(
            <div>
                <div>
                    <h1>{category.name}</h1>
                    <PostList posts={category.articles} />
                </div>
            </div>
    )
}


export async function getStaticProps({ params }:any) {
    const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
    const categories = await fetchAPI("/categories");
  
    return {
      props: { category, categories },
      revalidate: 10,
    };
  }

  export async function getStaticPaths() {
    const categories = await fetchAPI("/categories");
  
    return {
      paths: categories.map((category:Category) => ({
        params: {
          slug: category.slug,
        },
      })),
      fallback: false,
    };
  }

  export default CategoryPage;