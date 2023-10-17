import { Link } from "@remix-run/react"
import Logo from "../../public/img/logo.svg"
import Navigate from "./navigate"

const Header = () => {

    return (
        <header className="header">
        <div className="contenedor barra">
            <Link to='/'> 
                <img src={Logo} alt="Logo Guitarla" className="logo" />
            </Link>
            <Navigate/>
            </div>
        </header>
    )
}

export default Header
