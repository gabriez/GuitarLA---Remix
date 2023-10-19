
import { getGuitars } from "../models/guitars.server";
import {useLoaderData} from '@remix-run/react';
import ListGuitars from "../components/listGuitars";


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

const Guitarras = () => {
    const guitars = useLoaderData();
    
    return (
        <main className="contenedor">
        <ListGuitars guitars={guitars}/>
        </main>
  )
}

export default Guitarras
