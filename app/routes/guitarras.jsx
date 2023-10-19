import { Outlet, useOutletContext } from "@remix-run/react";
import ListGuitars from "../components/listGuitars";
// import Guitarra from "../components/guitarra";
import guitarraCSS from '../styles/guitarra.css'

export function links (){
    return [
        {
            rel: 'stylesheet',
            href: guitarraCSS
        }
    ]
}




const Tienda = () => {


  return (
      
        <Outlet context={useOutletContext()}/>
  )
}

export default Tienda
