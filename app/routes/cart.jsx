import { useEffect, useState } from 'react'
import styles from '../styles/cart.css'
import { useOutletContext } from '@remix-run/react' 
import { ClientOnly } from 'remix-utils/client-only'

export function links () {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

export function meta(){
    return [
        {
            title: 'GuitarLA - Carrito de compras'
        }, 
        {
            description: 'GuitarLA, venta de guitarras, blog, cursos, carrito de compras, tienda'
        }
    ]
}

const Spinner = () => {
    return (
        <div className="sk-cube-grid">
        <div className="sk-cube sk-cube1"></div>
        <div className="sk-cube sk-cube2"></div>
        <div className="sk-cube sk-cube3"></div>
        <div className="sk-cube sk-cube4"></div>
        <div className="sk-cube sk-cube5"></div>
        <div className="sk-cube sk-cube6"></div>
        <div className="sk-cube sk-cube7"></div>
        <div className="sk-cube sk-cube8"></div>
        <div className="sk-cube sk-cube9"></div>
    </div>
    )
}

const Cart = () => {
    const {cartItems, updateQuantity, deleteProduct} = useOutletContext();
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        if(cartItems?.length > 0) {
            const TOTAL = cartItems.reduce((acumulated, producto) => acumulated + (producto.price * producto.quantity), 0);
            setTotal(TOTAL);
        }
    }, [cartItems])

    return (
        <ClientOnly fallback={Spinner()}>
            {()=> (
            <main className="contenedor">
                <h3 className="heading">Carrito de Compra</h3>
                <div className="contenido">
                    <div className="carrito">
                        <h3>Artículos</h3>
                        {cartItems?.length === 0 ? 'No hay productos en el carrito' : 
                        cartItems?.map( producto => (
                            <div className='producto' key={producto.id}>
                                <div>
                                    <img src={producto.image} alt={`Imagen del producto ${producto.name}`} />
                                </div>
                                <div>
                                    <p className="nombre">{producto.name}</p>
                                    <p>Cantidad: </p>
                                    <select 
                                    value={producto.quantity}
                                    onChange={e => {
                                        updateQuantity({
                                            id: producto.id,
                                            quantity: parseInt(e.target.value)
                                        })
                                    }}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    </select>
                                    <p className="precio">Precio: $<span>{producto.price}</span></p>
                                    <p className="subtotal">Subtotal: $<span>{producto.price * producto.quantity}</span></p>
                                </div>
                                <button type="button" className="btn_eliminar" onClick={() => deleteProduct(producto.id)}>
                                    X
                                </button>
                            </div>
                        ))}
                    </div>

                    <aside className="resumen">
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${total}</p>
                    </aside>
                </div>
            </main>
            )}
        </ClientOnly>
    )
}

export default Cart
