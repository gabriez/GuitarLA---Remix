import { useState } from "react";
import { Link, useLoaderData, useOutletContext} from "@remix-run/react"
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
  
  return guitarData.data[0];
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

  const {name} = data.attributes;
  return [
    {title: `GuitarLA - ${name}`},
    {description: `Guitarras, venta de guitarras, guitarra ${name}`}
  ]
}

const GuitarDynamic = () => {

    const [quantity, setQuantity] = useState(0)
    const {addCart} = useOutletContext();
    const guitarData = useLoaderData();
    const {name, description, image, price} = guitarData.attributes;
    const imageDestructured = image.data.attributes.url; 
    const handleSubmit = e => {

      if(quantity < 1) {
        alert('Debes seleccionar una cantidad');
        return;
      }
      const cartItem = {
        id: guitarData.id,
        name,
        price,
        image: imageDestructured,
        quantity
      }
      addCart(cartItem);

    }

    return (
      <main className="contenedor guitarra">
        <img src={imageDestructured} alt={`Imagen de la guitarra ${name}`} className="imagen" />
        <div className="contenido">
          <h3>{name}</h3>
          <p className="texto"> {description} </p>
          <p className="price"> ${price} </p>
          <form className="formulario">
            <label htmlFor="cantidad">Cantidad</label>
            <select 
            onChange={e => {
              setQuantity(parseInt(e.target.value));
            }}
            value={quantity}
            name="cantidad" id="cantidad">
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <Link to='/cart' onClick={handleSubmit} className="submit"> Agregar al carrito</Link>
          </form>
        </div>
      </main>
    )
}

export default GuitarDynamic