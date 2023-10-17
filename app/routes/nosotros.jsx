import nosotrosImage from '../../public/img/nosotros.jpg'
import nosotrosStyle from '../styles/nosotros.css'

export function meta() {
  return [
    {title: "GuitarLa - Sobre nosotros"},
    {description: "Venta de guitarra, cursos, blogs"}
  ]
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: nosotrosStyle
    },
    {
      rel: 'preload',
      href: nosotrosImage,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido" >
          <img src={nosotrosImage} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Aliquam non convallis arcu. Praesent nec velit eu justo dictum faucibus. 
              Aliquam iaculis consequat risus. Sed cursus, diam ut vestibulum gravida, metus metus finibus diam, quis finibus augue elit eu urna. 
              Cras ut arcu aliquam, facilisis mi eu, elementum odio. Nam congue fringilla suscipit. Nullam aliquet in risus sit amet posuere. 
            </p>  

            <p>
              Aliquam non convallis arcu. Praesent nec velit eu justo dictum faucibus. 
              Aliquam iaculis consequat risus. Sed cursus, diam ut vestibulum gravida, metus metus finibus diam, quis finibus augue elit eu urna. 
              Cras ut arcu aliquam, facilisis mi eu, elementum odio. Nam congue fringilla suscipit. Nullam aliquet in risus sit amet posuere. 
            </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
