import {Link} from '@remix-run/react'
import {formatDate} from '../utils/helpers'
const Post = ({post}) => {
    const {title, content, image, url, publishedAt} = post;
    const imageDestruct = image.data[0].attributes.formats.small.url;

    return (
        <article className="post">
            <img className="imagen" src={imageDestruct} alt={`Imagen de ${title}`} />
            <div className="contenido">
                <h3>{title}</h3>
                <p className="fecha">{formatDate(publishedAt)}</p>
                <p className="resumen">{content}</p>
                <Link className='enlace' to={`/posts/${url}`}>Lee el post</Link>
            </div>
        </article>
    )
}

export default Post
