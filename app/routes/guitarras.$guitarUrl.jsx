import { useLoaderData } from "@remix-run/react"
import { getGuitar } from "../models/guitars.server";
import guitarraCSS from '../styles/guitarra.css'

export async function loader ({params}) {
  const guitarData = await getGuitar(params.guitarUrl);
  if (guitarData.data[0].length === 0){
    throw Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  
  return guitarData.data[0].attributes;
}

export function links (){
    return [
        {
            rel: 'stylesheet',
            href: guitarraCSS
        }
    ]
}

export function meta ({data}){
  if (!data){
    return [
      {title: `GuitarLA - Guitarra no encontrada`},
      {description: `Guitarras, venta de guitarras, guitarra no encontrada`}
    ]
  }

  const {name} = data;
  return [
    {title: `GuitarLA - ${name}`},
    {description: `Guitarras, venta de guitarras, guitarra ${name}`}
  ]
}

const GuitarDynamic = () => {
    const guitarData = useLoaderData();
    const {name, description, image, price} = guitarData;
    const imageDestructured = image.data.attributes.url; 
    
    return (
      <main className="contenedor guitarra">
        <img src={imageDestructured} alt={`Imagen de la guitarra ${name}`} className="imagen" />
        <div className="contenido">
          <h3>{name}</h3>
          <p className="texto"> ${description} </p>
          <p className="price"> ${price} </p>
        </div>
      </main>
    )
}

export default GuitarDynamic