import {useLoaderData} from '@remix-run/react'
import {getGuitars} from '../models/guitars.server'
import {getPosts} from '../models/posts.server'
import {getCourse} from '../models/course.server'
import guitarStyle from '../styles/guitarra.css'
import postStyle from '../styles/blog.css'
import cursoStyle from '../styles/curso.css'
import ListGuitars from "../components/listGuitars";
import ListPosts from '../components/listPosts'
import Course from '../components/course'

export function meta(){
  return [
    {
      title: 'GuitarLA - Inicio'
    },
    {
      description: 'GuitarLA, blog, tienda de guitarras, venta de guitarras, cursos'
    }
  ]
}
export function links(){
  return [
    {
      rel: 'stylesheet', 
      href: guitarStyle
    },
    {
      rel: 'stylesheet',
      href: postStyle
    },
    {
      rel: 'stylesheet',
      href: cursoStyle
    }
  ]
}


export async function loader(){
  const [guitars, posts, course] = await Promise.all([
    getGuitars(), getPosts(), getCourse()
  ])
  return {
    guitars: guitars.data, 
    posts: posts.data,
    course: course.data
  }
}



const Index = () => {
  const {guitars, posts, course} = useLoaderData();


  return (
    <>
      <main className="contenedor">
        <ListGuitars guitars={guitars}/>
      </main>

      <Course course={course.attributes}/>

      <section className='contenedor'>

          <ListPosts posts={posts}/>
      </section>
    </>
  )
}

export default Index
