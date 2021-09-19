import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'

const CONTENT_API_KEY = "997d1602e426ba171799dcae9f"

type Post = {

}

async function getPosts(){
  
}


export const getStaticProps = async ({ params }) =>{
  const posts = await getPosts();

  return{
    props: {posts}
  }
}

const Home:React.FC<{ posts: Post[]}> = (props) => {
  return (
    <div className={styles.container}>
      
    </div>
  )
}

export default Home
