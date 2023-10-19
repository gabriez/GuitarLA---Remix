import { useLoaderData, Outlet } from "react-router";
import ListPosts from "../components/listPosts";
import { getPosts } from "../models/posts.server"
import styles from '../styles/blog.css'

export async function loader(){  
  const posts = await getPosts();
  return posts.data;
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

export function meta(){
  return [
    {
      title: 'GuitarLA - Nuestro Blog'
    },
    {
      description: 'GuitarLA, blog de musica, venta de guitarra'
    }
  ]
}

const Blog = () => {
    const posts = useLoaderData();
    return (
      <>
        <main className="contenedor">
            <ListPosts posts={posts}/>

        </main>
        <Outlet/>
      </>
    )
}

export default Blog
