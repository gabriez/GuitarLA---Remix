import { useLoaderData } from '@remix-run/react';
import {getPost} from '../models/posts.server'
import {formatDate} from '../utils/helpers'
import styles from '../styles/blog.css'

export async function loader({params}) {

    const post = await getPost(params.postUrl);
    if (post.data.length === 0){
        throw Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post?.data[0].attributes;
}
export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}
export function meta({data}){
    if (!data){
        return [
          {title: `GuitarLA - Entrada no encontrada`},
          {description: `Guitarras, venta de guitarras, entrada no encontrada`}
        ]
      }

    const {title} = data;
    return [
        {
            title: `GuitarLA - ${title}`
        },
        {
            description: `GuitarLA, guitarras venta de guitarras, entrada ${title}`
        }
    ]
}

const PostUrl = () => {
    const post = useLoaderData();
    const {title, content, image, publishedAt} = post;
    console.log(post);
    const imageDestruct = image?.data[0].attributes.url;
    return (
        <article className="post mt-3">
            <img className="imagen" src={imageDestruct} alt={`Imagen de ${title}`} />
            <div className="contenido">
                <h3>{title}</h3>
                <p className="fecha">{formatDate(publishedAt)}</p>
                <p className="texto">{content}</p>
            </div>
        </article>
    )
}

export default PostUrl
