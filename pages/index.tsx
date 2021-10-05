import type { NextPage } from 'next'
import styles from '../styles/Layout.module.scss'
import Link from 'next/link';
import Head from 'next/head';
import PostList from '../components/Post/PostList';
const {BLOG_URL, CONTENT_API_KEY} = process.env;

type Post = {
  title: string,
  slug: string
}

async function getPosts(){
  const res = await fetch(`${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt&limit=3`)
  .then((res) => res.json())

  const posts = res.posts;
  
  return posts;
}


export const getStaticProps = async ({ params }:any) =>{
  const posts = await getPosts();
  return{
    props: {posts}  
  }
}

const Home:React.FC<{ posts: Post[]}> = (props) => {
  const { posts } = props;
  
  return (
    <div className={styles.container}>
      <Head>
        <title>The Running Explorer</title>
        <meta name='keywords' content='ultra running, running, books, self development' />
      </Head>
      <h1>Welcome</h1>
      <ul>
        {posts.map((post) => {
          return <li className={styles.card} key={post.slug} ><Link href="/post/[slug]" as={`/post/${post.slug}`} ><a>{post.title}</a></Link></li>
        })}
      </ul>
      <PostList posts={posts} />
    </div>
  )
}

export default Home
