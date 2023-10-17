import { useLoaderData } from "@remix-run/react";
import { getGuitars } from "../models/guitars.server";
import Guitarra from "../components/guitarra";
import guitarraCSS from '../styles/guitarra.css'

export function links (){
    return [
        {
            rel: 'stylesheet',
            href: guitarraCSS
        }
    ]
}

export function meta (){
    return [
    {
      title: "GuitarLA - Tienda de Guitarras"
    },
    {
      description: "GuitarLA - Nuestra colección de guitarras"
    }
  ]
}


export async function loader () {
  
  const guitars = await getGuitars();

  return guitars.data;
}

const Tienda = () => {
  const guitars = useLoaderData();

  return (
      <main className="contenedor">
        <h2 className="heading">Nuestra colección</h2>
        {
          guitars?.length && (
            <div className="guitarras-grid">
              {
                guitars.map( guitarra => (
                  <Guitarra 
                    key={guitarra?.id}
                    guitarra={guitarra?.attributes}
                  />
                ))
              }
            </div>
          )
        }
      </main>
  )
}

export default Tienda
