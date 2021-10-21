import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import Layout from "../../components/Layout/Layout";
import Image from "../../components/Image/Image";
import { getStrapiMedia } from "../../lib/media";


  type Post = {
      title: string
      content: any
      slug: string
      image: string
      published_at: any
  }

const Post: React.FC<{post: Post, categories:any}> = ({post, categories}) => {
  const imageUrl = getStrapiMedia(post.image)

    return (
      <Layout categories={categories}>
        <div data-src={imageUrl} data-srcset={imageUrl} data-uk-img>
          <h1>{post.title}</h1>
        </div>
        <div>
          <div>
            <ReactMarkdown>{post.content}</ReactMarkdown>
            <div>
              <div>
                <p>By Lars Assen</p>
                <p><Moment format="MMM Do YYYY">{post.published_at}</Moment></p>
              </div>
            </div>
          </div>

        </div>
      </Layout>
    )
}

export async function getStaticPaths() {
  const posts = await fetchAPI("/articles");

  return {
    paths: posts.map((post:Post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }:any) {
  const posts = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { post: posts[0], categories },
    revalidate: 1,
  };
}

export default Post;
