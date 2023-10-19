import { useLocation, Link } from "@remix-run/react"
import carritoPNG from '../../public/img/carrito.png'

const Navigate = () => {
    const location = useLocation();
    const setActive = (path) => {
        return location.pathname === path ? "active" : '';
    }

  return (
    <div className="navegacion">
        <Link to='/' className={setActive('/')}>Inicio</Link>
        <Link to='/nosotros' className={setActive('/nosotros')}>Nosotros</Link>
        <Link to='/guitarras' className={setActive('/guitarras')}>Tienda</Link>
        <Link to='/posts' className={setActive('/posts')}>Blog</Link>
        <Link to='/cart' className={setActive('/cart')}>
          <img src={carritoPNG} alt="Carrito"/>
        </Link>
        
    </div>
  )
}

export default Navigate
