import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";


  type Post = {
      title: string
      content: any
      slug: string
      image: string
      published_at: any
  }

const Post: React.FC<{post: Post}> = ({post}) => {
  const imageUrl = getStrapiMedia(post.image)

    return (
      <div>
        <div data-src={imageUrl} data-src-set={imageUrl} data-uk-img>
          <h1>{post.title}</h1>
          <img src={imageUrl} alt="" />
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
      </div>
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
    `/articles?slug=${params.slug}`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { post: posts[0], categories },
    revalidate: 10,
  };
}

export default Post;
