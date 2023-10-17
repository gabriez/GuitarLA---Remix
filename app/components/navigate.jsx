import { useLocation, Link } from "@remix-run/react"

const Navigate = () => {
    const location = useLocation();
    const setActive = (path) => {
        return location.pathname === path ? "active" : '';
    }

  return (
    <div className="navegacion">
        <Link to='/' className={setActive('/')}>Inicio</Link>
        <Link to='/nosotros' className={setActive('/nosotros')}>Nosotros</Link>
        <Link to='/tienda' className={setActive('/tienda')}>Tienda</Link>
        <Link to='/blog' className={setActive('/blog')}>Blog</Link>
    </div>
  )
}

export default Navigate
