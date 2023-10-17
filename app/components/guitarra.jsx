import { Link } from "@remix-run/react";


const Guitarra = ({guitarra}) => {
    const { name, description, url, price, image } = guitarra;

    const showImage = image.data.attributes.formats.medium.url

        
    return (
        <div className="guitarra">
            <img src={showImage} alt={`Imagen de ${name}`} />
            <div className="contenido">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>
                <Link className="enlace" to={`/guitarras/${url}`}> Ver Producto </Link>
            </div>
        </div>
    )
}

export default Guitarra
